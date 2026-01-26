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
  photo: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/ebwngot6_Generated.png",
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
      "Ad-hoc Analysis for Stakeholders"
    ],
    tools: ["Python", "SQL", "Excel (advanced)"]
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
    tools: ["Tableau", "Qlik Sense", "Power BI"]
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
      "Created a Noncompliance KPI Dashboard combining Excel/SQL/Tableau into one unified view, enhancing insight into 10+ KPIs, dispute outcomes, and resolution strategies",
      "Built dashboards tracking 6,000+ Covered Entities lifecycle, improving onboarding transparency and reducing manual checks by 40%",
      "Refactored Tableau performance, reducing load time from ~10s to ~5s and filter time from ~20s to ~3s (~90% faster), accelerating revenue recovery workflows",
      "Designed end-to-end ELT pipelines in dbt Cloud (staging → intermediate → marts) modeling claims, dispute, and onboarding data in Snowflake",
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
      "Delivered sanctions compliance analytics across 4 countries, increasing accuracy by ~22% and reducing investigative workflow from multi-week to one-week cycle",
      "Led the Poland Analytics Team in a comprehensive Sectorial Exposures review for a multi-billion dollar portfolio, uncovering material discrepancies across high-transition-risk sectors and strengthening governance controls",
      "Developed ML model to predict clients entering forbearance, enabling proactive risk identification",
      "Reconciled Business Services data across systems, identifying 5 of 248 services lacking coverage and building an exploratory dashboard for gap investigation",
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

// Portfolio order optimized for recruiters:
// 1) Flagship decision analytics (Aging) -> 2) AE/performance -> 3) Enterprise governance
// 4) Full-stack governance tooling -> 5) Operational capacity -> 6) Ops dashboard
export const portfolio = [
  {
    id: 6,
    title: "Aging & De-Aging Claims",
    subtitle: "Analytics Model",
    industry: "Pharmaceutical",
    description:
      "Designed a data-driven aging framework for Medicaid rebate disputes, where pharmaceutical manufacturers may be charged duplicate discounts. When an incorrect rebate is suspected, Good Faith Inquiry (GFI) claims are sent to Covered Entities or states for validation. If no response is received after a state-aware threshold, the claim is classified as Aged and invoiced; any later response triggers controlled De-Aging.",
    problem:
      "A large share of disputed claims remained indefinitely unresolved, creating cash flow uncertainty under a pay-and-chase model. Existing mean-based aging logic failed to capture tail risk and evolving response behavior, limiting adoption of data-driven invoicing strategies.",
    approach:
      "Built an auditable aging/de-aging lifecycle using historical claim audit logs to simulate point-in-time decisions:\n\n• Reconstructed claim status as-of historical analysis dates\n• Derived state-specific response distributions across multiple percentiles\n• Measured post-aging outcomes and separated risk profiles for Open vs Impasse claims\n\nImplemented a production-grade lifecycle with state-aware thresholds, explicit aging/de-aging controls, and Open → Impasse transition tracking. Delivered incremental dbt models with idempotent logic and tests enforcing lifecycle integrity.",
    outcomes: [
      "Quantified de-aging risk through historical simulation",
      "Demonstrated that conservative thresholds reduce loss exposure",
      "Delivered an auditable framework suitable for financial scrutiny",
      "Enabled empirical decision-making for invoicing unresolved disputes",
      "Established a scalable foundation for future analytics extensions"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git"],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/yv5mx53i_Aging%20DeAging.jpg",
    disableZoom: true
  },
  {
    id: 1,
    title: "Noncompliance KPI Metrics",
    subtitle: "Dashboard",
    industry: "Pharmaceutical",
    description:
      "Enabled Customer Success teams to proactively manage MDRP noncompliance by rebuilding a performance-constrained dashboard into a KPI-driven analytics layer.",
    problem:
      "The legacy dashboard relied on a 45M-row claim-level dataset across five systems, causing long load times, slow filters, and frequent timeouts that hindered analysis.",
    approach:
      "Created a pre-aggregated KPI model consolidating claims data across key business dimensions:\n\n• Reduced dataset from 45M to 1.5M rows\n• Implemented standardized KPI flag logic\n• Rebuilt 9 dashboard reports on an optimized data structure\n\nCentralized five sources into a single analytics-ready model, enabling fast filtering and drill-down analysis.",
    outcomes: [
      "Reduced dashboard load times by 60% (from ~10s to ~4s)",
      "Improved filter response time by 90% (from ~20s to ~2s)",
      "Enabled faster, decision-ready noncompliance monitoring"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git", "Tableau"],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/8k6h2ojk_proper.png",
    screenshots: ["https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/8k6h2ojk_proper.png"],
    disableZoom: true
  },
  {
    id: 3,
    title: "Sectorial Exposures",
    subtitle: "Analytics Review",
    industry: "Banking",
    description:
      "Led analytics supporting climate risk reporting for a Tier 1 global bank, identifying data quality issues affecting material exposure calculations.",
    problem:
      "Regulatory exposure reporting relied on complex reference data with inconsistent entity hierarchies and sector classifications across portfolios, creating governance and reporting risk.",
    approach:
      "Applied analytics-driven assurance techniques including cross-source reconciliation, hierarchy validation, and lineage analysis across reporting cycles to isolate structural versus classification issues.",
    outcomes: [
      "Identified material exposure discrepancies across high-risk sectors",
      "Supported remediation prioritization and strengthened governance controls"
    ],
    tools: ["Python", "SQL (SQL Server)", "Qlik Sense", "Excel"],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/opqe6n0p_TR6_FINAL.png",
    disableZoom: true
  },
  {
    id: 5,
    title: "Governance Oversight",
    subtitle: "Web Application",
    industry: "Banking",
    description:
      "Developed a Python-based internal application replacing an Excel-driven QC governance workflow, enabling live compliance metrics and trend analysis.",
    problem:
      "QC reviews were tracked in disconnected Excel files, limiting auditability, consistency, and visibility into governance performance over time.",
    approach:
      "Built a Streamlit application backed by SQL Server to review tickets, persist QC outcomes, and surface governance KPIs and trends via Qlik Sense.",
    outcomes: [
      "Replaced manual Excel workflow with a centralized system",
      "Enabled real-time governance monitoring and trend analysis"
    ],
    tools: ["Python", "SQL (SQL Server)", "Qlik Sense", "Excel"],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/jvyx7x9o_Governance.png",
    screenshots: ["https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/jvyx7x9o_Governance.png"],
    disableZoom: true
  },
  {
    id: 4,
    title: "Review Capacity",
    subtitle: "Dashboard",
    industry: "Banking",
    description:
      "Built a capacity planning dashboard consolidating review and staffing data across internal systems to support resource allocation.",
    problem:
      "Fragmented data prevented a unified view of workload, utilization, and planning accuracy, making staffing decisions slow and inconsistent.",
    approach:
      "Merged multiple Helios data sources into a unified model with drill-down from program level to employee utilization.",
    outcomes: [
      "Improved visibility into utilization and staffing gaps",
      "Supported data-driven workload rebalancing"
    ],
    tools: ["Python", "SQL (SQL Server)", "Qlik Sense", "Excel"],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/q36k332y_image.png",
    screenshots: ["https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/q36k332y_image.png"],
    disableZoom: true
  },
  {
    id: 2,
    title: "Covered Entity Onboarding",
    subtitle: "Dashboard",
    industry: "Pharmaceutical",
    description:
      "Built an onboarding visibility dashboard enabling teams to track Covered Entities across onboarding stages and identify bottlenecks.",
    problem:
      "Lack of visibility into onboarding steps required manual investigation and delayed follow-ups.",
    approach:
      "Designed a matrix-based dashboard showing onboarding stage versus time since last activity with drill-downs to entity details.",
    outcomes: [
      "Enabled faster identification of stalled onboarding cases",
      "Improved prioritization of follow-up activities"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git", "Tableau"],
    thumbnail: "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/0h3sly3e_Dashboard%20Ready.png",
    screenshots: ["https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/0h3sly3e_Dashboard%20Ready.png"],
    disableZoom: true
  }
];
