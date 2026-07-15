export type Project = {
  file: string;
  comment: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  results: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    file: "01_heirs_property_prediction.py",
    comment: "AUC 0.80, adopted by LISC",
    title: "Heirs' property risk prediction",
    context:
      "UNF AI4Good Hackathon, Fall 2024 — 48 hours, team of 3 (Mahmoud Elbatouty, Walid Kambagha, Ahmed Sayed) — Bronze award, 3rd place",
    problem:
      "LISC Jacksonville needed to identify Duval County households at risk of heirs' property issues — property passed down without a will or clear title, which fragments ownership and often causes families to lose generational wealth.",
    approach:
      "Built a machine learning pipeline in Python and R using Random Forest, Logistic Regression, and neural networks to move from broad neighborhood-level risk estimates to individual, per-property probability scores. Results were visualized in Tableau for stakeholders.",
    results: [
      "AUC-ROC of 0.80",
      "Identified ~75 households in Duval County at risk",
      "LISC Jacksonville adopted the model and allocated $70,000 to assist affected homeowners with property tax issues",
      "Featured at the UNF Board of Trustees quarterly meeting; covered in UNF Newsroom",
    ],
    links: [
      { label: "Devpost", href: "https://devpost.com/software/ospreys" },
      {
        label: "UNF Newsroom coverage",
        href: "https://www.unf.edu/newsroom/2025/01/Community-Challenge-AI-For-Good-Hackathon.html",
      },
    ],
  },
  {
    file: "02_voter_profiling_analysis.py",
    comment: "15M+ records, Springer publication",
    title: "Florida voter profile classification & dashboard",
    context:
      "Florida Data Science for Social Good (FL-DSSG) internship, Summer 2022 — 12-week program, project partner: League of Women Voters of Florida (LWVFL)",
    problem:
      "LWVFL needed a way to understand and act on voter behavior patterns across all of Florida's counties, extending a 2021 pilot that covered only select counties.",
    approach:
      "Performed statistical analysis and data mining across 15 million+ Florida voter records to classify behavioral voting patterns for every registered voter in the state (2014–2020), then built an interactive Tableau dashboard so LWVFL staff and chapter members could filter and explore the data themselves. Presented results at the FL-DSSG \"Big Reveal\" public event.",
    results: [
      "Statewide voter profile classification system, scaled up from a county-limited pilot",
      "Interactive dashboard adopted by LWVFL staff across 29 chapters",
      "Work contributed to a peer-reviewed publication: Johnson, J., Rangarajan, A., Hunt, T., Agarwal, P., Elbatouty, M., Umapathy, K., Richard, D., & Nash, L. (2023). Finding Insights in Florida Voter Participation. Proceedings of the 2023 International Conference on Advances in Computing Research (ACR'23), Lecture Notes in Networks and Systems, vol. 700, pp. 44–55. Springer, Cham.",
    ],
    links: [
      { label: "Program page", href: "https://dssg.unf.edu/2022program.html" },
      {
        label: "Tableau dashboard",
        href: "https://public.tableau.com/app/profile/florida.data.science.for.social.good.fl.dssg./viz/LeagueofWomenVotersofFloridaVotingDashboard2022/Story",
      },
      {
        label: "Big Reveal presentation video",
        href: "https://www.youtube.com/watch?v=A37VTzO85g4",
      },
      {
        label: "DOI: 10.1007/978-3-031-33743-7_4",
        href: "https://doi.org/10.1007/978-3-031-33743-7_4",
      },
    ],
  },
];

export type ExperienceEntry = {
  period: string;
  role: string;
  org: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "May 2023 – Present",
    role: "Data Scientist / Software Developer",
    org: "Florida Blue",
    location: "Jacksonville, FL",
    bullets: [
      "Engineered an unsupervised clustering pipeline grouping 50+ health-equity dimensions into 3 distinct clusters with K-Means after benchmarking against hierarchical and density-based algorithms in R & Python; applied PCA for dimension reduction, achieving high intra-cluster correlation. Still drives the company's health equity initiatives today.",
      "Refactored 20+ Python and R codebases into curated internal libraries (visualization templates, dplyr wrappers, reusable utilities) adopted across Florida Blue, eliminating repetitive manual work.",
      "Migrated 120+ processes, jobs, and reports onto a consolidated Microsoft reporting server using Python, Git, and Jenkins, enabling the Apps & Reporting team to decommission legacy servers and significantly reduce operating spend.",
      "Built an end-to-end automated financial reporting protocol, extracting data from Microsoft SQL Server via tailored stored procedures and surfacing per-employee hours and variances by cost-center on a secured Power BI dashboard for managers.",
      "Developed 50+ executive dashboards using React, JavaScript, Python, SQL, and Power BI consumed directly by the CEO to monitor financial performance across health-insurance sectors; authored stored procedures computing actuals, budget, and variance.",
      "Contributed to enterprise cloud initiatives, migrating tables, stored procedures, and security protocols from SQL Server to Microsoft Fabric and Snowflake using Spark and on-prem generative AI pipelines.",
    ],
  },
  {
    period: "Sep 2022 – Dec 2022",
    role: "Modeling and Analytics Engineer",
    org: "NLP Logix",
    location: "Jacksonville, FL",
    bullets: [
      "Automated web-scraping of Census data using Selenium and BeautifulSoup, structuring outputs into relational tables to drive downstream analytical insights.",
      "Built 14+ machine learning models in Python (pandas, Scikit-Learn) to forecast child and maternal health outcomes across Florida, surfacing results in Tableau dashboards for public-health stakeholders.",
    ],
  },
  {
    period: "Jun 2022 – Aug 2022",
    role: "Data Scientist",
    org: "Florida Data Science for Social Good",
    location: "Jacksonville, FL",
    bullets: [
      "Performed statistical analysis and data mining on 15 million+ Florida voter records, developing a custom voter-profiling system classifying behavioral patterns for every registered voter in the state from 2014-2020.",
      "Designed and presented Tableau dashboards at the Big Reveal to client stakeholders and audience; work contributed to a peer-reviewed publication.",
    ],
  },
];

export const education = [
  {
    degree: "Ph.D. in Computing, Intelligent Systems (Artificial Intelligence)",
    school: "University of North Florida",
    detail: "Anticipated May 2028",
  },
  {
    degree: "M.S. in Computing and Information Sciences, Data Science",
    school: "University of North Florida — GPA 4.0/4.0",
    detail: "May 2025",
  },
  {
    degree: "B.S. in Computing and Information Sciences, Data Science",
    school:
      "University of North Florida — GPA 3.94/4.0, Minor in Statistics, Summa Cum Laude, Hicks Honors College, Dean's List",
    detail: "May 2023",
  },
];

export const skills = {
  "Languages & ML/AI": [
    "Python",
    "SQL",
    "R",
    "LLMs & Generative AI",
    "Agentic AI",
    "Java",
    "SAS 9.4",
    "JavaScript",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Keras",
    "RAG",
    "Prompt Engineering",
    "Deep Learning",
    "NLP",
    "Time-Series Forecasting",
    "MLOps",
  ],
  "Data & Cloud": [
    "Microsoft SQL Server",
    "SSIS",
    "Snowflake",
    "Microsoft Fabric",
    "Spark",
    "AWS",
    "Azure",
    "ETL/ELT",
    "Data Modeling",
    "Stored Procedures",
    "Hive",
    "Hadoop",
  ],
  "BI & Tools": [
    "Power BI",
    "Tableau",
    "SSRS",
    "React",
    "Plotly",
    "ggplot2",
    "Git",
    "Jenkins",
    "CI/CD",
    "Docker",
    "Jupyter",
    "A/B Testing",
    "Statistical Modeling",
    "Agile/Scrum",
  ],
};

export const publication = {
  citation:
    "Johnson, J., Rangarajan, A., Hunt, T., Agarwal, P., Elbatouty, M., Umapathy, K., Richard, D., & Nash, L. (2023). Finding Insights in Florida Voter Participation. In Proceedings of the 2023 International Conference on Advances in Computing Research (ACR'23), Lecture Notes in Networks and Systems, vol. 700, pp. 44–55. Springer, Cham.",
  doi: "https://doi.org/10.1007/978-3-031-33743-7_4",
};

export const contact = {
  email: "mahmoud00502@yahoo.com",
  phone: "(904) 483-0758",
  linkedin: "https://linkedin.com/in/mahmoud-elbatouty",
  linkedinLabel: "linkedin.com/in/mahmoud-elbatouty",
  github: "https://github.com/mahmoudelbatouty",
  githubLabel: "github.com/mahmoudelbatouty",
  location: "Jacksonville, FL",
  resumeHref: "/Mahmoud_Elbatouty_Resume.pdf",
};
