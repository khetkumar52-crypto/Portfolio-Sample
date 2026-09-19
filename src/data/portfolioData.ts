import { ProjectCaseStudy, PythonProject, AchievementItem, OutreachEntry } from '../types';

export const PERSONAL_INFO = {
  name: 'Khet Kumar',
  headline: 'I build around problems.',
  subtitle: 'Student Builder • AI • Software • Problem Solving',
  philosophy:
    'I don’t start with a technology and search for somewhere to use it. I start with a problem. Then I learn what I need to build.',
  currentStatus: 'Grade 9 student • Developing StudyPilot • Deepening ML & Math foundations',
  githubUrl: 'https://github.com/khetkumar52-crypto/',
  studyPilotRepo: 'https://github.com/khetkumar52-crypto/Study_Pilot_AI',
  pathoShieldLive: 'https://khetkumar-pathoshield-amr.hf.space/',
};

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Find the problem',
    desc: 'Notice an unsolved bottleneck, inefficiency, or challenge that matters in the real world.',
    example: 'XDR typhoid resistance in Sindh or generic AI chat providing rote answers instead of curriculum learning.',
  },
  {
    step: '02',
    title: 'Understand it',
    desc: 'Research the domain thoroughly: scientific papers, curriculum standards, or underlying mechanisms.',
    example: 'Studied bacterial DNA metrics (GC content, resistance markers) and AKU-EB learning frameworks.',
  },
  {
    step: '03',
    title: 'Learn what I don’t know',
    desc: 'Acquire whatever languages, libraries, algorithms, or math are required for the solution.',
    example: 'Learned scikit-learn & Gradio for genomics analysis, and vector retrieval concepts for education.',
  },
  {
    step: '04',
    title: 'Build a first version',
    desc: 'Assemble a concrete, runnable prototype to test whether the core idea actually functions.',
    example: 'Built PathoShield prototype in Python and the initial Socratic hint pipeline for StudyPilot.',
  },
  {
    step: '05',
    title: 'Test it',
    desc: 'Run concrete inputs, edge cases, and real data against the system to measure actual behavior.',
    example: 'Ran 15 real NCBI bacterial sequences through PathoShield to test marker detection.',
  },
  {
    step: '06',
    title: 'Find what’s wrong',
    desc: 'Identify false positives, architectural flaws, unhandled edge cases, and prototype limitations.',
    example: 'Recognized that mock-trained Random Forest and exact string matching cannot replace real clinical alignment.',
  },
  {
    step: '07',
    title: 'Get feedback',
    desc: 'Put the work directly in front of researchers, teachers, or users who understand the field better.',
    example: 'Contacted Dr. Ge Gao at Peking University and other researchers across international institutions.',
  },
  {
    step: '08',
    title: 'Improve',
    desc: 'Iterate based on critique, refine the architecture, and prepare to tackle the next harder problem.',
    example: 'Strengthening biology, statistics, and machine learning foundations as advised by experts.',
  },
];

export const STUDY_PILOT_STUDY: ProjectCaseStudy = {
  id: 'studypilot',
  title: 'StudyPilot',
  subtitle: 'Curriculum-Aware Adaptive Learning & Mastery Platform',
  statusBadge: 'Active Development • Private Repository',
  stage: 'development',
  githubUrl: 'https://github.com/khetkumar52-crypto/Study_Pilot_AI',
  isPrivateRepo: true,
  problem: {
    title: 'The Inefficacy of Generic AI in Curriculum Education',
    description:
      'General AI chat tools can produce direct answers to homework questions, but they do not understand school syllabi, syllabus learning objectives, mastery evaluation, or instructional scaffolding.',
    context:
      'When students receive immediate full solutions, they miss the opportunity to learn. In curriculum-bound systems like AKU-EB and Cambridge/IGCSE in Pakistan, students require learning pathways that evaluate understanding and guide them step-by-step.',
  },
  idea: 'An AI education system engineered around curriculum awareness, board alignment, and structured mastery loops rather than rote answer generation.',
  howItWorks:
    'StudyPilot maps student queries to structured curriculum standards, assesses existing mastery, delivers tiered Socratic hints that guide without spoiling the answer, evaluates student attempts, and updates what the student needs to learn next.',
  technology: [
    'Python',
    'Curriculum Retrieval Engines',
    'Socratic Hint Architecture',
    'Adaptive Mastery Models',
    'Multi-Tenant RBAC',
    'Board Adaptation Layer',
  ],
  whatIBuilt: [
    'Curriculum Retrieval & Verified Curriculum Intelligence for targeted syllabus grounding',
    'Socratic Hint Ladder: Multi-tier scaffolding that prompts critical thinking before giving answers',
    'Adaptive Learning & Mastery Engine to compute retention and knowledge gaps',
    'Board Adaptation Engine for AKU-EB Grade 9–10 (Biology, Chemistry, Physics, Mathematics) with Cambridge / IGCSE architecture',
    'Document & Image Study Intelligence for processing textbook figures and notes',
    'Adaptive Assessment & Mastery Loop for interactive evaluation after practice',
    'Teacher Intelligence & Multi-Tenant RBAC for school administrative hierarchy',
    'Pilot Readiness & School Onboarding module for classroom trial setup',
    'Question Quality Engine and Observability pipeline for system reliability',
    '“What Should I Study Today?” personalized recommendation feed',
  ],
  testing: {
    methodology: 'Iterative Architecture & Instructional Testing',
    details:
      'Tested prompt chains, hint ladder progression, curriculum retrieval accuracy on Grade 9-10 science concepts, and board-specific response formatting.',
  },
  results: [
    'Engineered functional multi-tier Socratic Hint Ladder architecture',
    'Integrated syllabus hierarchies for AKU-EB Grade 9–10 (Bio, Chem, Phys, Math)',
    'Established multi-tenant schema for school, teacher, and student permission levels',
    'System architecture successfully handles board context switching',
  ],
  limitations: [
    'Still in active development — repository is private while the core architecture is being refined',
    'No real-world school deployment or institutional adoption yet',
    'No large-scale validated student grade improvement data yet (testing remains developmental)',
    'Requires continuous refinement of board alignment verification',
  ],
  whatILearned: [
    'Educational AI requires rigorous guardrails to avoid giving answers away too quickly',
    'Curriculum grounding requires structured schema trees, not just naive vector similarity',
    'Designing multi-tenant RBAC requires thinking through real classroom administrative workflows',
  ],
  whatsNext: [
    'Conduct controlled pilot tests with fellow students and subject teachers',
    'Refine question generation quality and board rubric compliance',
    'Deepen support for Cambridge / IGCSE assessment formats',
  ],
  credibility: {
    built: true,
    tested: true,
    deployed: false,
    expertFeedback: false,
    validated: false,
  },
};

export const PATHOSHIELD_STUDY: ProjectCaseStudy = {
  id: 'pathoshield',
  title: 'PathoShield AI',
  subtitle: 'Computational Bacterial DNA Analysis & Resistance-Risk Proof-of-Concept',
  statusBadge: 'Deployed Prototype • Live on Hugging Face',
  stage: 'deployed_prototype',
  liveUrl: 'https://khetkumar-pathoshield-amr.hf.space/',
  problem: {
    title: 'Antimicrobial Resistance & Regional Health Bottlenecks',
    description:
      'Antimicrobial resistance (AMR) — particularly Extensively Drug-Resistant (XDR) Salmonella Typhi (typhoid) in Sindh, Pakistan — is a major public health emergency. Traditional culture-based antibiotic susceptibility testing takes 48–72 hours.',
    context:
      'I wanted to understand whether computational analysis could rapidly flag potential resistance indicators from raw DNA sequences as an early-stage screening experiment.',
  },
  idea: 'A lightweight computational proof-of-concept web interface that accepts bacterial DNA sequence inputs and generates instant resistance-risk metrics, sequence statistics, and flagged markers.',
  howItWorks:
    'Users input a raw FASTA/bacterial DNA sequence. The Python backend computes base-pair count and GC content, scans for exact known resistance marker strings, passes sequence features to a Random Forest classifier, outputs risk probability, and compiles a downloadable text report.',
  technology: [
    'Python',
    'Gradio',
    'Hugging Face Spaces',
    'scikit-learn (Random Forest)',
    'Pandas',
    'NumPy',
  ],
  whatIBuilt: [
    'Bacterial DNA sequence input parser with length and nucleotide verification',
    'GC content calculator and base-pair distribution analyzer',
    'Exact-string matching resistance marker detection engine',
    'Random Forest resistance-risk classification model with probability output',
    'Interactive Gradio web interface deployed on Hugging Face Spaces',
    'Automated downloadable sequence analysis and risk report generator',
  ],
  testing: {
    methodology: 'Proof-of-concept sequence testing on public genomic data',
    details:
      'Tested the end-to-end pipeline against a test set of 15 real NCBI bacterial sequences to verify GC computation, marker detection, and report generation.',
  },
  results: [
    'Deployed live and functioning on Hugging Face Spaces',
    'Correctly computed GC content and identified target marker sequences across all 15 test NCBI samples',
    'Generates complete downloadable analysis reports in seconds',
    'Served as the foundation for engaging in independent academic outreach to bioinformatics professors',
  ],
  limitations: [
    'The Random Forest classifier was trained on synthetic/mock genome data, NOT clinical datasets',
    'Resistance-marker detection uses exact string matching rather than rigorous bioinformatic alignment algorithms (such as BLAST or HMMs)',
    'Tested on a small verification set of only 15 real NCBI sequences',
    'NOT medical-grade, NOT hospital-ready, NOT diagnostically proven, and NOT clinically validated',
  ],
  whatILearned: [
    'Genomics data is extraordinarily complex; mock data only illustrates software architecture, not true clinical biology',
    'Real bioinformatic pipeline tools require alignment algorithms, variable coverage handling, and peer-reviewed reference databases',
    'The immense value of engaging domain experts early to learn what real research requires',
  ],
  whatsNext: [
    'Learn fundamental bioinformatics algorithms (Smith-Waterman, BLAST mechanics, Hidden Markov Models)',
    'Study authentic NCBI AMR reference databases (CARD, ResFinder)',
    'Develop deeper statistical rigor in machine learning feature selection',
  ],
  credibility: {
    built: true,
    tested: true,
    deployed: true,
    expertFeedback: true,
    validated: false,
  },
};

export const GE_GAO_FEEDBACK = {
  researcher: 'Dr. Ge Gao',
  title: 'Professor / Principal Investigator',
  institution: 'Peking University (Center for Bioinformatics / School of Life Sciences)',
  context:
    'Independently reached out via email to share PathoShield and seek technical guidance on computational biology and AI for Science (AI4S).',
  responseHighlights: [
    'Provided encouraging feedback upon reviewing work done by a Grade 9 student exploring computational biology and AI4S.',
    'Recommended continuing to systematically build foundations across four disciplines: programming, statistics, biology, and machine learning.',
    'Closed with: “Welcome and good luck! Cheers, Ge”',
  ],
  importantDisclaimer:
    'Important: This was independent feedback on a student prototype. It is NOT a formal collaboration, NOT a research appointment, NOT mentorship, and NOT scientific validation of PathoShield.',
};

export const RESEARCH_OUTREACH_INSTITUTIONS = [
  { name: 'Peking University', location: 'China', detail: 'Received encouraging guidance from Dr. Ge Gao' },
  { name: 'Aga Khan University', location: 'Pakistan', detail: 'Outreach on regional AMR & infectious disease' },
  { name: 'LUMS', location: 'Pakistan', detail: 'Computer science & AI research outreach' },
  { name: 'National University of Singapore (NUS)', location: 'Singapore', detail: 'Bioinformatics & computing outreach' },
  { name: 'University of Toronto', location: 'Canada', detail: 'Computational biology inquiry' },
  { name: 'McGill University', location: 'Canada', detail: 'Genomics & AI outreach' },
  { name: 'TU Delft', location: 'Netherlands', detail: 'Biotechnology & data systems' },
  { name: 'Max Planck Institute', location: 'Germany', detail: 'Computational biology research inquiry' },
  { name: 'Wellcome Sanger Institute', location: 'UK', detail: 'Genomic pathogen surveillance' },
  { name: 'Australian Research Institutions', location: 'Australia', detail: 'Bioinformatics & health data systems' },
];

export const PYTHON_FOUNDATION_PROJECTS: PythonProject[] = [
  {
    id: 'number-guess',
    title: 'Number Guessing Game',
    repoUrl: 'https://github.com/khetkumar52-crypto/Number_guessing_game',
    date: 'June 2026',
    conceptLearned: 'Control flow, random number generation, input validation loops',
    description:
      'My first independent Python program built from scratch. Focused on core logic, managing state transitions across user guesses, and handling edge cases in terminal inputs.',
  },
  {
    id: 'student-results',
    title: 'Student Result Management System',
    repoUrl: 'https://github.com/khetkumar52-crypto/student-result-management-system',
    date: 'July 2026',
    conceptLearned: 'Data structures, record dictionaries, student performance calculations',
    description:
      'Command-line system to record student scores, calculate subject percentages, compute GPA/grade thresholds, and output formatted academic summary cards.',
  },
  {
    id: 'atm-simulator',
    title: 'ATM Simulator 2.0',
    repoUrl: 'https://github.com/khetkumar52-crypto/ATM-SIMULATOR-2.0',
    date: 'July 2026',
    conceptLearned: 'Session security logic, PIN verification, transaction balance states',
    description:
      'Interactive financial simulation handling PIN authentication, deposit/withdrawal balance updates, overdraft safety guards, and receipt transaction logging.',
  },
  {
    id: 'grade-calculator',
    title: 'Python Grade Calculator',
    repoUrl: 'https://github.com/khetkumar52-crypto/python-grade-calculator',
    date: 'August 2026',
    conceptLearned: 'Weighted score processing, boundary logic, modular functions',
    description:
      'Utility program that ingests multi-subject assessment weights, computes cumulative performance metrics, and determines grade standing based on curriculum rubric thresholds.',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'grade-8-first',
    title: 'Grade 8 Academic Excellence — 1st Position',
    year: '2025–2026',
    category: 'academic',
    resultStatus: '1st Position',
    type: 'Award',
    details: 'Achieved 1st position in academics for Grade 8 with school documentary remarks confirming top rank.',
    importantContext: 'Documentary evidence confirms first position in academics.',
  },
  {
    id: 'copernicus-science',
    title: 'Copernicus Natural Science Olympiad',
    year: 'Grade 7',
    category: 'olympiad',
    resultStatus: 'Honorable Mention',
    type: 'Honorable Mention',
    details: 'Preliminary-round achievement with official documentation confirming qualification and eligibility for the Global Round.',
    importantContext: 'Did not attend the Global Final in Houston, USA. Status is preliminary Honorable Mention and Global qualification.',
  },
  {
    id: 'copernicus-math',
    title: 'Copernicus Mathematics Olympiad',
    year: 'Grade 7',
    category: 'olympiad',
    resultStatus: 'Honorable Mention & Global Qualification',
    type: 'Qualification',
    details: 'Mathematics olympiad qualification evidence with Honorable Mention standing and official Global Round invitation/eligibility documentation.',
    importantContext: 'Did not attend the Global Final in Houston. Represents preliminary qualification documentation.',
  },
  {
    id: 'iklc-series',
    title: 'International Kangaroo Linguistic Contest (IKLC)',
    year: '2019, 2020, 2021',
    category: 'international',
    resultStatus: 'Performance Recognitions & Participation',
    type: 'Star Recognition',
    details: 'Multiple years of participation in international linguistic evaluation; specific records include star/performance certificates and participation recognition.',
    importantContext: 'Distinguished between performance/star recognitions and standard participation certificates.',
  },
  {
    id: 'ikmc-series',
    title: 'International Kangaroo Mathematics Contest (IKMC)',
    year: '2021, 2023',
    category: 'international',
    resultStatus: 'Contest Records & Certificates',
    type: 'Star Recognition',
    details: 'Mathematics problem solving competitions testing spatial, arithmetic, and logical deduction under international timing constraints.',
    importantContext: 'Documented results include performance evaluation records and participation certificates.',
  },
  {
    id: 'iksc-contest',
    title: 'International Kangaroo Science Contest (IKSC)',
    year: 'Record on file',
    category: 'international',
    resultStatus: 'Contest Evaluation Record',
    type: 'Participation',
    details: 'Evaluated across foundational science inquiry, hypothesis evaluation, and natural world scientific observation.',
  },
  {
    id: 'sasmo-olympiad',
    title: 'Singapore and Asian Schools Math Olympiad (SASMO)',
    year: 'Record on file',
    category: 'olympiad',
    resultStatus: 'Olympiad Contest Entry & Record',
    type: 'Participation',
    details: 'High-rigor Asian international mathematics competition emphasizing non-routine problem solving and heuristics.',
  },
  {
    id: 'icats-contest',
    title: 'International Competence Arts & Talent / Science (ICATS)',
    year: 'Record on file',
    category: 'international',
    resultStatus: 'Contest Performance Record',
    type: 'Participation',
    details: 'National/international scholastic evaluation measuring applied competence in science and analytical reasoning.',
  },
  {
    id: 'hippo-english',
    title: 'HIPPO English Language Olympiad',
    year: 'Record on file',
    category: 'international',
    resultStatus: 'Contest Entry & Evaluation',
    type: 'Participation',
    details: 'International English language competition assessing reading comprehension, lexical command, and syntactic structure.',
  },
  {
    id: 'fsp-olympiad',
    title: 'FSP Science Competition / Olympiad',
    year: 'Record on file',
    category: 'olympiad',
    resultStatus: 'Contest Result Record',
    type: 'Participation',
    details: 'Science and inquiry assessment evaluating foundational scientific principles and experimental deduction.',
  },
  {
    id: 'msp-reports',
    title: 'MSP Competitions & Academic Reports',
    year: 'Documented',
    category: 'academic',
    resultStatus: 'Documented Reports',
    type: 'Participation',
    details: 'Academic assessments and documented progress reports tracking scholastic benchmarks.',
  },
  {
    id: 'mun-conference',
    title: 'Model United Nations (MUN)',
    year: 'Record on file',
    category: 'extracurricular',
    resultStatus: 'Conference Delegate',
    type: 'Participation',
    details: 'Attended 1 MUN conference; actively engaged with committee proceedings. Genuinely interested in diplomacy, foreign policy, and international relations.',
    importantContext: 'Attended one conference; no manufactured leadership titles or unverified awards.',
  },
  {
    id: 'chess-extracurricular',
    title: 'Chess & Analytical Competitions',
    year: 'Record on file',
    category: 'extracurricular',
    resultStatus: 'Activity & Competition Records',
    type: 'Participation',
    details: 'Documented participation in chess activities and tactical competitions cultivating strategic planning and pattern recognition.',
  },
];

export const NOW_ITEMS = [
  {
    title: 'Grade 9 Academic Rigor',
    desc: 'Maintaining rigorous study across Grade 9 coursework with focus on advanced science and mathematics.',
    status: 'In Progress',
  },
  {
    title: 'Strengthening Core Mathematics & Physics',
    desc: 'Building deep foundations in calculus prerequisites, probability, algebra, and classical physics.',
    status: 'Daily Practice',
  },
  {
    title: 'Active Development of StudyPilot',
    desc: 'Iterating on the curriculum retrieval engine and the Socratic Hint Ladder architecture.',
    status: 'Active Coding',
  },
  {
    title: 'Learning Statistics & Machine Learning Foundations',
    desc: 'Studying statistical distributions, linear algebra, loss functions, and evaluation metrics from first principles.',
    status: 'Self-Study',
  },
  {
    title: 'Gathering Real Feedback',
    desc: 'Testing software iterations on actual questions with teachers and classmates rather than building in isolation.',
    status: 'Ongoing Outreach',
  },
];
