# EPSSpaceForge Pro (v1.0.0)

### Spacecraft Electrical Power System (ECSS-E-ST-20C Rev. 2 & ECSS-E-ST-20-20C) Orbital Energy Balance, Solar Array I-V String Sizing, Li-Ion Battery DoD Cycling & Latching Current Limiter (LCL) Protection Studio

---

## 1\. Product Overview

**EPSSpaceForge Pro (v1.0.0)** is a self-contained, zero-infrastructure aerospace electrical engineering workstation implementing the European Cooperation for Space Standardization (ECSS) standards [ECSS-E-ST-20C Rev. 2](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2\(8April2022\).pdf) (*Space engineering: Electrical and electronic*), [ECSS-E-ST-20-20C](https://ecss.nl/wp-content/uploads/2016/07/ECSS-E-ST-20-20C15April2016.pdf) (*Electrical design and interface requirements for power supply*), and [ECSS-E-ST-20-08C](https://ecss.nl/wp-content/uploads/2017/11/ECSS-Training-L2-E20-Electric-and-electronics-\(2017-10\).pdf) (*Photovoltaic assemblies and components*).

Spacecraft Electrical Power System (EPS) anomalies—including negative orbital energy balance during peak eclipse seasons, unexpected End-of-Life (EOL) solar cell radiation degradation, excessive Li-Ion battery Depth-of-Discharge (DoD), and nuisance or uncoordinated Latching Current Limiter (LCL) trips—remain a leading cause of mission degradation across LEO, MEO, and GEO satellites. **EPSSpaceForge Pro** replaces fragmented spreadsheets and expensive legacy tools (\$35,000+/seat) with a deterministic dual-stack (ES6 \+ Python 3\) solver and interactive Glass-Cockpit Web Studio.

---

## 2\. Key Features & Capabilities

- **Orbital Sunlight/Eclipse Energy Balance Solver ([ECSS-E-ST-20C](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2\(8April2022\).pdf) Clause 5.3.1)**: Computes sunlit and eclipse energy budgets, harness/BCDU/BDR path efficiencies (\$\\eta\_{\\text{day}}, \\eta\_{\\text{ecl}}\$), minimum required solar array output \$P\_{\\text{SA,req}}\$, and verifies \$\\ge \+10%\$ EOL system energy margin.  
- **Photovoltaic Assembly (PVA) BOL-to-EOL Sizing Engine ([ECSS-E-ST-20-08C](https://ecss.nl/wp-content/uploads/2017/11/ECSS-Training-L2-E20-Electric-and-electronics-\(2017-10\).pdf))**: Models triple-junction GaAs solar cells (\$\\eta \= 29.5%\\text{–}31.0%\$), AM0 solar constant (\$1361\\text{ W/m}^2\$), cosine incidence losses, 1 MeV electron equivalent radiation degradation \$(1 \- D\_{\\text{rad}})^{L\_{\\text{yr}}}\$, operating temperature voltage derating, and \$(N+1)\$ redundant string sizing with blocking diodes.  
- **Li-Ion Battery Depth-of-Discharge (DoD) & \$(N-1)\$ Fault Analyzer ([ECSS-E-ST-20C](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2\(8April2022\).pdf) Clauses 5.3.4–5.3.5)**: Calculates nominal and single-string failure (\$\\text{DoD}\_{N-1}\$) battery Depth-of-Discharge against LEO (\$\\le 30%\$), MEO (\$\\le 60%\$), and GEO (\$\\le 70%\$) cycle-life limits.  
- **Latching Current Limiter (LCL / RLCL / FCL) Protection Matrix ([ECSS-E-ST-20-20C](https://ecss.nl/wp-content/uploads/2016/07/ECSS-E-ST-20-20C15April2016.pdf) Clause 5.4)**: Evaluates per-channel forward voltage drop (\$\\le 1.0%,V\_{\\text{bus}}\$), capacitive load filter inrush charge time vs. trip-off timeout (\$T\_{\\text{trip}} \\ge 1.5\\times T\_{\\text{inrush}}\$), and \$\\ge 5.0\\text{ dB}\$ source-to-load impedance stability margin.  
- **10-Point Normative Compliance Auditor**: Real-time verification across 10 ECSS-E-ST-20C & ECSS-E-ST-20-20C clauses with XML System Manifest export.

---

## 3\. Directory Structure

epsspace-forge-pro/

├── README.md                                       \# Operational manual & technical overview

├── build/

│   └── epsspace-forge-pro-v1.0.0.zip               \# Complete standalone distribution package

├── documentation/

│   ├── ECSS\_E\_ST\_20C\_SPECIFICATION.md              \# Mathematical & normative specification

│   └── ECSS\_EPS\_COMPLIANCE\_MATRIX.md               \# 10-point ECSS verification matrix

├── screenshots/

│   ├── epsspace-architecture-diagram.svg           \# Vector ECSS-E-ST-20C EPS architecture diagram

│   ├── epsspace-studio-preview.svg                 \# Vector Glass-Cockpit UI preview

│   └── epsspace-studio-screenshot.png              \# Live headless Chromium rendered UI screenshot

└── source-code/

    ├── index.html                                  \# Interactive Glass-Cockpit Web Studio

    ├── epsspace-engine.js                          \# Pure ES6 ECSS-E-ST-20C physics & LCL engine

    ├── epsspace-auditor.js                         \# 10-Point normative compliance auditor

    ├── epsspace\_cli.py                             \# Python 3 CLI synthesis & audit workstation

    └── test\_runner.py                              \# 10-test automated verification suite

---

## 4\. Quick Start & Verification

\# Run the Python 3 CLI workstation (supports leo\_eo\_smallsat, meo\_gnss\_nav, geo\_hts\_telecom)

python3 source-code/epsspace\_cli.py \--preset leo\_eo\_smallsat

\# Execute the 10-point automated verification test suite

python3 source-code/test\_runner.py

---

## 5\. Commercial Licensing & Monetization Strategy

- **Developer / Mission Architect Seat (Micro-SaaS)**: **\$149 / month** (unlimited orbital energy balance models, ECSS XML manifest exports, and CLI integration).  
- **Commercial Flight Mission Perpetual License**: **\$1,499 one-time** per spacecraft program (includes full ES6/Python source code, custom solar cell/battery library calibration, and ECSS CDR compliance report pack).