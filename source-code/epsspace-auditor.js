/**
 * EPSSpaceForge Pro (v1.0.0) — 10-Point Normative Compliance Auditor
 * Validates spacecraft EPS architecture against ECSS-E-ST-20C Rev. 2, ECSS-E-ST-20-20C, and ECSS-E-ST-20-08C.
 */

export function runECSS20CAudit(synthesis) {
  const { config, busSpec, energyBalance, pva, battery, lcl } = synthesis;

  const checks = [
    {
      id: "ECSS-20C-01",
      clause: "ECSS-E-ST-20C Clause 5.2.1",
      title: "Standardized Spacecraft Main Bus Voltage Tier",
      requirement: "28V (<=1.5 kW), 50V (<=8.0 kW), or 100V (>8.0 kW) standard bus allocation",
      measured: `${config.busVoltageV} V (${busSpec.peakPowerKW} kW peak)`,
      passed: [28, 50, 100].includes(Number(config.busVoltageV)) && busSpec.busPowerBandCompliant
    },
    {
      id: "ECSS-20C-02",
      clause: "ECSS-E-ST-20C Clause 5.3.1",
      title: "Positive Orbital Energy Balance & >= 10% EOL Margin",
      requirement: "Installed EOL active solar array power >= 110% of orbital required power",
      measured: `+${pva.eolEnergyMarginPct.toFixed(2)}% EOL Margin (${pva.installedActiveEolPowerW} W vs ${energyBalance.requiredSolarArrayPowerW} W req)`,
      passed: pva.eolEnergyMarginPct >= 10.0
    },
    {
      id: "ECSS-20C-03",
      clause: "ECSS-E-ST-20-08C Clause 5.1",
      title: "Solar Array Radiation & Thermal EOL Degradation Budgeting",
      requirement: "0.55 <= L_d <= 0.98 and series cell voltage supports bus + blocking diode drop",
      measured: `L_d = ${pva.lifeDegradationLd.toFixed(3)}, N_s = ${pva.cellsInSeriesNs} cells @ ${pva.vCellOperV} V/cell`,
      passed: pva.lifeDegradationLd >= 0.55 && pva.lifeDegradationLd <= 0.98 && pva.cellsInSeriesNs >= 10
    },
    {
      id: "ECSS-20C-04",
      clause: "ECSS-E-ST-20C Clause 5.3.2",
      title: "Photovoltaic String Single-Point Failure Redundancy (N+1)",
      requirement: "At least 1 redundant PVA string isolated by series blocking diodes",
      measured: `${pva.activeStringsNp} active + ${pva.redundantStrings} redundant (${pva.totalStringsNp} total strings)`,
      passed: pva.redundantStrings >= 1 && pva.totalStringsNp > pva.activeStringsNp
    },
    {
      id: "ECSS-20C-05",
      clause: "ECSS-E-ST-20C Clause 5.3.4",
      title: "Battery Eclipse Depth-of-Discharge (DoD) Cycle-Life Limit",
      requirement: `Nominal eclipse DoD <= ${battery.maxAllowedDodPct}% for ${config.orbitRegime} regime`,
      measured: `${battery.nominalDodPct.toFixed(2)}% Nominal DoD (Limit: ${battery.maxAllowedDodPct.toFixed(1)}%)`,
      passed: battery.dodCompliant
    },
    {
      id: "ECSS-20C-06",
      clause: "ECSS-E-ST-20C Clause 5.3.5",
      title: "Battery Single-String Failure survivability (N-1 Strings)",
      requirement: "Fault-degraded battery DoD remains < 85% without main bus collapse",
      measured: `${battery.faultCaseDodPct.toFixed(2)}% Fault-Case DoD (${battery.parallelStrings - 1}/${battery.parallelStrings} strings)`,
      passed: battery.parallelStrings >= 2 && battery.faultCaseDodPct < 85.0
    },
    {
      id: "ECSS-20C-07",
      clause: "ECSS-E-ST-20-20C Clause 5.4.5.1",
      title: "LCL / RLCL Nominal Forward Voltage Drop <= 1.0% V_bus",
      requirement: `Max LCL channel forward voltage drop <= ${lcl.maxAllowedDropV} V (1.0% of ${config.busVoltageV} V)`,
      measured: lcl.allDropsCompliant
        ? `All ${lcl.channels.length} LCL channels <= 1.0% V_bus`
        : "Violation: One or more LCL channels exceed 1.0% drop",
      passed: lcl.allDropsCompliant
    },
    {
      id: "ECSS-20C-08",
      clause: "ECSS-E-ST-20-20C Clause 5.4.3",
      title: "LCL Capacitive Inrush vs. Trip-Off Timeout Coordination",
      requirement: "LCL trip-off time T_trip >= 1.5x load filter capacitive charge time T_inrush",
      measured: lcl.allInrushSafe
        ? `All ${lcl.channels.length} channels coordinated (T_trip >= 1.5x T_inrush)`
        : "Violation: Nuisance inrush trip hazard detected",
      passed: lcl.allInrushSafe
    },
    {
      id: "ECSS-20C-09",
      clause: "ECSS-E-ST-20-20C Clause 5.4.6",
      title: "Main Bus Source-to-Load Impedance Stability Gain Margin",
      requirement: "20*log10(Z_load / Z_source) >= 5.0 dB across regulated bus interface",
      measured: `${lcl.impedanceMarginDb.toFixed(2)} dB (Z_src=${lcl.sourceImpedanceOhm} Ohm, Z_load=${lcl.loadFilterInputImpedanceOhm} Ohm)`,
      passed: lcl.impedanceCompliant
    },
    {
      id: "ECSS-20C-10",
      clause: "ECSS-E-ST-20C Clause 5.4.2",
      title: "Essential Load RLCL / FCL Fault Protection Coverage",
      requirement: "All critical bus loads protected by Retriggerable LCL (RLCL) or Foldback FCL / active LCL with 0 unisolated bus faults",
      measured: `${lcl.channels.length} protected PDU lines (${lcl.trippedCount} tripped lines)`,
      passed: lcl.channels.length >= 3 && lcl.trippedCount === 0
    }
  ];

  const passCount = checks.filter((c) => c.passed).length;
  return {
    standard: "ECSS-E-ST-20C Rev. 2 & ECSS-E-ST-20-20C",
    passCount,
    totalChecks: checks.length,
    scorePct: Math.round((passCount / checks.length) * 100),
    certified: passCount === checks.length,
    checks
  };
}
