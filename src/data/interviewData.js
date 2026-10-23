export const INTERVIEW_CATEGORIES = [
  "All",
  "Fundamentals",
  "Testing Types",
  "SDLC & STLC",
  "Bug Management",
  "Test Documentation",
  "API & Automation",
  "Scenario Based",
];

export const ALL_INTERVIEW_QUESTIONS = [
  // ─── 1. FUNDAMENTALS ─────────────────────────────────────────
  {
    id: "q1",
    question: "What is Software Testing and why is it essential?",
    questionBn: "সফটওয়্যার টেস্টিং কি এবং এটি কেন অপরিহার্য?",
    category: "Fundamentals",
    difficulty: "Beginner",
    answer: "Software testing is the systematic process of evaluating an application against specified business requirements to detect bugs, verify functionality, and validate performance, security, and usability. It is essential because early defect detection prevents financial loss, safeguards company reputation, ensures regulatory compliance, and delivers a stable user experience in production.",
    answerBn: "সফটওয়্যার টেস্টিং হলো একটি পরিকল্পিত প্রক্রিয়া যার মাধ্যমে সফটওয়্যারটি ক্লায়েন্টের প্রয়োজনীয়তা অনুযায়ী ঠিকঠাক কাজ করছে কিনা তা যাচাই করা হয়। এটি বাগ (Bug) বা ত্রুটি খুঁজে বের করে সফটওয়্যারের গুণগত মান নিশ্চিত করে। এটি অত্যন্ত অপরিহার্য কারণ প্রডাকশনে যাওয়ার আগে বাগ ধরা পড়লে ক্লায়েন্টের বিপুল আর্থিক ক্ষতি ও সুনামহানি রোধ হয়।",
    tags: ["Basics", "Fundamentals", "QA Value"]
  },
  {
    id: "q2",
    question: "What is the difference between Quality Assurance (QA) and Quality Control (QC)?",
    questionBn: "Quality Assurance (QA) এবং Quality Control (QC) এর মধ্যে পার্থক্য কি?",
    category: "Fundamentals",
    difficulty: "Beginner",
    answer: "Quality Assurance (QA) is a proactive, process-oriented discipline focused on defect prevention by defining quality standards, auditing development processes, and optimizing workflows. Quality Control (QC) is a reactive, product-oriented discipline focused on defect identification through hands-on test execution to ensure the built artifact matches specifications.",
    answerBn: "Quality Assurance (QA) হলো প্রক্রিয়া-কেন্দ্রিক (Process-oriented) এবং প্রো-অ্যাক্টিভ; এর প্রধান লক্ষ্য বাগ যাতে সৃষ্টিই না হতে পারে সেই নিয়ম ও ফ্রেমওয়ার্ক তৈরি করা। অন্যদিকে Quality Control (QC) হলো পণ্য-কেন্দ্রিক (Product-oriented) এবং রি-অ্যাক্টিভ; যেখানে প্রকৃত সফটওয়্যার চালিয়ে ও টেস্ট করে বাগ খুঁজে বের করা হয়।",
    tags: ["QA vs QC", "Process", "ISO Standards"]
  },
  {
    id: "q3",
    question: "What is the difference between Verification and Validation?",
    questionBn: "Verification (ভেরিফিকেশন) এবং Validation (ভ্যালিডেশন) এর মধ্যে পার্থক্য কি?",
    category: "Fundamentals",
    difficulty: "Beginner",
    answer: "Verification checks 'Are we building the product right?' through static reviews, inspections, and walkthroughs of code and design documents without executing code. Validation checks 'Are we building the right product?' through dynamic execution of the actual software to verify it satisfies end-user needs and business expectations.",
    answerBn: "Verification হলো 'আমরা কি প্রোডাক্টটি সঠিকভাবে তৈরি করছি?'—এটি কোড রান না করে ডকুমেন্ট, আর্কিটেকচার এবং কোড রিভিউ করার স্ট্যাটিক প্রক্রিয়া। অন্যদিকে Validation হলো 'আমরা কি সঠিক প্রোডাক্টটি তৈরি করেছি?'—যেখানে সফটওয়্যার বাস্তবে চালিয়ে ব্যবহারকারীর চাহিদা পূরণ হচ্ছে কিনা তা পরীক্ষা করা হয়।",
    tags: ["V&V", "Static Testing", "Dynamic Testing"]
  },
  {
    id: "q4",
    question: "Explain the difference between Mistake (Error), Bug (Defect), and Failure.",
    questionBn: "Mistake/Error, Bug/Defect এবং Failure-এর মধ্যে সম্পর্ক ও পার্থক্য কি?",
    category: "Fundamentals",
    difficulty: "Beginner",
    answer: "A Mistake/Error is a human action by a developer (such as a logical misjudgment or typo). When this mistake exists inside the source code, it becomes a Bug or Defect. If that bug is executed in the runtime environment and produces an incorrect outcome or system crash, it manifests as a Failure.",
    answerBn: "একজন প্রোগ্রামার যখন ভুল চিন্তা বা কোডিং করেন, তাকে Mistake বা Error বলা হয়। সেই ভুলের কারণে কোডের ভেতর যে ত্রুটি তৈরি হয় তাকে Bug বা Defect বলে। আর প্রডাকশনে বা রানটাইমে যখন সেই ত্রুটির কারণে সফটওয়্যার ভুল আউটপুট দেয় বা ক্র্যাশ করে, তখন তাকে Failure বলে।",
    tags: ["Defect Terminology", "Basics"]
  },
  {
    id: "q5",
    question: "What are the 7 Core Principles of Software Testing?",
    questionBn: "সফটওয়্যার টেস্টিং-এর ৭টি মূল নীতি (7 Principles) কি কি?",
    category: "Fundamentals",
    difficulty: "Intermediate",
    answer: "The 7 principles are: 1) Testing shows the presence of defects, not their absence. 2) Exhaustive testing is impossible. 3) Early testing saves time and money (Shift-Left). 4) Defect clustering (80% of bugs live in 20% of modules). 5) The Pesticide Paradox (tests must be updated regularly). 6) Testing is context-dependent. 7) Absence-of-errors fallacy (a bug-free system that nobody wants is still a failure).",
    answerBn: "৭টি মূল নীতি হলো: ১) টেস্টিং বাগ আছে তা প্রমাণ করতে পারে, কিন্তু বাগ নেই তা নয়। ২) ১০০% টেস্টিং সম্ভব নয়। ৩) যত দ্রুত টেস্টিং শুরু হবে তত খরচ কমবে। ৪) ডিফেক্ট ক্লাস্টারিং (২০% মডিউলে ৮০% বাগ থাকে)। ৫) পেস্টিসাইড প্যারাডক্স (একই টেস্ট বার বার চালালে নতুন বাগ মেলে না)। ৬) কনটেক্সট অনুযায়ী টেস্ট আলাদা হবে। ৭) বাগহীন সফটওয়্যার হলেও প্রয়োজনীয়তা পূরণ না করলে তা অকেজো।",
    tags: ["ISTQB", "Principles"]
  },
  {
    id: "q6",
    question: "What is the difference between a Build, a Release, and Deployment?",
    questionBn: "Build, Release এবং Deployment এর মধ্যে মূল পার্থক্য কি?",
    category: "Fundamentals",
    difficulty: "Intermediate",
    answer: "A Build is a compiled, packaged version of the source code provided to the internal QA team for testing. A Release is an officially approved, tested build delivered to end-users or clients with release notes. Deployment is the automated or manual action of hosting that build or release onto a physical server or cloud environment (Staging or Production).",
    answerBn: "Build হলো ডেভেলপারদের সংকলিত (Compiled) ফাইল যা QA টিমকে টেস্ট করার জন্য দেয়া হয়। Release হলো সম্পূর্ণ টেস্ট করা এবং সাইন-অফ প্রাপ্ত সফটওয়্যার ভার্সন যা ক্লায়েন্ট বা কাস্টমারদের ব্যবহারের জন্য উন্মুক্ত করা হয়। Deployment হলো সেই বিল্ড বা রিলিজকে কোনো নির্দিষ্ট সার্ভার বা ক্লাউড ক্লাস্টারে ইনস্টল ও অ্যাক্টিভ করার প্রক্রিয়া।",
    tags: ["Build vs Release", "DevOps", "Environments"]
  },
  {
    id: "q7",
    question: "When should we stop software testing? (Exit Criteria)",
    questionBn: "আমরা কখন সফটওয়্যার টেস্টিং বন্ধ করব? (Exit Criteria কি?)",
    category: "Fundamentals",
    difficulty: "Intermediate",
    answer: "Testing never stops arbitrarily; it stops when defined Exit Criteria are met: 1) 100% of planned critical test cases executed with acceptable pass rates (e.g. >95%). 2) Zero open Critical/Blocker or High severity defects. 3) Remaining minor bugs documented and accepted by Product Owners. 4) Code coverage and requirement traceability thresholds achieved. 5) Regression test suite completed cleanly.",
    answerBn: "টেস্টিং যখন-তখন বন্ধ করা যায় না; নির্ধারিত Exit Criteria পূরণ হলেই বন্ধ করা হয়: ১) সব হাই ও ক্রিটিক্যাল টেস্ট কেস সফলভাবে রান হওয়া। ২) কোনো Blocker বা Critical বাগ ওপেন না থাকা। ৩) রিকয়ারমেন্ট ট্রেসেবিলিটি ম্যাট্রিক্স ১০০% কভার হওয়া। ৪) প্রোডাকশন টাইমলাইন ও বাজেট শেষ হওয়া এবং প্রডাক্ট ওনারের সাইন-অফ পাওয়া।",
    tags: ["Exit Criteria", "Test Closure", "QA Process"]
  },

  // ─── 2. TESTING TYPES & METHODOLOGIES ─────────────────────────
  {
    id: "q8",
    question: "What is Black Box Testing, and what are its key techniques?",
    questionBn: "ব্ল্যাক বক্স টেস্টিং কি এবং এর প্রধান টেকনিকগুলো কি কি?",
    category: "Testing Types",
    difficulty: "Beginner",
    answer: "Black Box Testing evaluates the functional behavior of software without inspecting internal source code or architecture. The tester provides inputs and verifies outputs against SRS requirements. Core techniques include Boundary Value Analysis (BVA), Equivalence Class Partitioning (ECP), Decision Table Testing, State Transition, and Use Case Testing.",
    answerBn: "ব্ল্যাক বক্স টেস্টিং হলো সফটওয়্যারের ভেতরের কোড বা ইন্টারনাল আর্কিটেকচার না দেখেই শুধুমাত্র ইনপুট দিয়ে প্রত্যাশিত আউটপুট পাওয়া যাচ্ছে কিনা তা পরীক্ষা করা। এর প্রধান টেকনিকগুলো হলো: Boundary Value Analysis (BVA), Equivalence Partitioning (ECP), Decision Table এবং State Transition টেস্টিং।",
    tags: ["Black Box", "BVA", "ECP"]
  },
  {
    id: "q9",
    question: "What is White Box Testing and Grey Box Testing?",
    questionBn: "হোয়াইট বক্স টেস্টিং এবং গ্রে বক্স টেস্টিং কি?",
    category: "Testing Types",
    difficulty: "Intermediate",
    answer: "White Box Testing examines internal code structure, control flow, loops, and data flow (performed by developers or SDETs using statement, branch, and path coverage). Grey Box Testing is a hybrid approach where the tester has partial knowledge of backend architecture, database schemas, or API endpoints while testing user-facing workflows.",
    answerBn: "White Box Testing-এ টেস্টারের কোড ও আর্কিটেকচারের সম্পূর্ণ জ্ঞান থাকে এবং কোড কভারেজ ও লজিক চেক করা হয়। অন্যদিকে Grey Box Testing হলো উভয়ের মিশ্রণ—যেখানে টেস্টার ভেতরের ডাটাবেজ স্ট্রাকচার বা API ডিজাইন আংশিক জেনে ব্ল্যাক বক্সের মতো ব্যবহারকারীর দিক থেকে গভীর টেস্ট পরিচালনা করেন।",
    tags: ["White Box", "Grey Box", "Code Coverage"]
  },
  {
    id: "q10",
    question: "Explain the four primary Levels of Software Testing.",
    questionBn: "সফটওয়্যার টেস্টিং-এর ৪টি প্রধান লেভেল (Levels of Testing) ব্যাখ্যা কর।",
    category: "Testing Types",
    difficulty: "Beginner",
    answer: "The four levels are: 1) Unit Testing (validates individual methods/components, usually done by devs). 2) Integration Testing (validates interactions and data flow between integrated modules). 3) System Testing (end-to-end testing of the complete integrated product against business requirements). 4) Acceptance Testing / UAT (evaluates business readiness and user satisfaction).",
    answerBn: "৪টি লেভেল হলো: ১) Unit Testing: কোডের ক্ষুদ্রতম ফাংশন বা কম্পোনেন্ট টেস্ট করা (সাধারণত ডেভেলপাররা করেন)। ২) Integration Testing: একাধিক মডিউল একত্র করার পর ডেটা আদান-প্রদান ঠিক আছে কিনা দেখা। ৩) System Testing: পুরো সফটওয়্যারটি পূর্ণাঙ্গভাবে টেস্ট করা। ৪) User Acceptance Testing (UAT): ক্লায়েন্ট বা আসল ইউজাররা সফটওয়্যারটি গ্রহণযোগ্য কিনা তা যাচাই করেন।",
    tags: ["Unit", "Integration", "System", "UAT"]
  },
  {
    id: "q11",
    question: "What is the difference between Smoke Testing and Sanity Testing?",
    questionBn: "Smoke Testing এবং Sanity Testing এর মধ্যে পার্থক্য কি?",
    category: "Testing Types",
    difficulty: "Intermediate",
    answer: "Smoke Testing (Build Verification Test) is a shallow, broad test run on newly delivered initial builds to ensure critical functions (app launch, login, main navigation) work before QA accepts the build for deep testing. Sanity Testing is a narrow, deep test performed after a bug fix or minor release to quickly verify that the specific defect was fixed and related features were not broken.",
    answerBn: "Smoke Testing হলো নতুন কোনো বিল্ড পাওয়ার পর প্রাথমিক ক্রিটিক্যাল ফিচারগুলো (যেমন অ্যাপ ওপেন হওয়া, লগইন হওয়া) কাজ করছে কিনা তা ভেরিফাই করা—এটি বিস্তারিত নয়, বরং অগভীর ও সামগ্রিক। Sanity Testing হলো নির্দিষ্ট কোনো বাগ ফিক্স বা ছোট পরিবর্তনের পর সেই ফিক্সটি কাজ করছে কিনা তা গভীরভাবে চেক করা।",
    tags: ["Smoke vs Sanity", "BVT", "Build Acceptance"]
  },
  {
    id: "q12",
    question: "What is the difference between Regression Testing and Re-testing?",
    questionBn: "Regression Testing এবং Re-testing এর মধ্যে পার্থক্য কি?",
    category: "Testing Types",
    difficulty: "Intermediate",
    answer: "Re-testing verifies whether a specific previously failed test case passes after a developer has fixed that exact defect. Regression Testing verifies whether new code changes, bug fixes, or enhancements unintentionally broke existing, previously working features across the application.",
    answerBn: "Re-testing হলো কোনো নির্দিষ্ট বাগ ফিক্স হওয়ার পর টেস্টার শুধুমাত্র সেই ফিক্স করা অংশটি চেক করেন যে বাগটি দূর হয়েছে কিনা। আর Regression Testing হলো সেই নতুন কোড বা বাগ ফিক্সের ফলে সফটওয়্যারের আগে থেকে ভালো কাজ করা অন্য কোনো ফিচার ভেঙে গেছে কিনা তা নিশ্চিত করা।",
    tags: ["Regression", "Retesting", "Impact Analysis"]
  },
  {
    id: "q13",
    question: "What is Exploratory Testing, and how does it differ from Ad-hoc Testing?",
    questionBn: "Exploratory Testing কি এবং এটি Ad-hoc Testing থেকে কীভাবে আলাদা?",
    category: "Testing Types",
    difficulty: "Intermediate",
    answer: "Exploratory Testing is simultaneous learning, test design, and test execution guided by charters, past domain experience, and adversarial user thinking. It is structured and documented. Ad-hoc testing is completely random, unstructured testing without predefined objectives or formal charters ('monkey testing').",
    answerBn: "Exploratory Testing হলো একই সাথে সফটওয়্যার শেখা, টেস্ট ডিজাইন করা এবং টেস্ট চালানো। এটি প্ল্যানহীন নয়, এতে স্পষ্ট লক্ষ্য (Charter) থাকে এবং অভিজ্ঞ টেস্টারের ইনটুইশন কাজে লাগানো হয়। অন্যদিকে Ad-hoc Testing হলো কোনো প্ল্যান বা চার্টার ছাড়া সম্পূর্ণ র্যান্ডমভাবে সফটওয়্যার ক্লিক করে বাগ খোঁজা।",
    tags: ["Exploratory", "Ad-hoc", "Session Based"]
  },
  {
    id: "q14",
    question: "What are Functional vs Non-Functional Testing?",
    questionBn: "Functional এবং Non-Functional Testing এর মধ্যে পার্থক্য কি?",
    category: "Testing Types",
    difficulty: "Beginner",
    answer: "Functional Testing validates WHAT the system does (login, shopping cart calculation, payment processing, reports against functional requirements). Non-Functional Testing validates HOW WELL the system performs (response time, load capacity, network throttling, security, usability, reliability, recovery from failure).",
    answerBn: "Functional Testing পরীক্ষা করে সফটওয়্যার 'কী' কাজ করছে (যেমন: লগইন বাটনে ক্লিক করলে লগইন হচ্ছে কিনা, ডিসকাউন্ট ক্যালকুলেশন সঠিক কিনা)। Non-Functional Testing পরীক্ষা করে সফটওয়্যার 'কেমনভাবে' কাজ করছে (যেমন: ১০০০ ব্যবহারকারী একসাথে ঢুকলে গতি কেমন, সিকিউরিটি কেমন, মোবাইল ও পিসিতে স্ক্রিন ঠিক থাকে কিনা)।",
    tags: ["Functional", "Non-Functional", "Performance"]
  },
  {
    id: "q15",
    question: "Explain Performance Testing types: Load, Stress, Spike, and Soak.",
    questionBn: "Performance Testing-এর বিভিন্ন ধরন: Load, Stress, Spike এবং Soak টেস্ট ব্যাখ্যা কর।",
    category: "Testing Types",
    difficulty: "Advanced",
    answer: "Load Testing measures system response time and stability under anticipated normal peak traffic. Stress Testing pushes traffic beyond maximum architectural limits to observe failure points and graceful degradation. Spike Testing introduces instant, sudden bursts of extreme traffic to measure recovery. Soak (Endurance) Testing runs steady moderate load over 24-72 hours to identify memory leaks, socket starvation, and database bloat.",
    answerBn: "Load Testing: প্রত্যাশিত স্বাভাবিক ট্রাফিকে সফটওয়্যার কতটা দ্রুত কাজ করে তা মাপা। Stress Testing: সফটওয়্যারের ধারণক্ষমতার চেয়ে বেশি চাপ দিয়ে এটি কখন ও কীভাবে ক্র্যাশ করে তা দেখা। Spike Testing: হঠাৎ অতিরিক্ত ট্রাফিক এলে সিস্টেম ভেঙে পড়ে কিনা দেখা। Soak Testing: একটানা ২৪-৪৮ ঘণ্টা একটানা লোড দিয়ে মেমোরি লিক বা সার্ভার স্লো হয় কিনা তা পরীক্ষা করা।",
    tags: ["Performance", "Load", "Stress", "K6"]
  },

  // ─── 3. SDLC & STLC ──────────────────────────────────────────
  {
    id: "q16",
    question: "What is SDLC and what are its key phases?",
    questionBn: "SDLC কি এবং এর মূল ধাপগুলো কি কি?",
    category: "SDLC & STLC",
    difficulty: "Beginner",
    answer: "SDLC (Software Development Life Cycle) is a structured engineering framework for designing, developing, testing, and deploying high-quality software. Its key phases are: 1) Requirement Gathering & Analysis, 2) System Architecture & Design, 3) Implementation/Coding, 4) Testing, 5) Deployment, and 6) Maintenance & Monitoring.",
    answerBn: "SDLC (Software Development Life Cycle) হলো একটি সফটওয়্যার তৈরির শুরু থেকে শেষ পর্যন্ত সম্পূর্ণ পরিকল্পিত প্রক্রিয়া। এর ধাপগুলো হলো: ১) রিকয়ারমেন্ট সংগ্রহ ও বিশ্লেষণ, ২) সিস্টেম ডিজাইন ও আর্কিটেকচার, ৩) কোডিং ও ডেভেলপমেন্ট, ৪) টেস্টিং, ৫) ডিপ্লয়মেন্ট বা রিলিজ, এবং ৬) মেইনটেন্যান্স ও মনিটরিং।",
    tags: ["SDLC", "Engineering Cycle"]
  },
  {
    id: "q17",
    question: "What is STLC and what are its distinct phases?",
    questionBn: "STLC (Software Testing Life Cycle) কি এবং এর ধাপগুলো কি কি?",
    category: "SDLC & STLC",
    difficulty: "Intermediate",
    answer: "STLC is the sequence of specific testing activities executed to guarantee software quality. Its phases are: 1) Requirement Analysis (identifying testable requirements), 2) Test Planning (strategy, estimates, resources), 3) Test Case Development (scenarios, test data), 4) Test Environment Setup (hardware/software staging), 5) Test Execution (running scripts, logging bugs), and 6) Test Closure (metrics, final test summary).",
    answerBn: "STLC হলো সফটওয়্যারের গুণগত মান নিশ্চিত করার জন্য পরিচালিত ধারাবাহিক টেস্টিং প্রক্রিয়া। এর ৬টি ধাপ হলো: ১) রিকয়ারমেন্ট এনালাইসিস, ২) টেস্ট প্ল্যানিং, ৩) টেস্ট কেস তৈরি ও ডেটা প্রস্তুত, ৪) টেস্ট এনভায়রনমেন্ট সেটআপ, ৫) টেস্ট এক্সিকিউশন ও বাগ রিপোর্টিং, এবং ৬) টেস্ট ক্লোজার রিপোর্ট তৈরি।",
    tags: ["STLC", "Testing Life Cycle"]
  },
  {
    id: "q18",
    question: "What is the key difference between SDLC and STLC?",
    questionBn: "SDLC এবং STLC এর মধ্যে মূল পার্থক্য কি?",
    category: "SDLC & STLC",
    difficulty: "Beginner",
    answer: "SDLC governs the overall development of the entire software product from business conception to post-launch maintenance, led by Project Managers and Developers. STLC is a focused sub-lifecycle within SDLC dedicated exclusively to quality validation, testing processes, defect reporting, and test closure, led by the QA team.",
    answerBn: "SDLC হলো পুরো সফটওয়্যার তৈরির সামগ্রিক প্রসেস যা প্রজেক্ট ম্যানেজার ও ডেভেলপাররা পরিচালনা করেন। আর STLC হলো SDLC-এর ভেতরের একটি অংশ যা শুধুমাত্র কোয়ালিটি টেস্টিং, টেস্ট কেস ও বাগ দূরীকরণের জন্য নিবেদিত এবং QA টিম এটি পরিচালনা করে।",
    tags: ["SDLC vs STLC"]
  },
  {
    id: "q19",
    question: "Explain the V-Model in Software Engineering.",
    questionBn: "সফটওয়্যার ইঞ্জিনিয়ারিং-এ V-Model কি এবং এটি কেন গুরুত্বপূর্ণ?",
    category: "SDLC & STLC",
    difficulty: "Intermediate",
    answer: "The V-Model (Verification & Validation model) pairs every development phase on the left arm of the 'V' with a corresponding testing phase on the right arm: Business Requirements pair with UAT; System Design pairs with System Testing; Architecture Design pairs with Integration Testing; and Module Coding pairs with Unit Testing. It guarantees early test planning.",
    answerBn: "V-Model হলো এমন একটি ডেভেলপমেন্ট মডেল যেখানে ডেভেলপমেন্টের প্রতিটি ধাপের সাথে সমান্তরালভাবে একটি টেস্টিং ধাপ যুক্ত থাকে। যেমন: বিজনেস রিকয়ারমেন্টের সাথে UAT, সিস্টেম ডিজাইনের সাথে System Testing, আর্কিটেকচারের সাথে Integration Testing, এবং মডিউল কোডিং-এর সাথে Unit Testing যুক্ত থাকে।",
    tags: ["V-Model", "Early Testing"]
  },
  {
    id: "q20",
    question: "What is Agile Scrum and what is the QA's role in a Sprint?",
    questionBn: "Agile Scrum কি এবং একটি স্প্রিন্টে QA ইঞ্জিনিয়ারের ভূমিকা কি?",
    category: "SDLC & STLC",
    difficulty: "Intermediate",
    answer: "Agile Scrum delivers working software in short 2-3 week Sprints. QA engineers actively participate from Sprint Planning (clarifying acceptance criteria), draft test cases during development (In-Sprint Testing), run API and automation checks as code is checked in, triage blockers during daily standups, and present quality metrics in Sprint Retrospectives.",
    answerBn: "Agile Scrum-এ সাধারণত ২ থেকে ৩ সপ্তাহের ছোট স্প্রিন্টে সফটওয়্যারের অংশ তৈরি ও রিলিজ করা হয়। এখানে QA ইঞ্জিনিয়ার প্রথম দিন থেকেই ইউজার স্টোরি রিভিউ করেন, ডেভেলপমেন্ট চলাকালীন টেস্ট কেস লেখেন, রেডি হলেই ফিচার টেস্ট করেন এবং কোনো বাগ থাকলে তাৎক্ষণিক ডেভেলপারদের সাথে আলোচনা করে দ্রুত সমাধান করেন।",
    tags: ["Agile", "Scrum", "Sprint QA"]
  },

  // ─── 4. BUG MANAGEMENT ───────────────────────────────────────
  {
    id: "q21",
    question: "Explain the Bug / Defect Life Cycle with all its states.",
    questionBn: "Bug / Defect Life Cycle এর প্রতিটি স্টেজ বিস্তারিত ব্যাখ্যা কর।",
    category: "Bug Management",
    difficulty: "Intermediate",
    answer: "The lifecycle tracks a defect from discovery to resolution: 1) NEW (logged by QA). 2) ASSIGNED (lead assigns to dev). 3) OPEN (dev investigates). 4) FIXED (dev resolves in code). 5) PENDING RETEST (deployed to QA env). 6) RETEST (QA re-executes). 7) REOPENED (if bug persists) or CLOSED (if verified fixed). Alternate states: REJECTED (not a bug), DEFERRED (postponed to next release), DUPLICATE (already logged).",
    answerBn: "বাগ লাইফ সাইকেল হলো একটি বাগ আবিষ্কার থেকে ক্লোজ হওয়া পর্যন্ত যাত্রা: ১) New: টেস্টার বাগ খুঁজে পোস্ট করলেন। ২) Assigned: লিড নির্দিষ্ট ডেভেলপারকে অ্যাসাইন করলেন। ৩) Open: ডেভেলপার বাগ পর্যবেক্ষণ শুরু করলেন। ৪) Fixed: বাগ ঠিক করে কোড পুশ করলেন। ৫) Retest: টেস্টার টেস্ট করলেন। ৬) Closed: সমাধান হলে ক্লোজ করা হয়; আর ঠিক না হলে Reopened হয়। এছাড়াও Duplicate, Deferred, বা Rejected হতে পারে।",
    tags: ["Bug Lifecycle", "Jira", "Defect Tracking"]
  },
  {
    id: "q22",
    question: "What is the difference between Bug Severity and Bug Priority? Provide 4 scenario examples.",
    questionBn: "Bug Severity এবং Bug Priority-এর মধ্যে পার্থক্য কি? ৪টি বাস্তব উদাহরণ দাও।",
    category: "Bug Management",
    difficulty: "Advanced",
    answer: "Severity measures the technical and architectural impact of a bug on the application. Priority measures the business urgency of fixing the bug quickly. The 4 combinations are: 1) High Sev, High Pri: Payment gateway crashes during checkout. 2) High Sev, Low Pri: Legacy export feature crashes when selecting year 1970 (rarely used). 3) Low Sev, High Pri: Company logo misspelled as 'Microsft' on the public homepage. 4) Low Sev, Low Pri: Footer privacy policy link has a 2px padding misalignment.",
    answerBn: "Severity বোঝায় সফটওয়্যারের ওপর ত্রুটির প্রযুক্তিগত আঘাত কতটা মারাত্মক (যেমন ক্র্যাশ হওয়া)। Priority বোঝায় ব্যবসার দিক থেকে এটি কত দ্রুত ঠিক করা দরকার। ৪টি উদাহরণ: ১) High Sev, High Pri: কার্ড পেমেন্ট ক্র্যাশ করা। ২) High Sev, Low Pri: পুরোনো রিপোর্টের ডেটা ক্র্যাশ করা যা কেউ দেখে না। ৩) Low Sev, High Pri: হোমপেজে কোম্পানির নাম ভুল বানান থাকা। ৪) Low Sev, Low Pri: ফুটারে ১ পিক্সেল মার্জিন এদিক-ওদিক হওয়া।",
    tags: ["Severity vs Priority", "Triage", "Scenarios"]
  },
  {
    id: "q23",
    question: "What are the essential elements of an effective Bug Report?",
    questionBn: "একটি কার্যকর এবং পেশাদার Bug Report-এ কি কি উপাদান থাকা বাধ্যতামূলক?",
    category: "Bug Management",
    difficulty: "Intermediate",
    answer: "A professional bug report contains: 1) Defect ID & Title with [Module][Severity] prefix, 2) Environment context (OS, browser version, build commit, test account), 3) Preconditions, 4) Numbered, deterministic Steps to Reproduce, 5) Actual Result, 6) Expected Result, 7) Visual proof (screenshots, annotated video, DevTools console logs, network HAR), 8) Severity & Priority assignment.",
    answerBn: "একটি নিখুঁত বাগ রিপোর্টে থাকে: ১) স্পষ্ট টাইটেল ([মডিউল][সিভিয়ারিটি] সহ), ২) এনভায়রনমেন্ট বিবরণ (OS, ব্রাউজার, বিল্ড নাম্বার), ৩) প্রি-কন্ডিশন, ৪) ১-২-৩ করে রিপিট করার স্টেপস, ৫) Actual Result (বাস্তবে কি ঘটল), ৬) Expected Result (কি ঘটা উচিত ছিল), ৭) প্রমাণ (স্ক্রিনশট, ভিডিও, কনসোল এরর বা নেটওয়ার্ক লগ), ৮) সিভিয়ারিটি ও প্রায়োরিটি।",
    tags: ["Bug Report", "Jira Best Practices", "Repro Steps"]
  },
  {
    id: "q24",
    question: "What is Defect Leakage and Defect Density?",
    questionBn: "Defect Leakage এবং Defect Density কি?",
    category: "Bug Management",
    difficulty: "Advanced",
    answer: "Defect Leakage is the percentage of defects missed by QA during testing that are subsequently discovered by end-users in production: (Defects in Prod / (Defects in QA + Defects in Prod)) * 100. Defect Density measures defects relative to module size: Total Defects / KLOC (thousand lines of code) or Function Points, identifying fragile modules.",
    answerBn: "Defect Leakage হলো QA টিম যে বাগগুলো ধরতে ব্যর্থ হয়েছে এবং ক্লায়েন্ট বা আসল ইউজাররা প্রোডাকশনে খুঁজে পেয়েছে তার শতকরা হার। আর Defect Density হলো কোডের সাইজ অনুযায়ী কতটি বাগ পাওয়া গেল (প্রতি ১০০০ লাইন কোডে কতটি বাগ), যার মাধ্যমে কোন মডিউলটি সবচেয়ে দুর্বল তা বোঝা যায়।",
    tags: ["QA Metrics", "Defect Leakage", "Defect Density"]
  },

  // ─── 5. TEST DOCUMENTATION & DESIGN ──────────────────────────
  {
    id: "q25",
    question: "What is Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP)?",
    questionBn: "Boundary Value Analysis (BVA) এবং Equivalence Class Partitioning (ECP) কি?",
    category: "Test Documentation",
    difficulty: "Intermediate",
    answer: "ECP divides input data into valid and invalid partitions where any single value represents the whole class (e.g. Age: 18-60 valid; <18 invalid; >60 invalid). BVA focuses on the boundaries where most programming defects occur (Min, Min-1, Min+1, Max, Max-1, Max+1). For Age 18-60, test values are 17, 18, 19, 59, 60, 61.",
    answerBn: "ECP হলো ইনপুট ডেটাকে সমান কিছু ভাগে ভাগ করা (যেমন ১৮-৬০ বৈধ, ১৮-এর নিচে অবৈধ, ৬০-এর ওপরে অবৈধ)। আর BVA হলো সীমানা পরীক্ষা করা—কারণ প্রোগ্রামাররা লজিকের সীমানায় (> বনাম >=) সবচেয়ে বেশি ভুল করেন। তাই ১৮ ও ৬০-এর জন্য ১৭, ১৮, ১৯ এবং ৫৯, ৬০, ৬১ টেস্ট করা হয়।",
    tags: ["BVA", "ECP", "Test Design"]
  },
  {
    id: "q26",
    question: "What is a Test Plan and what are its key IEEE 829 components?",
    questionBn: "Test Plan কি এবং এর মূল উপাদানগুলো কি কি?",
    category: "Test Documentation",
    difficulty: "Intermediate",
    answer: "A Test Plan is a comprehensive document detailing the scope, approach, resources, schedule, and deliverables for testing an application. Key IEEE 829 sections: Test Scope (In-scope / Out-of-scope), Test Strategy, Pass/Fail criteria, Suspension/Resumption criteria, Test Deliverables, Environment requirements, Staffing & Training, Risks & Contingencies, Approvals.",
    answerBn: "Test Plan হলো পুরো টেস্টিং প্রকল্পের ব্লু-প্রিন্ট বা রূপরেখা। এর মূল অংশগুলো হলো: স্কোপ (কোনটি টেস্ট হবে, কোনটি হবে না), টেস্ট স্ট্র্যাটেজি, সময়সূচী, রিসোর্স বণ্টন, টেস্ট এনভায়রনমেন্টের শর্তাবলী, সম্ভাব্য ঝুঁকি ও সমাধান এবং সাইন-অফ মানদণ্ড।",
    tags: ["Test Plan", "IEEE 829", "Strategy"]
  },
  {
    id: "q27",
    question: "What is the difference between a Test Plan and a Test Strategy?",
    questionBn: "Test Plan এবং Test Strategy-এর মধ্যে পার্থক্য কি?",
    category: "Test Documentation",
    difficulty: "Intermediate",
    answer: "A Test Strategy is a high-level, static organizational document written by QA Managers defining general testing methodologies, tools, and quality gates across all projects. A Test Plan is a dynamic, project-specific document written by QA Leads detailing what, when, who, and how testing will occur for a particular release.",
    answerBn: "Test Strategy হলো উচ্চপর্যায়ের সামগ্রিক ডকুমেন্ট (সাধারণত QA Manager তৈরি করেন) যা পুরো প্রতিষ্ঠানের সমস্ত প্রজেক্টে কোন মেথড ও টুল ব্যবহৃত হবে তা নির্ধারণ করে (এটি সহজে পরিবর্তিত হয় না)। আর Test Plan হলো নির্দিষ্ট একটি প্রজেক্টের রিলিজের জন্য কে, কখন, কীভাবে টেস্ট করবে তার বিস্তারিত বাস্তবায়ন পরিকল্পনা।",
    tags: ["Plan vs Strategy"]
  },
  {
    id: "q28",
    question: "What is a Requirement Traceability Matrix (RTM)?",
    questionBn: "Requirement Traceability Matrix (RTM) কি এবং এটি কেন দরকার?",
    category: "Test Documentation",
    difficulty: "Intermediate",
    answer: "RTM is a document (matrix) mapping user requirements (from BRD/SRS) to their corresponding test cases and logged defects. It provides Forward Traceability (ensures every requirement has test coverage) and Backward Traceability (ensures no unneeded tests exist and traces bugs back to original requirements), guaranteeing 100% test coverage.",
    answerBn: "RTM হলো এমন একটি টেবিল বা ম্যাট্রিক্স যা ক্লায়েন্টের প্রতিটি রিকয়ারমেন্টের সাথে সংশ্লিষ্ট টেস্ট কেস এবং বাগগুলোকে যুক্ত করে। এর মাধ্যমে নিশ্চিত হওয়া যায় যে কোনো রিকয়ারমেন্ট টেস্ট না করে বাদ পড়ে যায়নি (১০০% টেস্ট কভারেজ নিশ্চিতকরণ)।",
    tags: ["RTM", "Traceability", "Coverage"]
  },
  {
    id: "q29",
    question: "What are the attributes of a standard Test Case?",
    questionBn: "একটি স্ট্যান্ডার্ড টেস্ট কেস (Test Case)-এর প্রধান অ্যাট্রিবিউটগুলো কি কি?",
    category: "Test Documentation",
    difficulty: "Beginner",
    answer: "A standard test case includes: 1) Test Case ID (e.g. TC_AUTH_001), 2) Test Title / Description, 3) Module / Feature, 4) Pre-conditions, 5) Test Data inputs, 6) Step-by-Step Execution Instructions, 7) Expected Result, 8) Actual Result (recorded during execution), 9) Status (Pass/Fail/Blocked), 10) Executed By & Date.",
    answerBn: "একটি পূর্ণাঙ্গ টেস্ট কেসে থাকে: ১) Test Case ID, ২) টেস্ট টাইটেল, ৩) মডিউল নাম, ৪) প্রি-কন্ডিশন, ৫) টেস্ট ডেটা, ৬) টেস্ট করার ধারাবাহিক ধাপসমূহ (Test Steps), ৭) প্রত্যাশিত ফলাফল (Expected Result), ৮) প্রকৃত ফলাফল (Actual Result), ৯) স্ট্যাটাস (Pass/Fail), এবং ১০) টেস্টার নাম ও তারিখ।",
    tags: ["Test Case", "Attributes", "Test Design"]
  },

  // ─── 6. API & AUTOMATION ─────────────────────────────────────
  {
    id: "q30",
    question: "What are the most common HTTP Status Codes every QA must know?",
    questionBn: "প্রতিটি QA ইঞ্জিনিয়ারের জানা আবশ্যক এমন প্রধান HTTP Status Code গুলো কি কি?",
    category: "API & Automation",
    difficulty: "Beginner",
    answer: "Key codes: 200 OK (successful request), 201 Created (resource successfully generated), 204 No Content. 400 Bad Request (malformed syntax), 401 Unauthorized (missing/invalid token), 403 Forbidden (authenticated but lacks role permissions), 404 Not Found, 429 Too Many Requests (rate-limited). 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable.",
    answerBn: "প্রধান স্ট্যাটাস কোড: ২০০ OK (সফল রিকোয়েস্ট), ২০১ Created (নতুন ডেটা তৈরি), ২৪০ No Content। ৪০০ Bad Request (ভুল ফরম্যাট), ৪০১ Unauthorized (টোকেন নেই বা মেয়াদ শেষ), ৪০৩ Forbidden (অনুমতি নেই), ৪০৪ Not Found। ৫০০ Internal Server Error (সার্ভার ক্র্যাশ), ৫০২ Bad Gateway, ৫০৩ Service Unavailable (সার্ভার বন্ধ বা ওভারলোড)।",
    tags: ["API", "HTTP Status Codes", "REST"]
  },
  {
    id: "q31",
    question: "What is JSON Schema Validation and why is it crucial in API automation?",
    questionBn: "JSON Schema Validation কি এবং API অটোমেশনে এটি কেন এত গুরুত্বপূর্ণ?",
    category: "API & Automation",
    difficulty: "Intermediate",
    answer: "JSON Schema Validation verifies the contract of an API response — ensuring field types (string, integer, boolean, array), required properties, nullability, and regex formats conform strictly to documentation. It is crucial because an endpoint could return 200 OK with correct status, yet deliver corrupted data structures that silently break downstream mobile or web apps.",
    answerBn: "JSON Schema Validation হলো API-এর রেসপন্স নির্দিষ্ট ডেটা স্ট্রাকচার ও টাইপ (যেমন: id অবশ্যই number, email অবশ্যই valid string) মেনে আসছে কিনা তা কোডের মাধ্যমে যাচাই করা। স্ট্যাটাস কোড ২০০ আসলেও ভেতরের ডেটা ফরম্যাট ভুল আসলে ফ্রন্টএন্ড ক্র্যাশ করবে, যা স্কিমা ভ্যালিডেশন দিয়ে ঠেকানো যায়।",
    tags: ["API", "Postman", "Schema Validation"]
  },
  {
    id: "q32",
    question: "What is the Page Object Model (POM) in UI automation?",
    questionBn: "UI অটোমেশনে Page Object Model (POM) কি এবং এর সুবিধা কি?",
    category: "API & Automation",
    difficulty: "Intermediate",
    answer: "Page Object Model (POM) is an architectural design pattern where web pages or major UI components are represented as dedicated classes. Locators and user interaction methods (e.g. login(), submitCheckout()) are encapsulated inside the page class. Test scripts only invoke these methods, ensuring that when UI locators change, updates occur in exactly one central class rather than across 100 test files.",
    answerBn: "Page Object Model (POM) হলো একটি ডিজাইন প্যাটার্ন যেখানে অ্যাপের প্রতিটি ওয়েব পেজের জন্য আলাদা ক্লাস তৈরি করা হয়। পেজের সমস্ত এলিমেন্ট ও অ্যাকশন (যেমন লগইন, পেমেন্ট) সেই ক্লাসের ভেতর থাকে। টেস্ট স্ক্রিপ্ট সরাসরি এলিমেন্ট না খুঁজে ওই ক্লাস মেথড কল করে। ফলে UI বদলালে শত শত টেস্ট ফাইল না বদলে শুধু একটি পেজ ফাইল বদলালেই কাজ হয়ে যায়।",
    tags: ["POM", "Playwright", "Automation Architecture"]
  },
  {
    id: "q33",
    question: "When should tests be automated versus kept manual?",
    questionBn: "কখন অটোমেশন টেস্টিং করবেন আর কখন ম্যানুয়াল টেস্টিং রাখা উচিত?",
    category: "API & Automation",
    difficulty: "Intermediate",
    answer: "Automate: 1) High-volume repetitive Regression suites, 2) Smoke/Sanity tests in CI/CD pipelines, 3) Data-driven testing across 1000s of inputs, 4) Performance/Load testing, 5) Complex API contract validations. Keep Manual: 1) Exploratory and ad-hoc investigations, 2) Early prototype features with volatile UI, 3) User Experience (UX) and visual aesthetics, 4) One-off features.",
    answerBn: "অটোমেশন করবেন: বার বার চালানো রিগ্রেশন টেস্ট, CI/CD পাইপলাইনের স্মোক টেস্ট, হাজার হাজার ডেটা দিয়ে একই টেস্ট চালানো এবং লোড টেস্টিং। ম্যানুয়াল রাখবেন: এক্সপ্লোরেটরি টেস্টিং, নতুন দ্রুত পরিবর্তনশীল ফিচার, ইউজার এক্সপেরিয়েন্স (UX) অনুভূতি যাচাই এবং একবারের জন্য করা ছোট টেস্ট।",
    tags: ["ROI", "Manual vs Automation", "Strategy"]
  },

  // ─── 7. SCENARIO BASED & TRICKY QUESTIONS ────────────────────
  {
    id: "q34",
    question: "Scenario: A developer says 'Works on my machine' and closes your bug. How do you respond?",
    questionBn: "সিনারিও: ডেভেলপার বললেন 'আমার পিসিতে কাজ করছে' এবং আপনার বাগ বন্ধ করলেন। আপনি কি করবেন?",
    category: "Scenario Based",
    difficulty: "Advanced",
    answer: "Do not argue emotionally. Respond professionally with evidence: 1) Re-verify on a clean incognito session or virtual machine to ensure local cache wasn't a factor. 2) Update the Jira ticket with explicit environment details (OS build, browser, viewport, test user credentials, database seed state). 3) Attach a short video recording and network HAR log showing console errors. 4) Schedule a 5-minute screen share with the developer to reproduce the issue live.",
    answerBn: "তর্ক না করে পেশাদারিত্ব বজায় রাখব: ১) প্রথমে নিজের ব্রাউজারের ক্যাশ ডিলিট বা ইনকগনিটো মোডে আবার চেক করব। ২) টিকিটে নির্দিষ্ট এনভায়রনমেন্ট বিবরণ, টেস্ট ডেটা ও টেস্ট অ্যাকাউন্টের বিবরণ যোগ করব। ৩) নেটওয়ার্ক HAR ফাইল ও ভিডিও এটাচ করব। ৪) ডেভেলপারকে নিয়ে ৫ মিনিটের জন্য স্ক্রিন শেয়ার করে বাগটি লাইভ দেখিয়ে দেব।",
    tags: ["Developer Pushback", "Professionalism", "Reproduction"]
  },
  {
    id: "q35",
    question: "Scenario: You find a critical bug 2 hours before an important production release. What do you do?",
    questionBn: "সিনারিও: গুরুত্বপূর্ণ প্রডাকশন রিলিজের মাত্র ২ ঘণ্টা আগে আপনি একটি ক্রিটিক্যাল বাগ পেলেন। আপনি কি করবেন?",
    category: "Scenario Based",
    difficulty: "Advanced",
    answer: "1) Immediately raise a Blocker defect with full reproduction steps. 2) Notify the QA Lead, Project Manager, and Tech Lead immediately in the release Slack/Teams channel. 3) Assess business impact: Does this risk data loss, revenue loss, or security compromise? 4) Propose options: hotfix + smoke test, disable the broken feature via feature flag, or postpone the release. 5) Support the Product Owner's final decision.",
    answerBn: "১) তাৎক্ষণিকভাবে Blocker প্রায়োরিটিতে বাগ লগ করব। ২) অবিলম্বে রিলিজ চ্যানেল বা টিম লিড, পিএম ও টেক লিডকে ফোনে বা চ্যাটে অ্যালার্ট দেব। ৩) বাগটির রিস্ক অ্যানালাইসিস করব (এটি কি ডেটা নষ্ট করছে নাকি পেমেন্ট আটকাচ্ছে)। ৪) বিকল্প প্রস্তাব দেব: দ্রুত হটফিক্স দেওয়া, ফিচার ফ্ল্যাগ দিয়ে অপশনটি বন্ধ রেখে বাকিটুকু রিলিজ করা, অথবা রিলিজ পিছিয়ে দেওয়া। ৫) টিম যে সিদ্ধান্ত নেয় তা সাপোর্ট করব।",
    tags: ["Release Blocker", "Crisis Management", "Leadership"]
  },
  {
    id: "q36",
    question: "Scenario: How would you test a simple e-commerce Search Bar?",
    questionBn: "সিনারিও: একটি ই-কমার্স ওয়েবসাইটের Search Bar আপনি কীভাবে টেস্ট করবেন?",
    category: "Scenario Based",
    difficulty: "Intermediate",
    answer: "1) Functional: Search existing product name, partial name, category, SKU/model number, case sensitivity ('phone' vs 'Phone'). 2) Negative/Edge: Empty search, spaces only, special characters (SQL injection, XSS payloads: <script>alert(1)</script>), extreme length strings (500+ chars). 3) UI/UX: Autocomplete suggestions, 'No products found' friendly message, clear 'X' button. 4) Performance: Response latency under slow 3G.",
    answerBn: "১) ফাংশনাল: সঠিক পণ্যের নাম, আংশিক নাম, ক্যাটাগরি, ছোট-বড় হাতের অক্ষর মিলিয়ে সার্চ করা। ২) নেগেটিভ ও এজ কেস: ফাঁকা সার্চ, স্পেস দিয়ে সার্চ, স্পেশাল ক্যারেক্টার ও সিকিউরিটি পেলোড (যেমন XSS ও SQL injection কোড লিখে সার্চ করা)। ৩) UX: অটো-সাজেশন ঠিকমতো আসছে কিনা, রেজাল্ট না পেলে সুন্দর বার্তা দিচ্ছে কিনা। ৪) পারফরম্যান্স: সার্চ রেজাল্ট কত মিলিসেকেন্ডে লোড হচ্ছে।",
    tags: ["Test Scenarios", "Search Bar", "Edge Cases"]
  },
  {
    id: "q37",
    question: "Scenario: A bug is reported in production that QA missed. What is your post-incident approach?",
    questionBn: "সিনারিও: প্রোডাকশনে একটি বাগ ধরা পড়ল যা QA টিম মিস করেছিল। আপনার পরবর্তী পদক্ষেপ কি হবে?",
    category: "Scenario Based",
    difficulty: "Advanced",
    answer: "1) Assist the engineering team in reproducing and validating the immediate hotfix. 2) Conduct a blameless Root Cause Analysis (RCA): Why was it missed? Was it a gap in requirements, an untested environment difference, or missing edge-case data? 3) Add new regression test cases (manual & automated) to ensure this bug can never leak again. 4) Update the QA checklist and share learnings in sprint retrospective.",
    answerBn: "১) কাউকে দোষারোপ না করে ডেভেলপারদের দ্রুত হটফিক্স ভেরিফাই করতে সহায়তা করব। ২) রুট কজ অ্যানালাইসিস (RCA) করব: এটি কেন মিস হলো? এনভায়রনমেন্টের ভিন্নতা নাকি রিকয়ারমেন্টের ঘাটতি? ৩) এই ভুলের উপর ভিত্তি করে টেস্ট স্যুইটে নতুন টেস্ট কেস এবং অটোমেশন স্ক্রিপ্ট যুক্ত করব যাতে ভবিষ্যতে এই বাগ আর কখনো না ঘটে। ৪) টিম রেট্রোস্পেক্টিভে আলোচনা করব।",
    tags: ["RCA", "Defect Leakage", "Continuous Improvement"]
  },
  {
    id: "q38",
    question: "Scenario: Requirements are vague, changing, or undocumented. How do you test?",
    questionBn: "সিনারিও: কোনো ডকুমেন্টেশন নেই বা রিকয়ারমেন্ট অস্পষ্ট ও ঘন ঘন পরিবর্তনশীল। আপনি কীভাবে টেস্ট করবেন?",
    category: "Scenario Based",
    difficulty: "Intermediate",
    answer: "1) Schedule short clarification sessions with the Product Owner and developers to align on user acceptance criteria. 2) Analyze existing competitors or industry standard applications for domain baseline. 3) Document your own assumptions in a draft Test Charter and get written sign-off from the PM. 4) Heavily utilize exploratory testing and session-based testing logs. 5) Create living documentation as features stabilize.",
    answerBn: "১) প্রোডাক্ট ওনার বা ডেভেলপারের সাথে বসে ইউজার স্টোরি ও গ্রহণযোগ্যতার শর্ত পরিষ্কার করে নেব। ২) প্রতিযোগী অন্যান্য সফল অ্যাপ দেখে স্ট্যান্ডার্ড নিয়ম বুঝব। ৩) নিজের ধারণাগুলো টেস্ট চার্টারে লিখে পিএম-এর অ্যাপ্রুভাল নেব। ৪) এক্সপ্লোরেটরি টেস্টিং জোরদার করব। ৫) ফিচার ফাইনাল হলে ডকুমেন্টেশন লিখে রাখব যাতে পরবর্তী রিলিজ সহজ হয়।",
    tags: ["Agile QA", "No Documentation", "Exploratory"]
  },
  {
    id: "q39",
    question: "What is Monkey Testing and Gorilla Testing?",
    questionBn: "Monkey Testing এবং Gorilla Testing কি?",
    category: "Testing Types",
    difficulty: "Beginner",
    answer: "Monkey Testing is random testing performed without any knowledge or test cases, providing unpredictable inputs to check if the system crashes. Gorilla Testing is intensive, repetitive, and deep testing of a single specific module or function by multiple testers to push it to its breaking limits.",
    answerBn: "Monkey Testing হলো সিস্টেম সম্পর্কে কোনো পূর্বজ্ঞান ছাড়াই সম্পূর্ণ এলোমেলো ও অস্বাভাবিক ইনপুট দিয়ে দেখা যে সিস্টেম ক্র্যাশ করে কিনা। আর Gorilla Testing হলো একটি নির্দিষ্ট ছোট মডিউল বা ফিচারকে বারবার সবদিক থেকে অতিরিক্ত চাপ দিয়ে গভীরভাবে টেস্ট করা।",
    tags: ["Monkey Testing", "Gorilla Testing"]
  },
  {
    id: "q40",
    question: "What is Globalization Testing vs Localization Testing?",
    questionBn: "Globalization (G11N) এবং Localization (L10N) টেস্টিং-এর মধ্যে পার্থক্য কি?",
    category: "Testing Types",
    difficulty: "Intermediate",
    answer: "Globalization Testing ensures the core application architecture can support multiple languages, currencies, time zones, and character encodings (Unicode/UTF-8) without breaking. Localization Testing verifies that the application is correctly tailored to a specific geographic locale (e.g. Bangladesh: Bangla date formats, BDT currency symbols, localized phone regex).",
    answerBn: "Globalization (G11N) হলো সফটওয়্যারটির আর্কিটেকচার বিভিন্ন ভাষা, বিভিন্ন মুদ্রা ও টাইমজোন গ্রহণ করার উপযোগী কিনা তা নিশ্চিত করা। আর Localization (L10N) হলো নির্দিষ্ট কোনো দেশের সংস্কৃতি, ভাষা ও ফরম্যাট অনুযায়ী সফটওয়্যারটি মানানসই কিনা তা টেস্ট করা (যেমন: বাংলাদেশের জন্য টাকা ৳ প্রতীক, বাংলা ফন্ট, এবং ০১৭ সিরিজের ফোন নাম্বার গ্রহণ করা)।",
    tags: ["Globalization", "Localization", "i18n"]
  }
];
