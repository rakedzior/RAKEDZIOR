// Mock data for Rafał Kędzior's Portfolio

export const personalInfo = {
  name: "Rafał Kędzior",
  title: "Data Analyst | BI Developer | Analytics Engineer",
  tagline:
    "Turning complex data into decision-ready insights through analytics engineering and BI.",
  location: "Cracow, Poland",
  email: "ra.kedzior@gmail.com",
  phone: "+48 790-591-100",
  linkedin: "https://www.linkedin.com/in/rafalkedzior",
  github: "https://github.com/rafalkedzior",
  photo:
    "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/ebwngot6_Generated.png",
  yearsOfExperience: "5+",
  projectsCompleted: "100+"
};

export const aboutMe = {
  whatIDo:
    "I'm a Data Analyst & Analytics Engineer with 5+ years of experience in analytics, data modeling, and BI delivery. I specialize in building ELT pipelines, dimensional models, and KPI dashboards that support operational and decision analytics.",
  howIWork:
    "I transform raw data into validated insights using modern data stack technologies. I work in a task-based consulting model, supporting stakeholders with operational reporting, reconciliation workflows, and data validation processes. I collaborate closely with teams across departments and geographies, translating complex technical concepts into business value and aligning stakeholders around data-driven initiatives.",
  lookingFor:
    "I'm interested in roles where I can apply Python, SQL, Snowflake, dbt Cloud, and Tableau to build analytics solutions with measurable business impact — working closely with cross-functional teams and leading analytical initiatives that support strategic decision-making."
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
      "Predictive Modeling (where relevant)",
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
    title: "Data Modeling & Analytics Engineering",
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
    tools: ["Snowflake", "dbt Cloud", "SQL", "Git"]
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
      "Created a Noncompliance KPI Dashboard combining Excel/SQL/Tableau into one view, improving insight into 10+ KPIs, dispute outcomes, bottlenecks, and resolution strategies",
      "Built dashboards tracking 6,000+ Covered Entities lifecycle (days-in-step, reconciliation, and validation), improving onboarding transparency and reducing manual checks",
      "Refactored Tableau performance, reducing load time from ~10s to ~5s and filter time from ~20s to ~3s (~90% faster), increasing adoption and accelerating revenue recovery workflows",
      "Designed and owned end-to-end ELT pipelines in dbt Cloud (staging → intermediate → marts) modeling claims, disputes, and onboarding data in Snowflake for downstream dashboards used by client-facing teams",
      "Identified tens of thousands of aged claims (~15% of open/impasse volume) as actionable recovery opportunities, representing approximately $80M in potential revenue"
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
      "Delivered sanctions compliance analytics across Poland, Germany, India, and the UAE, increasing compliance accuracy by ~22% and reducing a multi-week investigative workflow to a one-week refreshable cycle",
      "Led the Poland Analytics Team in a comprehensive Sectorial Exposures review for a multi-billion dollar portfolio, uncovering material discrepancies across high-transition-risk sectors and strengthening governance controls",
      "Developed a machine learning model to predict clients likely to enter forbearance, enabling proactive identification of emerging risks within controls assurance workflows",
      "Reconciled Business Services data between systems and rebuilt lineage across Business Services → Processes → Risks → L1 → L2 Controls; identified 5 out of 248 services lacking coverage and built an exploratory dashboard for linkage gap investigation",
      "Created a secure Python/Flask data analysis tool for non-technical users, enabling data upload, summary generation, inconsistency detection, and visualization while adhering to data governance"
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
      "Conducted quarterly pricing reviews for auto insurance products, validating completeness, consistency, and pricing assumptions across hundreds of submissions",
      "Automated validation workflows previously based on manual inspection, reducing review time by ~40% and improving data quality for actuarial modeling",
      "Coordinated pricing discussions across actuarial, underwriting, and data operations teams, improving transparency and reducing clarification cycles",
      "Implemented anomaly detection using logistic regression to flag irregular loss cost and rate change patterns during pricing reviews"
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
      "Assisted in exception handling and reconciliation activities, ensuring accuracy and procedural compliance",
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
    id: 6,
    title: "Aging & De-Aging Claims",
    subtitle: "Analytics Model",
    industry: "Pharmaceutical",
    description:
      "Designed a data-driven aging framework for Medicaid rebate disputes where manufacturers may be charged duplicate discounts. When an incorrect rebate is suspected, Good Faith Inquiry (GFI) claims are sent to Covered Entities and/or states to validate the dispute. If no response is received after a state-aware threshold, the claim is classified as Aged and can be invoiced; any later response triggers controlled De-Aging.",
    problem:
      "A large share of disputed claims remained indefinitely unresolved, creating cash flow uncertainty and operational inefficiency under a pay-and-chase model. Mean-based aging logic failed to capture tail risk and evolving response behavior, and clients were concerned about late adverse responses after invoicing.",
    approach:
      "Built an auditable aging/de-aging lifecycle using historical claim audit logs to simulate point-in-time decisions and quantify de-aging risk:\n\n• Reconstructed claim status as-of historical analysis dates\n• Derived state-specific response distributions across multiple percentiles\n• Measured post-aging outcomes, including wins, losses, verifications, and continued aging\n• Separated risk profiles for Open vs Impasse states and monitored shifts in response timing over time\n\nImplemented a production-grade lifecycle model with:\n\n• State-aware aging qualification thresholds (baseline + state behavior)\n• Explicit aging and de-aging controls with temporal guarantees\n• Tracking of Open → Impasse transitions after aging for risk stratification\n\nBuilt incremental dbt models with idempotent logic and comprehensive tests enforcing lifecycle integrity and chronological consistency.",
    outcomes: [
      "Quantified de-aging risk through historical simulation across multiple scenarios",
      "Demonstrated that conservative thresholds reduce loss exposure versus mean-based aging",
      "Delivered an auditable framework suitable for financial and compliance scrutiny",
      "Enabled empirical decisioning for invoicing strategy on unresolved disputes",
      "Implemented robust data quality controls through dbt testing",
      "Created an extensible foundation for future ML-based risk modeling"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git", "Tableau"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/yv5mx53i_Aging%20DeAging.jpg",
    disableZoom: true
  },
  {
    id: 1,
    title: "Noncompliance KPI Metrics",
    subtitle: "Dashboard",
    industry: "Pharmaceutical",
    description:
      "Enabled Customer Success and internal operations teams to proactively manage MDRP noncompliance by rebuilding a performance-constrained dashboard into a KPI-driven analytics layer.",
    problem:
      "The legacy dashboard suffered from severe performance issues due to a 45M-row dataset sourced from five separate systems. Load times exceeded 10 seconds, filters took 20+ seconds to apply, and frequent timeouts hindered analysis. Raw claim-level granularity made strategic decision-making difficult for Customer Success teams.",
    approach:
      "Created a pre-aggregated KPI model consolidating claims data across key business dimensions:\n\n• Reduced dataset from 45M to 1.5M rows while maintaining full analytical depth\n• Implemented standardized KPI flag logic via seed mappings\n• Rebuilt 9 dashboard reports with optimized data structure\n• Prototyped and benchmarked performance before production deployment\n\nCentralized five separate data sources into a single unified model, enabling faster filtering and drill-down analysis across clients, programs, products, CEs, states, and time periods.",
    outcomes: [
      "Reduced dashboard load times by 60% (from ~10s to ~4s)",
      "Improved filter response time by 90% (from ~20s to ~2s)",
      "Consolidated 5 data sources into a single pre-aggregated model",
      "Reduced row count from 45M to 1.5M while preserving analytical capability",
      "Enhanced Customer Success team's ability to make strategic CE outreach decisions",
      "Dashboard now used across Internal Operations, Customer Success, and executive QBRs",
      "Established a reusable pattern for optimizing other dashboards with similar performance issues"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git", "Tableau"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/8k6h2ojk_proper.png",
    screenshots: [
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/8k6h2ojk_proper.png"
    ],
    disableZoom: true
  },
  {
    id: 3,
    title: "Sectorial Exposures",
    subtitle: "Analytics Review",
    industry: "Banking",
    description:
      "Led analytics for a Tier 1 global bank’s climate risk reporting initiative, covering a multi-billion-dollar portfolio across key global markets. The work identified structural data quality issues driving material exposure discrepancies and informed remediation prioritization and strengthened governance controls.",
    problem:
      "Climate-related regulatory reporting relied on complex upstream reference data with inconsistent entity hierarchies and sector classifications across global portfolios. Given the multi-billion-dollar exposure scale, inaccuracies posed material regulatory and reputational risk.",
    approach:
      "Applied an analytics-driven assurance methodology combining:\n\n• Large-scale analysis of entity hierarchies and sector attributes across EMEA and APAC portfolios\n• Sample-based validation of higher-risk and standard portfolios\n• Cross-source comparison of reference data used for aggregation\n• End-to-end review of data lineage from source systems to regulatory outputs\n\nPerformed iterative analysis across reporting cycles, separating structural modeling issues from attribute-level classification errors through root-cause analysis.",
    outcomes: [
      "Uncovered material exposure discrepancies across six high-transition-risk sectors",
      "Identified critical data integrity issues requiring senior management attention",
      "Provided evidence to prioritize remediation of high-risk exposure reporting issues",
      "Strengthened exposure reporting controls across jurisdictions",
      "Improved confidence in climate-related regulatory disclosures",
      "Reduced risk of material misstatement in sector-level ESG reporting",
      "Established an analytics-led assurance framework for complex regulatory environments"
    ],
    tools: ["Python", "SQL (SQL Server)", "Qlik Sense", "Excel"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/opqe6n0p_TR6_FINAL.png",
    disableZoom: true
  },
  {
    id: 5,
    title: "Governance Oversight",
    subtitle: "Web Application",
    industry: "Banking",
    description:
      "Architected and developed a full-stack governance solution replacing an Excel-based QC workflow. The resulting analytics layer enabled leadership to track compliance metrics over time and identify regional governance issues.",
    problem:
      "Quality Control checks were managed through offline Excel files, creating operational risk due to human error and data silos. Leadership lacked visibility into historical trends and regional governance performance.",
    approach:
      "Designed and implemented an end-to-end workflow:\n\n• Built Python-based validation and data handling processes for QC results\n• Implemented a SQL Server backend to persist outcomes and support reporting\n• Modeled governance metrics and trends for leadership monitoring in Qlik Sense\n\nThe solution established an auditable foundation for tracking governance performance over time.",
    outcomes: [
      "Replaced an error-prone Excel workflow with centralized, persistent tracking",
      "Enabled live calculation of governance compliance metrics and trend reporting",
      "Improved visibility into regional governance performance for targeted remediation",
      "Reduced operational risk by structuring QC outcomes as analytics-ready data"
    ],
    tools: ["Python", "SQL (SQL Server)", "Qlik Sense", "Excel"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/jvyx7x9o_Governance.png",
    screenshots: [
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/jvyx7x9o_Governance.png"
    ],
    disableZoom: true
  },
  {
    id: 4,
    title: "Review Capacity",
    subtitle: "Dashboard",
    industry: "Banking",
    description:
      "Built a capacity planning and utilization dashboard consolidating data from multiple internal review systems. The weekly-refreshed solution supports resource allocation by enabling managers to identify bottlenecks and rebalance workloads from program level down to individual utilization.",
    problem:
      "Capacity planning relied on fragmented data across multiple systems, preventing a unified view of resource utilization, plan versus actual delivery, and employee workload distribution. Manual reconciliation was time-consuming and error-prone, limiting effective staffing decisions.",
    approach:
      "Consolidated planning, assignment, and actuals data into a unified capacity model:\n\n• Integrated planning data, targets, and completion metrics\n• Merged reviewer assignments across review categories\n• Built drill-down from program → project → employee\n• Implemented a weekly refresh process to ensure data currency\n\nDesigned interactive views and filters in Qlik Sense to support operational and leadership decisions.",
    outcomes: [
      "Unified fragmented capacity data into a single operational dashboard",
      "Improved visibility into utilization and staffing constraints",
      "Enabled drill-down from program-level to employee-level workload analysis",
      "Supported data-driven workload rebalancing decisions",
      "Established a reliable weekly refresh cadence for stakeholders"
    ],
    tools: ["Python", "SQL (SQL Server)", "Qlik Sense", "Excel"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/q36k332y_image.png",
    screenshots: [
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/q36k332y_image.png"
    ],
    disableZoom: true
  },
  {
    id: 2,
    title: "Covered Entity Onboarding",
    subtitle: "Dashboard",
    industry: "Pharmaceutical",
    description:
      "Built an interactive CE onboarding visibility dashboard tracking 24,000+ Covered Entities across a 4-gate onboarding process. The matrix-based design enables operational teams to quickly identify stalled entities, prioritize follow-ups, and actively manage onboarding throughput.",
    problem:
      "Internal teams lacked visibility into the Covered Entity onboarding process within the Truzo system. They were unable to identify CEs stuck in specific onboarding steps or track time-to-completion across the pipeline, requiring manual investigation and preventing data-driven prioritization.",
    approach:
      "Designed an interactive matrix visualization showing onboarding gates versus Days Since Last Activity buckets. Built two dbt data models:\n\n• Gate × Day matrix generating all gate/day combinations, including empty ones for full visibility\n• CE-level detail view enabling drill-down to individual entities with key metrics\n\nImplemented show/hide logic for empty gates and buckets, multi-attribute filters, and minimal in-context guidance. The solution was designed for scalability and operational efficiency.",
    outcomes: [
      "Provided end-to-end visibility of 24,000+ CE onboarding activities",
      "Enabled quick identification of stalled Covered Entities",
      "Reduced manual investigation time through interactive drill-down from matrix to CE details",
      "Supported data-driven prioritization of onboarding follow-ups and Customer Success outreach",
      "Designed a scalable solution adaptable to operational process changes",
      "Enabled operations teams to proactively manage onboarding backlog instead of relying on ad-hoc investigations"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git", "Tableau"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/0h3sly3e_Dashboard%20Ready.png",
    screenshots: [
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/0h3sly3e_Dashboard%20Ready.png"
    ],
    disableZoom: true
  }
];
