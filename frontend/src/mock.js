// Mock data for Rafał Kędzior's Portfolio

export const personalInfo = {
  name: "Rafał Kędzior",
  title: "Data Analyst | BI Developer | Analytics Engineer",
  tagline: "Turning complex data into actionable business insights through scalable analytics and dashboards",
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
  intro: "I'm a Data Analyst & Analytics Engineer with 5+ years of experience in analytics, data modeling, and BI delivery. I specialize in building ELT pipelines, dimensional models, and KPI dashboards that drive operational and decision analytics.",
  expertise: "My expertise lies in transforming raw data into strategic insights through modern data stack technologies. I work in a task-based consulting model, supporting stakeholders with operational reporting, reconciliation workflows, and data validation processes. I'm passionate about building scalable data solutions that empower teams to make data-driven decisions.",
  lookingFor: "I'm seeking opportunities to leverage my skills in Python, SQL, Snowflake, and Tableau to build analytics solutions that create measurable business impact. I thrive in environments where I can collaborate with cross-functional teams and deliver insights that drive strategic decision-making."
};

export const skills = {
  analytics: ["Data Analysis", "Statistical Modeling", "KPI Development", "Business Intelligence", "Data Validation"],
  dataModeling: ["Dimensional Modeling", "Data Warehousing", "ELT/ETL Pipelines", "Data Quality", "dbt Cloud"],
  visualization: ["Tableau", "Qlik", "Dashboard Design", "Data Storytelling", "Report Automation"],
  engineering: ["Python", "SQL", "PySpark", "Snowflake", "GCP", "Git", "JIRA", "Confluence"]
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
    description: "Comprehensive dashboard combining Excel, SQL, and Tableau to track 10+ compliance KPIs, dispute outcomes, and resolution strategies. Enhanced operational insight and accelerated decision-making for pharmaceutical compliance teams.",
    problem: "Compliance teams were managing KPI data across multiple Excel files and systems, leading to inconsistent reporting and delayed insights into dispute resolutions.",
    approach: "Centralized data sources into Snowflake, built ELT pipelines with dbt, and designed an integrated Tableau dashboard with drill-down capabilities.",
    tools: ["Tableau", "SQL", "Snowflake", "dbt Cloud", "Excel"],
    outcomes: [
      "Unified view of 10+ compliance KPIs",
      "Reduced report generation time by 60%",
      "Improved stakeholder visibility into dispute patterns",
      "Enabled proactive compliance risk management"
    ],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 2,
    title: "Aged Claims Model",
    industry: "Pharmaceutical",
    description: "Predictive analytics model identifying aged claims from 600k+ MDRP/340B claims dataset, supporting $80M potential revenue recovery. Improved prioritization workflows for client-facing revenue recovery teams.",
    problem: "Manual identification of aged claims was time-consuming and inconsistent, leading to missed revenue recovery opportunities.",
    approach: "Built SQL-based analytical models to flag claims based on age, status, and historical patterns. Integrated findings into Tableau dashboards for prioritization.",
    tools: ["SQL", "Python", "Snowflake", "Tableau"],
    outcomes: [
      "Identified 83k aged claims from 600k+ dataset",
      "Supported ~$80M potential revenue recovery",
      "Improved prioritization efficiency by 45%",
      "Reduced manual claim review time significantly"
    ],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 3,
    title: "Sectorial Exposures Review",
    industry: "Banking",
    description: "Led analytics for HSBC's global High Transition Risk Sectors review, uncovering $9B in exposure discrepancies across 6 sectors. Analysis prompted senior management to strengthen exposure reporting controls across jurisdictions.",
    problem: "Inconsistent exposure reporting across multiple systems and jurisdictions created regulatory risk and limited visibility into sectorial concentrations.",
    approach: "Performed cross-system data reconciliation, built analytical models to identify discrepancies, and created executive dashboards for senior management review.",
    tools: ["SQL", "Python", "GCP", "Tableau", "Excel"],
    outcomes: [
      "Uncovered $9B exposure discrepancies",
      "Identified 2 High Risk Issues across 6 sectors",
      "Prompted enterprise-wide remediation plans",
      "Improved regulatory reporting accuracy"
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
  }
];
