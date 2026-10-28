/**
 * EPSSpaceForge Pro (v1.0.0) — Core ECSS-E-ST-20C & ECSS-E-ST-20-20C Physics Engine
 * Standards:
 *  - ECSS-E-ST-20C Rev. 2 (Space engineering: Electrical and electronic)
 *  - ECSS-E-ST-20-20C (Electrical design and interface requirements for power supply / LCLs)
 *  - ECSS-E-ST-20-08C (Photovoltaic assemblies and components)
 */

export const ECSS_EPS_CONSTANTS = {
  SOLAR_CONSTANT_AM0_W_M2: 1361.0, // ECSS nominal AM0 solar irradiance (W/m^2)
  CELL_NOMINAL_VOLTAGE_V: 2.40,    // Triple-junction GaAs Vmp at 28 degC (V)
  CELL_TEMP_COEFF_V_PER_C: -0.0062,// Voltage temperature coefficient (V/degC)
  CELL_AREA_CM2: 30.18,            // Standard large-area space solar cell (cm^2)
  LI_ION_NOMINAL_CELL_V: 3.65,     // Space-grade Li-Ion nominal cell voltage (V)
  BUS_STANDARDS: {
    28: { minPowerKW: 0.0, maxPowerKW: 1.5, nominalV: 28.0, maxRipplePct: 1.0, label: "28V Regulated Low/Medium Bus (<= 1.5 kW)" },
    50: { minPowerKW: 0.5, maxPowerKW: 8.0, nominalV: 50.0, maxRipplePct: 1.0, label: "50V Regulated Telecom/EO Bus (<= 8.0 kW)" },
    100: { minPowerKW: 3.0, maxPowerKW: 25.0, nominalV: 100.0, maxRipplePct: 1.0, label: "100V High-Power Regulated Bus (> 8.0 kW)" }
  }
};

export const MISSION_PRESETS = {
  leo_eo_smallsat: {
    id: "leo_eo_smallsat",
    name: "LEO Optical Earth Observation SmallSat (28V Bus, 600 km SSO)",
    orbitRegime: "LEO",
    busVoltageV: 28,
    orbitPeriodMin: 96.7,
    eclipseDurationMin: 34.8,
    missionLifeYears: 5.0,
    daylightLoadW: 420.0,
    eclipseLoadW: 290.0,
    daylightPathEff: 0.92,
    eclipsePathEff: 0.86,
    solarCellEff: 0.295,
    inherentDegradationId: 0.77,
    sunIncidenceDeg: 18.0,
    annualRadDegradation: 0.027,
    arrayOperatingTempC: 62.0,
    redundantStrings: 1,
    batteryEnergyWh: 780.0,
    batteryParallelStrings: 3,
    maxAllowedDodPct: 30.0,
    sourceImpedanceOhm: 0.045,
    loadFilterInputImpedanceOhm: 0.120,
    lclChannels: [
      { id: "LCL-01", subsystem: "OBC & SpaceWire Router", classType: "RLCL", nominalCurrentA: 1.25, tripLimitA: 2.50, actualCurrentA: 1.18, rdsOnMohm: 65, tripTimeMs: 12.0, loadCapacitanceUf: 220, critical: true },
      { id: "LCL-02", subsystem: "ADCS Reaction Wheel Assembly", classType: "LCL", nominalCurrentA: 3.20, tripLimitA: 6.00, actualCurrentA: 2.95, rdsOnMohm: 42, tripTimeMs: 18.0, loadCapacitanceUf: 470, critical: true },
      { id: "LCL-03", subsystem: "Multispectral Optical Payload", classType: "LCL", nominalCurrentA: 5.80, tripLimitA: 9.00, actualCurrentA: 5.40, rdsOnMohm: 28, tripTimeMs: 10.0, loadCapacitanceUf: 680, critical: false },
      { id: "LCL-04", subsystem: "X-Band High-Rate Downlink", classType: "LCL", nominalCurrentA: 3.80, tripLimitA: 6.50, actualCurrentA: 3.55, rdsOnMohm: 38, tripTimeMs: 8.5, loadCapacitanceUf: 330, critical: false },
      { id: "LCL-05", subsystem: "Propulsion Valve & Catbed Heater", classType: "FCL", nominalCurrentA: 1.90, tripLimitA: 3.50, actualCurrentA: 1.75, rdsOnMohm: 55, tripTimeMs: 15.0, loadCapacitanceUf: 180, critical: true }
    ]
  },
  meo_gnss_nav: {
    id: "meo_gnss_nav",
    name: "MEO Navigation & Timing Platform (50V Bus, 20,200 km)",
    orbitRegime: "MEO",
    busVoltageV: 50,
    orbitPeriodMin: 718.0,
    eclipseDurationMin: 56.0,
    missionLifeYears: 12.0,
    daylightLoadW: 2450.0,
    eclipseLoadW: 2180.0,
    daylightPathEff: 0.94,
    eclipsePathEff: 0.89,
    solarCellEff: 0.302,
    inherentDegradationId: 0.78,
    sunIncidenceDeg: 12.0,
    annualRadDegradation: 0.032,
    arrayOperatingTempC: 58.0,
    redundantStrings: 2,
    batteryEnergyWh: 4200.0,
    batteryParallelStrings: 4,
    maxAllowedDodPct: 60.0,
    sourceImpedanceOhm: 0.032,
    loadFilterInputImpedanceOhm: 0.095,
    lclChannels: [
      { id: "LCL-01", subsystem: "Atomic Clock & Nav Baseband", classType: "RLCL", nominalCurrentA: 6.50, tripLimitA: 10.0, actualCurrentA: 6.10, rdsOnMohm: 35, tripTimeMs: 14.0, loadCapacitanceUf: 400, critical: true },
      { id: "LCL-02", subsystem: "L-Band Navigation TWTA Bank A", classType: "LCL", nominalCurrentA: 18.0, tripLimitA: 26.0, actualCurrentA: 17.2, rdsOnMohm: 15, tripTimeMs: 9.0, loadCapacitanceUf: 820, critical: true },
      { id: "LCL-03", subsystem: "L-Band Navigation TWTA Bank B", classType: "LCL", nominalCurrentA: 18.0, tripLimitA: 26.0, actualCurrentA: 16.9, rdsOnMohm: 15, tripTimeMs: 9.0, loadCapacitanceUf: 820, critical: true },
      { id: "LCL-04", subsystem: "AOCS Star Tracker & Gyro Suite", classType: "RLCL", nominalCurrentA: 4.20, tripLimitA: 7.50, actualCurrentA: 3.90, rdsOnMohm: 45, tripTimeMs: 15.0, loadCapacitanceUf: 300, critical: true },
      { id: "LCL-05", subsystem: "Thermal Survival Heater Bus", classType: "FCL", nominalCurrentA: 5.50, tripLimitA: 9.00, actualCurrentA: 4.85, rdsOnMohm: 38, tripTimeMs: 20.0, loadCapacitanceUf: 250, critical: false }
    ]
  },
  geo_hts_telecom: {
    id: "geo_hts_telecom",
    name: "GEO High-Throughput Telecom Bus (100V Bus, 35,786 km)",
    orbitRegime: "GEO",
    busVoltageV: 100,
    orbitPeriodMin: 1436.1,
    eclipseDurationMin: 72.0,
    missionLifeYears: 15.0,
    daylightLoadW: 11200.0,
    eclipseLoadW: 9800.0,
    daylightPathEff: 0.95,
    eclipsePathEff: 0.90,
    solarCellEff: 0.310,
    inherentDegradationId: 0.79,
    sunIncidenceDeg: 23.4,
    annualRadDegradation: 0.022,
    arrayOperatingTempC: 65.0,
    redundantStrings: 2,
    batteryEnergyWh: 19600.0,
    batteryParallelStrings: 4,
    maxAllowedDodPct: 70.0,
    sourceImpedanceOhm: 0.025,
    loadFilterInputImpedanceOhm: 0.080,
    lclChannels: [
      { id: "LCL-01", subsystem: "Ka-Band Payload EPC Matrix North", classType: "LCL", nominalCurrentA: 38.0, tripLimitA: 52.0, actualCurrentA: 36.4, rdsOnMohm: 12, tripTimeMs: 7.5, loadCapacitanceUf: 950, critical: false },
      { id: "LCL-02", subsystem: "Ka-Band Payload EPC Matrix South", classType: "LCL", nominalCurrentA: 38.0, tripLimitA: 52.0, actualCurrentA: 35.8, rdsOnMohm: 12, tripTimeMs: 7.5, loadCapacitanceUf: 950, critical: false },
      { id: "LCL-03", subsystem: "Electric Orbit Raising Hall Thruster PPU", classType: "LCL", nominalCurrentA: 24.0, tripLimitA: 34.0, actualCurrentA: 22.5, rdsOnMohm: 18, tripTimeMs: 11.0, loadCapacitanceUf: 600, critical: true },
      { id: "LCL-04", subsystem: "Central Avionics & TT&C Transponder", classType: "RLCL", nominalCurrentA: 6.80, tripLimitA: 12.0, actualCurrentA: 6.20, rdsOnMohm: 40, tripTimeMs: 16.0, loadCapacitanceUf: 320, critical: true },
      { id: "LCL-05", subsystem: "Solar Array Drive Mechanism (SADM)", classType: "FCL", nominalCurrentA: 4.50, tripLimitA: 8.00, actualCurrentA: 4.10, rdsOnMohm: 48, tripTimeMs: 18.0, loadCapacitanceUf: 210, critical: true }
    ]
  }
};

/**
 * Validates and normalizes input spacecraft EPS configuration.
 */
export function validateEPSConfig(config) {
  if (!config || typeof config !== "object") {
    throw new Error("EPS configuration object is required.");
  }
  const busV = Number(config.busVoltageV);
  if (![28, 50, 100].includes(busV)) {
    throw new Error(`Unsupported ECSS main bus voltage (${config.busVoltageV} V). Must be 28V, 50V, or 100V.`);
  }
  const tOrb = Number(config.orbitPeriodMin);
  const tEcl = Number(config.eclipseDurationMin);
  if (!(tOrb > 0) || tEcl < 0 || tEcl >= tOrb) {
    throw new Error("Invalid orbital timing: eclipseDurationMin must be >= 0 and strictly less than orbitPeriodMin.");
  }
  if (Number(config.daylightLoadW) <= 0 || Number(config.eclipseLoadW) <= 0) {
    throw new Error("Spacecraft daylight and eclipse loads must be positive Watt values.");
  }
  if (Number(config.daylightPathEff) <= 0 || Number(config.daylightPathEff) > 1 ||
      Number(config.eclipsePathEff) <= 0 || Number(config.eclipsePathEff) > 1) {
    throw new Error("Path efficiencies (daylightPathEff, eclipsePathEff) must be in (0, 1].");
  }
  return true;
}

/**
 * Solves the Orbital Energy Balance per ECSS-E-ST-20C Rev. 2 Clause 5.3.
 */
export function solveOrbitalEnergyBalance(config) {
  validateEPSConfig(config);
  const tOrbMin = Number(config.orbitPeriodMin);
  const tEclMin = Number(config.eclipseDurationMin);
  const tSunMin = tOrbMin - tEclMin;

  const tOrbHr = tOrbMin / 60.0;
  const tEclHr = tEclMin / 60.0;
  const tSunHr = tSunMin / 60.0;

  const pDayW = Number(config.daylightLoadW);
  const pEclW = Number(config.eclipseLoadW);
  const etaDay = Number(config.daylightPathEff);
  const etaEcl = Number(config.eclipsePathEff);

  // Energy consumed from solar array during sunlight & to recharge battery for eclipse
  const eDayWh = (pDayW * tSunHr) / etaDay;
  const eEclBatteryWh = pEclW * tEclHr;
  const eEclRechargeWh = eEclBatteryWh / etaEcl;
  const totalOrbitalEnergyRequiredWh = eDayWh + eEclRechargeWh;

  // Minimum required solar array output power during sunlit arc (0% margin baseline)
  const pSaRequiredZeroMarginW = totalOrbitalEnergyRequiredWh / tSunHr;
  // ECSS-E-ST-20C Clause 5.3 recommends >= 10% system energy margin at EOL
  const pSaTargetWithMarginW = pSaRequiredZeroMarginW * 1.12;

  return {
    orbitPeriodMin: Number(tOrbMin.toFixed(2)),
    sunlightDurationMin: Number(tSunMin.toFixed(2)),
    eclipseDurationMin: Number(tEclMin.toFixed(2)),
    eclipseFractionPct: Number(((tEclMin / tOrbMin) * 100.0).toFixed(2)),
    daylightEnergyWh: Number(eDayWh.toFixed(2)),
    eclipseBatteryEnergyWh: Number(eEclBatteryWh.toFixed(2)),
    eclipseRechargeEnergyWh: Number(eEclRechargeWh.toFixed(2)),
    totalOrbitalEnergyRequiredWh: Number(totalOrbitalEnergyRequiredWh.toFixed(2)),
    requiredSolarArrayPowerW: Number(pSaRequiredZeroMarginW.toFixed(2)),
    targetSolarArrayPowerWithMarginW: Number(pSaTargetWithMarginW.toFixed(2))
  };
}

/**
 * Sizes the Photovoltaic Assembly (PVA) strings and BOL/EOL performance per ECSS-E-ST-20-08C.
 */
export function sizeSolarArrayPVA(config, energyBalance) {
  const s0 = ECSS_EPS_CONSTANTS.SOLAR_CONSTANT_AM0_W_M2;
  const etaCell = Number(config.solarCellEff);
  const idFactor = Number(config.inherentDegradationId);
  const thetaRad = (Number(config.sunIncidenceDeg) * Math.PI) / 180.0;
  const cosTheta = Math.cos(thetaRad);
  const annualDeg = Number(config.annualRadDegradation);
  const lifeYears = Number(config.missionLifeYears);
  const tempC = Number(config.arrayOperatingTempC);
  const busV = Number(config.busVoltageV);

  // Beginning-of-Life (BOL) specific power (W/m^2)
  const p0WPerM2 = s0 * etaCell;
  const pBolWPerM2 = p0WPerM2 * idFactor * cosTheta;

  // End-of-Life (EOL) degradation factor L_d = (1 - annualDeg)^lifeYears * tempFactor
  const tempDeltaC = Math.max(0, tempC - 28.0);
  const tempPowerFactor = 1.0 - 0.0045 * tempDeltaC;
  const radSurvivalFactor = Math.pow(1.0 - annualDeg, lifeYears);
  const lifeDegradationLd = radSurvivalFactor * tempPowerFactor;
  const pEolWPerM2 = pBolWPerM2 * lifeDegradationLd;

  // String series cell count N_s to support busVoltageV + 2.2V diode/harness drop at operating temp
  const vCellOper = Math.max(1.65, ECSS_EPS_CONSTANTS.CELL_NOMINAL_VOLTAGE_V + ECSS_EPS_CONSTANTS.CELL_TEMP_COEFF_V_PER_C * (tempC - 28.0));
  const requiredStringV = busV * 1.06 + 1.8;
  const cellsInSeriesNs = Math.ceil(requiredStringV / vCellOper);

  // Single cell area and single string EOL power
  const cellAreaM2 = ECSS_EPS_CONSTANTS.CELL_AREA_CM2 * 1e-4;
  const singleStringAreaM2 = cellsInSeriesNs * cellAreaM2;
  const singleStringEolW = singleStringAreaM2 * pEolWPerM2;
  const singleStringBolW = singleStringAreaM2 * pBolWPerM2;

  // Required active strings to meet targetSolarArrayPowerWithMarginW
  const activeStringsNp = Math.max(1, Math.ceil(energyBalance.targetSolarArrayPowerWithMarginW / singleStringEolW));
  const redundantStrings = Math.max(1, Number(config.redundantStrings || 1));
  const totalStringsNp = activeStringsNp + redundantStrings;

  // Installed EOL power (with all active strings; and N-1 failure case)
  const installedActiveEolW = activeStringsNp * singleStringEolW;
  const installedTotalEolW = totalStringsNp * singleStringEolW;
  const installedTotalBolW = totalStringsNp * singleStringBolW;
  const totalArrayAreaM2 = totalStringsNp * singleStringAreaM2;

  // Energy balance margin (%) at EOL with active strings (N-1 fault-tolerant against totalStringsNp)
  const eolEnergyMarginPct = ((installedActiveEolW - energyBalance.requiredSolarArrayPowerW) / energyBalance.requiredSolarArrayPowerW) * 100.0;

  return {
    p0WPerM2: Number(p0WPerM2.toFixed(2)),
    pBolWPerM2: Number(pBolWPerM2.toFixed(2)),
    pEolWPerM2: Number(pEolWPerM2.toFixed(2)),
    radSurvivalFactor: Number(radSurvivalFactor.toFixed(4)),
    lifeDegradationLd: Number(lifeDegradationLd.toFixed(4)),
    vCellOperV: Number(vCellOper.toFixed(3)),
    cellsInSeriesNs,
    activeStringsNp,
    redundantStrings,
    totalStringsNp,
    totalArrayAreaM2: Number(totalArrayAreaM2.toFixed(3)),
    installedBolPowerW: Number(installedTotalBolW.toFixed(2)),
    installedActiveEolPowerW: Number(installedActiveEolW.toFixed(2)),
    installedTotalEolPowerW: Number(installedTotalEolW.toFixed(2)),
    eolEnergyMarginPct: Number(eolEnergyMarginPct.toFixed(2))
  };
}

/**
 * Evaluates Spacecraft Li-Ion Battery Sizing, Depth-of-Discharge (DoD), and Single-Failure Tolerance.
 */
export function analyzeBatterySubsystem(config, energyBalance) {
  const busV = Number(config.busVoltageV);
  const nominalEnergyWh = Number(config.batteryEnergyWh);
  const parallelStrings = Math.max(2, Number(config.batteryParallelStrings || 3));
  const maxAllowedDodPct = Number(config.maxAllowedDodPct || (config.orbitRegime === "LEO" ? 30.0 : 70.0));
  const dischargeEff = 0.96;

  const seriesCellsNs = Math.round(busV / ECSS_EPS_CONSTANTS.LI_ION_NOMINAL_CELL_V);
  const nominalCapacityAh = nominalEnergyWh / busV;

  // Extracted energy from battery during eclipse considering internal discharge efficiency
  const extractedWh = energyBalance.eclipseBatteryEnergyWh / dischargeEff;
  const nominalDodPct = (extractedWh / nominalEnergyWh) * 100.0;

  // Single-string failure case (N-1 strings remaining)
  const degradedStrings = Math.max(1, parallelStrings - 1);
  const degradedEnergyWh = nominalEnergyWh * (degradedStrings / parallelStrings);
  const faultCaseDodPct = (extractedWh / degradedEnergyWh) * 100.0;

  // Average discharge & recharge C-rates
  const tEclHr = Math.max(0.01, energyBalance.eclipseDurationMin / 60.0);
  const tSunHr = Math.max(0.1, energyBalance.sunlightDurationMin / 60.0);
  const dischargeCurrentA = (Number(config.eclipseLoadW) / dischargeEff) / busV;
  const dischargeCRate = dischargeCurrentA / nominalCapacityAh;
  const chargeCurrentA = (energyBalance.eclipseRechargeEnergyWh / tSunHr) / busV;
  const chargeCRate = chargeCurrentA / nominalCapacityAh;

  return {
    seriesCellsNs,
    parallelStrings,
    nominalEnergyWh: Number(nominalEnergyWh.toFixed(2)),
    nominalCapacityAh: Number(nominalCapacityAh.toFixed(2)),
    extractedEclipseWh: Number(extractedWh.toFixed(2)),
    nominalDodPct: Number(nominalDodPct.toFixed(2)),
    faultCaseDodPct: Number(faultCaseDodPct.toFixed(2)),
    maxAllowedDodPct: Number(maxAllowedDodPct.toFixed(2)),
    dodMarginPct: Number((maxAllowedDodPct - nominalDodPct).toFixed(2)),
    dischargeCurrentA: Number(dischargeCurrentA.toFixed(2)),
    dischargeCRate: Number(dischargeCRate.toFixed(3)),
    chargeCurrentA: Number(chargeCurrentA.toFixed(2)),
    chargeCRate: Number(chargeCRate.toFixed(3)),
    dodCompliant: nominalDodPct <= maxAllowedDodPct
  };
}

/**
 * Evaluates Latching Current Limiter (LCL / RLCL / FCL) channels per ECSS-E-ST-20-20C Clause 5.4.
 */
export function evaluateLCLProtectionDistribution(config) {
  const busV = Number(config.busVoltageV);
  const maxAllowedDropV = busV * 0.01; // ECSS-E-ST-20-20C Clause 5.4.5.1: <= 1% nominal bus voltage drop
  const zSource = Number(config.sourceImpedanceOhm || 0.035);
  const zLoad = Number(config.loadFilterInputImpedanceOhm || 0.110);

  // Impedance stability margin in dB: 20 * log10(Z_load / Z_source) >= 5.0 dB
  const impedanceMarginDb = 20.0 * Math.log10(Math.max(1e-6, zLoad) / Math.max(1e-6, zSource));

  const channels = (config.lclChannels || []).map((ch) => {
    const rdsOhm = Number(ch.rdsOnMohm) / 1000.0;
    const iNom = Number(ch.nominalCurrentA);
    const iAct = Number(ch.actualCurrentA);
    const iLim = Number(ch.tripLimitA);
    const tTripMs = Number(ch.tripTimeMs);
    const cLoadUf = Number(ch.loadCapacitanceUf || 220);

    // Voltage drop at nominal current
    const dropV = iNom * rdsOhm;
    const dropPct = (dropV / busV) * 100.0;
    const dropCompliant = dropPct <= 1.0;

    // Capacitive inrush charge time during soft-start current limiting: t_inrush = (C * V_bus) / I_lim
    const inrushChargeTimeMs = ((cLoadUf * 1e-6 * busV) / Math.max(0.1, iLim)) * 1000.0;
    // Trip time must exceed capacitive inrush time by at least 1.5x to prevent nuisance tripping on turn-on
    const inrushSafe = tTripMs >= inrushChargeTimeMs * 1.5;

    // Determine LCL state
    let state = "CLOSED_NOMINAL";
    if (iAct > iLim) {
      state = ch.classType === "FCL" ? "CURRENT_FOLDBACK_ACTIVE" : "LATCHED_TRIPPED_OFF";
    } else if (iAct > iNom * 1.15) {
      state = "OVERLOAD_WARNING";
    }

    // Peak power dissipation during active current limiting before trip-off (V_bus * I_lim)
    const faultClampEnergyJoules = busV * iLim * (tTripMs / 1000.0);

    return {
      id: ch.id,
      subsystem: ch.subsystem,
      classType: ch.classType,
      critical: Boolean(ch.critical),
      nominalCurrentA: Number(iNom.toFixed(2)),
      actualCurrentA: Number(iAct.toFixed(2)),
      tripLimitA: Number(iLim.toFixed(2)),
      rdsOnMohm: Number(ch.rdsOnMohm),
      voltageDropV: Number(dropV.toFixed(4)),
      voltageDropPct: Number(dropPct.toFixed(3)),
      dropCompliant,
      tripTimeMs: Number(tTripMs.toFixed(2)),
      inrushChargeTimeMs: Number(inrushChargeTimeMs.toFixed(2)),
      inrushSafe,
      faultClampEnergyJoules: Number(faultClampEnergyJoules.toFixed(2)),
      state
    };
  });

  const totalNominalCurrentA = channels.reduce((acc, c) => acc + c.nominalCurrentA, 0);
  const totalActualCurrentA = channels.reduce((acc, c) => acc + c.actualCurrentA, 0);
  const allDropsCompliant = channels.every((c) => c.dropCompliant);
  const allInrushSafe = channels.every((c) => c.inrushSafe);
  const trippedCount = channels.filter((c) => c.state === "LATCHED_TRIPPED_OFF").length;

  return {
    busVoltageV: busV,
    maxAllowedDropV: Number(maxAllowedDropV.toFixed(3)),
    sourceImpedanceOhm: Number(zSource.toFixed(4)),
    loadFilterInputImpedanceOhm: Number(zLoad.toFixed(4)),
    impedanceMarginDb: Number(impedanceMarginDb.toFixed(2)),
    impedanceCompliant: impedanceMarginDb >= 5.0,
    totalNominalCurrentA: Number(totalNominalCurrentA.toFixed(2)),
    totalActualCurrentA: Number(totalActualCurrentA.toFixed(2)),
    allDropsCompliant,
    allInrushSafe,
    trippedCount,
    channels
  };
}

/**
 * Generates full 24-point orbital telemetry profile (Solar Array Power, Load Power, Battery SoC, Main Bus V).
 */
export function simulateOrbitalPowerProfile(config, energyBalance, pva, battery) {
  const points = [];
  const steps = 24;
  const tOrb = energyBalance.orbitPeriodMin;
  const tSun = energyBalance.sunlightDurationMin;
  const busV = Number(config.busVoltageV);

  let currentSocPct = 100.0;
  const dtHr = (tOrb / steps) / 60.0;

  for (let i = 0; i <= steps; i++) {
    const tMin = (i / steps) * tOrb;
    const inSunlight = tMin <= tSun;
    const phaseLabel = inSunlight ? "SUNLIGHT" : "ECLIPSE";

    const saPowerW = inSunlight ? pva.installedActiveEolPowerW : 0.0;
    const loadPowerW = inSunlight ? Number(config.daylightLoadW) : Number(config.eclipseLoadW);

    let netBatteryPowerW = 0.0;
    if (inSunlight) {
      const surplusW = Math.max(0, saPowerW * Number(config.daylightPathEff) - loadPowerW);
      netBatteryPowerW = Math.min(surplusW, (battery.eclipseRechargeEnergyWh / (tSun / 60.0)));
      const dSoc = ((netBatteryPowerW * dtHr) / battery.nominalEnergyWh) * 100.0;
      currentSocPct = Math.min(100.0, currentSocPct + dSoc);
    } else {
      netBatteryPowerW = -(loadPowerW / 0.96);
      const dSoc = ((Math.abs(netBatteryPowerW) * dtHr) / battery.nominalEnergyWh) * 100.0;
      currentSocPct = Math.max(0.0, currentSocPct - dSoc);
    }

    const busVoltageRippleV = inSunlight ? busV * 1.002 : busV * 0.996;
    points.push({
      step: i,
      timeMin: Number(tMin.toFixed(1)),
      phase: phaseLabel,
      saPowerW: Number(saPowerW.toFixed(1)),
      loadPowerW: Number(loadPowerW.toFixed(1)),
      netBatteryPowerW: Number(netBatteryPowerW.toFixed(1)),
      batterySocPct: Number(currentSocPct.toFixed(2)),
      busVoltageV: Number(busVoltageRippleV.toFixed(3))
    });
  }
  return points;
}

/**
 * Master analysis pipeline combining all ECSS-E-ST-20C / 20-20C / 20-08C subsystems.
 */
export function runCompleteEPSSynthesis(config) {
  const energyBalance = solveOrbitalEnergyBalance(config);
  const pva = sizeSolarArrayPVA(config, energyBalance);
  const battery = analyzeBatterySubsystem(config, energyBalance);
  const lcl = evaluateLCLProtectionDistribution(config);
  const profile = simulateOrbitalPowerProfile(config, energyBalance, pva, battery);

  const busSpec = ECSS_EPS_CONSTANTS.BUS_STANDARDS[Number(config.busVoltageV)];
  const peakPowerKW = Math.max(Number(config.daylightLoadW), pva.installedBolPowerW) / 1000.0;
  const busPowerBandCompliant = peakPowerKW <= busSpec.maxPowerKW * 1.25;

  return {
    timestampIso: "2026-10-21T08:30:00Z",
    config,
    busSpec: {
      ...busSpec,
      peakPowerKW: Number(peakPowerKW.toFixed(3)),
      busPowerBandCompliant
    },
    energyBalance,
    pva,
    battery,
    lcl,
    profile
  };
}

/**
 * Exports ECSS-E-ST-20C Spacecraft Electrical Power System Manifest XML.
 */
export function exportECSSPowerManifestXML(synthesis, auditReport) {
  const { config, energyBalance, pva, battery, lcl } = synthesis;
  const lclXml = lcl.channels
    .map(
      (c) =>
        `    <LCLChannel id="${c.id}" class="${c.classType}" subsystem="${c.subsystem}" nominalCurrentA="${c.nominalCurrentA}" tripLimitA="${c.tripLimitA}" dropPct="${c.voltageDropPct}" tripTimeMs="${c.tripTimeMs}" inrushTimeMs="${c.inrushChargeTimeMs}" state="${c.state}" />`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<ECSS_EPS_SystemManifest standard="ECSS-E-ST-20C-Rev.2" lclStandard="ECSS-E-ST-20-20C" version="1.0.0">
  <MissionHeader name="${config.name}" orbitRegime="${config.orbitRegime}" busVoltageV="${config.busVoltageV}" missionLifeYears="${config.missionLifeYears}" />
  <OrbitalEnergyBalance periodMin="${energyBalance.orbitPeriodMin}" sunlightMin="${energyBalance.sunlightDurationMin}" eclipseMin="${energyBalance.eclipseDurationMin}" requiredSaPowerW="${energyBalance.requiredSolarArrayPowerW}" eolMarginPct="${pva.eolEnergyMarginPct}" />
  <PhotovoltaicAssembly cellsSeriesNs="${pva.cellsInSeriesNs}" activeStringsNp="${pva.activeStringsNp}" redundantStrings="${pva.redundantStrings}" totalAreaM2="${pva.totalArrayAreaM2}" bolPowerW="${pva.installedBolPowerW}" eolActivePowerW="${pva.installedActiveEolPowerW}" />
  <LithiumIonBattery seriesCells="${battery.seriesCellsNs}" parallelStrings="${battery.parallelStrings}" nominalEnergyWh="${battery.nominalEnergyWh}" nominalDodPct="${battery.nominalDodPct}" faultDodPct="${battery.faultCaseDodPct}" maxAllowedDodPct="${battery.maxAllowedDodPct}" />
  <PDUProtectionDistribution impedanceMarginDb="${lcl.impedanceMarginDb}" allDropsWithin1Pct="${lcl.allDropsCompliant}">
${lclXml}
  </PDUProtectionDistribution>
  <NormativeAudit passCount="${auditReport.passCount}" totalChecks="${auditReport.totalChecks}" certified="${auditReport.certified}" />
</ECSS_EPS_SystemManifest>`;
}
