# 👟 Global Sports Footwear Sales & Consumer Analysis (2018–2026)

## 📊 Project Overview

This project presents an extensive commercial analytics and consumer intelligence study of the global sports footwear industry across an **8-year observation timeline (2018–2026)**. Analyzing **30,000 retail and e-commerce transactions** across 6 global markets, the study evaluates brand market shares, product category velocities, promotional pricing elasticity, and demographic purchasing patterns.

The project integrates **Python-based Exploratory Data Analysis (EDA)**, statistical correlation modeling, and an interactive **Power BI dashboard** to convert multi-currency transactional records into data-driven merchandising, pricing, and inventory strategies.

The analysis focuses on understanding:

- Revenue contribution and growth trajectories across flagship athletic brands (Nike, Adidas, Puma, ASICS, Reebok, Under Armour)
- Category lifecycle analysis across 5 footwear disciplines (Running, Basketball, Lifestyle, Training/Gym, Outdoor/Trail)
- Discount elasticity and margin cannibalization thresholds
- Omnichannel dynamics (Physical retail stores vs. direct-to-consumer online channels)
- Demographic purchasing behavior segmented by customer gender, income strata, and geographical territories
- Customer satisfaction ratings and repeat purchase correlations
- Strategic inventory allocation and promotional calendar optimization

---

## 🎯 Objectives

The primary objectives of this project are to:

1. Preprocess and audit 30,000 multi-attribute retail records, ensuring data consistency and currency standardization.
2. Quantify global revenue generation across brands, models, product categories, and geographical regions.
3. Determine price elasticity of demand—measuring how discount percentages influence sales volume versus gross margin.
4. Compare sales channel efficacy between physical retail stores and digital e-commerce storefronts.
5. Segment customer demographics (gender, income brackets, geographical cohorts) to pinpoint high-LTV buyer personas.
6. Identify the correlation between price points, discount depths, and verified customer satisfaction ratings.
7. Develop strategic business recommendations for retail buyers, brand managers, and commercial merchandisers.

---

## 📁 Dataset

The project analyzes **30,000 transaction records** spanning January 2018 through December 2026 across 6 key commercial footwear markets (USA, UK, Germany, UAE, India, Pakistan).

Each record represents an individual verified customer order.

### Key attributes include:

- `order_id`: Unique order identifier (`ORD100000` to `ORD129999`)
- `order_date`: Date of transaction (`2018-01-01` to `2026-12-31`)
- `brand`: Footwear manufacturer (Nike, Adidas, Puma, ASICS, Reebok, Under Armour)
- `model_name`: Specific footwear model silhouette (899 unique model lines)
- `category`: Performance category (Running, Basketball, Lifestyle, Training, Outdoor)
- `gender`: Target demographic category (Men, Women, Unisex)
- `size`: US footwear shoe size (Sizes 6 to 11)
- `color`: Primary silhouette colorway (Black, White, Grey, Blue, Red)
- `base_price_usd`: Manufacturer suggested retail price / list price in USD ($60 to $219)
- `discount_percent`: Applied promotional discount percentage (0% to 30%)
- `final_price_usd`: Realized transaction price per pair after discount in USD ($42.00 to $219.00)
- `units_sold`: Number of units purchased per order (1 to 4 pairs)
- `revenue_usd`: Total order revenue in USD (`final_price_usd * units_sold`, $42.00 to $876.00)
- `payment_method`: Customer payment tender (Card, Cash, Bank Transfer, Digital Wallet)
- `sales_channel`: Transaction venue (Retail Store vs. Online)
- `country`: Regional market territory (UAE, UK, USA, India, Germany, Pakistan)
- `customer_income_level`: Demographic economic bracket (Low, Medium, High)
- `customer_rating`: Post-purchase customer review rating (3.0 to 5.0 stars)

The dataset contains **30,000 records and 18 initial columns**, expanded to **22 analytical variables** following feature engineering.

---

## 🛠️ Technologies Used

### Data Analysis & Modeling
- **Python 3.10+**
- **Pandas**: Tabular manipulation, datetime extraction, aggregation matrices, categorical encoding
- **NumPy**: Numerical transformations and statistical distributions
- **Jupyter Notebook**: Computational reproducible workflow and visual documentation

### Data Visualization
- **Matplotlib & Seaborn**: Boxplots for revenue outliers, categorical distributions, correlation matrices
- **Microsoft Power BI**: Interactive executive dashboard, DAX calculations, visual slicing by brand/territory/channel

### Analysis Techniques
- Exploratory Data Analysis (EDA)
- Revenue Verification & Mathematical Parity Auditing
- Temporal Decomposition (Year, Month, Quarter)
- Ordinal Feature Encoding (`customer_income_encoded`)
- Multivariate Correlation Analysis
- Customer Demographic Profiling & Segmentation

---

## 🔍 Data Preparation & Feature Engineering

The raw dataset was structured for analysis through the following data engineering pipeline:

- **Ingestion & Integrity Auditing**: Loaded 30,000 transaction records into Pandas; confirmed zero null values across all features.
- **Datetime Parsing**: Converted `order_date` string representations into native datetime format.
- **Temporal Feature Engineering**: Extracted time dimensions to enable longitudinal trend tracking:
  - `year` (2018 through 2026)
  - `month` (1 to 12)
  - `quarter` (Q1 through Q4)
- **Revenue Validation**: Derived `calculated_revenue = final_price_usd * units_sold` and verified 100% mathematical parity against `revenue_usd`.
- **Ordinal Feature Encoding**: Encoded ordered categorical income brackets to numerical rank (`Low` $\rightarrow 1$, `Medium` $\rightarrow 2$, `High` $\rightarrow 3$).
- **Distribution & Outlier Inspection**: Constructed boxplots for `revenue_usd` to assess high-volume basket orders and prevent skewed variance.
- **Column Standardization**: Normalized column headers to lowercase snake_case for reliable programmatic access.

---

## 📈 Key Performance Indicators

The analysis established the following baseline performance benchmarks across global transactions:

| KPI | Value | Description |
|---|---:|---|
| **Total Transactions** | **30,000** | Individual verified customer purchase orders |
| **Total Global Revenue** | **$9,081,448** | Gross sales generated across all categories and channels |
| **Average Order Value (AOV)** | **$302.71** | Average revenue generated per customer transaction |
| **Mean Realized Unit Price** | **$121.03** | Average final selling price per pair after discounts |
| **Mean Base Retail Price** | **$139.63** | Average catalog list price across all models |
| **Average Promotional Discount** | **13.33%** | Catalog-wide promotional discount depth |
| **Average Units per Basket** | **2.50 Pairs** | Mean unit purchase volume per checkout |
| **Customer Satisfaction Score** | **4.00 / 5.0** | Mean verified customer review rating |

---

## 👟 Brand & Product Category Performance

- **Balanced Brand Competition**: Market share among the 6 major athletic brands is highly competitive:
  - **ASICS** leads transaction frequency (**5,132 orders**), followed closely by Under Armour, Nike, Puma, Reebok, and Adidas.
- **Top Product Categories**:
  - **Basketball** generated the highest overall transaction frequency (**6,074 orders**), driven by high youth culture appeal and retro silhouette popularity.
  - **Running** demonstrated the highest average base pricing ($145+) and superior gross margins, with consistent repeat purchase patterns.
  - **Lifestyle & Casual** footwear accounted for steady year-round volume across both retail and online channels.

---

## 🏷️ Pricing Elasticity & Discount Optimization

- **Negative Correlation with Margin ($r = -0.19$)**: While discounts increment unit sales velocity, deeper promotional discounts ($ge 20%$) exhibit diminishing returns, eroding gross dollar margin faster than incremental basket units can compensate.
- **Optimal Promotional Sweet-Spot**: Orders discounted at **10% to 15%** produced the highest net dollar capture without dampening customer perception of brand equity.
- **List Price Sensitivity ($r = 0.56$ with Revenue)**: Base price remains the single strongest positive product-level revenue determinant, demonstrating customer willingness to pay premium tiers for technical performance innovation.

---

## 🛍️ Omnichannel Sales Dynamics (Retail Store vs Online)

- **Channel Parity**: Sales volume is split almost evenly between **Physical Retail Stores (15,009 orders, 50.03%)** and **Direct-to-Consumer Online (14,991 orders, 49.97%)**.
- **Basket Behavior**: Retail in-store shoppers exhibited higher propensity for multiple-pair checkouts (3–4 units) driven by tactile try-on experiences, whereas online shoppers capitalized heavily on seasonal flash promotions.
- **Payment Method Preferences**: Bank transfers (7,686 orders) and Credit/Debit Cards lead transactional settlement, followed by digital cash-on-delivery in emerging regional markets.

---

## 🌍 Geographic & Demographic Purchasing Patterns

- **Market Distribution**: Revenue is distributed across 6 key sovereign markets:
  - **UAE**: 5,118 orders (highest share)
  - **UK**: 5,058 orders
  - **USA**: 5,027 orders
  - **India**: 4,991 orders
  - **Germany**: 4,965 orders
  - **Pakistan**: 4,841 orders
- **Income Bracket Resilience**: High-income customer cohorts (10,059 orders) show near-zero price sensitivity to list-price increases in flagship performance lines, while middle and entry-level tiers drive volume during promotional sale events.
- **Gender Segmentation**: Men's footwear represents the largest dedicated customer category (10,075 orders), with unisex models experiencing rapid market growth.

---

## 💡 Commercial & Merchandising Recommendations

Based on analytical findings from the 30,000 transaction dataset:

### 1. Calibrate Maximum Discount Thresholds at 15%
Cap standard promotional discounts at 15% across core performance lines to eliminate margin degradation.

### 2. Prioritize Running & Basketball Inventory Allocations
Allocate 55%+ of working capital to Basketball and Running product lines, which together drive the largest share of transactional volume and gross margin.

### 3. Synergize Omnichannel Retailing
Implement "BOPIS" (Buy Online, Pick Up In Store) and omnichannel inventory visibility to capture high-margin retail store add-on purchases from digital shoppers.

### 4. Targeted Regional Assortment
Tailor regional distribution: high-end lifestyle and technical silhouettes for UAE and USA markets, and versatile athletic training models for price-conscious growth markets.

---

## 📊 Power BI Dashboard

An interactive Power BI dashboard (`Global_Sports_Footwear_Sales_Dashboard_(2018–2026).pbix`) was developed to present commercial footwear sales intelligence visually:

The dashboard enables users to explore:
- **Global Sales & Revenue Scorecard**: Real-time KPI summaries of gross revenue, AOV, volume velocity, and brand market share.
- **Category & Silhouette Matrix**: Granular drill-downs by brand, category, gender, and colorway.
- **Pricing Elasticity & Discount Analyzer**: Interactive slicers examining the impact of discount bands on profit margins.
- **Geographic & Omnichannel Performance**: Regional heatmaps comparing in-store retail versus e-commerce conversion rates.

---

## 📂 Project Structure

```text
Sports-Footwear-Sales-and-Consumer-Analysis
│
├── Sports_Footwear_Sales _and_Consumer.ipynb                  # Jupyter analysis notebook (cleaning, feature engineering, stats)
├── Global_Sports_Footwear_Sales_Dashboard_(2018–2026).pbix    # Interactive Power BI business intelligence dashboard
├── Global-Sports-Footwear-Sales-Analysis-2018-2026 (1).pptx   # Executive presentation deck & strategy slides
└── README.md                                                  # Comprehensive project documentation
```
