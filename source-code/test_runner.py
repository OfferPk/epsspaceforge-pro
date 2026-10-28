#!/usr/bin/env python3
"""
EPSSpaceForge Pro (v1.0.0) — Automated 10-Point Verification & Edge-Case Suite
Validates ECSS-E-ST-20C Rev. 2, ECSS-E-ST-20-20C, and ECSS-E-ST-20-08C compliance,
multi-orbit presets (LEO 28V, MEO 50V, GEO 100V), LCL fault isolation, and error boundaries.
"""
import copy
import sys
from epsspace_cli import (
    PRESETS,
    validate_config,
    solve_orbital_energy_balance,
    size_solar_array_pva,
    analyze_battery_subsystem,
    evaluate_lcl_distribution,
    run_ecss_audit,
)


def run_tests() -> int:
    print("=" * 74)
    print("EPSSpaceForge Pro — ECSS-E-ST-20C & ECSS-E-ST-20-20C Verification Suite")
    print("=" * 74)
    passed = 0
    total = 10

    # TEST 1: Orbital Sunlight/Eclipse Energy Balance Conservation (Clause 5.3.1)
    leo = copy.deepcopy(PRESETS["leo_eo_smallsat"])
    eb = solve_orbital_energy_balance(leo)
    assert abs((eb["sunlight_duration_min"] + eb["eclipse_duration_min"]) - eb["orbit_period_min"]) < 1e-6
    assert eb["required_sa_power_w"] > leo["daylight_load_w"], "Required SA power must cover daylight load + eclipse recharge"
    print(f"[TEST 01] Orbital Energy Balance Conservation (P_SA,req={eb['required_sa_power_w']} W)........ PASS")
    passed += 1

    # TEST 2: Photovoltaic Assembly BOL-to-EOL Radiation & Thermal Sizing (ECSS-E-ST-20-08C)
    pva = size_solar_array_pva(leo, eb)
    assert pva["p_eol_w_m2"] < pva["p_bol_w_m2"] < pva["p0_w_m2"]
    assert pva["eol_energy_margin_pct"] >= 10.0, f"EOL margin {pva['eol_energy_margin_pct']}% must be >= 10%"
    print(f"[TEST 02] PVA BOL/EOL Radiation Sizing ({pva['cells_in_series_ns']}s x {pva['total_strings_np']}p, +{pva['eol_energy_margin_pct']}% EOL)... PASS")
    passed += 1

    # TEST 3: PVA N+1 String Single-Point Failure Redundancy (Clause 5.3.2)
    assert pva["total_strings_np"] == pva["active_strings_np"] + leo["redundant_strings"]
    assert pva["installed_total_eol_power_w"] > pva["installed_active_eol_power_w"]
    print(f"[TEST 03] PVA (N+1) Redundant String Isolation ({pva['active_strings_np']}+{pva['redundant_strings']} strings)....... PASS")
    passed += 1

    # TEST 4: Li-Ion Battery LEO Depth-of-Discharge (DoD <= 30%) Verification (Clause 5.3.4)
    batt = analyze_battery_subsystem(leo, eb)
    assert batt["dod_compliant"] is True and batt["nominal_dod_pct"] <= 30.0
    print(f"[TEST 04] Li-Ion LEO Eclipse DoD Limit ({batt['nominal_dod_pct']}% <= 30.0% ceiling).......... PASS")
    passed += 1

    # TEST 5: Battery N-1 Parallel String Failure Survivability (Clause 5.3.5)
    assert batt["fault_case_dod_pct"] > batt["nominal_dod_pct"]
    assert batt["fault_case_dod_pct"] < 85.0, "N-1 string failure must not collapse bus (<85% DoD)"
    print(f"[TEST 05] Battery (N-1) Single-Failure Survivability ({batt['fault_case_dod_pct']}% Fault DoD)... PASS")
    passed += 1

    # TEST 6: LCL Nominal Forward Voltage Drop <= 1.0% V_bus (ECSS-E-ST-20-20C Clause 5.4.5.1)
    lcl = evaluate_lcl_distribution(leo)
    assert lcl["all_drops_compliant"] is True
    max_drop_pct = max(c["voltage_drop_pct"] for c in lcl["channels"])
    assert max_drop_pct <= 1.0
    print(f"[TEST 06] LCL Forward Voltage Drop <= 1.0% V_bus (Max: {max_drop_pct:.3f}%).......... PASS")
    passed += 1

    # TEST 7: LCL Capacitive Inrush vs. Trip-Off Timeout Coordination (Clause 5.4.3)
    assert lcl["all_inrush_safe"] is True
    for c in lcl["channels"]:
        assert c["trip_ms"] >= c["inrush_ms"] * 1.5
    print(f"[TEST 07] LCL Capacitive Inrush Coordination (T_trip >= 1.5x T_inrush)..... PASS")
    passed += 1

    # TEST 8: Source-to-Load Impedance Gain Margin >= 5.0 dB (Clause 5.4.6)
    assert lcl["impedance_compliant"] is True and lcl["impedance_margin_db"] >= 5.0
    print(f"[TEST 08] Main Bus Impedance Stability Gain Margin ({lcl['impedance_margin_db']} dB >= 5.0 dB).... PASS")
    passed += 1

    # TEST 9: Multi-Mission Architecture Presets (LEO 28V, MEO 50V, GEO 100V) 10/10 Audit
    for key in ("leo_eo_smallsat", "meo_gnss_nav", "geo_hts_telecom"):
        audit = run_ecss_audit(PRESETS[key])
        assert audit["certified"] is True and audit["pass_count"] == 10, f"Preset {key} failed audit"
    print("[TEST 09] Multi-Regime ECSS-E-ST-20C Audit (LEO 28V, MEO 50V, GEO 100V).... PASS")
    passed += 1

    # TEST 10: Overcurrent Fault Injection & Invalid Parameter Boundary Rejection
    fault_cfg = copy.deepcopy(leo)
    fault_cfg["lcl_channels"][2]["actual_a"] = 14.5  # Exceeds 9.0A trip limit on LCL-03
    fault_lcl = evaluate_lcl_distribution(fault_cfg)
    assert fault_lcl["channels"][2]["state"] == "LATCHED_TRIPPED_OFF"
    assert fault_lcl["tripped_count"] == 1

    # Verify invalid bus voltage and invalid eclipse timing raise ValueError
    bad_bus = copy.deepcopy(leo)
    bad_bus["bus_voltage_v"] = 12
    raised_bus = False
    try:
        validate_config(bad_bus)
    except ValueError:
        raised_bus = True
    assert raised_bus is True

    bad_ecl = copy.deepcopy(leo)
    bad_ecl["eclipse_duration_min"] = 110.0  # > orbit_period_min (96.7)
    raised_ecl = False
    try:
        validate_config(bad_ecl)
    except ValueError:
        raised_ecl = True
    assert raised_ecl is True
    print("[TEST 10] LCL Overcurrent Trip Isolation & Boundary Error Handling......... PASS")
    passed += 1

    print("=" * 74)
    print(f"RESULT: {passed}/{total} TESTS PASSED (100.0% ECSS-E-ST-20C Verification Score)")
    print("=" * 74)
    return 0 if passed == total else 1


if __name__ == "__main__":
    sys.exit(run_tests())
