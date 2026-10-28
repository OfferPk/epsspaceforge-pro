#!/usr/bin/env python3
"""
EPSSpaceForge Pro (v1.0.0) — Python 3 CLI Suite for Spacecraft Electrical Power Systems
Implements ECSS-E-ST-20C Rev. 2, ECSS-E-ST-20-20C, and ECSS-E-ST-20-08C.
"""
import argparse
import json
import math
from dataclasses import dataclass, asdict
from typing import List, Dict, Any

SOLAR_CONSTANT_AM0 = 1361.0  # W/m^2
CELL_NOMINAL_V = 2.40        # V at 28 degC
CELL_TEMP_COEFF = -0.0062    # V/degC
CELL_AREA_M2 = 30.18e-4      # m^2 (30.18 cm^2 triple-junction GaAs cell)
LI_ION_CELL_V = 3.65         # V nominal

BUS_STANDARDS = {
    28: {"min_kw": 0.0, "max_kw": 1.5, "label": "28V Regulated Low/Medium Bus (<= 1.5 kW)"},
    50: {"min_kw": 0.5, "max_kw": 8.0, "label": "50V Regulated Telecom/EO Bus (<= 8.0 kW)"},
    100: {"min_kw": 3.0, "max_kw": 25.0, "label": "100V High-Power Regulated Bus (> 8.0 kW)"},
}

PRESETS: Dict[str, Dict[str, Any]] = {
    "leo_eo_smallsat": {
        "id": "leo_eo_smallsat",
        "name": "LEO Optical Earth Observation SmallSat (28V Bus, 600 km SSO)",
        "orbit_regime": "LEO",
        "bus_voltage_v": 28,
        "orbit_period_min": 96.7,
        "eclipse_duration_min": 34.8,
        "mission_life_years": 5.0,
        "daylight_load_w": 420.0,
        "eclipse_load_w": 290.0,
        "daylight_path_eff": 0.92,
        "eclipse_path_eff": 0.86,
        "solar_cell_eff": 0.295,
        "inherent_degradation_id": 0.77,
        "sun_incidence_deg": 18.0,
        "annual_rad_degradation": 0.027,
        "array_operating_temp_c": 62.0,
        "redundant_strings": 1,
        "battery_energy_wh": 780.0,
        "battery_parallel_strings": 3,
        "max_allowed_dod_pct": 30.0,
        "source_impedance_ohm": 0.045,
        "load_filter_impedance_ohm": 0.120,
        "lcl_channels": [
            {"id": "LCL-01", "subsystem": "OBC & SpaceWire Router", "class_type": "RLCL", "nominal_a": 1.25, "trip_a": 2.50, "actual_a": 1.18, "rds_mohm": 65.0, "trip_ms": 12.0, "cap_uf": 220.0, "critical": True},
            {"id": "LCL-02", "subsystem": "ADCS Reaction Wheel Assembly", "class_type": "LCL", "nominal_a": 3.20, "trip_a": 6.00, "actual_a": 2.95, "rds_mohm": 42.0, "trip_ms": 18.0, "cap_uf": 470.0, "critical": True},
            {"id": "LCL-03", "subsystem": "Multispectral Optical Payload", "class_type": "LCL", "nominal_a": 5.80, "trip_a": 9.00, "actual_a": 5.40, "rds_mohm": 28.0, "trip_ms": 10.0, "cap_uf": 680.0, "critical": False},
            {"id": "LCL-04", "subsystem": "X-Band High-Rate Downlink", "class_type": "LCL", "nominal_a": 3.80, "trip_a": 6.50, "actual_a": 3.55, "rds_mohm": 38.0, "trip_ms": 8.5, "cap_uf": 330.0, "critical": False},
            {"id": "LCL-05", "subsystem": "Propulsion Valve & Catbed Heater", "class_type": "FCL", "nominal_a": 1.90, "trip_a": 3.50, "actual_a": 1.75, "rds_mohm": 55.0, "trip_ms": 15.0, "cap_uf": 180.0, "critical": True},
        ],
    },
    "meo_gnss_nav": {
        "id": "meo_gnss_nav",
        "name": "MEO Navigation & Timing Platform (50V Bus, 20,200 km)",
        "orbit_regime": "MEO",
        "bus_voltage_v": 50,
        "orbit_period_min": 718.0,
        "eclipse_duration_min": 56.0,
        "mission_life_years": 12.0,
        "daylight_load_w": 2450.0,
        "eclipse_load_w": 2180.0,
        "daylight_path_eff": 0.94,
        "eclipse_path_eff": 0.89,
        "solar_cell_eff": 0.302,
        "inherent_degradation_id": 0.78,
        "sun_incidence_deg": 12.0,
        "annual_rad_degradation": 0.032,
        "array_operating_temp_c": 58.0,
        "redundant_strings": 2,
        "battery_energy_wh": 4200.0,
        "battery_parallel_strings": 4,
        "max_allowed_dod_pct": 60.0,
        "source_impedance_ohm": 0.032,
        "load_filter_impedance_ohm": 0.095,
        "lcl_channels": [
            {"id": "LCL-01", "subsystem": "Atomic Clock & Nav Baseband", "class_type": "RLCL", "nominal_a": 6.50, "trip_a": 10.0, "actual_a": 6.10, "rds_mohm": 35.0, "trip_ms": 14.0, "cap_uf": 400.0, "critical": True},
            {"id": "LCL-02", "subsystem": "L-Band Navigation TWTA Bank A", "class_type": "LCL", "nominal_a": 18.0, "trip_a": 26.0, "actual_a": 17.2, "rds_mohm": 15.0, "trip_ms": 9.0, "cap_uf": 820.0, "critical": True},
            {"id": "LCL-03", "subsystem": "L-Band Navigation TWTA Bank B", "class_type": "LCL", "nominal_a": 18.0, "trip_a": 26.0, "actual_a": 16.9, "rds_mohm": 15.0, "trip_ms": 9.0, "cap_uf": 820.0, "critical": True},
        ],
    },
    "geo_hts_telecom": {
        "id": "geo_hts_telecom",
        "name": "GEO High-Throughput Telecom Bus (100V Bus, 35,786 km)",
        "orbit_regime": "GEO",
        "bus_voltage_v": 100,
        "orbit_period_min": 1436.1,
        "eclipse_duration_min": 72.0,
        "mission_life_years": 15.0,
        "daylight_load_w": 11200.0,
        "eclipse_load_w": 9800.0,
        "daylight_path_eff": 0.95,
        "eclipse_path_eff": 0.90,
        "solar_cell_eff": 0.310,
        "inherent_degradation_id": 0.79,
        "sun_incidence_deg": 23.4,
        "annual_rad_degradation": 0.022,
        "array_operating_temp_c": 65.0,
        "redundant_strings": 2,
        "battery_energy_wh": 19600.0,
        "battery_parallel_strings": 4,
        "max_allowed_dod_pct": 70.0,
        "source_impedance_ohm": 0.025,
        "load_filter_impedance_ohm": 0.080,
        "lcl_channels": [
            {"id": "LCL-01", "subsystem": "Ka-Band Payload EPC Matrix North", "class_type": "LCL", "nominal_a": 38.0, "trip_a": 52.0, "actual_a": 36.4, "rds_mohm": 12.0, "trip_ms": 7.5, "cap_uf": 950.0, "critical": False},
            {"id": "LCL-02", "subsystem": "Ka-Band Payload EPC Matrix South", "class_type": "LCL", "nominal_a": 38.0, "trip_a": 52.0, "actual_a": 35.8, "rds_mohm": 12.0, "trip_ms": 7.5, "cap_uf": 950.0, "critical": False},
            {"id": "LCL-03", "subsystem": "Electric Orbit Raising Hall Thruster PPU", "class_type": "LCL", "nominal_a": 24.0, "trip_a": 34.0, "actual_a": 22.5, "rds_mohm": 18.0, "trip_ms": 11.0, "cap_uf": 600.0, "critical": True},
        ],
    },
}


def validate_config(cfg: Dict[str, Any]) -> None:
    if not isinstance(cfg, dict):
        raise ValueError("Configuration must be a dictionary.")
    bus_v = int(cfg.get("bus_voltage_v", 0))
    if bus_v not in BUS_STANDARDS:
        raise ValueError(f"Unsupported ECSS main bus voltage ({bus_v} V). Must be 28, 50, or 100.")
    t_orb = float(cfg.get("orbit_period_min", 0))
    t_ecl = float(cfg.get("eclipse_duration_min", -1))
    if t_orb <= 0 or t_ecl < 0 or t_ecl >= t_orb:
        raise ValueError("Invalid orbital timing: eclipse_duration_min must be in [0, orbit_period_min).")
    if float(cfg.get("daylight_load_w", 0)) <= 0 or float(cfg.get("eclipse_load_w", 0)) <= 0:
        raise ValueError("Daylight and eclipse loads must be positive.")
    eta_d = float(cfg.get("daylight_path_eff", 0))
    eta_e = float(cfg.get("eclipse_path_eff", 0))
    if not (0 < eta_d <= 1.0 and 0 < eta_e <= 1.0):
        raise ValueError("Path efficiencies must be in (0, 1].")


def solve_orbital_energy_balance(cfg: Dict[str, Any]) -> Dict[str, float]:
    validate_config(cfg)
    t_orb_min = float(cfg["orbit_period_min"])
    t_ecl_min = float(cfg["eclipse_duration_min"])
    t_sun_min = t_orb_min - t_ecl_min

    t_sun_hr = t_sun_min / 60.0
    t_ecl_hr = t_ecl_min / 60.0

    p_day = float(cfg["daylight_load_w"])
    p_ecl = float(cfg["eclipse_load_w"])
    eta_day = float(cfg["daylight_path_eff"])
    eta_ecl = float(cfg["eclipse_path_eff"])

    e_day_wh = (p_day * t_sun_hr) / eta_day
    e_ecl_batt_wh = p_ecl * t_ecl_hr
    e_ecl_rech_wh = e_ecl_batt_wh / eta_ecl
    total_orb_wh = e_day_wh + e_ecl_rech_wh

    p_sa_req_w = total_orb_wh / t_sun_hr
    p_sa_target_w = p_sa_req_w * 1.12

    return {
        "orbit_period_min": round(t_orb_min, 2),
        "sunlight_duration_min": round(t_sun_min, 2),
        "eclipse_duration_min": round(t_ecl_min, 2),
        "eclipse_fraction_pct": round((t_ecl_min / t_orb_min) * 100.0, 2),
        "daylight_energy_wh": round(e_day_wh, 2),
        "eclipse_battery_energy_wh": round(e_ecl_batt_wh, 2),
        "eclipse_recharge_energy_wh": round(e_ecl_rech_wh, 2),
        "total_orbital_energy_wh": round(total_orb_wh, 2),
        "required_sa_power_w": round(p_sa_req_w, 2),
        "target_sa_power_with_margin_w": round(p_sa_target_w, 2),
    }


def size_solar_array_pva(cfg: Dict[str, Any], eb: Dict[str, float]) -> Dict[str, Any]:
    eta_cell = float(cfg["solar_cell_eff"])
    id_factor = float(cfg["inherent_degradation_id"])
    cos_theta = math.cos(math.radians(float(cfg["sun_incidence_deg"])))
    annual_deg = float(cfg["annual_rad_degradation"])
    life_yr = float(cfg["mission_life_years"])
    temp_c = float(cfg["array_operating_temp_c"])
    bus_v = float(cfg["bus_voltage_v"])

    p0_wm2 = SOLAR_CONSTANT_AM0 * eta_cell
    p_bol_wm2 = p0_wm2 * id_factor * cos_theta

    temp_delta = max(0.0, temp_c - 28.0)
    temp_factor = 1.0 - 0.0045 * temp_delta
    rad_factor = (1.0 - annual_deg) ** life_yr
    l_d = rad_factor * temp_factor
    p_eol_wm2 = p_bol_wm2 * l_d

    v_cell_oper = max(1.65, CELL_NOMINAL_V + CELL_TEMP_COEFF * (temp_c - 28.0))
    req_string_v = bus_v * 1.06 + 1.8
    n_s = math.ceil(req_string_v / v_cell_oper)

    string_area_m2 = n_s * CELL_AREA_M2
    string_eol_w = string_area_m2 * p_eol_wm2
    string_bol_w = string_area_m2 * p_bol_wm2

    active_np = max(1, math.ceil(eb["target_sa_power_with_margin_w"] / string_eol_w))
    redundant_np = max(1, int(cfg.get("redundant_strings", 1)))
    total_np = active_np + redundant_np

    installed_active_eol_w = active_np * string_eol_w
    installed_total_eol_w = total_np * string_eol_w
    installed_bol_w = total_np * string_bol_w
    total_area_m2 = total_np * string_area_m2
    eol_margin_pct = ((installed_active_eol_w - eb["required_sa_power_w"]) / eb["required_sa_power_w"]) * 100.0

    return {
        "p0_w_m2": round(p0_wm2, 2),
        "p_bol_w_m2": round(p_bol_wm2, 2),
        "p_eol_w_m2": round(p_eol_wm2, 2),
        "rad_survival_factor": round(rad_factor, 4),
        "life_degradation_ld": round(l_d, 4),
        "v_cell_oper_v": round(v_cell_oper, 3),
        "cells_in_series_ns": n_s,
        "active_strings_np": active_np,
        "redundant_strings": redundant_np,
        "total_strings_np": total_np,
        "total_array_area_m2": round(total_area_m2, 3),
        "installed_bol_power_w": round(installed_bol_w, 2),
        "installed_active_eol_power_w": round(installed_active_eol_w, 2),
        "installed_total_eol_power_w": round(installed_total_eol_w, 2),
        "eol_energy_margin_pct": round(eol_margin_pct, 2),
    }


def analyze_battery_subsystem(cfg: Dict[str, Any], eb: Dict[str, float]) -> Dict[str, Any]:
    bus_v = float(cfg["bus_voltage_v"])
    nom_wh = float(cfg["battery_energy_wh"])
    p_strings = max(2, int(cfg.get("battery_parallel_strings", 3)))
    max_dod = float(cfg.get("max_allowed_dod_pct", 30.0))
    discharge_eff = 0.96

    n_s = round(bus_v / LI_ION_CELL_V)
    cap_ah = nom_wh / bus_v
    extracted_wh = eb["eclipse_battery_energy_wh"] / discharge_eff
    nom_dod_pct = (extracted_wh / nom_wh) * 100.0

    degraded_wh = nom_wh * ((p_strings - 1) / p_strings)
    fault_dod_pct = (extracted_wh / degraded_wh) * 100.0

    dis_current_a = (float(cfg["eclipse_load_w"]) / discharge_eff) / bus_v
    dis_c_rate = dis_current_a / cap_ah

    return {
        "series_cells_ns": n_s,
        "parallel_strings": p_strings,
        "nominal_energy_wh": round(nom_wh, 2),
        "nominal_capacity_ah": round(cap_ah, 2),
        "extracted_eclipse_wh": round(extracted_wh, 2),
        "nominal_dod_pct": round(nom_dod_pct, 2),
        "fault_case_dod_pct": round(fault_dod_pct, 2),
        "max_allowed_dod_pct": round(max_dod, 2),
        "dod_margin_pct": round(max_dod - nom_dod_pct, 2),
        "discharge_current_a": round(dis_current_a, 2),
        "discharge_c_rate": round(dis_c_rate, 3),
        "dod_compliant": nom_dod_pct <= max_dod,
    }


def evaluate_lcl_distribution(cfg: Dict[str, Any]) -> Dict[str, Any]:
    bus_v = float(cfg["bus_voltage_v"])
    max_drop_v = bus_v * 0.01
    z_src = float(cfg.get("source_impedance_ohm", 0.035))
    z_load = float(cfg.get("load_filter_impedance_ohm", 0.110))
    imp_margin_db = 20.0 * math.log10(max(1e-6, z_load) / max(1e-6, z_src))

    channels_out = []
    for ch in cfg.get("lcl_channels", []):
        rds_ohm = float(ch["rds_mohm"]) / 1000.0
        i_nom = float(ch["nominal_a"])
        i_act = float(ch["actual_a"])
        i_lim = float(ch["trip_a"])
        t_trip_ms = float(ch["trip_ms"])
        cap_uf = float(ch.get("cap_uf", 220.0))

        drop_v = i_nom * rds_ohm
        drop_pct = (drop_v / bus_v) * 100.0
        drop_ok = drop_pct <= 1.0

        inrush_ms = ((cap_uf * 1e-6 * bus_v) / max(0.1, i_lim)) * 1000.0
        inrush_ok = t_trip_ms >= inrush_ms * 1.5

        if i_act > i_lim:
            state = "CURRENT_FOLDBACK_ACTIVE" if ch["class_type"] == "FCL" else "LATCHED_TRIPPED_OFF"
        elif i_act > i_nom * 1.15:
            state = "OVERLOAD_WARNING"
        else:
            state = "CLOSED_NOMINAL"

        channels_out.append({
            "id": ch["id"],
            "subsystem": ch["subsystem"],
            "class_type": ch["class_type"],
            "nominal_a": round(i_nom, 2),
            "actual_a": round(i_act, 2),
            "trip_a": round(i_lim, 2),
            "voltage_drop_v": round(drop_v, 4),
            "voltage_drop_pct": round(drop_pct, 3),
            "drop_compliant": drop_ok,
            "trip_ms": round(t_trip_ms, 2),
            "inrush_ms": round(inrush_ms, 2),
            "inrush_safe": inrush_ok,
            "state": state,
        })

    return {
        "bus_voltage_v": bus_v,
        "max_allowed_drop_v": round(max_drop_v, 3),
        "impedance_margin_db": round(imp_margin_db, 2),
        "impedance_compliant": imp_margin_db >= 5.0,
        "all_drops_compliant": all(c["drop_compliant"] for c in channels_out),
        "all_inrush_safe": all(c["inrush_safe"] for c in channels_out),
        "tripped_count": sum(1 for c in channels_out if c["state"] == "LATCHED_TRIPPED_OFF"),
        "channels": channels_out,
    }


def run_ecss_audit(cfg: Dict[str, Any]) -> Dict[str, Any]:
    eb = solve_orbital_energy_balance(cfg)
    pva = size_solar_array_pva(cfg, eb)
    batt = analyze_battery_subsystem(cfg, eb)
    lcl = evaluate_lcl_distribution(cfg)
    bus_v = int(cfg["bus_voltage_v"])
    peak_kw = max(float(cfg["daylight_load_w"]), pva["installed_bol_power_w"]) / 1000.0
    bus_band_ok = peak_kw <= BUS_STANDARDS[bus_v]["max_kw"] * 1.25

    checks = [
        ("ECSS-20C-01", "Standardized Spacecraft Main Bus Voltage Tier", bus_v in (28, 50, 100) and bus_band_ok),
        ("ECSS-20C-02", "Positive Orbital Energy Balance & >= 10% EOL Margin", pva["eol_energy_margin_pct"] >= 10.0),
        ("ECSS-20C-03", "Solar Array Radiation & Thermal EOL Degradation Budgeting", 0.55 <= pva["life_degradation_ld"] <= 0.98 and pva["cells_in_series_ns"] >= 10),
        ("ECSS-20C-04", "Photovoltaic String Single-Point Failure Redundancy (N+1)", pva["redundant_strings"] >= 1 and pva["total_strings_np"] > pva["active_strings_np"]),
        ("ECSS-20C-05", "Battery Eclipse Depth-of-Discharge (DoD) Cycle-Life Limit", batt["dod_compliant"]),
        ("ECSS-20C-06", "Battery Single-String Failure Survivability (N-1 Strings)", batt["parallel_strings"] >= 2 and batt["fault_case_dod_pct"] < 85.0),
        ("ECSS-20C-07", "LCL / RLCL Nominal Forward Voltage Drop <= 1.0% V_bus", lcl["all_drops_compliant"]),
        ("ECSS-20C-08", "LCL Capacitive Inrush vs. Trip-Off Timeout Coordination", lcl["all_inrush_safe"]),
        ("ECSS-20C-09", "Main Bus Source-to-Load Impedance Stability Gain Margin >= 5 dB", lcl["impedance_compliant"]),
        ("ECSS-20C-10", "Essential Load RLCL / FCL Fault Protection Coverage", len(lcl["channels"]) >= 3 and lcl["tripped_count"] == 0),
    ]
    passed = sum(1 for _, _, ok in checks if ok)
    return {
        "energy_balance": eb,
        "pva": pva,
        "battery": batt,
        "lcl": lcl,
        "pass_count": passed,
        "total_checks": len(checks),
        "certified": passed == len(checks),
        "checks": [{"id": cid, "title": title, "passed": ok} for cid, title, ok in checks],
    }


def main():
    parser = argparse.ArgumentParser(description="EPSSpaceForge Pro CLI — ECSS-E-ST-20C Spacecraft Power Architect")
    parser.add_argument("--preset", default="leo_eo_smallsat", choices=list(PRESETS.keys()), help="Mission preset ID")
    parser.add_argument("--json", action="store_true", help="Output JSON synthesis")
    args = parser.parse_args()

    cfg = PRESETS[args.preset]
    res = run_ecss_audit(cfg)
    if args.json:
        print(json.dumps(res, indent=2))
    else:
        print(f"=== EPSSpaceForge Pro (v1.0.0) — {cfg['name']} ===")
        print(f"Orbital Required SA Power : {res['energy_balance']['required_sa_power_w']} W")
        print(f"Installed Active EOL Power: {res['pva']['installed_active_eol_power_w']} W (+{res['pva']['eol_energy_margin_pct']}% margin)")
        print(f"PVA String Architecture   : {res['pva']['cells_in_series_ns']}s x {res['pva']['total_strings_np']}p ({res['pva']['total_array_area_m2']} m^2)")
        print(f"Battery Eclipse DoD       : {res['battery']['nominal_dod_pct']}% (Fault N-1: {res['battery']['fault_case_dod_pct']}%, Max: {res['battery']['max_allowed_dod_pct']}%)")
        print(f"LCL Impedance Gain Margin : {res['lcl']['impedance_margin_db']} dB | All drops <= 1%: {res['lcl']['all_drops_compliant']}")
        print(f"ECSS-E-ST-20C Audit Score : {res['pass_count']}/{res['total_checks']} PASS (Certified: {res['certified']})")


if __name__ == "__main__":
    main()
