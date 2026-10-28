# ECSS-E-ST-20C Rev. 2 & ECSS-E-ST-20-20C Engineering Specification

## 1\. Normative Scope & Reference Standards

**EPSSpaceForge Pro (v1.0.0)** implements the mathematical and electrical interface requirements of:

- [**ECSS-E-ST-20C Rev. 2**](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2\(8April2022\).pdf) — *Space engineering: Electrical and electronic* (8 April 2022).  
- [**ECSS-E-ST-20-20C**](https://ecss.nl/wp-content/uploads/2016/07/ECSS-E-ST-20-20C15April2016.pdf) — *Space engineering: Electrical design and interface requirements for power supply* (15 April 2016).  
- [**ECSS-E-HB-20-20A**](https://ecss.nl/wp-content/uploads/2016/07/ECSS-E-HB-20-20A15April2016.pdf) — *Space engineering: Electrical design and interface handbook for power supply* (15 April 2016).  
- [**ECSS-E-ST-20-08C**](https://ecss.nl/wp-content/uploads/2017/11/ECSS-Training-L2-E20-Electric-and-electronics-\(2017-10\).pdf) — *Space engineering: Photovoltaic assemblies and components*.

## 2\. Mathematical Formulation

### 2.1 Standardized Main Power Bus Voltage Tiers (ECSS-E-ST-20C Clause 5.2.1)

Spacecraft primary regulated power buses are standardized by platform power class:

- **28 V DC Bus**: Low-to-medium power spacecraft up to \$1.5\\text{ kW}\$.  
- **50 V DC Bus**: Medium-to-high power Earth Observation and navigation platforms up to \$8.0\\text{ kW}\$.  
- **100 V DC Bus**: High-throughput geostationary (GEO) telecommunications and electric propulsion buses above \$8.0\\text{ kW}\$.

### 2.2 Orbital Sunlight/Eclipse Energy Balance (ECSS-E-ST-20C Clause 5.3.1)

Given orbital period \$T\_{\\text{orb}} \= T\_{\\text{sun}} \+ T\_{\\text{ecl}}\$, daylight bus load \$P\_{\\text{day}}\$, eclipse bus load \$P\_{\\text{ecl}}\$, direct sunlight path efficiency \$\\eta\_{\\text{day}}\$, and battery charge/discharge round-trip path efficiency \$\\eta\_{\\text{ecl}}\$:

\$\$E\_{\\text{day}} \= \\frac{P\_{\\text{day}} \\cdot (T\_{\\text{sun}}/60)}{\\eta\_{\\text{day}}}, \\quad E\_{\\text{ecl,rech}} \= \\frac{P\_{\\text{ecl}} \\cdot (T\_{\\text{ecl}}/60)}{\\eta\_{\\text{ecl}}}\$\$

\$\$P\_{\\text{SA,req}} \= \\frac{E\_{\\text{day}} \+ E\_{\\text{ecl,rech}}}{T\_{\\text{sun}}/60}\$\$

To guarantee positive orbital energy balance at End-of-Life (EOL) under worst-case seasonal beta angles, the installed active solar array power \$P\_{\\text{SA,EOL}}\$ must maintain at least a \$+10%\$ design margin over \$P\_{\\text{SA,req}}\$.

### 2.3 Photovoltaic Assembly (PVA) BOL/EOL Sizing (ECSS-E-ST-20-08C)

Using AM0 solar irradiance \$S\_0 \= 1361\\text{ W/m}^2\$, cell conversion efficiency \$\\eta\_{\\text{cell}}\$, inherent assembly factor \$I\_d\$, sun incidence angle \$\\theta\$, and annual radiation degradation \$D\_{\\text{rad}}\$ over mission lifetime \$L\_{\\text{yr}}\$:

\$\$P\_{\\text{BOL}} \= S\_0 \\cdot \\eta\_{\\text{cell}} \\cdot I\_d \\cdot \\cos\\theta\$\$

\$\$L\_d \= (1 \- D\_{\\text{rad}})^{L\_{\\text{yr}}} \\cdot \\left\[1 \- 0.0045 \\max(0, T\_{\\text{oper}} \- 28^\\circ\\text{C})\\right\], \\quad P\_{\\text{EOL}} \= P\_{\\text{BOL}} \\cdot L\_d\$\$

### 2.4 Li-Ion Battery Depth-of-Discharge (DoD) & (N-1) String Survivability (Clause 5.3.4)

Nominal and single-string fault-degraded DoD values are bounded by orbit cycle-life ceilings (\$\\le 30%\$ in LEO for \$\>25,000\$ cycles; \$\\le 70%\$ in GEO):

\$\$\\text{DoD}*{\\text{nom}} \= \\frac{E*{\\text{ecl,batt}}}{\\eta\_{\\text{dis}} \\cdot E\_{\\text{nom}}} \\times 100%, \\quad \\text{DoD}*{N-1} \= \\text{DoD}*{\\text{nom}} \\cdot \\frac{N\_p}{N\_p \- 1}\$\$

### 2.5 Latching Current Limiter (LCL / RLCL / FCL) Protection & Impedance Stability (ECSS-E-ST-20-20C Clause 5.4)

1. **Forward Voltage Drop**: \$\\Delta V\_{\\text{LCL}} \= I\_{\\text{nom}} \\cdot R\_{\\text{DS(on)}} \\le 0.01 \\cdot V\_{\\text{bus}}\$ (\$\\le 1.0%\$).  
2. **Capacitive Inrush Coordination**: Trip-off timeout \$T\_{\\text{trip}}\$ must satisfy \$T\_{\\text{trip}} \\ge 1.5 \\times \\frac{C\_{\\text{load}} V\_{\\text{bus}}}{I\_{\\text{lim}}}\$.  
3. **Impedance Stability Margin**: \$G\_Z \= 20 \\log\_{10}(Z\_{\\text{load}} / Z\_{\\text{source}}) \\ge 5.0\\text{ dB}\$.