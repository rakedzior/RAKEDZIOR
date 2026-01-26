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
    tools: ["Tableau", "Qlik Sense"]
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
      "Built an auditable aging/de-aging lifecycle using historical claim audit logs to simulate point-in-time decisions:\n\n• Reconstructed claim status as-of historical analysis dates\n• Derived state-specific response distributions across multiple percentiles\n• Measured post-aging outcomes and separated risk profiles for Open vs Impasse claims\n\nImplemented a production-grade lifecycle with state-aware thresholds, explicit aging/de-aging controls, and Open → Impasse transition tracking. Delivered incremental dbt models with idempotent logic and comprehensive tests enforcing lifecycle integrity.",
    outcomes: [
      "Quantified de-aging risk through historical simulation",
      "Demonstrated that conservative thresholds reduce loss exposure",
      "Delivered an auditable framework suitable for financial scrutiny",
      "Enabled empirical decision-making for invoicing unresolved disputes",
      "Established a scalable foundation for future analytics extensions"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git"],
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
      "Enabled Customer Success teams to proactively manage MDRP noncompliance by rebuilding a performance-constrained dashboard into a KPI-driven analytics layer.",
    problem:
      "The legacy dashboard relied on a 45M-row claim-level dataset across five systems, causing long load times, slow filters, and frequent timeouts that hindered analysis.",
    approach:
      "Created a pre-aggregated KPI model consolidating claims data across key business dimensions:\n\n• Reduced dataset from 45M to 1.5M rows\n• Implemented standardized KPI flag logic\n• Rebuilt dashboards on an optimized data structure\n\nCentralized five sources into a single analytics-ready model.",
    outcomes: [
      "Reduced dashboard load times by 60%",
      "Improved filter response time by 90%",
      "Enabled faster, decision-ready noncompliance monitoring"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git", "Tableau"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/8k6h2ojk_proper.png",
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
      "Regulatory exposure reporting relied on complex reference data with inconsistent entity hierarchies and sector classifications across portfolios.",
    approach:
      "Applied analytics-driven assurance techniques including cross-source reconciliation, hierarchy validation, and lineage analysis across reporting cycles.",
    outcomes: [
      "Identified material exposure discrepancies across high-risk sectors",
      "Supported remediation prioritization and strengthened governance controls"
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
      "Developed a Python-based internal application replacing an Excel-driven QC governance workflow, enabling live compliance metrics and trend analysis.",
    problem:
      "QC reviews were tracked in disconnected Excel files, limiting auditability and visibility into governance performance.",
    approach:
      "Built a Streamlit application backed by a SQL database to manage QC reviews, persist results, and surface governance metrics via dashboards.",
    outcomes: [
      "Replaced manual Excel workflow with a centralized system",
      "Enabled real-time governance monitoring and trend analysis"
    ],
    tools: ["Python", "SQL (SQL Server)", "Qlik Sense", "Excel"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/jvyx7x9o_Governance.png",
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
      "Fragmented data prevented a unified view of workload, utilization, and planning accuracy.",
    approach:
      "Merged multiple Helios data sources into a unified model with drill-down from program to employee level.",
    outcomes: [
      "Improved visibility into utilization and staffing gaps",
      "Supported data-driven workload rebalancing"
    ],
    tools: ["Python", "SQL (SQL Server)", "Qlik Sense", "Excel"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/q36k332y_image.png",
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
      "Designed a matrix-based dashboard showing onboarding stage versus days since last activity with drill-down to entity details.",
    outcomes: [
      "Enabled faster identification of stalled onboarding cases",
      "Improved prioritization of follow-up activities"
    ],
    tools: ["Python", "SQL (Snowflake)", "dbt Cloud", "Git", "Tableau"],
    thumbnail:
      "https://customer-assets.emergentagent.com/job_datadev-profile-1/artifacts/0h3sly3e_Dashboard%20Ready.png",
    disableZoom: true
  }
];
