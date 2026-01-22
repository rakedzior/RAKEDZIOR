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
    title: "Noncompliance KPI Metrics Dashboard",
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
    title: "Covered Entity Onboarding Dashboard",
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
    description: "Led analytics for HSBC's global High Transition Risk Sectors climate risk reporting initiative, covering multi-billion dollar portfolio across multiple jurisdictions. Identified structural data quality issues affecting $9B in exposure discrepancies, prompting enterprise-wide remediation and strengthened governance controls.",
    problem: "Climate-related regulatory reporting relied on complex upstream reference data with inconsistent entity hierarchies and sector classifications across global portfolios. The underlying data represented exposures at multi-billion scale, where accuracy, consistency, and traceability were critical for regulatory compliance and risk management. Misalignment in how entities were grouped or classified could influence reported exposures at material scale, creating regulatory and reputational risk.",
    approach: "Applied analytics-driven assurance methodology combining:\n\n• Large-scale data analysis to detect inconsistencies in entity hierarchies and sector attributes across Poland, Germany, India, and UAE portfolios\n• Sample-based validation across higher-risk and standard portfolios\n• Cross-source comparison of key reference data used for aggregation\n• End-to-end review of data lineage from source systems to regulatory outputs\n\nPerformed iterative analysis across reporting cycles, distinguishing structural consistency challenges (entity grouping/aggregation) from classification accuracy challenges (industry/sector attributes). Executed root-cause analysis to separate data modeling issues from attribute-level errors.",
    tools: ["SQL", "Python", "GCP", "Tableau", "Excel", "Data Quality Analytics"],
    outcomes: [
      "Uncovered $9B in exposure discrepancies across 6 high-transition-risk sectors",
      "Identified 2 High Risk Issues requiring senior management attention and remediation",
      "Prompted enterprise-wide strengthening of exposure reporting controls across jurisdictions",
      "Improved confidence in climate-related regulatory reporting for large global portfolio",
      "Reduced risk of material misstatement in sector-level ESG disclosures",
      "Strengthened data lineage transparency and governance practices",
      "Established analytics-led assurance framework for complex regulatory environments",
      "Enhanced stakeholder understanding of data quality impact through clear, actionable insights"
    ],
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80"
  },
  {
    id: 4,
    title: "Forbearance Reconciliation",
    industry: "Banking",
    description: "Consolidated fragmented forbearance data from 8+ systems (GCP, Teradata, data lakes), surfacing 13% control exceptions and resolving 50% unmatched customer names using ML-enhanced matching logic.",
    problem: "Forbearance data scattered across 8+ systems created reconciliation challenges and limited visibility into control effectiveness.",
    approach: "Integrated data from multiple sources, applied ML-based name matching algorithms, and built reconciliation dashboards with exception tracking.",
    tools: ["Python", "SQL", "GCP", "Teradata", "Machine Learning"],
    outcomes: [
      "Consolidated data from 8+ systems",
      "Surfaced 13% control exceptions",
      "Resolved 50% unmatched customer records",
      "Improved data quality and governance"
    ],
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
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
    description: "Designed end-to-end data-driven aging framework for Medicaid dispute management, enabling manufacturers to withhold rebate payments probabilistically. 7-quarter retrospective analysis demonstrated that ~80% of disputed claims remain Open/Impasse, supporting dynamic state-aware thresholds and risk-stratified invoicing strategies.",
    problem: "Approximately 80% of disputed noncompliant claims remained indefinitely in Open or Impasse states, creating cash flow uncertainty and unnecessary rebate payments under pay-and-chase model. Clients hesitant to adopt aging-based invoicing due to perceived risks: late adverse state resolutions, CE verification reversals, and shifts in state response behavior. Existing aging logic relied on mean days-to-response, failing to capture tail risk or behavioral changes.",
    approach: "Performed 7-quarter retrospective analysis using claim audit logs to simulate point-in-time aging decisions:\n\n• Reconstructed claim status as-of historical analysis dates\n• Derived state response distributions (avg, median, 75th, 90th percentiles)\n• Tracked CE verification timing relative to aging thresholds\n• Measured post-aging outcomes (MFR wins/losses, CE verification, continued aging)\n\nImplemented formal lifecycle model with dynamic aging qualification (state-aware thresholds: 548-day baseline vs state-specific average) and explicit de-aging rules. Built production-grade incremental models in dbt Cloud with strict temporal guarantees preventing retroactive reversals. Designed Open → Impasse transition tracking for risk stratification.",
    tools: ["Snowflake", "dbt Cloud", "SQL", "Data Modeling", "Statistical Analysis"],
    outcomes: [
      "Demonstrated aging should be limited to Open claims under current state behavior",
      "Quantified true risk of de-aging using 7-quarter historical simulation",
      "Reduced absolute loss exposure through 90th percentile thresholds vs average-based logic",
      "Established scalable foundation for probabilistic invoicing and risk-weighted credits",
      "Delivered production-grade, auditable aging framework suitable for regulatory scrutiny",
      "Enabled temporal analysis showing states increasingly respond later, converting Open to Impasse",
      "Implemented dbt tests enforcing lifecycle integrity and chronological consistency",
      "Provided quantitative evidence addressing client concerns around adverse outcomes"
    ],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];
