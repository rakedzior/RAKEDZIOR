// Mock data for Rafał Kędzior's Portfolio

export const personalInfo = {
  name: "Rafał Kędzior",
  title: "Data Analyst | BI Developer | Analytics Engineer",
  tagline: "Turning complex data into decision-ready insights through analytics engineering and BI.",
  location: "Cracow, Poland",
  email: "ra.kedzior@gmail.com",
  phone: "+48 790-591-100",
  linkedin: "https://www.linkedin.com/in/rafalkedzior",
  github: "https://github.com/rafalkedzior",
  photo: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/2u3jlg3m_1761838013555.jpg",
  yearsOfExperience: "5+",
  projectsCompleted: "100+"
};

export const aboutMe = {
  whatIDo: "I'm a Data Analyst & Analytics Engineer with 5+ years of experience in analytics, data modeling, and BI delivery. I specialize in building ELT pipelines, dimensional models, and KPI dashboards that support operational and decision analytics.",
  howIWork: "I transform raw data into strategic insights using modern data stack technologies. I work in a task-based consulting model, supporting stakeholders with operational reporting, reconciliation workflows, and data validation processes. I collaborate closely with teams across departments and geographies, translating complex technical concepts into business value and aligning stakeholders around data-driven initiatives.",
  lookingFor: "I'm interested in roles where I can apply Python, SQL, Snowflake, and Tableau to build analytics solutions with measurable business impact — working closely with cross-functional teams and leading analytical initiatives that support strategic decision-making."
};

export const skills = {
  analytics: {
    title: "Analytics",
    subtitle: "Translating raw data into validated insights and risk-aware decisions",
    skills: [
      "Exploratory Data Analysis (EDA)",
      "KPI Definition and Tracking",
      "Exception / Anomaly Detection",
      "Reconciliation and Data Validation",
      "Root Cause Analysis",
      "Business Logic Translation (policy → metrics)",
      "Statistical Analysis",
      "Predictive Modeling (basic ML where relevant)",
      "Ad-hoc Analysis for Stakeholders"
    ],
    tools: ["Python (pandas, NumPy, scikit-learn)", "SQL", "Excel (advanced)"]
  },
  biVisualization: {
    title: "BI & Visualization",
    subtitle: "Building fast, decision-ready dashboards used by real teams",
    skills: [
      "Dashboard Design (executive & operational)",
      "KPI Frameworks",
      "Performance Optimization (load time, filters)",
      "Stakeholder-focused Storytelling",
      "Self-service BI Enablement",
      "Data Usability & Adoption"
    ],
    tools: ["Tableau", "Qlik Sense", "Power BI", "UX Patterns for Analytics"]
  },
  dataModeling: {
    title: "Data Modelling & Analytics Engineering",
    subtitle: "Designing analytics-ready data layers that scale",
    skills: [
      "Dimensional Modeling (facts & dimensions)",
      "ELT / Transformation Pipelines",
      "dbt Models (staging → intermediate → marts)",
      "Data Quality Checks & Testing",
      "Schema Design for Analytics",
      "Data Lineage & Documentation",
      "Performance-aware SQL Design"
    ],
    tools: ["Snowflake", "dbt Cloud", "SQL", "Git", "GCP"]
  }
};

export const experience = [
  {
    id: 1,
    title: "Data Analyst & Analytics Engineer",
    company: "Kalderos",
    type: "Contract",
    location: "Boston, United States (Remote)",
    period: "Oct 2024 - Feb 2026",
    achievements: [
      "Created a Noncompliance KPI Dashboard combining Excel/SQL/Tableau into one unified view, enhancing insight into 10+ KPIs, dispute outcomes, and resolution strategies",
      "Built dashboards tracking 6,000+ Covered Entities lifecycle, improving onboarding transparency and reducing manual checks by 40%",
      "Refactored Tableau performance, reducing load time from 10s to 5s and filter time from 20s to 3s (~90% faster), accelerating revenue recovery workflows",
      "Designed end-to-end ELT pipelines in dbt Cloud (staging → intermediate → marts) modeling claims, dispute, and onboarding data in Snowflake",
      "Identified ~83k aged claims from 600k+ dataset, supporting ~$80M potential revenue recovery"
    ]
  },
  {
    id: 2,
    title: "Data Analytics Consultant",
    company: "HSBC",
    type: "Task-Based",
    location: "Cracow, Poland",
    period: "Apr 2022 - Present",
    achievements: [
      "Delivered sanctions compliance analytics across 4 countries, increasing accuracy by ~22% and reducing investigative workflow from multi-week to one-week cycle",
      "Led Poland analytics team in Sectorial Exposures Review uncovering $9B exposure discrepancies across 6 sectors, prompting senior management remediation plans",
      "Developed ML model to predict clients entering forbearance, enabling proactive risk identification",
      "Reconciled Business Services data across systems, identifying 5 of 248 services lacking coverage and building exploratory dashboard for gap investigation",
      "Created secure Python/Flask data analysis tool for non-technical users, bypassing software restrictions while maintaining data governance"
    ]
  },
  {
    id: 3,
    title: "Pricing Data Analyst",
    company: "Verisk Analytics",
    type: "Full-Time",
    location: "Cracow, Poland",
    period: "Oct 2020 - Mar 2022",
    achievements: [
      "Conducted quarterly pricing reviews for auto insurance products, validating completeness and pricing assumptions across hundreds of submissions",
      "Automated validation workflows, reducing review time by ~40% and improving data quality for actuarial modeling",
      "Coordinated pricing discussions between actuarial, underwriting, and data ops teams, reducing clarification cycles",
      "Implemented anomaly detection using logistic regression to flag irregular loss cost patterns during pricing reviews"
    ]
  },
  {
    id: 4,
    title: "Junior Financial Representative",
    company: "Brown Brothers Harriman",
    type: "Full-Time",
    location: "Cracow, Poland",
    period: "Oct 2019 - Sep 2020",
    achievements: [
      "Processed financial transactions and prepared recurring operational reports for institutional clients",
      "Assisted in exception handling and reconciliation activities, ensuring accuracy and compliance",
      "Contributed to procedure enhancements improving operational consistency and reducing manual dependencies"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science",
    field: "Information Technology & Econometrics",
    university: "AGH University of Kraków",
    location: "Cracow, Poland",
    period: "2018 - 2020"
  },
  {
    id: 2,
    degree: "Bachelor of Science",
    field: "Information Technology & Econometrics",
    university: "AGH University of Kraków",
    location: "Cracow, Poland",
    period: "2015 - 2018"
  }
];

export const portfolio = [
  {
    id: 1,
    title: "Noncompliance KPI Metrics",
    subtitle: "Dashboard",
    industry: "Pharmaceutical",
    description: "Rebuilt MDRP compliance dashboard with pre-aggregated data model, reducing load times by 60% and filter response by 90%. Dashboard tracks 10+ KPIs across noncompliance, disputes, and resolutions, supporting internal teams, Customer Success, and Quarterly Business Reviews.",
    problem: "Legacy dashboard suffered from severe performance issues due to 45M row dataset with 5 separate data sources requiring multiple joins. Load times exceeded 10 seconds, filters took 20+ seconds to apply, and users experienced frequent timeouts. The raw claim granularity made analysis difficult and hindered strategic decision-making for Customer Success teams.",
    approach: "Created pre-aggregated KPI model (agg_claims_kpis) consolidating claims data across key business dimensions:\n\n• Reduced dataset from 45M to 1.5M rows while maintaining full analytical depth\n• Implemented standardized KPI flag logic via seed mappings\n• Rebuilt 9 dashboard reports with optimized data structure\n• Prototyped and benchmarked performance before production deployment\n\nCentralized five separate data sources into single unified model, enabling faster filtering and drill-down analysis across clients, programs, products, CEs, states, and time periods.",
    tools: ["Tableau", "SQL", "Snowflake", "dbt Cloud", "Data Modeling"],
    outcomes: [
      "Reduced dashboard load times by 60% (from ~10s to ~4s)",
      "Improved filter response time by 90% (from ~20s to ~2s)",
      "Consolidated 5 data sources into single pre-aggregated model",
      "Reduced row count from 45M to 1.5M while preserving analytical capability",
      "Enhanced Customer Success team's ability to make strategic CE outreach decisions",
      "Dashboard now used across Internal Operations, Customer Success, and executive QBRs",
      "Established reusable pattern for optimizing other dashboards with similar performance issues"
    ],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/8k6h2ojk_proper.png",
    screenshots: [
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/8k6h2ojk_proper.png"
    ],
    disableZoom: true
  },
  {
    id: 2,
    title: "Covered Entity Onboarding",
    subtitle: "Dashboard",
    industry: "Pharmaceutical",
    description: "Built interactive CE onboarding visibility dashboard tracking 24,000+ Covered Entities across 4-gate onboarding process. Matrix-based design with drill-down capabilities enables operational teams to identify bottlenecks and prioritize follow-ups, improving onboarding transparency and reducing stagnation.",
    problem: "Internal Kalderos teams lacked visibility into Covered Entities (CE) onboarding process in Truzo system. Unable to identify CEs stuck in specific onboarding steps or track time-to-completion across the pipeline. Manual investigation required to understand bottlenecks, preventing data-driven prioritization of follow-ups and stakeholder outreach.",
    approach: "Designed interactive matrix visualization showing onboarding gates vs. Days Since Last Activity buckets. Built two dbt data models:\n\n• Gate x Day Matrix: Generated all gate/day combinations with CE counts for each cell, including empty ones for full landscape visibility\n• CE Detail View: Provided drill-down to individual CE information with key metrics\n\nImplemented show/hide switches for empty gates/days/combinations and multi-attribute filters. Added minimal context-based instructions for user guidance. Solution designed for scalability and operational efficiency.",
    tools: ["Tableau", "SQL", "Snowflake", "dbt Cloud", "Data Visualization"],
    outcomes: [
      "Provided end-to-end visibility of 24,000+ CE onboarding activities",
      "Enabled quick identification of stagnant CEs (752 in progress, 2,175 completed)",
      "Reduced manual investigation time through interactive drill-down from matrix to CE details",
      "Supported data-driven prioritization of onboarding follow-ups and Customer Success outreach",
      "Designed scalable solution adaptable to operational process changes",
      "Delivered actionable insights for operational efficiency improvements"
    ],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/0h3sly3e_Dashboard%20Ready.png",
    screenshots: [
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/0h3sly3e_Dashboard%20Ready.png"
    ],
    note: "All CE numbers, IDs, and contact information shown in dashboard screenshots are anonymized/randomized to protect confidential client data.",
    disableZoom: true
  },
  {
    id: 3,
    title: "Sectorial Exposures Review",
    industry: "Banking",
    description: "Led analytics for Tier 1 Global Bank's High Transition Risk Sectors climate risk reporting initiative, covering multi-billion dollar portfolio across key global markets. Identified structural data quality issues affecting material exposure discrepancies, prompting enterprise-wide remediation and strengthened governance controls.",
    problem: "Climate-related regulatory reporting relied on complex upstream reference data with inconsistent entity hierarchies and sector classifications across global portfolios. The underlying data represented exposures at multi-billion scale, where accuracy, consistency, and traceability were critical for regulatory compliance. Misalignment in how entities were grouped or classified could influence reported exposures at material scale, creating regulatory and reputational risk.",
    approach: "Applied analytics-driven assurance methodology combining:\n\n• Large-scale data analysis to detect inconsistencies in entity hierarchies and sector attributes across EMEA and APAC portfolios\n• Sample-based validation across higher-risk and standard portfolios\n• Cross-source comparison of key reference data used for aggregation\n• End-to-end review of data lineage from source systems to regulatory outputs\n\nPerformed iterative analysis across reporting cycles, distinguishing structural consistency challenges (entity grouping) from classification accuracy challenges (sector attributes). Executed root-cause analysis to separate data modeling issues from attribute-level errors.",
    tools: ["SQL", "Python", "GCP", "Tableau", "Excel", "Data Quality Analytics"],
    outcomes: [
      "Uncovered material exposure discrepancies across 6 high-transition-risk sectors",
      "Identified critical data integrity issues requiring senior management attention and remediation",
      "Prompted enterprise-wide strengthening of exposure reporting controls across jurisdictions",
      "Improved confidence in climate-related regulatory reporting for large global portfolio",
      "Reduced risk of material misstatement in sector-level ESG disclosures",
      "Strengthened data lineage transparency and governance practices",
      "Established analytics-led assurance framework for complex regulatory environments"
    ],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/5upbjyck_SECTORIAL.png"
  },
  {
    id: 4,
    title: "Review Capacity Dashboard",
    industry: "Banking",
    description: "Built comprehensive capacity planning and utilization dashboard consolidating data from 6 internal Helios data sources. Weekly-refreshed dashboard serves as operational backbone for resource allocation, enabling drill-down from program-level metrics to individual employee utilization across 845,091 review hours and 312 planned reviews.",
    problem: "Review capacity planning relied on fragmented data across 6 separate systems within Helios, making it difficult to understand true resource utilization, identify bottlenecks, or optimize assignments. No unified view existed for tracking planned vs actual reviews, employee workload distribution, or program-level capacity constraints. Manual reconciliation of assignment data was time-consuming and prone to inconsistency, preventing data-driven staffing decisions.",
    approach: "Consolidated 6 Helios data sources through complex merge logic to create unified capacity model:\n\n• Integrated review planning data (planned reviews, F/LB reviews, targets)\n• Merged employee assignment data across multiple review categories (HR Audit, IT Review, Sunity Audit, etc.)\n• Consolidated actual review hours and completion metrics\n• Built multi-level aggregation supporting drill-down from program → project → employee\n• Implemented weekly automated refresh pipeline ensuring data currency\n\nDesigned interactive dashboard with multiple distribution views: by outcome (Rodigon Cltoter Assoverance), by review type (Scotten Recline Assurance), by authority entity, and by plan activity. Created flexible filtering enabling users to analyze specific projects and employee assignments. Developed open findings tracking module showing assigned, pending MAP3, and other categories.",
    tools: ["Tableau", "SQL", "Helios", "Data Integration", "ETL"],
    outcomes: [
      "Unified 6 fragmented Helios data sources into single operational dashboard",
      "Enabled tracking of 845,091 actual review hours vs 724.99% recommendation target",
      "Provided visibility into 312 planned reviews with 248 actual reviews (below plan by 64)",
      "Created drill-down capability from program-level metrics to individual employee utilization",
      "Established weekly automated refresh ensuring stakeholders work with current data",
      "Improved resource allocation decisions through distribution analysis across 10+ review categories",
      "Tracked 540 assigned findings with clear visibility into pending MAP3 (32) and other categories (178)",
      "Became operational backbone for capacity planning and utilization management across organization"
    ],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/q36k332y_image.png",
    screenshots: [
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/q36k332y_image.png"
    ],
    disableZoom: true
  },
  {
    id: 5,
    title: "Sanctions Compliance Analytics",
    industry: "Banking",
    description: "Delivered multi-jurisdictional sanctions compliance analytics across Poland, Germany, India, and UAE. Produced exception findings and non-compliant entity lists, increasing accuracy by 22% and reducing investigative cycles from weeks to days.",
    problem: "Manual sanctions screening processes across multiple jurisdictions were time-consuming, inconsistent, and prone to gaps in coverage.",
    approach: "Built automated screening logic, created exception dashboards with drill-through capabilities, and established repeatable analytical workflows across regions.",
    tools: ["SQL", "Python", "Tableau", "Excel"],
    outcomes: [
      "Increased compliance accuracy by ~22%",
      "Reduced investigative workflow from multi-week to one-week cycle",
      "Enabled data-driven risk prioritization",
      "Improved cross-jurisdictional consistency"
    ],
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
  },
  {
    id: 6,
    title: "Probabilistic Aging & De-Aging Model",
    industry: "Pharmaceutical",
    description: "Designed end-to-end data-driven aging framework addressing a core financial problem in Medicaid rebate dispute management: ~80% of disputed claims remain indefinitely in Open or Impasse states, creating cash flow uncertainty under pay-and-chase model. Solution replaces static aging assumptions with transparent, auditable, extensible analytical model built in Snowflake and dbt, enabling manufacturers to withhold rebate payments probabilistically based on empirical state response behavior.",
    problem: "Approximately 80% of disputed noncompliant claims remained indefinitely in Open or Impasse states, creating significant financial and operational challenges. Clients were hesitant to adopt aging-based invoicing due to perceived risks of late adverse state resolutions, CE verification reversals, and unpredictable shifts in state response behavior over time. Existing aging logic relied on mean days-to-response metrics, which inadequately captured tail risk and failed to account for evolving state behavior patterns. The lack of a robust, auditable framework prevented adoption of probabilistic invoicing strategies that could materially improve cash flow and reduce unnecessary rebate payments.",
    approach: "Performed comprehensive 7-quarter retrospective analysis using claim audit logs to simulate point-in-time aging decisions and quantify true de-aging risk:\n\n• Reconstructed claim status as-of historical analysis dates to simulate real-world aging decisions\n• Derived state-specific response distributions across multiple percentiles (average, median, 75th, 90th)\n• Tracked CE verification timing relative to aging thresholds to identify reversal patterns\n• Measured post-aging outcomes including MFR wins, MFR losses, CE verifications, and continued aging claims\n• Analysis demonstrated aging risk materially differs between Open vs Impasse claims, and states increasingly respond later\n\nImplemented production-grade aging lifecycle model with three core design elements:\n\n• Dynamic Aging Qualification: Claims qualify as aged only after exceeding state-aware threshold (later of 548-day baseline or state-specific average response time), balancing conservatism with adaptability\n• Explicit Lifecycle Management: Formal aging/de-aging workflow with strict temporal guarantees—aging triggered only when claim is Open/Impasse and date ≥ qualification threshold; de-aging allowed only for controlled resolution statuses occurring after both qualification date and first aging timestamp\n• Open → Impasse Transition Tracking: Captured first valid transition to Impasse after aging for risk stratification and temporal analysis of state behavior\n\nBuilt incremental dbt models (aged_claims_daily with merge strategy, snapshot_aged_claims_quarterly) with idempotent logic preserving first-event semantics. Implemented comprehensive dbt tests enforcing lifecycle integrity: no premature aging/de-aging, chronological consistency, prevention of future-dated records, and requirement that de-aging cannot occur without prior aging.",
    tools: ["Snowflake", "dbt Cloud", "SQL", "Data Modeling", "Statistical Analysis", "Window Functions"],
    outcomes: [
      "Demonstrated aging should be limited to Open claims under current state behavior patterns",
      "Quantified true risk of de-aging through 7-quarter historical simulation across multiple scenarios",
      "Proved more restrictive thresholds (90th percentile) reduce absolute loss dollars vs average-based logic",
      "Established scalable foundation for probabilistic invoicing and risk-weighted credit strategies",
      "Delivered production-grade, auditable aging framework suitable for regulatory and financial scrutiny",
      "Enabled temporal analysis revealing states increasingly respond later, often converting Open claims to Impasse rather than resolving",
      "Implemented comprehensive data quality controls through dbt tests enforcing lifecycle integrity and chronological consistency",
      "Provided quantitative evidence addressing client concerns around adverse outcomes and adoption hesitancy",
      "Created extensible framework supporting future ML-based de-aging prediction models"
    ],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];
