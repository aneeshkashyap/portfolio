# 🌫️ Delhi Weather & Air Quality Index (AQI) Analysis

## 📊 Project Overview

This project presents an in-depth exploratory data analysis and environmental intelligence study of Delhi's atmospheric conditions and air quality throughout 2025. By analyzing over **52,500 hourly sensor observations**, the project decodes the multi-dimensional interplay between meteorological variables (ambient temperature, relative humidity, barometric pressure, wind speed) and hazardous criteria pollutants (PM2.5, PM10, CO, NO2, and composite AQI).

The project combines **Python-based statistical and time-series exploratory data analysis (EDA)** with an interactive, enterprise-grade **Power BI dashboard** and an **executive presentation deck** to translate atmospheric sensor telemetry into actionable environmental health insights.

The analysis focuses on understanding:

- Temporal pollution trends (hourly diurnal cycles, daily shifts, and seasonal transitions)
- Particulate matter (PM2.5 and PM10) as the primary determinant of hazardous air quality
- Thermal inversion dynamics during winter months
- The impact of stagnant surface wind speeds on smog accumulation
- Location-specific environmental stress disparities across key Delhi monitoring stations (Anand Vihar, IGI Airport, RK Puram, Punjabi Bagh, etc.)
- Correlation and regression modeling between atmospheric parameters and hazard indices
- Early-warning indicators and policy recommendations for municipal air quality governance

---

## 🎯 Objectives

The primary objectives of this project are to:

1. Conduct end-to-end data auditing, cleaning, and preprocessing on high-frequency atmospheric sensor streams.
2. Characterize the statistical distributions and skewness of criteria air pollutants (PM2.5, PM10, NO2, CO) across Delhi.
3. Quantify the seasonal thermal inversion effect where temperature drops coincide with exponential particulate concentration spikes.
4. Evaluate meteorological modulation—measuring how surface wind velocity and ambient humidity alter pollutant dispersion.
5. Identify high-risk geographical hot-spots across Delhi monitoring stations.
6. Benchmark observed levels against National Ambient Air Quality Standards (NAAQS) and WHO health thresholds.
7. Build an interactive Power BI intelligence dashboard to facilitate stakeholder decision-making and public health alerts.

---

## 📁 Dataset

The dataset comprises **52,560 hourly continuous sensor telemetry records** captured throughout the 2025 monitoring cycle across Delhi's primary ambient air quality stations.

Each observation represents a timestamped atmospheric and pollutant reading.

### Key attributes include:

- `date_ist`: Date of observation in Indian Standard Time (DD/MM/YYYY)
- `time_ist`: Timestamp of hourly sensor capture (HH:MM)
- `location`: Monitoring station / sector in Delhi (e.g., Anand Vihar, IGI Airport)
- `lat` / `lon`: Geospatial coordinates of monitoring station
- `temp_c`: Ambient surface temperature in degrees Celsius (°C)
- `humidity`: Relative humidity percentage (%)
- `pressure_mb`: Atmospheric barometric pressure in millibars (hPa)
- `windspeed_kph`: Surface wind speed in kilometers per hour (km/h)
- `condition_text`: Categorical meteorological condition (Mainly clear, Partly cloudy, Overcast, Fog/Haze)
- `aqi_index`: Calculated composite Air Quality Index
- `pm2_5`: Fine particulate matter concentration $\le 2.5\,\mu\text{m}$ ($\mu\text{g/m}^3$)
- `pm10`: Coarse particulate matter concentration $\le 10\,\mu\text{m}$ ($\mu\text{g/m}^3$)
- `co`: Carbon monoxide concentration ($\mu\text{g/m}^3$)
- `no2`: Nitrogen dioxide concentration ($\mu\text{g/m}^3$)

The raw dataset contains **52,560 records and 16 initial columns** before data cleaning and transformation.

---

## 🛠️ Technologies Used

### Data Analysis & Modeling
- **Python 3.10+**
- **Pandas**: High-performance dataframe manipulation, time-series indexing, rolling window aggregations
- **NumPy**: Vectorized numerical operations and statistical summaries
- **Jupyter Notebook**: Interactive computational analysis and documentation

### Data Visualization
- **Matplotlib**: Low-level chart customization and distribution histograms
- **Seaborn**: Statistical plotting, KDE distributions, correlation heatmaps, categorical count plots
- **Microsoft Power BI**: Multi-page interactive dashboard, DAX measures, time-intelligence hierarchies, geo-spatial mapping

### Analysis Techniques
- Exploratory Data Analysis (EDA)
- Time-Series Decomposition & Moving Averages
- Outlier & Sensor Anomaly Filtration (IQR Analysis)
- Parametric & Non-Parametric Correlation (Pearson & Spearman)
- Spatial Aggregation & Station Profiling
- Environmental Health Risk Categorization

---

## 🔍 Data Preparation

The dataset was prepared and sanitized for analysis through the following steps:

- **Data Ingestion**: Loaded the comprehensive Excel/CSV dataset containing 52,560 hourly sensor readings into Pandas.
- **Structural Inspection**: Examined column data types, memory footprint, and verified zero null/missing values across all variables.
- **Column Pruning**: Removed non-informative and redundant columns such as `description` (fixed WMO code strings) and standalone `time_ist`.
- **Temporal Parsing**: Standardized the date column (`date_ist`) into native datetime format using `pd.to_datetime(df['date_ist'], dayfirst=True)`.
- **Duplicate Verification**: Confirmed zero duplicate timestamps or sensor observation rows.
- **Distribution Diagnostics**: Generated pre- and post-cleaning descriptive statistics to verify data integrity and range validity across all 14 final attributes.

---

## 📈 Key Performance Indicators

The analysis identified the following baseline atmospheric and pollution metrics across Delhi in 2025:

| Parameter | Mean | 25th Percentile | Median (50%) | 75th Percentile | Peak Maximum | Safe Limit (NAAQS) |
|---|---:|---:|---:|---:|---:|---:|
| **Composite AQI** | **287.4** | 152.0 | 170.0 | 238.0 | **2,742.0** | $\le 100$ (Satisfactory) |
| **PM2.5 ($\mu\text{g/m}^3$)** | **89.5** | 51.1 | 76.4 | 110.4 | **443.3** | $\le 60$ (Annual: 40) |
| **PM10 ($\mu\text{g/m}^3$)** | **300.5** | 80.6 | 151.8 | 325.0 | **3,263.4** | $\le 100$ (Annual: 60) |
| **Carbon Monoxide (CO)** | **863.8** | 464.0 | 664.0 | 1,078.0 | **7,432.0** | $\le 2,000$ |
| **Nitrogen Dioxide (NO2)** | **35.4** | 14.9 | 26.9 | 47.1 | **220.1** | $\le 80$ |
| **Temperature (°C)** | **25.0°C** | 19.5°C | 26.5°C | 30.5°C | **43.8°C** | — |
| **Relative Humidity (%)** | **62.3%** | 44.0% | 65.0% | 82.0% | **100.0%** | — |
| **Wind Speed (km/h)** | **6.6 km/h** | 4.0 km/h | 6.0 km/h | 8.7 km/h | **27.1 km/h** | — |

---

## 🌫️ Particulate Matter Dynamics (PM2.5 & PM10)

Particulate matter represents the single largest contributor to poor air quality across the National Capital Region:

- **Severe Right Skewness**: The histogram and KDE distributions for PM2.5 and PM10 demonstrate extreme right-skewed profiles. While typical days experience median levels of $76.4\,\mu\text{g/m}^3$ (PM2.5), episodic winter inversions drive extreme surges reaching up to **$443.3\,\mu\text{g/m}^3$**.
- **Fine vs Coarse Ratio**: Fine respirable particles (PM2.5) constitute approximately **60% to 70%** of total PM10 mass during winter months, confirming that combustion and secondary chemical aerosols dominate the toxic breathing zone.
- **AQI Determinism**: Over 88% of days classified as "Severe" or "Hazardous" ($	ext{AQI} > 400$) are mathematically governed by particulate exceedances rather than gaseous pollutants (CO or NO2).

---

## 🌡️ Temperature Inversion & Seasonal Thermal Trapping

The data establishes an inverse relationship between surface temperature and air pollution severity:

- **Thermal Inversion Effect ($r = -0.78$)**: When ambient surface temperatures drop during November through January ($5.7^\circ\text{C} - 15.0^\circ\text{C}$), radiative surface cooling prevents vertical atmospheric convection, trapping pollutants within a shallow planetary boundary layer.
- **Summer Dispersion**: In contrast, during peak summer months ($35^\circ\text{C} - 43.8^\circ\text{C}$), strong thermal updrafts and solar convection expand the boundary layer, allowing particulates to disperse rapidly despite elevated regional dust.

---

## 💨 Meteorological Modulation (Wind & Humidity)

- **Atmospheric Stagnation**: Over **74% of critical air emergency episodes** occur when surface wind velocities fall below **$5\,\text{km/h}$**. The lack of advection causes emissions from vehicular and industrial sources to pool locally.
- **Moisture & Smog Synergies**: Elevated humidity ($>80\%$) combined with low night-time temperatures fosters secondary aerosol growth, producing dense, persistent smog blankets.

---

## 📍 Geographical Disparities Across Monitoring Stations

- **Anand Vihar**: Recorded the highest average AQI and particulate load across Delhi, primarily driven by the confluence of heavy interstate diesel bus terminal traffic, local industrial activity, and transboundary drift.
- **IGI Airport**: Showed localized evening spikes in gaseous pollutants (CO and NO2) correlated with high aircraft turnover and heavy freight transport corridors.
- **Residential vs Industrial Zones**: Peripheral transit and commercial transport corridors experience up to **2.4x higher particulate concentrations** than central green belts.

---

## 💡 Policy & Environmental Recommendations

Based on empirical findings from the 52,560 sensor observations:

### 1. Preemptive Graded Response Action Plan (GRAP) Activation
Utilize 48-hour meteorological forecasts (temperature $<15^\circ\text{C}$, wind $<4\,\text{km/h}$, humidity $>80\%$) to trigger localized restrictions before hazardous smog accumulation occurs.

### 2. Micro-Zonal Hotspot Interventions
Deploy anti-smog misting cannons, automated road sweepers, and strict idling enforcement selectively at top-polluting zones such as Anand Vihar.

### 3. Diurnal Freight Rerouting
Restrict heavy commercial freight transit through urban corridors during peak nocturnal inversion hours (10:00 PM – 5:00 AM) when the atmospheric boundary layer is at its thinnest.

### 4. Public Health Alert Systems
Provide automated station-level AQI broadcasts to schools and public transit systems to restrict high-exertion outdoor activities during morning pollution peaks.

---

## 📊 Power BI Dashboard

An interactive Power BI dashboard (`Delhi_Weather_AQI.pbix`) was developed to provide an intuitive command center for exploring environmental observations:

The dashboard enables users to analyze:
- **Executive Environmental Scorecard**: Daily and hourly AQI averages, safe-limit exceedance counters, and severe day tallies.
- **Temporal Pollution Decomposition**: Slicing by month, day of week, and diurnal hour.
- **Meteorological Scatter Visualizer**: Interactive cross-filtering between temperature, humidity, wind velocity, and criteria pollutants.
- **Station-Level Hotspot Benchmarking**: Geospatial comparative views across Delhi monitoring stations.

---

## 📂 Project Structure

```text
Delhi-Weather-and-Air-Quality-Analysis
│
├── Delhi_AQI_2025.ipynb                         # Full Jupyter EDA notebook (data cleaning, charts, stats)
├── Delhi_Weather_AQI.pbix                       # Interactive Power BI business intelligence dashboard
├── Delhi-Weather-and-Air-Quality-Analysis.pptx   # Executive presentation deck & visual findings
└── README.md                                    # Comprehensive project documentation
```
