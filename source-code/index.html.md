\<\!DOCTYPE html\>  
\<html lang="en" class="dark"\>  
\<head\>  
  \<meta charset="UTF-8" /\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0" /\>  
  \<title\>EPSSpaceForge Pro v1.0.0 — ECSS-E-ST-20C Spacecraft Electrical Power System \&amp; LCL Studio\</title\>  
  \<script src="https\://cdn.tailwindcss.com/3.4.17" async\>\</script\>  
  \<link rel="preconnect" href="https\://fonts.googleapis.com" /\>  
  \<link rel="preconnect" href="https\://fonts.gstatic.com" crossorigin /\>  
  \<link href="https\://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\&family=JetBrains+Mono:wght@400;500;600;700\&display=swap" rel="stylesheet" /\>  
  \<style\>  
    /\* Air-Gapped / Offline Cleanroom Utility Fallback CSS \*/  
    \*, \*::before, \*::after { box-sizing: border-box; }  
    body { margin: 0; font-family: 'Inter', system-ui, \-apple-system, sans-serif; background-color: \#060b16; color: \#e2e8f0; }  
    header { background: rgba(2, 6, 23, 0.94); border-bottom: 1px solid \#1e293b; padding: 12px 24px; }  
    main { max-width: 1280px; margin: 0 auto; padding: 20px 24px; }  
    .max-w-7xl { max-width: 1280px; margin: 0 auto; }  
    .flex { display: flex; }  
    .flex-wrap { flex-wrap: wrap; }  
    .items-center { align-items: center; }  
    .justify-between { justify-content: space-between; }  
    .gap-2 { gap: 8px; }  
    .gap-3 { gap: 12px; }  
    .gap-4 { gap: 16px; }  
    .gap-6 { gap: 24px; }  
    .grid { display: grid; }  
    .lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }  
    .lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }  
    .lg\\:col-span-4 { grid-column: span 4 / span 4; }  
    .lg\\:col-span-8 { grid-column: span 8 / span 8; }  
    .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }  
    .space-y-6 \> \* \+ \* { margin-top: 20px; }  
    .space-y-4 \> \* \+ \* { margin-top: 14px; }  
    .space-y-3 \> \* \+ \* { margin-top: 10px; }  
    .space-y-1\\.5 \> \* \+ \* { margin-top: 6px; }  
    .rounded-xl { border-radius: 12px; }  
    .rounded-lg { border-radius: 8px; }  
    .rounded { border-radius: 5px; }  
    .p-3 { padding: 12px; }  
    .p-4 { padding: 16px; }  
    .p-5 { padding: 20px; }  
    .px-3 { padding-left: 12px; padding-right: 12px; }  
    .py-2 { padding-top: 8px; padding-bottom: 8px; }  
    .py-2\\.5 { padding-top: 9px; padding-bottom: 9px; }  
    .mt-1 { margin-top: 4px; }  
    .mt-4 { margin-top: 16px; }  
    .mb-1 { margin-bottom: 4px; }  
    .mb-4 { margin-bottom: 16px; }  
    .pb-3 { padding-bottom: 12px; }  
    .w-full { width: 100%; }  
    .h-60 { height: 240px; }  
    .text-xs { font-size: 12px; line-height: 1.4; }  
    .text-sm { font-size: 14px; line-height: 1.4; }  
    .text-lg { font-size: 18px; line-height: 1.3; }  
    .text-xl { font-size: 21px; line-height: 1.25; }  
    .font-bold { font-weight: 700; }  
    .font-semibold { font-weight: 600; }  
    .uppercase { text-transform: uppercase; }  
    .text-right { text-align: right; }  
    .text-left { text-align: left; }  
    .text-white { color: \#ffffff; }  
    .text-slate-100 { color: \#f1f5f9; }  
    .text-slate-200 { color: \#e2e8f0; }  
    .text-slate-300 { color: \#cbd5e1; }  
    .text-slate-400 { color: \#94a3b8; }  
    .text-sky-300 { color: \#7dd3fc; }  
    .text-sky-400 { color: \#38bdf8; }  
    .text-emerald-300 { color: \#6ee7b7; }  
    .text-emerald-400 { color: \#34d399; }  
    .text-amber-300 { color: \#fcd34d; }  
    .text-amber-400 { color: \#fbbf24; }  
    .text-rose-300 { color: \#fda4af; }  
    .text-rose-400 { color: \#fb7185; }  
    .bg-slate-900 { background-color: \#0f172a; }  
    .bg-slate-900\\/70 { background-color: rgba(15, 23, 42, 0.75); }  
    .bg-slate-950\\/90 { background-color: rgba(2, 6, 23, 0.9); }  
    .bg-slate-800 { background-color: \#1e293b; }  
    .bg-sky-500 { background-color: \#0ea5e9; color: \#020617; }  
    .bg-sky-500\\/15 { background-color: rgba(14, 165, 233, 0.16); }  
    .bg-emerald-500\\/15 { background-color: rgba(16, 185, 129, 0.16); }  
    .bg-amber-500\\/15 { background-color: rgba(245, 158, 11, 0.16); }  
    .bg-rose-500\\/20 { background-color: rgba(244, 63, 94, 0.22); }  
    .border { border: 1px solid \#334155; }  
    .border-b { border-bottom: 1px solid \#1e293b; }  
    .border-slate-700 { border-color: \#334155; }  
    .border-slate-800 { border-color: \#1e293b; }  
    .hidden { display: none \!important; }  
    table { width: 100%; border-collapse: collapse; }  
    th, td { border-bottom: 1px solid rgba(30, 41, 59, 0.75); }  
    select, button, input\[type="range"\] { cursor: pointer; }

    body {  
      font-family: 'Inter', system-ui, \-apple-system, sans-serif;  
      background-color: \#060b16;  
      color: \#e2e8f0;  
    }  
    .mono {  
      font-family: 'JetBrains Mono', monospace;  
    }  
    .cockpit-card {  
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.92) 0%, rgba(9, 14, 28, 0.96) 100%);  
      border: 1px solid rgba(56, 189, 248, 0.18);  
      box-shadow: 0 10px 30px \-10px rgba(0, 0, 0, 0.65);  
    }  
    .status-pill {  
      transition: all 0.2s ease;  
    }  
  \</style\>  
\</head\>  
\<body class="min-h-screen antialiased selection:bg-sky-500 selection:text-slate-950"\>  
  \<\!-- Top Avionics Header \--\>  
  \<header class="border-b border-slate-800/90 bg-slate-950/90 backdrop-blur sticky top-0 z-30"\>  
    \<div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3"\>  
      \<div class="flex items-center gap-3"\>  
        \<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 font-bold text-slate-950 mono text-sm"\>  
          EPS  
        \</div\>  
        \<div\>  
          \<div class="flex items-center gap-2 flex-wrap"\>  
            \<h1 class="text-base sm:text-lg font-bold tracking-tight text-white"\>EPSSpaceForge Pro\</h1\>  
            \<span class="text-xs mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-400/30"\>v1.0.0\</span\>  
            \<span class="text-xs mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"\>ECSS-E-ST-20C Rev.2 \&amp; 20-20C\</span\>  
          \</div\>  
          \<p class="text-xs text-slate-400"\>Spacecraft Electrical Power System, Solar Array BOL/EOL Sizing, Li-Ion DoD \&amp; LCL Protection Studio\</p\>  
        \</div\>  
      \</div\>

      \<div class="flex items-center gap-2 flex-wrap"\>  
        \<label for="presetSelect" class="text-xs text-slate-400 mono"\>MISSION PROFILE:\</label\>  
        \<select id="presetSelect" class="bg-slate-900 border border-slate-700 text-slate-100 text-xs rounded-lg px-3 py-2 mono focus:outline-none focus:border-sky-400"\>  
          \<option value="leo\_eo\_smallsat"\>LEO Earth Observation SmallSat (28V / 600 km SSO)\</option\>  
          \<option value="meo\_gnss\_nav"\>MEO Navigation Constellation Bus (50V / 20,200 km)\</option\>  
          \<option value="geo\_hts\_telecom"\>GEO High-Throughput Telecom Bus (100V / 35,786 km)\</option\>  
        \</select\>  
        \<button id="injectFaultBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/30 transition"\>  
          Inject LCL-03 Overcurrent  
        \</button\>  
        \<button id="resetFaultBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"\>  
          Reset Bus  
        \</button\>  
        \<button id="exportXmlBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition"\>  
          Export ECSS XML  
        \</button\>  
      \</div\>  
    \</div\>  
  \</header\>

  \<main class="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6"\>  
    \<\!-- Toast Notification Banner \--\>  
    \<div id="statusToast" class="hidden rounded-lg px-4 py-2.5 text-xs mono border bg-sky-950/80 border-sky-500/40 text-sky-200 flex items-center justify-between"\>  
      \<span id="statusToastText"\>System nominal.\</span\>  
      \<button id="closeToastBtn" type="button" class="text-slate-400 hover:text-white ml-4"\>DISMISS\</button\>  
    \</div\>

    \<\!-- Top KPI Telemetry Ribbon \--\>  
    \<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Main Bus \&amp; Margin\</div\>  
        \<div id="kpiBusVoltage" class="text-xl font-bold text-sky-400 mono mt-1"\>28.0 V\</div\>  
        \<div id="kpiEnergyMargin" class="text-xs text-emerald-400 mono mt-1"\>+14.2% EOL Energy Margin\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Solar Array (PVA) EOL\</div\>  
        \<div id="kpiPvaPower" class="text-xl font-bold text-white mono mt-1"\>815.4 W\</div\>  
        \<div id="kpiPvaConfig" class="text-xs text-slate-300 mono mt-1"\>15s × 9p (2.04 m²)\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Li-Ion Eclipse DoD\</div\>  
        \<div id="kpiBatteryDod" class="text-xl font-bold text-emerald-400 mono mt-1"\>22.48%\</div\>  
        \<div id="kpiBatteryFaultDod" class="text-xs text-slate-300 mono mt-1"\>N-1 Fault DoD: 33.72%\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>LCL Protection Bus\</div\>  
        \<div id="kpiLclStatus" class="text-xl font-bold text-emerald-400 mono mt-1"\>5/5 CLOSED\</div\>  
        \<div id="kpiImpedanceMargin" class="text-xs text-slate-300 mono mt-1"\>Impedance Margin: 8.52 dB\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>ECSS-E-ST-20C Audit\</div\>  
        \<div id="kpiAuditScore" class="text-xl font-bold text-emerald-400 mono mt-1"\>10 / 10 PASS\</div\>  
        \<div id="kpiAuditBadge" class="text-xs text-emerald-300 mono mt-1"\>ECSS-E-ST-20C CERTIFIED\</div\>  
      \</div\>  
    \</section\>

    \<\!-- Main Workbench Grid: Left Controls \+ Right Orbital Chart & PVA/Battery Synthesis \--\>  
    \<div class="grid grid-cols-1 lg:grid-cols-12 gap-6"\>  
      \<\!-- Parametric Engineering Controls \--\>  
      \<section class="lg:col-span-4 cockpit-card rounded-xl p-5 space-y-4"\>  
        \<div class="flex items-center justify-between border-b border-slate-800 pb-3"\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>1. Orbital \&amp; Bus Parameters\</h2\>  
          \<span class="text-xs mono text-sky-400"\>Clause 5.2 / 5.3\</span\>  
        \</div\>

        \<div class="space-y-3 text-xs"\>  
          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="busVoltageInput" class="text-slate-300"\>Main Regulated Bus Tier (V)\</label\>  
              \<span id="busVoltageVal" class="mono text-sky-300"\>28 V\</span\>  
            \</div\>  
            \<select id="busVoltageInput" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 mono text-slate-100"\>  
              \<option value="28"\>28 V Standard (≤ 1.5 kW)\</option\>  
              \<option value="50"\>50 V Medium/High (≤ 8.0 kW)\</option\>  
              \<option value="100"\>100 V High Power (\&gt; 8.0 kW)\</option\>  
            \</select\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="orbitPeriodInput" class="text-slate-300"\>Orbit Period T\_orb (min)\</label\>  
              \<span id="orbitPeriodVal" class="mono text-sky-300"\>96.7 min\</span\>  
            \</div\>  
            \<input id="orbitPeriodInput" type="range" min="90" max="1440" step="0.5" value="96.7" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="eclipseMinInput" class="text-slate-300"\>Eclipse Duration T\_ecl (min)\</label\>  
              \<span id="eclipseMinVal" class="mono text-sky-300"\>34.8 min\</span\>  
            \</div\>  
            \<input id="eclipseMinInput" type="range" min="5" max="90" step="0.2" value="34.8" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="dayLoadInput" class="text-slate-300"\>Daylight Bus Load P\_day (W)\</label\>  
              \<span id="dayLoadVal" class="mono text-sky-300"\>420 W\</span\>  
            \</div\>  
            \<input id="dayLoadInput" type="range" min="100" max="14000" step="10" value="420" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="eclipseLoadInput" class="text-slate-300"\>Eclipse Bus Load P\_ecl (W)\</label\>  
              \<span id="eclipseLoadVal" class="mono text-sky-300"\>290 W\</span\>  
            \</div\>  
            \<input id="eclipseLoadInput" type="range" min="80" max="12000" step="10" value="290" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="lifeYearsInput" class="text-slate-300"\>Mission Design Life (Years)\</label\>  
              \<span id="lifeYearsVal" class="mono text-sky-300"\>5.0 yr\</span\>  
            \</div\>  
            \<input id="lifeYearsInput" type="range" min="1" max="18" step="0.5" value="5.0" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="sunAngleInput" class="text-slate-300"\>Sun Incidence Angle θ (deg)\</label\>  
              \<span id="sunAngleVal" class="mono text-sky-300"\>18.0°\</span\>  
            \</div\>  
            \<input id="sunAngleInput" type="range" min="0" max="45" step="0.5" value="18.0" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="arrayTempInput" class="text-slate-300"\>Solar Array Operating Temp (°C)\</label\>  
              \<span id="arrayTempVal" class="mono text-sky-300"\>62.0 °C\</span\>  
            \</div\>  
            \<input id="arrayTempInput" type="range" min="10" max="95" step="1" value="62" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="batteryWhInput" class="text-slate-300"\>Li-Ion Nameplate Capacity (Wh)\</label\>  
              \<span id="batteryWhVal" class="mono text-sky-300"\>780 Wh\</span\>  
            \</div\>  
            \<input id="batteryWhInput" type="range" min="250" max="24000" step="20" value="780" class="w-full accent-sky-400" /\>  
          \</div\>  
        \</div\>  
      \</section\>

      \<\!-- Orbital Energy Balance & Real-Time Vector Telemetry Plot \--\>  
      \<section class="lg:col-span-8 space-y-6"\>  
        \<div class="cockpit-card rounded-xl p-5"\>  
          \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
            \<div\>  
              \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>2. Orbital Sunlight/Eclipse Power \&amp; Battery SoC Profile\</h2\>  
              \<p class="text-xs text-slate-400"\>24-step orbital integration across sunlit generation, S3R/MPPT recharge, and eclipse discharge arc\</p\>  
            \</div\>  
            \<div class="flex items-center gap-4 text-xs mono"\>  
              \<span class="flex items-center gap-1.5 text-sky-400"\>\<span class="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"\>\</span\>SA EOL Power (W)\</span\>  
              \<span class="flex items-center gap-1.5 text-amber-400"\>\<span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"\>\</span\>Bus Load (W)\</span\>  
              \<span class="flex items-center gap-1.5 text-emerald-400"\>\<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"\>\</span\>Battery SoC (%)\</span\>  
            \</div\>  
          \</div\>

          \<div class="w-full overflow-hidden rounded-lg bg-slate-950/90 border border-slate-800/80 p-3"\>  
            \<svg id="orbitalTelemetrySvg" viewBox="0 0 760 250" class="w-full h-60"\>\</svg\>  
          \</div\>

          \<\!-- Detailed Energy Balance & PVA / Battery Breakdown Cards \--\>  
          \<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs mono"\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>ORBITAL ENERGY BUDGET\</div\>  
              \<div class="flex justify-between"\>\<span\>Sunlight / Eclipse:\</span\>\<span id="detailSunEcl" class="text-white"\>61.9m / 34.8m\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Daylight Energy:\</span\>\<span id="detailDayWh" class="text-white"\>470.9 Wh\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Eclipse Recharge:\</span\>\<span id="detailEclWh" class="text-white"\>195.6 Wh\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Min SA Power Req:\</span\>\<span id="detailSaReqW" class="text-sky-300"\>646.0 W\</span\>\</div\>  
            \</div\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>PVA SOLAR ARRAY (ECSS-20-08C)\</div\>  
              \<div class="flex justify-between"\>\<span\>BOL / EOL Flux:\</span\>\<span id="detailPvaFlux" class="text-white"\>294 / 235 W/m²\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Life Degradation L\_d:\</span\>\<span id="detailPvaLd" class="text-white"\>0.799\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Cell String Matrix:\</span\>\<span id="detailPvaMatrix" class="text-sky-300"\>15s × (8+1)p\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Total Installed BOL:\</span\>\<span id="detailPvaBolW" class="text-emerald-300"\>1082.0 W\</span\>\</div\>  
            \</div\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>LI-ION BATTERY PACK\</div\>  
              \<div class="flex justify-between"\>\<span\>Pack Topology:\</span\>\<span id="detailBattTopo" class="text-white"\>8s × 3p (27.9 Ah)\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Eclipse Extracted:\</span\>\<span id="detailBattExtWh" class="text-white"\>175.2 Wh\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Discharge C-Rate:\</span\>\<span id="detailBattCRate" class="text-sky-300"\>0.387 C\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>DoD Margin to Limit:\</span\>\<span id="detailBattMargin" class="text-emerald-300"\>+7.52%\</span\>\</div\>  
            \</div\>  
          \</div\>  
        \</div\>  
      \</section\>  
    \</div\>

    \<\!-- Section 3: ECSS-E-ST-20-20C Latching Current Limiter (LCL / RLCL / FCL) Protection Matrix \--\>  
    \<section class="cockpit-card rounded-xl p-5"\>  
      \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
        \<div\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>3. ECSS-E-ST-20-20C Latching Current Limiter (LCL / RLCL / FCL) PDU Matrix\</h2\>  
          \<p class="text-xs text-slate-400"\>Solid-state switch forward drop (\&le; 1.0% V\_bus), capacitive inrush coordination (T\_trip \&ge; 1.5\&times; T\_inrush), and interactive fault trip isolation\</p\>  
        \</div\>  
        \<span id="lclSummaryBadge" class="text-xs mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"\>  
          ALL PDU CHANNELS NOMINAL  
        \</span\>  
      \</div\>

      \<div class="overflow-x-auto"\>  
        \<table class="w-full text-left border-collapse text-xs mono"\>  
          \<thead\>  
            \<tr class="border-b border-slate-800 text-slate-400 uppercase"\>  
              \<th class="py-2.5 px-3"\>Channel\</th\>  
              \<th class="py-2.5 px-3"\>Subsystem Load\</th\>  
              \<th class="py-2.5 px-3"\>Class\</th\>  
              \<th class="py-2.5 px-3 text-right"\>I\_nom (A)\</th\>  
              \<th class="py-2.5 px-3 text-right"\>I\_actual (A)\</th\>  
              \<th class="py-2.5 px-3 text-right"\>I\_trip (A)\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Drop (% V\_bus)\</th\>  
              \<th class="py-2.5 px-3 text-right"\>T\_inrush / T\_trip (ms)\</th\>  
              \<th class="py-2.5 px-3"\>Protection State\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Action\</th\>  
            \</tr\>  
          \</thead\>  
          \<tbody id="lclTableBody" class="divide-y divide-slate-800/70"\>\</tbody\>  
        \</table\>  
      \</div\>  
    \</section\>

    \<\!-- Section 4: 10-Point Normative ECSS-E-ST-20C & ECSS-E-ST-20-20C Compliance Verification Matrix \--\>  
    \<section class="cockpit-card rounded-xl p-5"\>  
      \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
        \<div\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>4. 10-Point ECSS-E-ST-20C Rev. 2 \&amp; ECSS-E-ST-20-20C Normative Compliance Auditor\</h2\>  
          \<p class="text-xs text-slate-400"\>Automated verification across orbital energy balance, PVA EOL radiation sizing, Li-Ion DoD, LCL voltage drop, and bus impedance stability\</p\>  
        \</div\>  
        \<span id="auditHeaderBadge" class="text-xs mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"\>  
          10 / 10 RULES VERIFIED (100%)  
        \</span\>  
      \</div\>

      \<div class="overflow-x-auto"\>  
        \<table class="w-full text-left border-collapse text-xs mono"\>  
          \<thead\>  
            \<tr class="border-b border-slate-800 text-slate-400 uppercase"\>  
              \<th class="py-2.5 px-3"\>Rule ID\</th\>  
              \<th class="py-2.5 px-3"\>ECSS Clause\</th\>  
              \<th class="py-2.5 px-3"\>Verification Requirement\</th\>  
              \<th class="py-2.5 px-3"\>Measured Telemetry\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Verdict\</th\>  
            \</tr\>  
          \</thead\>  
          \<tbody id="auditTableBody" class="divide-y divide-slate-800/70"\>\</tbody\>  
        \</table\>  
      \</div\>  
    \</section\>

    \<\!-- XML Manifest Modal / Drawer \--\>  
    \<section id="xmlModal" class="hidden cockpit-card rounded-xl p-5 border border-sky-500/40"\>  
      \<div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-3"\>  
        \<h3 class="text-sm font-semibold text-white mono"\>ECSS-E-ST-20C System Power Manifest (XML Export)\</h3\>  
        \<div class="flex items-center gap-2"\>  
          \<button id="copyXmlBtn" type="button" class="text-xs mono px-3 py-1.5 rounded bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400"\>  
            Copy XML  
          \</button\>  
          \<button id="closeXmlBtn" type="button" class="text-xs mono px-3 py-1.5 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"\>  
            Close  
          \</button\>  
        \</div\>  
      \</div\>  
      \<pre id="xmlOutputPre" class="bg-slate-950 border border-slate-800 rounded-lg p-4 text-xs mono text-sky-300 overflow-x-auto max-h-80"\>\</pre\>  
    \</section\>  
  \</main\>

  \<script\>  
    // Embedded ECSS-E-ST-20C & ECSS-E-ST-20-20C Engine & Auditor for self-contained execution  
    const ECSS\_EPS\_CONSTANTS \= {  
      SOLAR\_CONSTANT\_AM0\_W\_M2: 1361.0,  
      CELL\_NOMINAL\_VOLTAGE\_V: 2.40,  
      CELL\_TEMP\_COEFF\_V\_PER\_C: \-0.0062,  
      CELL\_AREA\_CM2: 30.18,  
      LI\_ION\_NOMINAL\_CELL\_V: 3.65,  
      BUS\_STANDARDS: {  
        28: { minPowerKW: 0.0, maxPowerKW: 1.5, nominalV: 28.0, maxRipplePct: 1.0, label: "28V Regulated Low/Medium Bus (\<= 1.5 kW)" },  
        50: { minPowerKW: 0.5, maxPowerKW: 8.0, nominalV: 50.0, maxRipplePct: 1.0, label: "50V Regulated Telecom/EO Bus (\<= 8.0 kW)" },  
        100: { minPowerKW: 3.0, maxPowerKW: 25.0, nominalV: 100.0, maxRipplePct: 1.0, label: "100V High-Power Regulated Bus (\> 8.0 kW)" }  
      }  
    };

    const MISSION\_PRESETS \= {  
      leo\_eo\_smallsat: {  
        id: "leo\_eo\_smallsat",  
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
        lclChannels: \[  
          { id: "LCL-01", subsystem: "OBC & SpaceWire Router", classType: "RLCL", nominalCurrentA: 1.25, tripLimitA: 2.50, actualCurrentA: 1.18, rdsOnMohm: 65, tripTimeMs: 12.0, loadCapacitanceUf: 220, critical: true },  
          { id: "LCL-02", subsystem: "ADCS Reaction Wheel Assembly", classType: "LCL", nominalCurrentA: 3.20, tripLimitA: 6.00, actualCurrentA: 2.95, rdsOnMohm: 42, tripTimeMs: 18.0, loadCapacitanceUf: 470, critical: true },  
          { id: "LCL-03", subsystem: "Multispectral Optical Payload", classType: "LCL", nominalCurrentA: 5.80, tripLimitA: 9.00, actualCurrentA: 5.40, rdsOnMohm: 28, tripTimeMs: 10.0, loadCapacitanceUf: 680, critical: false },  
          { id: "LCL-04", subsystem: "X-Band High-Rate Downlink", classType: "LCL", nominalCurrentA: 3.80, tripLimitA: 6.50, actualCurrentA: 3.55, rdsOnMohm: 38, tripTimeMs: 8.5, loadCapacitanceUf: 330, critical: false },  
          { id: "LCL-05", subsystem: "Propulsion Valve & Catbed Heater", classType: "FCL", nominalCurrentA: 1.90, tripLimitA: 3.50, actualCurrentA: 1.75, rdsOnMohm: 55, tripTimeMs: 15.0, loadCapacitanceUf: 180, critical: true }  
        \]  
      },  
      meo\_gnss\_nav: {  
        id: "meo\_gnss\_nav",  
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
        lclChannels: \[  
          { id: "LCL-01", subsystem: "Atomic Clock & Nav Baseband", classType: "RLCL", nominalCurrentA: 6.50, tripLimitA: 10.0, actualCurrentA: 6.10, rdsOnMohm: 35, tripTimeMs: 14.0, loadCapacitanceUf: 400, critical: true },  
          { id: "LCL-02", subsystem: "L-Band Navigation TWTA Bank A", classType: "LCL", nominalCurrentA: 18.0, tripLimitA: 26.0, actualCurrentA: 17.2, rdsOnMohm: 15, tripTimeMs: 9.0, loadCapacitanceUf: 820, critical: true },  
          { id: "LCL-03", subsystem: "L-Band Navigation TWTA Bank B", classType: "LCL", nominalCurrentA: 18.0, tripLimitA: 26.0, actualCurrentA: 16.9, rdsOnMohm: 15, tripTimeMs: 9.0, loadCapacitanceUf: 820, critical: true },  
          { id: "LCL-04", subsystem: "AOCS Star Tracker & Gyro Suite", classType: "RLCL", nominalCurrentA: 4.20, tripLimitA: 7.50, actualCurrentA: 3.90, rdsOnMohm: 45, tripTimeMs: 15.0, loadCapacitanceUf: 300, critical: true },  
          { id: "LCL-05", subsystem: "Thermal Survival Heater Bus", classType: "FCL", nominalCurrentA: 5.50, tripLimitA: 9.00, actualCurrentA: 4.85, rdsOnMohm: 38, tripTimeMs: 20.0, loadCapacitanceUf: 250, critical: false }  
        \]  
      },  
      geo\_hts\_telecom: {  
        id: "geo\_hts\_telecom",  
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
        lclChannels: \[  
          { id: "LCL-01", subsystem: "Ka-Band Payload EPC Matrix North", classType: "LCL", nominalCurrentA: 38.0, tripLimitA: 52.0, actualCurrentA: 36.4, rdsOnMohm: 12, tripTimeMs: 7.5, loadCapacitanceUf: 950, critical: false },  
          { id: "LCL-02", subsystem: "Ka-Band Payload EPC Matrix South", classType: "LCL", nominalCurrentA: 38.0, tripLimitA: 52.0, actualCurrentA: 35.8, rdsOnMohm: 12, tripTimeMs: 7.5, loadCapacitanceUf: 950, critical: false },  
          { id: "LCL-03", subsystem: "Electric Orbit Raising Hall Thruster PPU", classType: "LCL", nominalCurrentA: 24.0, tripLimitA: 34.0, actualCurrentA: 22.5, rdsOnMohm: 18, tripTimeMs: 11.0, loadCapacitanceUf: 600, critical: true },  
          { id: "LCL-04", subsystem: "Central Avionics & TT\&C Transponder", classType: "RLCL", nominalCurrentA: 6.80, tripLimitA: 12.0, actualCurrentA: 6.20, rdsOnMohm: 40, tripTimeMs: 16.0, loadCapacitanceUf: 320, critical: true },  
          { id: "LCL-05", subsystem: "Solar Array Drive Mechanism (SADM)", classType: "FCL", nominalCurrentA: 4.50, tripLimitA: 8.00, actualCurrentA: 4.10, rdsOnMohm: 48, tripTimeMs: 18.0, loadCapacitanceUf: 210, critical: true }  
        \]  
      }  
    };

    let currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS.leo\_eo\_smallsat));

    function showToast(msg) {  
      const t \= document.getElementById("statusToast");  
      const txt \= document.getElementById("statusToastText");  
      txt.textContent \= msg;  
      t.classList.remove("hidden");  
    }

    function solveOrbitalEnergyBalance(config) {  
      const tOrbMin \= Number(config.orbitPeriodMin);  
      const tEclMin \= Math.min(tOrbMin \- 5, Number(config.eclipseDurationMin));  
      const tSunMin \= tOrbMin \- tEclMin;  
      const tSunHr \= tSunMin / 60.0;  
      const tEclHr \= tEclMin / 60.0;

      const pDayW \= Number(config.daylightLoadW);  
      const pEclW \= Number(config.eclipseLoadW);  
      const etaDay \= Number(config.daylightPathEff);  
      const etaEcl \= Number(config.eclipsePathEff);

      const eDayWh \= (pDayW \* tSunHr) / etaDay;  
      const eEclBatteryWh \= pEclW \* tEclHr;  
      const eEclRechargeWh \= eEclBatteryWh / etaEcl;  
      const totalOrbitalEnergyRequiredWh \= eDayWh \+ eEclRechargeWh;  
      const pSaRequiredZeroMarginW \= totalOrbitalEnergyRequiredWh / tSunHr;  
      const pSaTargetWithMarginW \= pSaRequiredZeroMarginW \* 1.12;

      return {  
        orbitPeriodMin: Number(tOrbMin.toFixed(2)),  
        sunlightDurationMin: Number(tSunMin.toFixed(2)),  
        eclipseDurationMin: Number(tEclMin.toFixed(2)),  
        daylightEnergyWh: Number(eDayWh.toFixed(2)),  
        eclipseBatteryEnergyWh: Number(eEclBatteryWh.toFixed(2)),  
        eclipseRechargeEnergyWh: Number(eEclRechargeWh.toFixed(2)),  
        totalOrbitalEnergyRequiredWh: Number(totalOrbitalEnergyRequiredWh.toFixed(2)),  
        requiredSolarArrayPowerW: Number(pSaRequiredZeroMarginW.toFixed(2)),  
        targetSolarArrayPowerWithMarginW: Number(pSaTargetWithMarginW.toFixed(2))  
      };  
    }

    function sizeSolarArrayPVA(config, energyBalance) {  
      const s0 \= ECSS\_EPS\_CONSTANTS.SOLAR\_CONSTANT\_AM0\_W\_M2;  
      const etaCell \= Number(config.solarCellEff);  
      const idFactor \= Number(config.inherentDegradationId);  
      const cosTheta \= Math.cos((Number(config.sunIncidenceDeg) \* Math.PI) / 180.0);  
      const annualDeg \= Number(config.annualRadDegradation);  
      const lifeYears \= Number(config.missionLifeYears);  
      const tempC \= Number(config.arrayOperatingTempC);  
      const busV \= Number(config.busVoltageV);

      const p0WPerM2 \= s0 \* etaCell;  
      const pBolWPerM2 \= p0WPerM2 \* idFactor \* cosTheta;  
      const tempDeltaC \= Math.max(0, tempC \- 28.0);  
      const tempPowerFactor \= 1.0 \- 0.0045 \* tempDeltaC;  
      const radSurvivalFactor \= Math.pow(1.0 \- annualDeg, lifeYears);  
      const lifeDegradationLd \= radSurvivalFactor \* tempPowerFactor;  
      const pEolWPerM2 \= pBolWPerM2 \* lifeDegradationLd;

      const vCellOper \= Math.max(1.65, ECSS\_EPS\_CONSTANTS.CELL\_NOMINAL\_VOLTAGE\_V \+ ECSS\_EPS\_CONSTANTS.CELL\_TEMP\_COEFF\_V\_PER\_C \* (tempC \- 28.0));  
      const requiredStringV \= busV \* 1.06 \+ 1.8;  
      const cellsInSeriesNs \= Math.ceil(requiredStringV / vCellOper);

      const cellAreaM2 \= ECSS\_EPS\_CONSTANTS.CELL\_AREA\_CM2 \* 1e-4;  
      const singleStringAreaM2 \= cellsInSeriesNs \* cellAreaM2;  
      const singleStringEolW \= singleStringAreaM2 \* pEolWPerM2;  
      const singleStringBolW \= singleStringAreaM2 \* pBolWPerM2;

      const activeStringsNp \= Math.max(1, Math.ceil(energyBalance.targetSolarArrayPowerWithMarginW / singleStringEolW));  
      const redundantStrings \= Math.max(1, Number(config.redundantStrings \|\| 1));  
      const totalStringsNp \= activeStringsNp \+ redundantStrings;

      const installedActiveEolW \= activeStringsNp \* singleStringEolW;  
      const installedTotalEolW \= totalStringsNp \* singleStringEolW;  
      const installedTotalBolW \= totalStringsNp \* singleStringBolW;  
      const totalArrayAreaM2 \= totalStringsNp \* singleStringAreaM2;  
      const eolEnergyMarginPct \= ((installedActiveEolW \- energyBalance.requiredSolarArrayPowerW) / energyBalance.requiredSolarArrayPowerW) \* 100.0;

      return {  
        pBolWPerM2: Number(pBolWPerM2.toFixed(1)),  
        pEolWPerM2: Number(pEolWPerM2.toFixed(1)),  
        lifeDegradationLd: Number(lifeDegradationLd.toFixed(3)),  
        vCellOperV: Number(vCellOper.toFixed(2)),  
        cellsInSeriesNs,  
        activeStringsNp,  
        redundantStrings,  
        totalStringsNp,  
        totalArrayAreaM2: Number(totalArrayAreaM2.toFixed(2)),  
        installedBolPowerW: Number(installedTotalBolW.toFixed(1)),  
        installedActiveEolPowerW: Number(installedActiveEolW.toFixed(1)),  
        installedTotalEolPowerW: Number(installedTotalEolW.toFixed(1)),  
        eolEnergyMarginPct: Number(eolEnergyMarginPct.toFixed(2))  
      };  
    }

    function analyzeBatterySubsystem(config, energyBalance) {  
      const busV \= Number(config.busVoltageV);  
      const nominalEnergyWh \= Number(config.batteryEnergyWh);  
      const parallelStrings \= Math.max(2, Number(config.batteryParallelStrings \|\| 3));  
      const maxAllowedDodPct \= Number(config.maxAllowedDodPct \|\| 30.0);  
      const dischargeEff \= 0.96;

      const seriesCellsNs \= Math.round(busV / ECSS\_EPS\_CONSTANTS.LI\_ION\_NOMINAL\_CELL\_V);  
      const nominalCapacityAh \= nominalEnergyWh / busV;  
      const extractedWh \= energyBalance.eclipseBatteryEnergyWh / dischargeEff;  
      const nominalDodPct \= (extractedWh / nominalEnergyWh) \* 100.0;  
      const degradedEnergyWh \= nominalEnergyWh \* ((parallelStrings \- 1\) / parallelStrings);  
      const faultCaseDodPct \= (extractedWh / degradedEnergyWh) \* 100.0;  
      const dischargeCurrentA \= (Number(config.eclipseLoadW) / dischargeEff) / busV;  
      const dischargeCRate \= dischargeCurrentA / nominalCapacityAh;

      return {  
        seriesCellsNs,  
        parallelStrings,  
        nominalEnergyWh: Number(nominalEnergyWh.toFixed(1)),  
        nominalCapacityAh: Number(nominalCapacityAh.toFixed(1)),  
        extractedEclipseWh: Number(extractedWh.toFixed(1)),  
        nominalDodPct: Number(nominalDodPct.toFixed(2)),  
        faultCaseDodPct: Number(faultCaseDodPct.toFixed(2)),  
        maxAllowedDodPct: Number(maxAllowedDodPct.toFixed(1)),  
        dodMarginPct: Number((maxAllowedDodPct \- nominalDodPct).toFixed(2)),  
        dischargeCRate: Number(dischargeCRate.toFixed(3)),  
        dodCompliant: nominalDodPct \<= maxAllowedDodPct  
      };  
    }

    function evaluateLCLProtectionDistribution(config) {  
      const busV \= Number(config.busVoltageV);  
      const maxAllowedDropV \= busV \* 0.01;  
      const zSource \= Number(config.sourceImpedanceOhm \|\| 0.035);  
      const zLoad \= Number(config.loadFilterInputImpedanceOhm \|\| 0.110);  
      const impedanceMarginDb \= 20.0 \* Math.log10(Math.max(1e-6, zLoad) / Math.max(1e-6, zSource));

      const channels \= (config.lclChannels \|\| \[\]).map((ch, idx) \=\> {  
        const rdsOhm \= Number(ch.rdsOnMohm) / 1000.0;  
        const iNom \= Number(ch.nominalCurrentA);  
        const iAct \= Number(ch.actualCurrentA);  
        const iLim \= Number(ch.tripLimitA);  
        const tTripMs \= Number(ch.tripTimeMs);  
        const cLoadUf \= Number(ch.loadCapacitanceUf \|\| 220);

        const dropV \= iNom \* rdsOhm;  
        const dropPct \= (dropV / busV) \* 100.0;  
        const dropCompliant \= dropPct \<= 1.0;

        const inrushChargeTimeMs \= ((cLoadUf \* 1e-6 \* busV) / Math.max(0.1, iLim)) \* 1000.0;  
        const inrushSafe \= tTripMs \>= inrushChargeTimeMs \* 1.5;

        let state \= "CLOSED\_NOMINAL";  
        if (iAct \> iLim) {  
          state \= ch.classType \=== "FCL" ? "CURRENT\_FOLDBACK\_ACTIVE" : "LATCHED\_TRIPPED\_OFF";  
        } else if (iAct \> iNom \* 1.15) {  
          state \= "OVERLOAD\_WARNING";  
        }

        return {  
          index: idx,  
          id: ch.id,  
          subsystem: ch.subsystem,  
          classType: ch.classType,  
          nominalCurrentA: Number(iNom.toFixed(2)),  
          actualCurrentA: Number(iAct.toFixed(2)),  
          tripLimitA: Number(iLim.toFixed(2)),  
          voltageDropPct: Number(dropPct.toFixed(3)),  
          dropCompliant,  
          tripTimeMs: Number(tTripMs.toFixed(2)),  
          inrushChargeTimeMs: Number(inrushChargeTimeMs.toFixed(2)),  
          inrushSafe,  
          state  
        };  
      });

      return {  
        busVoltageV: busV,  
        maxAllowedDropV: Number(maxAllowedDropV.toFixed(2)),  
        sourceImpedanceOhm: zSource,  
        loadFilterInputImpedanceOhm: zLoad,  
        impedanceMarginDb: Number(impedanceMarginDb.toFixed(2)),  
        impedanceCompliant: impedanceMarginDb \>= 5.0,  
        allDropsCompliant: channels.every((c) \=\> c.dropCompliant),  
        allInrushSafe: channels.every((c) \=\> c.inrushSafe),  
        trippedCount: channels.filter((c) \=\> c.state \=== "LATCHED\_TRIPPED\_OFF").length,  
        channels  
      };  
    }

    function simulateProfile(config, eb, pva, batt) {  
      const steps \= 24;  
      const pts \= \[\];  
      let soc \= 100.0;  
      const dtHr \= (eb.orbitPeriodMin / steps) / 60.0;  
      for (let i \= 0; i \<= steps; i++) {  
        const tMin \= (i / steps) \* eb.orbitPeriodMin;  
        const sun \= tMin \<= eb.sunlightDurationMin;  
        const saW \= sun ? pva.installedActiveEolPowerW : 0.0;  
        const loadW \= sun ? Number(config.daylightLoadW) : Number(config.eclipseLoadW);  
        if (sun) {  
          const rechW \= eb.eclipseRechargeEnergyWh / (eb.sunlightDurationMin / 60.0);  
          soc \= Math.min(100.0, soc \+ ((rechW \* dtHr) / batt.nominalEnergyWh) \* 100.0);  
        } else {  
          const disW \= loadW / 0.96;  
          soc \= Math.max(0.0, soc \- ((disW \* dtHr) / batt.nominalEnergyWh) \* 100.0);  
        }  
        pts.push({ tMin, sun, saW, loadW, soc });  
      }  
      return pts;  
    }

    function renderOrbitalChart(profile, eb) {  
      const svg \= document.getElementById("orbitalTelemetrySvg");  
      const w \= 760, h \= 250, padL \= 48, padR \= 45, padT \= 20, padB \= 32;  
      const plotW \= w \- padL \- padR;  
      const plotH \= h \- padT \- padB;  
      const maxPower \= Math.max(...profile.map((p) \=\> Math.max(p.saW, p.loadW)), 500\) \* 1.15;

      const xOf \= (i) \=\> padL \+ (i / (profile.length \- 1)) \* plotW;  
      const yPower \= (p) \=\> padT \+ plotH \- (p / maxPower) \* plotH;  
      const ySoc \= (s) \=\> padT \+ plotH \- (s / 100.0) \* plotH;

      const sunFrac \= eb.sunlightDurationMin / eb.orbitPeriodMin;  
      const eclX \= padL \+ sunFrac \* plotW;

      const saPoints \= profile.map((p, i) \=\> \`\${xOf(i).toFixed(1)},\${yPower(p.saW).toFixed(1)}\`).join(" ");  
      const loadPoints \= profile.map((p, i) \=\> \`\${xOf(i).toFixed(1)},\${yPower(p.loadW).toFixed(1)}\`).join(" ");  
      const socPoints \= profile.map((p, i) \=\> \`\${xOf(i).toFixed(1)},\${ySoc(p.soc).toFixed(1)}\`).join(" ");

      svg.innerHTML \= \`  
        \<rect x="\${padL}" y="\${padT}" width="\${(eclX \- padL).toFixed(1)}" height="\${plotH}" fill="rgba(56, 189, 248, 0.05)" /\>  
        \<rect x="\${eclX.toFixed(1)}" y="\${padT}" width="\${(padL \+ plotW \- eclX).toFixed(1)}" height="\${plotH}" fill="rgba(99, 102, 241, 0.12)" /\>  
        \<line x1="\${eclX.toFixed(1)}" y1="\${padT}" x2="\${eclX.toFixed(1)}" y2="\${padT \+ plotH}" stroke="\#818cf8" stroke-dasharray="4 4" stroke-width="1.2" /\>  
        \<text x="\${(padL \+ 10)}" y="\${padT \+ 15}" fill="\#38bdf8" font-size="10" font-family="JetBrains Mono"\>SUNLIGHT ARC (\${eb.sunlightDurationMin}m)\</text\>  
        \<text x="\${(eclX \+ 8).toFixed(1)}" y="\${padT \+ 15}" fill="\#a5b4fc" font-size="10" font-family="JetBrains Mono"\>ECLIPSE (\${eb.eclipseDurationMin}m)\</text\>  
        \<polyline fill="none" stroke="\#38bdf8" stroke-width="2.5" points="\${saPoints}" /\>  
        \<polyline fill="none" stroke="\#fbbf24" stroke-width="2" stroke-dasharray="5 3" points="\${loadPoints}" /\>  
        \<polyline fill="none" stroke="\#34d399" stroke-width="2.2" points="\${socPoints}" /\>  
        \<line x1="\${padL}" y1="\${padT \+ plotH}" x2="\${padL \+ plotW}" y2="\${padT \+ plotH}" stroke="\#334155" /\>  
        \<text x="\${padL}" y="\${h \- 8}" fill="\#94a3b8" font-size="10" font-family="JetBrains Mono"\>t \= 0.0 min\</text\>  
        \<text x="\${padL \+ plotW \- 85}" y="\${h \- 8}" fill="\#94a3b8" font-size="10" font-family="JetBrains Mono"\>T\_orb \= \${eb.orbitPeriodMin} min\</text\>  
        \<text x="6" y="\${padT \+ 12}" fill="\#38bdf8" font-size="10" font-family="JetBrains Mono"\>\${Math.round(maxPower)}W\</text\>  
        \<text x="6" y="\${padT \+ plotH}" fill="\#64748b" font-size="10" font-family="JetBrains Mono"\>0W\</text\>  
        \<text x="\${w \- 40}" y="\${padT \+ 12}" fill="\#34d399" font-size="10" font-family="JetBrains Mono"\>100%\</text\>  
        \<text x="\${w \- 40}" y="\${padT \+ plotH}" fill="\#34d399" font-size="10" font-family="JetBrains Mono"\>0%\</text\>  
      \`;  
    }

    function updateStudio() {  
      const eb \= solveOrbitalEnergyBalance(currentConfig);  
      const pva \= sizeSolarArrayPVA(currentConfig, eb);  
      const batt \= analyzeBatterySubsystem(currentConfig, eb);  
      const lcl \= evaluateLCLProtectionDistribution(currentConfig);  
      const profile \= simulateProfile(currentConfig, eb, pva, batt);

      const busSpec \= ECSS\_EPS\_CONSTANTS.BUS\_STANDARDS\[Number(currentConfig.busVoltageV)\];  
      const peakPowerKW \= Math.max(Number(currentConfig.daylightLoadW), pva.installedBolPowerW) / 1000.0;  
      const busPowerBandCompliant \= peakPowerKW \<= busSpec.maxPowerKW \* 1.25;

      const checks \= \[  
        { id: "ECSS-20C-01", clause: "ECSS-E-ST-20C Cl. 5.2.1", req: "Standardized 28V / 50V / 100V Main Bus Allocation", measured: \`\${currentConfig.busVoltageV} V (\${peakPowerKW.toFixed(2)} kW BOL)\`, passed: busPowerBandCompliant },  
        { id: "ECSS-20C-02", clause: "ECSS-E-ST-20C Cl. 5.3.1", req: "Positive Orbital Energy Balance (\>= \+10% EOL Margin)", measured: \`+\${pva.eolEnergyMarginPct}% (\${pva.installedActiveEolPowerW} W vs \${eb.requiredSolarArrayPowerW} W)\`, passed: pva.eolEnergyMarginPct \>= 10.0 },  
        { id: "ECSS-20C-03", clause: "ECSS-E-ST-20-08C Cl. 5.1", req: "PVA Radiation & Thermal EOL Degradation Factor L\_d", measured: \`L\_d \= \${pva.lifeDegradationLd}, \${pva.cellsInSeriesNs}s @ \${pva.vCellOperV} V/cell\`, passed: pva.lifeDegradationLd \>= 0.55 && pva.lifeDegradationLd \<= 0.98 },  
        { id: "ECSS-20C-04", clause: "ECSS-E-ST-20C Cl. 5.3.2", req: "PVA Single-Point Failure String Redundancy (N+1)", measured: \`\${pva.activeStringsNp} active \+ \${pva.redundantStrings} redundant strings\`, passed: pva.redundantStrings \>= 1 },  
        { id: "ECSS-20C-05", clause: "ECSS-E-ST-20C Cl. 5.3.4", req: \`Battery Eclipse DoD \<= \${batt.maxAllowedDodPct}% Cycle Limit\`, measured: \`\${batt.nominalDodPct}% Nominal DoD\`, passed: batt.dodCompliant },  
        { id: "ECSS-20C-06", clause: "ECSS-E-ST-20C Cl. 5.3.5", req: "Battery (N-1) Single-String Fault Survivability (\<85% DoD)", measured: \`\${batt.faultCaseDodPct}% Fault-Case DoD\`, passed: batt.faultCaseDodPct \< 85.0 },  
        { id: "ECSS-20C-07", clause: "ECSS-E-ST-20-20C Cl. 5.4.5", req: "LCL Forward Voltage Drop \<= 1.0% Nominal Bus Voltage", measured: lcl.allDropsCompliant ? \`All \${lcl.channels.length} channels \<= 1.0% V\_bus\` : "Exceeds 1.0% drop", passed: lcl.allDropsCompliant },  
        { id: "ECSS-20C-08", clause: "ECSS-E-ST-20-20C Cl. 5.4.3", req: "LCL Capacitive Inrush vs. Trip-Off Timeout (T\_trip \>= 1.5x T\_inrush)", measured: lcl.allInrushSafe ? "All channels coordinated" : "Inrush trip hazard", passed: lcl.allInrushSafe },  
        { id: "ECSS-20C-09", clause: "ECSS-E-ST-20-20C Cl. 5.4.6", req: "Main Bus Source-to-Load Impedance Gain Margin \>= 5.0 dB", measured: \`\${lcl.impedanceMarginDb} dB\`, passed: lcl.impedanceCompliant },  
        { id: "ECSS-20C-10", clause: "ECSS-E-ST-20C Cl. 5.4.2", req: "Essential Load LCL / RLCL / FCL Fault Protection Coverage", measured: \`\${lcl.channels.length \- lcl.trippedCount}/\${lcl.channels.length} channels active (\${lcl.trippedCount} tripped)\`, passed: lcl.trippedCount \=== 0 }  
      \];

      const passCount \= checks.filter((c) \=\> c.passed).length;

      // Update KPI Ribbon  
      document.getElementById("kpiBusVoltage").textContent \= \`\${currentConfig.busVoltageV}.0 V (\${currentConfig.orbitRegime})\`;  
      document.getElementById("kpiEnergyMargin").textContent \= \`+\${pva.eolEnergyMarginPct}% EOL Energy Margin\`;  
      document.getElementById("kpiPvaPower").textContent \= \`\${pva.installedActiveEolPowerW} W\`;  
      document.getElementById("kpiPvaConfig").textContent \= \`\${pva.cellsInSeriesNs}s × \${pva.totalStringsNp}p (\${pva.totalArrayAreaM2} m²)\`;  
      document.getElementById("kpiBatteryDod").textContent \= \`\${batt.nominalDodPct}% DoD\`;  
      document.getElementById("kpiBatteryDod").className \= \`text-xl font-bold mono mt-1 \${batt.dodCompliant ? "text-emerald-400" : "text-rose-400"}\`;  
      document.getElementById("kpiBatteryFaultDod").textContent \= \`N-1 Fault DoD: \${batt.faultCaseDodPct}%\`;

      const activeChannels \= lcl.channels.length \- lcl.trippedCount;  
      document.getElementById("kpiLclStatus").textContent \= \`\${activeChannels}/\${lcl.channels.length} CLOSED\`;  
      document.getElementById("kpiLclStatus").className \= \`text-xl font-bold mono mt-1 \${lcl.trippedCount \=== 0 ? "text-emerald-400" : "text-amber-400"}\`;  
      document.getElementById("kpiImpedanceMargin").textContent \= \`Impedance Margin: \${lcl.impedanceMarginDb} dB\`;

      document.getElementById("kpiAuditScore").textContent \= \`\${passCount} / 10 PASS\`;  
      document.getElementById("kpiAuditScore").className \= \`text-xl font-bold mono mt-1 \${passCount \=== 10 ? "text-emerald-400" : "text-amber-400"}\`;  
      document.getElementById("kpiAuditBadge").textContent \= passCount \=== 10 ? "ECSS-E-ST-20C CERTIFIED" : "FAULT / MARGIN WARNING";

      // Update detail cards  
      document.getElementById("detailSunEcl").textContent \= \`\${eb.sunlightDurationMin}m / \${eb.eclipseDurationMin}m\`;  
      document.getElementById("detailDayWh").textContent \= \`\${eb.daylightEnergyWh} Wh\`;  
      document.getElementById("detailEclWh").textContent \= \`\${eb.eclipseRechargeEnergyWh} Wh\`;  
      document.getElementById("detailSaReqW").textContent \= \`\${eb.requiredSolarArrayPowerW} W\`;

      document.getElementById("detailPvaFlux").textContent \= \`\${pva.pBolWPerM2} / \${pva.pEolWPerM2} W/m²\`;  
      document.getElementById("detailPvaLd").textContent \= \`\${pva.lifeDegradationLd}\`;  
      document.getElementById("detailPvaMatrix").textContent \= \`\${pva.cellsInSeriesNs}s × (\${pva.activeStringsNp}+\${pva.redundantStrings})p\`;  
      document.getElementById("detailPvaBolW").textContent \= \`\${pva.installedBolPowerW} W\`;

      document.getElementById("detailBattTopo").textContent \= \`\${batt.seriesCellsNs}s × \${batt.parallelStrings}p (\${batt.nominalCapacityAh} Ah)\`;  
      document.getElementById("detailBattExtWh").textContent \= \`\${batt.extractedEclipseWh} Wh\`;  
      document.getElementById("detailBattCRate").textContent \= \`\${batt.dischargeCRate} C\`;  
      document.getElementById("detailBattMargin").textContent \= \`\${batt.dodMarginPct \>= 0 ? "+" : ""}\${batt.dodMarginPct}%\`;

      renderOrbitalChart(profile, eb);

      // Render LCL Table  
      const lclSummary \= document.getElementById("lclSummaryBadge");  
      if (lcl.trippedCount \=== 0\) {  
        lclSummary.textContent \= "ALL PDU CHANNELS NOMINAL";  
        lclSummary.className \= "text-xs mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30";  
      } else {  
        lclSummary.textContent \= \`\${lcl.trippedCount} CHANNEL(S) LATCHED TRIPPED OFF\`;  
        lclSummary.className \= "text-xs mono px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40";  
      }

      const lclTbody \= document.getElementById("lclTableBody");  
      lclTbody.innerHTML \= lcl.channels  
        .map((c) \=\> {  
          const isTripped \= c.state \=== "LATCHED\_TRIPPED\_OFF";  
          const stateBadge \= isTripped  
            ? \`\<span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30"\>\${c.state}\</span\>\`  
            : \`\<span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"\>\${c.state}\</span\>\`;  
          return \`  
            \<tr class="hover:bg-slate-900/50"\>  
              \<td class="py-2.5 px-3 font-semibold text-sky-300"\>\${c.id}\</td\>  
              \<td class="py-2.5 px-3 text-slate-200"\>\${c.subsystem}\</td\>  
              \<td class="py-2.5 px-3 text-slate-300"\>\${c.classType}\</td\>  
              \<td class="py-2.5 px-3 text-right"\>\${c.nominalCurrentA.toFixed(2)}\</td\>  
              \<td class="py-2.5 px-3 text-right \${isTripped ? "text-rose-400 font-bold" : "text-slate-100"}"\>\${c.actualCurrentA.toFixed(2)}\</td\>  
              \<td class="py-2.5 px-3 text-right text-slate-400"\>\${c.tripLimitA.toFixed(2)}\</td\>  
              \<td class="py-2.5 px-3 text-right \${c.dropCompliant ? "text-emerald-300" : "text-rose-400"}"\>\${c.voltageDropPct.toFixed(3)}%\</td\>  
              \<td class="py-2.5 px-3 text-right"\>\${c.inrushChargeTimeMs.toFixed(2)} / \${c.tripTimeMs.toFixed(1)}\</td\>  
              \<td class="py-2.5 px-3"\>\${stateBadge}\</td\>  
              \<td class="py-2.5 px-3 text-right"\>  
                \<button type="button" data-lcl-index="\${c.index}" class="lcl-toggle-btn px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"\>  
                  \${isTripped ? "Reset LCL" : "Test Fault"}  
                \</button\>  
              \</td\>  
            \</tr\>  
          \`;  
        })  
        .join("");

      document.querySelectorAll(".lcl-toggle-btn").forEach((btn) \=\> {  
        btn.addEventListener("click", () \=\> {  
          const idx \= Number(btn.getAttribute("data-lcl-index"));  
          const ch \= currentConfig.lclChannels\[idx\];  
          if (ch.actualCurrentA \> ch.tripLimitA) {  
            ch.actualCurrentA \= Number((ch.nominalCurrentA \* 0.94).toFixed(2));  
            showToast(\`Reset \${ch.id} (\${ch.subsystem}) to nominal current (\${ch.actualCurrentA} A).\`);  
          } else {  
            ch.actualCurrentA \= Number((ch.tripLimitA \* 1.35).toFixed(2));  
            showToast(\`Injected overcurrent fault on \${ch.id}: \${ch.actualCurrentA} A exceeds \${ch.tripLimitA} A limit \-\> LATCHED\_TRIPPED\_OFF.\`);  
          }  
          updateStudio();  
        });  
      });

      // Render 10-Point Audit Table  
      const auditBadge \= document.getElementById("auditHeaderBadge");  
      auditBadge.textContent \= \`\${passCount} / 10 RULES VERIFIED (\${passCount \* 10}%)\`;  
      auditBadge.className \= \`text-xs mono px-2.5 py-1 rounded \${  
        passCount \=== 10  
          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"  
          : "bg-amber-500/20 text-amber-300 border border-amber-500/40"  
      }\`;

      const auditTbody \= document.getElementById("auditTableBody");  
      auditTbody.innerHTML \= checks  
        .map(  
          (c) \=\> \`  
          \<tr class="hover:bg-slate-900/50"\>  
            \<td class="py-2.5 px-3 font-semibold text-sky-300"\>\${c.id}\</td\>  
            \<td class="py-2.5 px-3 text-slate-400"\>\${c.clause}\</td\>  
            \<td class="py-2.5 px-3 text-slate-200"\>\${c.req}\</td\>  
            \<td class="py-2.5 px-3 text-slate-300"\>\${c.measured}\</td\>  
            \<td class="py-2.5 px-3 text-right"\>  
              \<span class="px-2 py-0.5 rounded \${  
                c.passed  
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"  
                  : "bg-rose-500/20 text-rose-300 border border-rose-500/30"  
              }"\>\${c.passed ? "PASS" : "FAIL"}\</span\>  
            \</td\>  
          \</tr\>  
        \`  
        )  
        .join("");

      // Update XML Preview content  
      const xmlLines \= \[  
        \`\<?xml version="1.0" encoding="UTF-8"?\>\`,  
        \`\<ECSS\_EPS\_SystemManifest standard="ECSS-E-ST-20C-Rev.2" lclStandard="ECSS-E-ST-20-20C" version="1.0.0"\>\`,  
        \`  \<Mission name="\${currentConfig.name}" orbitRegime="\${currentConfig.orbitRegime}" busVoltageV="\${currentConfig.busVoltageV}" /\>\`,  
        \`  \<EnergyBalance periodMin="\${eb.orbitPeriodMin}" sunlightMin="\${eb.sunlightDurationMin}" eclipseMin="\${eb.eclipseDurationMin}" requiredSaPowerW="\${eb.requiredSolarArrayPowerW}" eolMarginPct="\${pva.eolEnergyMarginPct}" /\>\`,  
        \`  \<PhotovoltaicAssembly seriesCellsNs="\${pva.cellsInSeriesNs}" activeStringsNp="\${pva.activeStringsNp}" redundantStrings="\${pva.redundantStrings}" areaM2="\${pva.totalArrayAreaM2}" eolPowerW="\${pva.installedActiveEolPowerW}" /\>\`,  
        \`  \<LithiumIonBattery seriesCells="\${batt.seriesCellsNs}" parallelStrings="\${batt.parallelStrings}" capacityWh="\${batt.nominalEnergyWh}" nominalDodPct="\${batt.nominalDodPct}" faultDodPct="\${batt.faultCaseDodPct}" /\>\`,  
        \`  \<PDUProtection impedanceMarginDb="\${lcl.impedanceMarginDb}" trippedChannels="\${lcl.trippedCount}" auditScore="\${passCount}/10" /\>\`,  
        \`\</ECSS\_EPS\_SystemManifest\>\`  
      \];  
      document.getElementById("xmlOutputPre").textContent \= xmlLines.join("\\n");  
    }

    function syncInputsFromConfig() {  
      document.getElementById("busVoltageInput").value \= String(currentConfig.busVoltageV);  
      document.getElementById("busVoltageVal").textContent \= \`\${currentConfig.busVoltageV} V\`;

      document.getElementById("orbitPeriodInput").value \= currentConfig.orbitPeriodMin;  
      document.getElementById("orbitPeriodVal").textContent \= \`\${currentConfig.orbitPeriodMin} min\`;

      document.getElementById("eclipseMinInput").value \= currentConfig.eclipseDurationMin;  
      document.getElementById("eclipseMinVal").textContent \= \`\${currentConfig.eclipseDurationMin} min\`;

      document.getElementById("dayLoadInput").value \= currentConfig.daylightLoadW;  
      document.getElementById("dayLoadVal").textContent \= \`\${currentConfig.daylightLoadW} W\`;

      document.getElementById("eclipseLoadInput").value \= currentConfig.eclipseLoadW;  
      document.getElementById("eclipseLoadVal").textContent \= \`\${currentConfig.eclipseLoadW} W\`;

      document.getElementById("lifeYearsInput").value \= currentConfig.missionLifeYears;  
      document.getElementById("lifeYearsVal").textContent \= \`\${currentConfig.missionLifeYears} yr\`;

      document.getElementById("sunAngleInput").value \= currentConfig.sunIncidenceDeg;  
      document.getElementById("sunAngleVal").textContent \= \`\${currentConfig.sunIncidenceDeg}°\`;

      document.getElementById("arrayTempInput").value \= currentConfig.arrayOperatingTempC;  
      document.getElementById("arrayTempVal").textContent \= \`\${currentConfig.arrayOperatingTempC} °C\`;

      document.getElementById("batteryWhInput").value \= currentConfig.batteryEnergyWh;  
      document.getElementById("batteryWhVal").textContent \= \`\${currentConfig.batteryEnergyWh} Wh\`;  
    }

    window.addEventListener("DOMContentLoaded", () \=\> {  
      syncInputsFromConfig();  
      updateStudio();

      document.getElementById("presetSelect").addEventListener("change", (e) \=\> {  
        const key \= e.target.value;  
        if (MISSION\_PRESETS\[key\]) {  
          currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS\[key\]));  
          syncInputsFromConfig();  
          updateStudio();  
          showToast(\`Loaded mission preset: \${currentConfig.name}\`);  
        }  
      });

      const bindSlider \= (id, valId, prop, unit) \=\> {  
        const el \= document.getElementById(id);  
        el.addEventListener("input", () \=\> {  
          currentConfig\[prop\] \= Number(el.value);  
          document.getElementById(valId).textContent \= \`\${el.value} \${unit}\`;  
          updateStudio();  
        });  
      };

      document.getElementById("busVoltageInput").addEventListener("change", (e) \=\> {  
        currentConfig.busVoltageV \= Number(e.target.value);  
        document.getElementById("busVoltageVal").textContent \= \`\${e.target.value} V\`;  
        updateStudio();  
      });

      bindSlider("orbitPeriodInput", "orbitPeriodVal", "orbitPeriodMin", "min");  
      bindSlider("eclipseMinInput", "eclipseMinVal", "eclipseDurationMin", "min");  
      bindSlider("dayLoadInput", "dayLoadVal", "daylightLoadW", "W");  
      bindSlider("eclipseLoadInput", "eclipseLoadVal", "eclipseLoadW", "W");  
      bindSlider("lifeYearsInput", "lifeYearsVal", "missionLifeYears", "yr");  
      bindSlider("sunAngleInput", "sunAngleVal", "sunIncidenceDeg", "°");  
      bindSlider("arrayTempInput", "arrayTempVal", "arrayOperatingTempC", "°C");  
      bindSlider("batteryWhInput", "batteryWhVal", "batteryEnergyWh", "Wh");

      document.getElementById("injectFaultBtn").addEventListener("click", () \=\> {  
        const target \= currentConfig.lclChannels\[2\] \|\| currentConfig.lclChannels\[0\];  
        target.actualCurrentA \= Number((target.tripLimitA \* 1.4).toFixed(2));  
        updateStudio();  
        showToast(\`Injected overcurrent fault on \${target.id} (\${target.subsystem}): \${target.actualCurrentA} A \> \${target.tripLimitA} A limit.\`);  
      });

      document.getElementById("resetFaultBtn").addEventListener("click", () \=\> {  
        const key \= document.getElementById("presetSelect").value;  
        currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS\[key\]));  
        syncInputsFromConfig();  
        updateStudio();  
        showToast("All LCL channels and bus parameters reset to nominal mission state.");  
      });

      document.getElementById("exportXmlBtn").addEventListener("click", () \=\> {  
        document.getElementById("xmlModal").classList.remove("hidden");  
      });

      document.getElementById("closeXmlBtn").addEventListener("click", () \=\> {  
        document.getElementById("xmlModal").classList.add("hidden");  
      });

      document.getElementById("copyXmlBtn").addEventListener("click", () \=\> {  
        const xmlText \= document.getElementById("xmlOutputPre").textContent;  
        try {  
          if (navigator.clipboard && navigator.clipboard.writeText) {  
            navigator.clipboard.writeText(xmlText);  
          } else {  
            const ta \= document.createElement("textarea");  
            ta.value \= xmlText;  
            document.body.appendChild(ta);  
            ta.select();  
            document.execCommand("copy");  
            document.body.removeChild(ta);  
          }  
          showToast("ECSS-E-ST-20C XML Manifest copied to clipboard.");  
        } catch (err) {  
          showToast("XML Manifest ready in viewer.");  
        }  
      });

      document.getElementById("closeToastBtn").addEventListener("click", () \=\> {  
        document.getElementById("statusToast").classList.add("hidden");  
      });  
    });  
  \</script\>  
\</body\>  
\</html\>  
