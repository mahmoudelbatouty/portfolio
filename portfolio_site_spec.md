# Mahmoud Elbatouty — Portfolio Site Spec

This document is a build spec for a personal portfolio website. It contains the design
direction, site structure, and final copy. Hand this whole file to Claude Code as the
starting brief.

---

## 1. Goal

A one-page portfolio site targeting **data science and AI engineer roles**. Primary
audience: recruiters and hiring managers doing a 30-60 second scan, plus engineers who
click into project links for depth.

## 2. Tech stack (recommended)

- **Framework**: Next.js (static export) or Astro — either is fine, pick whichever
  Claude Code sets up fastest. No backend needed.
- **Styling**: Tailwind CSS
- **Hosting**: Vercel or GitHub Pages
- **Fonts**: A monospace font for headers/labels/nav, a clean sans-serif for body
  copy (see Design Direction below)
- No CMS, no database. Content is static, sourced from this doc.

## 3. Design direction: dark & technical / terminal aesthetic

**Concept**: the site reads like a terminal window / code editor. Section labels are
styled as commands or code comments. Navigation is a command list. Project entries look
like file listings. This should feel authentic to a data scientist/engineer audience,
not gimmicky.

### Visual language

- **Theme**: dark by default (near-black background, e.g. `#0d1117` or similar
  editor-dark tone), with a light-mode toggle available but dark as the default.
- **Accent color**: pick ONE accent (classic options: terminal green `#3ecf8e`,
  cyan `#56d4dd`, or amber `#e3b341`). Use it sparingly — links, prompt symbols,
  active states, highlighted metrics. Don't rainbow the page.
- **Typography**:
  - Headers, nav, labels, code-style elements → monospace (JetBrains Mono, Fira
    Code, or IBM Plex Mono)
  - Body paragraphs (About narrative, project descriptions) → a clean sans-serif
    (Inter or system sans) for actual readability. Don't force long-form prose into
    monospace — it fights legibility at scale.
- **Chrome details**: a fake "terminal window" wrapper (three dots top-left,
  filename/domain in the title bar) works well as a framing device for the whole
  page or for each major section card.
- **Section labels styled as commands**, e.g.:
  - `$ whoami` → About
  - `$ ls ./projects` → Projects
  - `$ cat experience.log` → Experience
  - `$ cat publications.bib` → Publications
  - `$ grep -r skills ./stack` → Skills
  - `$ contact --resume --linkedin --email` → Contact
- **Blinking cursor** (`_`) as a small animated detail somewhere near the hero or
  footer — cheap CSS animation, nice authentic touch.
- **Project entries** styled like a file listing: `01_heirs_property_prediction.py`
  with a one-line code-comment-style description trailing it.
- Keep it flat — no gradients, no drop shadows, no neon glow. "Technical" should
  come from typography and structure, not effects.

### What NOT to do

- Don't monospace the entire page — long paragraphs in monospace are hard to read.
- Don't overdo the terminal bit with fake typing animations everywhere; one or two
  authentic touches (cursor blink, maybe a typewriter effect on the hero tagline)
  is enough.

---

## 4. Site structure (single page, scrolling)

1. Nav (sticky, command-list style)
2. Hero
3. About
4. Projects (2 case studies, expandable/linkable)
5. Experience (compact timeline)
6. Publications
7. Skills
8. Contact / footer

---

## 5. Final copy

### Nav

```
$ nav --sections
about / projects / experience / publications / contact
```

### Hero

```
> whoami
```
**Mahmoud Elbatouty**
Data scientist & PhD candidate, AI systems

### About

```
// about.md
```

> Data scientist at Florida Blue and PhD student in Intelligent Systems (AI) at the
> University of North Florida. My work spans classical machine learning — clustering,
> statistical modeling, forecasting — and modern generative AI: RAG pipelines, LLMs,
> embeddings, and vector databases. I like turning messy, real-world data into systems
> that people actually use, whether that's an executive dashboard or a model that
> directs $70K toward families at risk of losing their homes.

*(Feel free to shorten this on the live site — 2-3 sentences is plenty for a hero-adjacent
About block. Keep the full version available if there's a dedicated About page/section.)*

### Projects

#### Project 1: Heirs' property risk prediction

```
01_heirs_property_prediction.py   // AUC 0.80, adopted by LISC
```

**Context**: UNF AI4Good Hackathon, Fall 2024 — 48 hours, team of 3 (Mahmoud
Elbatouty, Walid Kambagha, Ahmed Sayed) — Bronze award, 3rd place

**Problem**: LISC Jacksonville needed to identify Duval County households at risk of
heirs' property issues — property passed down without a will or clear title, which
fragments ownership and often causes families to lose generational wealth.

**Approach**: Built a machine learning pipeline in Python and R using Random Forest,
Logistic Regression, and neural networks to move from broad neighborhood-level risk
estimates to individual, per-property probability scores. Results were visualized in
Tableau for stakeholders.

**Results**:
- AUC-ROC of 0.80
- Identified ~75 households in Duval County at risk
- LISC Jacksonville adopted the model and allocated $70,000 to assist affected
  homeowners with property tax issues
- Featured at the UNF Board of Trustees quarterly meeting; covered in UNF Newsroom

**Links**:
- Devpost: https://devpost.com/software/ospreys
- UNF Newsroom coverage: https://www.unf.edu/newsroom/2025/01/Community-Challenge-AI-For-Good-Hackathon.html

---

#### Project 2: Florida voter profile classification & dashboard

```
02_voter_profiling_analysis.py   // 15M+ records, Springer publication
```

**Context**: Florida Data Science for Social Good (FL-DSSG) internship, Summer 2022 —
12-week program, project partner: League of Women Voters of Florida (LWVFL)

**Problem**: LWVFL needed a way to understand and act on voter behavior patterns
across all of Florida's counties, extending a 2021 pilot that covered only select
counties.

**Approach**: Performed statistical analysis and data mining across 15 million+
Florida voter records to classify behavioral voting patterns for every registered
voter in the state (2014–2020), then built an interactive Tableau dashboard so LWVFL
staff and chapter members could filter and explore the data themselves. Presented
results at the FL-DSSG "Big Reveal" public event.

**Results**:
- Statewide voter profile classification system, scaled up from a county-limited
  pilot
- Interactive dashboard adopted by LWVFL staff across 29 chapters
- Work contributed to a peer-reviewed publication: Johnson, J., Rangarajan, A., Hunt,
  T., Agarwal, P., **Elbatouty, M.**, Umapathy, K., Richard, D., & Nash, L. (2023).
  *Finding Insights in Florida Voter Participation.* Proceedings of the 2023
  International Conference on Advances in Computing Research (ACR'23), Lecture Notes
  in Networks and Systems, vol. 700, pp. 44–55. Springer, Cham.
  https://doi.org/10.1007/978-3-031-33743-7_4

**Links**:
- Program page: https://dssg.unf.edu/2022program.html
- Tableau dashboard: https://public.tableau.com/app/profile/florida.data.science.for.social.good.fl.dssg./viz/LeagueofWomenVotersofFloridaVotingDashboard2022/Story
- Big Reveal presentation video: https://www.youtube.com/watch?v=A37VTzO85g4

---

### Experience

```
$ cat experience.log
```

```
[2023–present]  Florida Blue — Data Scientist / Software Developer
[2022]          NLP Logix — Modeling and Analytics Engineer
[2022]          Florida Data Science for Social Good — Data Scientist
```

Expand each on click/hover with resume bullet detail (pull directly from resume PDF —
see Florida Blue, NLP Logix, and FL-DSSG entries).

### Publications

```
$ cat publications.bib
```

Johnson, J., Rangarajan, A., Hunt, T., Agarwal, P., **Elbatouty, M.**, Umapathy, K.,
Richard, D., & Nash, L. (2023). Finding Insights in Florida Voter Participation. In
*Proceedings of the 2023 International Conference on Advances in Computing Research
(ACR'23)*, Lecture Notes in Networks and Systems, vol. 700, pp. 44–55. Springer, Cham.
https://doi.org/10.1007/978-3-031-33743-7_4

### Skills

```
$ grep -r skills ./stack
```

**Languages & ML/AI**: Python, SQL, R, LLMs & Generative AI, Agentic AI, Java, SAS 9.4,
JavaScript, TensorFlow, PyTorch, Scikit-Learn, Keras, RAG, Prompt Engineering, Deep
Learning, NLP, Time-Series Forecasting, MLOps

**Data & Cloud**: Microsoft SQL Server, SSIS, Snowflake, Microsoft Fabric, Spark, AWS,
Azure, ETL/ELT, Data Modeling, Stored Procedures, Hive, Hadoop

**BI & Tools**: Power BI, Tableau, SSRS, React, Plotly, ggplot2, Git, Jenkins, CI/CD,
Docker, Jupyter, A/B Testing, Statistical Modeling, Agile/Scrum

### Contact / footer

```
$ contact --resume --linkedin --email
```

- Resume: [downloadable PDF — use uploaded resume]
- Email: mahmoud00502@yahoo.com
- Phone: (904) 483-0758
- LinkedIn: linkedin.com/in/mahmoud-elbatouty
- Location: Jacksonville, FL

---

## 6. Education (for About or a small credentials block)

- Ph.D. in Computing, Intelligent Systems (Artificial Intelligence), University of
  North Florida — anticipated May 2028
- M.S. in Computing and Information Sciences, Data Science, University of North
  Florida — GPA 4.0/4.0, May 2025
- B.S. in Computing and Information Sciences, Data Science, University of North
  Florida — GPA 3.94/4.0, May 2023, Minor in Statistics, Summa Cum Laude, Hicks
  Honors College, Dean's List

---

## 7. Notes for Claude Code

- Source resume PDF for exact experience bullet points (Florida Blue, NLP Logix,
  FL-DSSG) rather than re-deriving them — copy verbatim from the uploaded resume.
- The two projects above are the only ones to launch with. Structure the Projects
  section so a third/fourth card can be added later without redesigning the layout
  (e.g., a personal RAG/LLM demo project is a likely future addition).
- Build responsive: the terminal-window framing should collapse gracefully on mobile
  (drop the fixed window chrome width, stack metric cards vertically).
- Respect accessibility: dark theme needs sufficient contrast (WCAG AA) between
  background and both body text and the accent color.
