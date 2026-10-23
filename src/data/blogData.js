import { C } from "../constants/theme";

export const BLOG_CATEGORIES = [
  "All",
  "Testing Fundamentals",
  "Automation",
  "API Testing",
  "Performance",
  "Manual QA",
  "Security",
  "Process & Jira",
  "SDLC & STLC",
  "Database",
  "Interview Prep",
];

export const ALL_BLOG_POSTS = [
  // ─── 1. PLAYWRIGHT AUTOMATION ──────────────────────────────
  {
    id: "playwright-framework",
    slug: "building-production-grade-playwright-framework",
    title: "Building a Production-Grade Playwright Framework That Never Rots",
    titleBn: "প্রোডাকশন-গ্রেড প্লে-রাইট অটোমেশন ফ্রেমওয়ার্ক তৈরির পূর্ণাঙ্গ গাইড",
    category: "Automation",
    tagColor: C.pass,
    date: "Oct 2026",
    readTime: "6 min read",
    author: "Rezwanul Rimel",
    excerpt: "Most automation suites don't fail because Playwright is bad. They fail because nobody planned for the framework to still be maintainable six months and 200 releases later.",
    excerptBn: "প্লে-রাইট খারাপ হওয়ার কারণে অটোমেশন টেস্ট ফেইল করে না; বরং টেস্টগুলো দীর্ঘমেয়াদে মেইনটেনেবল রাখার সঠিক আর্কিটেকচার না থাকার কারণে সমস্যা হয়।",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%)",
    tags: ["Playwright", "TypeScript", "POM", "CI/CD", "GitHub Actions"],
    content: [
      {
        type: "paragraph",
        text: "The first automation suite I built was fast to write and excruciating to maintain. Locators were duplicated across test files, setup logic was copy-pasted, and a single renamed CSS class broke fifteen unrelated tests. That painful experience taught me the true engineering discipline behind scalable QA.",
        textBn: "আমি শুরুতে যে অটোমেশন স্যুইট তৈরি করেছিলাম তা কোড করতে দ্রুত হলেও রক্ষণাবেক্ষণ ছিল অত্যন্ত কঠিন। টেস্ট ফাইলে বারবার একই সিলেক্টর লেখা এবং কপি-পেস্ট লজিকের কারণে একটি বাটন বদলালেই ডজনখানেক টেস্ট নষ্ট হতো। সেখান থেকেই আমি স্কেলেবল কিউএ আর্কিটেকচারের গুরুত্ব বুঝতে পারি।"
      },
      {
        type: "heading",
        text: "1. The Strict Page Object Model (POM)",
        textBn: "১. স্ট্রিক্ট পেজ অবজেক্ট মডেল (POM) বাস্তবায়ন"
      },
      {
        type: "paragraph",
        text: "Every page or major component (like navigation bars or checkout modals) must have its own dedicated class. Test scripts should never touch raw locators or CSS selectors directly. When a locator changes, you update exactly one line in one file, not perform repo-wide greps.",
        textBn: "অ্যাপের প্রতিটি ওয়েব পেজ বা প্রধান কম্পোনেন্টের জন্য আলাদা ক্লাস থাকতে হবে। টেস্ট স্ক্রিপ্ট সরাসরি কোনো CSS সিলেক্টর ধরবে না। ফলে UI পরিবর্তন হলে শুধুমাত্র নির্দিষ্ট ক্লাসের এক লাইন কোড পরিবর্তন করলেই পুরো স্যুইট ঠিক হয়ে যায়।"
      },
      {
        type: "code",
        language: "typescript",
        code: `// pages/CheckoutPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly payButton: Locator;
  readonly orderSuccessBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.payButton = page.getByRole('button', { name: /Pay & Place Order/i });
    this.orderSuccessBadge = page.getByTestId('order-confirmation-badge');
  }

  async completeCheckout() {
    await expect(this.payButton).toBeEnabled({ timeout: 5000 });
    await this.payButton.click();
    await expect(this.orderSuccessBadge).toBeVisible();
  }
}`
      },
      {
        type: "heading",
        text: "2. Eliminate Flaky Sleeps with Auto-Waiting",
        textBn: "২. sleep() বাদ দিয়ে প্লে-রাইটের অটো-ওয়েটিং ব্যবহার"
      },
      {
        type: "paragraph",
        text: "Adding arbitrary waitForTimeout(3000) calls is a dangerous anti-pattern. It artificially inflates suite execution time and hides race conditions. Playwright natively auto-waits for actionability (visible, stable, enabled). For dynamic network calls, always wait on explicit network responses or web assertions like expect(locator).toHaveText().",
        textBn: "অটোমেশন কোডে অযথা waitForTimeout(3000) বা sleep ব্যবহার করা খারাপ অভ্যাস। এটি টেস্টের সময় অনর্থক বাড়িয়ে দেয় এবং নেটওয়ার্ক রেস-কন্ডিশন ঢেকে রাখে। প্লে-রাইটের বিল্ট-ইন অটো-ওয়েটিং এবং রেসপন্স ট্র্যাকিং ব্যবহার করা উচিত।"
      },
      {
        type: "heading",
        text: "3. Shift-Left CI/CD Pipeline Integration",
        textBn: "৩. শিফট-লেফট ও GitHub Actions CI/CD ইন্টিগ্রেশন"
      },
      {
        type: "paragraph",
        text: "A five-test suite that runs on every pull request caught more regressions than a 300-test suite that only runs manually once a month before release. Wire Playwright into GitHub Actions from day one with automatic video/trace recording on failure.",
        textBn: "প্রতিটি পুল রিকোয়েস্টে চালিত ৫টি টেস্ট কেস রিলিজের আগের ৩০০টি ম্যানুয়াল টেস্টের চেয়েও বেশি রিগ্রেশন বাগ ধরে ফেলে। প্রথম দিন থেকেই GitHub Actions-এ ফেইল হলে ভিডিও ও ট্রেস রেকর্ড করার ব্যবস্থা রাখতে হবে।"
      }
    ]
  },

  // ─── 2. TESTING FUNDAMENTALS (ARIFUL BLOG ESSENTIALS) ─────────
  {
    id: "testing-fundamentals-bilingual",
    slug: "software-testing-fundamentals-core-principles",
    title: "Software Testing Fundamentals: Core Principles, Concepts & Mindset",
    titleBn: "সফটওয়্যার টেস্টিং পরিচিতি: মৌলিক নীতিমালা, বাস্তব ধারণা ও কিউএ মাইন্ডসেট",
    category: "Testing Fundamentals",
    tagColor: C.info,
    date: "Oct 2026",
    readTime: "7 min read",
    author: "Rezwanul Rimel",
    excerpt: "What is software testing, why is it vital for modern digital businesses, and how do the 7 ISTQB testing principles guard applications against multi-million dollar failures?",
    excerptBn: "সফটওয়্যার টেস্টিং কি, আধুনিক ব্যবসায় এটি কেন অপরিহার্য এবং ISTQB-র ৭টি মূল নীতি কীভাবে সফটওয়্যারকে মারাত্মক ঝুঁকি থেকে রক্ষা করে?",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(0, 245, 212, 0.08) 100%)",
    tags: ["Fundamentals", "ISTQB", "Principles", "বাংলা", "Core QA"],
    content: [
      {
        type: "paragraph",
        text: "Software testing is a systematic discipline of evaluating an application against customer requirements to ensure zero defects, optimal performance, and robust security before end-users ever touch the product.",
        textBn: "সফটওয়্যার টেস্টিং হলো একটি বিজ্ঞানসম্মত পদ্ধতি যার মাধ্যমে নিশ্চিত করা হয় যে তৈরি করা সফটওয়্যারটি ক্লায়েন্টের চাহিদা অনুযায়ী নির্ভুলভাবে কাজ করছে। এটি ব্যবহারকারীদের কাছে যাওয়ার আগেই বাগ বা ত্রুটি দূর করে গুণমান নিশ্চিত করে।"
      },
      {
        type: "callout",
        text: "Example: If an e-commerce checkout calculates 2 + 3 = 4, the company loses revenue on every transaction. SQA acts as the quality firewall.",
        textBn: "বাস্তব উদাহরণ: একটি ই-কমার্স অ্যাপে যদি ৩টি পণ্যের দাম যোগ করার সময় সিস্টেম কম হিসেব করে, তবে প্রতি কেনাকাটায় কোম্পানির ক্ষতি হবে। কিউএ ইঞ্জিনিয়ার হলেন এই ক্ষতির বিরুদ্ধে সুরক্ষা প্রাচীর।"
      },
      {
        type: "heading",
        text: "The 7 Fundamental Principles of Software Testing",
        textBn: "সফটওয়্যার টেস্টিং-এর ৭টি মূল নীতি (7 ISTQB Principles)"
      },
      {
        type: "list",
        items: [
          "1. Testing shows the presence of defects, not their absence (we prove bugs exist, not that code is 100% bug-free).",
          "2. Exhaustive testing is impossible (testing all input combinations is mathematically unfeasible).",
          "3. Early testing saves time and money (Shift-Left principle catches bugs at requirement stage).",
          "4. Defect clustering (80% of software bugs cluster in approximately 20% of modules).",
          "5. Pesticide Paradox (running the same tests repeatedly stops uncovering new bugs).",
          "6. Testing is context-dependent (an aircraft system requires different testing than a social app).",
          "7. Absence-of-errors fallacy (a bug-free app that does not solve the user problem is still a failure)."
        ],
        itemsBn: [
          "১. টেস্টিং বাগ আছে তা দেখাতে পারে, কিন্তু বাগ নেই তা প্রমাণ করতে পারে না।",
          "২. ১০০% বা সম্পূর্ণ টেস্টিং অসম্ভব (ইনপুটের সব সম্ভাব্য কম্বিনেশন টেস্ট করা যায় না)।",
          "৩. যত আগে টেস্টিং শুরু হবে (Shift-Left), প্রোডাকশন বাগ ও খরচ তত কমবে।",
          "৪. ডিফেক্ট ক্লাস্টারিং: একটি সফটওয়্যারের ২০% জটিল মডিউলেই ৮০% বাগ লুকিয়ে থাকে।",
          "৫. পেস্টিসাইড প্যারাডক্স: একই টেস্ট বারবার চালালে নতুন বাগ ধরা পড়ে না, টেস্ট আপডেট করতে হয়।",
          "৬. কনটেক্সট অনুযায়ী টেস্টিং আলাদা হয় (মেডিকেল অ্যাপ ও সোশ্যাল মিডিয়া অ্যাপের টেস্টিং এক নয়)।",
          "৭. ত্রুটিহীন হলেই সফটওয়্যার সফল হয় না যদি তা গ্রাহকের আসল চাহিদা পূরণ করতে না পারে।"
        ]
      },
      {
        type: "heading",
        text: "Verification vs. Validation: The Critical Difference",
        textBn: "Verification বনাম Validation: মৌলিক পার্থক্য"
      },
      {
        type: "paragraph",
        text: "Verification evaluates whether we are building the product right through static analysis, code reviews, and SRS inspections without running code. Validation evaluates whether we built the right product by dynamically executing the actual software to ensure it satisfies business needs.",
        textBn: "Verification হলো 'আমরা কি সফটওয়্যারটি সঠিকভাবে তৈরি করছি?'—যেখানে কোড রান না করে ডকুমেন্ট, আর্কিটেকচার ও কোড স্ট্যাটিকালি রিভিউ করা হয়। Validation হলো 'আমরা কি সঠিক সফটওয়্যারটি তৈরি করেছি?'—যেখানে কোড বাস্তবে রান করে ব্যবহারকারীর কাজ হচ্ছে কিনা দেখা হয়।"
      }
    ]
  },

  // ─── 3. TESTING METHODOLOGIES (BLACK, WHITE, GREY BOX) ────────
  {
    id: "testing-methodologies-black-white-grey",
    slug: "black-box-white-box-grey-box-testing-guide",
    title: "Black Box vs White Box vs Grey Box Testing: In-Depth Comparison & Techniques",
    titleBn: "ব্ল্যাক বক্স, হোয়াইট বক্স ও গ্রে বক্স টেস্টিং: গভীর বিশ্লেষণ ও ব্যবহারিক উদাহরণ",
    category: "Testing Fundamentals",
    tagColor: C.warn,
    date: "Sep 2026",
    readTime: "6 min read",
    author: "Rezwanul Rimel",
    excerpt: "Master the differences between behavioral Black Box testing, structural White Box testing, and hybrid Grey Box testing with real-world authentication and banking scenarios.",
    excerptBn: "অভ্যন্তরীণ কোড না দেখে ব্ল্যাক বক্স, কোডের স্ট্রাকচার দেখে হোয়াইট বক্স এবং ডাটাবেজ/API মিলিয়ে গ্রে বক্স টেস্টিং-এর পূর্ণাঙ্গ গাইড।",
    coverGradient: "linear-gradient(135deg, rgba(255, 179, 0, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%)",
    tags: ["Black Box", "White Box", "Grey Box", "Test Techniques", "BVA", "ECP"],
    content: [
      {
        type: "paragraph",
        text: "In software engineering, testing methodologies are classified by how much visibility the tester has into the internal source code and backend infrastructure.",
        textBn: "সফটওয়্যার ইঞ্জিনিয়ারিংয়ে টেস্টারের কোডের ভেতরের গঠন দেখার ক্ষমতার উপর ভিত্তি করে টেস্টিংকে ব্ল্যাক, হোয়াইট ও গ্রে বক্সে ভাগ করা হয়।"
      },
      {
        type: "heading",
        text: "1. Black Box Testing (Behavioral Testing)",
        textBn: "১. ব্ল্যাক বক্স টেস্টিং (বাহ্যিক আচরণ পরীক্ষা)"
      },
      {
        type: "paragraph",
        text: "Black Box testing treats the software as an opaque box. The tester interacts solely through the user interface or API without knowing the internal code. Core techniques include Boundary Value Analysis (BVA), Equivalence Class Partitioning (ECP), and Decision Tables.",
        textBn: "ব্ল্যাক বক্সে টেস্টার কোড না দেখেই শুধুমাত্র ইনপুট দিয়ে আউটপুট চেক করেন। যেমন: লগইন ফর্মে সঠিক ইউজারনেম ও পাসওয়ার্ড দিলে ড্যাশবোর্ডে যাচ্ছে কিনা তা দেখা।"
      },
      {
        type: "heading",
        text: "2. White Box Testing (Structural / Glass Box Testing)",
        textBn: "২. হোয়াইট বক্স টেস্টিং (কোডের অভ্যন্তরীণ লজিক পরীক্ষা)"
      },
      {
        type: "paragraph",
        text: "White Box testing involves inspecting internal source code, statement branches, loops, and conditions. Conducted predominantly by developers and SDETs to verify branch coverage, path coverage, and unit test integrity.",
        textBn: "হোয়াইট বক্সে টেস্টার বা ডেভেলপার কোডের প্রতিটি লাইন, লুপ, if-else ব্রাঞ্চ এবং ডাটা প্রবাহ পুঙ্খানুপুঙ্খভাবে পরীক্ষা করেন যাতে কোনো ডেড কোড বা লজিক্যাল ত্রুটি না থাকে।"
      },
      {
        type: "heading",
        text: "3. Grey Box Testing (Hybrid Approach)",
        textBn: "৩. গ্রে বক্স টেস্টিং (সমন্বিত পদ্ধতি)"
      },
      {
        type: "paragraph",
        text: "Grey Box testing gives the tester partial architectural visibility — such as database ER diagrams, API schemas, or system logs. The tester executes user-facing actions while monitoring database records and backend log output for anomalies.",
        textBn: "গ্রে বক্সে টেস্টার আংশিক জ্ঞান (যেমন ডাটাবেজ টেবিল বা API স্পেসিফিকেশন) ব্যবহার করে ফ্রন্টএন্ডে টেস্ট চালান এবং সরাসরি ডাটাবেজে গিয়ে ডেটা সঠিক কলামে জমা হলো কিনা তা মিলিয়ে নেন।"
      }
    ]
  },

  // ─── 4. LEVELS OF TESTING ─────────────────────────────────────
  {
    id: "testing-levels-unit-to-uat",
    slug: "levels-of-software-testing-unit-integration-system-uat",
    title: "Levels of Software Testing: Unit, Integration, System & UAT Explained",
    titleBn: "সফটওয়্যার টেস্টিং-এর ৪টি স্তর: ইউনিট, ইন্টিগ্রেশন, সিস্টেম ও ইউজার অ্যাকসেপ্ট্যান্স (UAT)",
    category: "Testing Fundamentals",
    tagColor: C.pass,
    date: "Sep 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "Understand the testing pyramid from low-level unit functions and API integrations to full-system validation and end-user acceptance signing.",
    excerptBn: "টেস্টিং পিরামিডের প্রতিটি লেভেল: কোড ইউনিট থেকে শুরু করে মডিউল ইন্টিগ্রেশন, সিস্টেম টেস্ট এবং ক্লায়েন্ট UAT সাইন-অফ পর্যন্ত বিস্তারিত গাইড।",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%)",
    tags: ["Levels of Testing", "Unit Testing", "Integration", "System Testing", "UAT"],
    content: [
      {
        type: "paragraph",
        text: "Testing is executed across four distinct hierarchical levels to ensure defects are isolated as early as possible before compounding into systemic failures.",
        textBn: "সফটওয়্যার তৈরি হওয়ার সাথে সাথে ৪টি স্তরে টেস্টিং সম্পন্ন হয় যাতে ছোটখাটো ত্রুটি শুরুতেই ধরা পড়ে এবং পুরো সিস্টেমে ছড়িয়ে না পড়ে।"
      },
      {
        type: "heading",
        text: "Level 1: Unit Testing",
        textBn: "লেভেল ১: ইউনিট টেস্টিং (Unit Testing)"
      },
      {
        type: "paragraph",
        text: "Validates individual components, functions, or methods in isolation. Written in the same programming language as the product (Jest, PyTest, JUnit) by developers.",
        textBn: "একটি ফাংশন বা ছোট মেথড আলাদাভাবে সঠিক রেজাল্ট দিচ্ছে কিনা তা যাচাই করা। যেমন: ডিসকাউন্ট ক্যালকুলেশন মেথডে সঠিক পার্সেন্টেজ হিসাব হচ্ছে কিনা।"
      },
      {
        type: "heading",
        text: "Level 2: Integration Testing",
        textBn: "লেভেল ২: ইন্টিগ্রেশন টেস্টিং (Integration Testing)"
      },
      {
        type: "paragraph",
        text: "Verifies the communication and data pipeline between connected modules (e.g. Frontend calling the Payment Microservice, or Service writing to the SQL database).",
        textBn: "একাধিক মডিউল বা মাইক্রোসার্ভিস যখন পরস্পরের সাথে যুক্ত হয়, তখন ডেটা আদান-প্রদান ঠিকঠাক হচ্ছে কিনা তা পরীক্ষা করা।"
      },
      {
        type: "heading",
        text: "Level 3: System Testing",
        textBn: "লেভেল ৩: সিস্টেম টেস্টিং (System Testing)"
      },
      {
        type: "paragraph",
        text: "Evaluates the entire end-to-end integrated application against the business SRS document. Covers both functional journeys and non-functional performance, security, and cross-browser reliability.",
        textBn: "সম্পূর্ণ সফটওয়্যারটি একসাথে করে ক্লায়েন্টের রিকয়ারমেন্ট অনুযায়ী এন্ড-টু-এন্ড টেস্ট করা—লগইন থেকে শুরু করে অর্ডার কনফার্মেশন ও ইমেইল নোটিফিকেশন পর্যন্ত।"
      },
      {
        type: "heading",
        text: "Level 4: Acceptance Testing (UAT)",
        textBn: "লেভেল ৪: অ্যাকসেপ্ট্যান্স টেস্টিং বা UAT (User Acceptance Testing)"
      },
      {
        type: "paragraph",
        text: "Conducted by real end-users or clients to determine whether the application delivers true business value and is ready for live production launch.",
        textBn: "সফটওয়্যার বাজারে ছাড়ার আগে ক্লায়েন্ট বা আসল গ্রাহকরা এটি চালিয়ে দেখেন যে এটি তাদের ব্যবসার দৈনন্দিন কাজের জন্য সম্পূর্ণ উপযোগী কিনা।"
      }
    ]
  },

  // ─── 5. SDLC & STLC COMPLETE GUIDE ───────────────────────────
  {
    id: "sdlc-stlc-lifecycle-models",
    slug: "sdlc-and-stlc-complete-lifecycle-and-models",
    title: "SDLC & STLC Complete Guide: Waterfall, Agile Scrum, V-Model & Test Closure",
    titleBn: "SDLC ও STLC পূর্ণাঙ্গ গাইড: Waterfall, Agile Scrum, V-Model ও টেস্ট ক্লোজার",
    category: "SDLC & STLC",
    tagColor: C.info,
    date: "Aug 2026",
    readTime: "7 min read",
    author: "Rezwanul Rimel",
    excerpt: "Demystifying software development and testing lifecycles: requirement analysis, test planning, in-sprint testing, sprint retrospectives, and final test closure metrics.",
    excerptBn: "সফটওয়্যার তৈরি ও টেস্টিংয়ের সম্পূর্ণ জীবনচক্র: রিকয়ারমেন্ট বিশ্লেষণ থেকে স্প্রিন্ট টেস্টিং ও রিলিজ সাইন-অফ পর্যন্ত সব ধারণার সমন্বয়।",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(11, 19, 43, 0.9) 100%)",
    tags: ["SDLC", "STLC", "Waterfall", "Agile", "Scrum", "V-Model", "Test Closure"],
    content: [
      {
        type: "paragraph",
        text: "Software development without a structured lifecycle is chaotic and error-prone. Understanding how the Software Development Life Cycle (SDLC) interlocks with the Software Testing Life Cycle (STLC) is mandatory for every senior QA engineer.",
        textBn: "সঠিক লাইফ সাইকেল ছাড়া সফটওয়্যার তৈরি করতে গেলে বিশৃঙ্খলা ও বিলম্ব তৈরি হয়। SDLC-র সাথে STLC কীভাবে একযোগে কাজ করে তা জানা প্রতিটি প্রফেশনাল কিউএ ইঞ্জিনিয়ারের প্রধান দায়িত্ব।"
      },
      {
        type: "heading",
        text: "The 6 Phases of STLC (Software Testing Life Cycle)",
        textBn: "STLC-র ৬টি প্রধান পর্যায়"
      },
      {
        type: "list",
        items: [
          "1. Requirement Analysis: Reviewing SRS/User Stories to identify testable conditions and ambiguities.",
          "2. Test Planning: Establishing test strategy, effort estimates, tool selection, and resource allocation.",
          "3. Test Case Development: Crafting deterministic step-by-step test cases, boundary data, and test scripts.",
          "4. Test Environment Setup: Provisioning staging databases, mock servers, and browser device matrices.",
          "5. Test Execution: Running test suites, logging defects in Jira with reproducible evidence, and re-testing fixes.",
          "6. Test Closure: Compiling final metrics (Defect Density, Pass Rate) and issuing formal QA Sign-Off."
        ],
        itemsBn: [
          "১. রিকয়ারমেন্ট অ্যানালাইসিস: ইউজার স্টোরি ও স্পেসিফিকেশন পড়ে টেস্টের সুযোগ চিহ্নিত করা।",
          "২. টেস্ট প্ল্যানিং: টেস্ট স্ট্র্যাটেজি, সময় নির্ধারণ ও টেস্ট ম্যানেজমেন্ট টুল নির্বাচন।",
          "৩. টেস্ট কেস তৈরি: বাস্তবসম্মত ইনপুট ডেটা ও সুনির্দিষ্ট ধাপসহ টেস্ট কেস লেখা।",
          "৪. টেস্ট এনভায়রনমেন্ট সেটআপ: স্টেজিং সার্ভার, ব্রাউজার ও ডাটাবেজ প্রস্তুত করা।",
          "৫. টেস্ট এক্সিকিউশন: টেস্ট পরিচালনা ও জিরাতে স্ক্রিনশট ও লগসহ বাগ রিপোর্ট করা।",
          "৬. টেস্ট ক্লোজার: ফাইনাল পাস/ফেইল রিপোর্ট তৈরি ও রিলিজ সাইন-অফ প্রদান।"
        ]
      },
      {
        type: "heading",
        text: "Agile Scrum vs Traditional Waterfall",
        textBn: "Agile Scrum বনাম প্রথাগত Waterfall মেথডলজি"
      },
      {
        type: "paragraph",
        text: "In Waterfall, testing only occurs after the entire build is finished — often leading to project delays. In Agile Scrum, testing happens continuously within 2-week Sprints. QA collaborates directly with developers, preventing defects early through continuous feedback.",
        textBn: "Waterfall মডেলে পুরো কোডিং শেষ হওয়ার পর শেষে গিয়ে টেস্টিং হয়, ফলে বাগ ধরা পড়লে রিলিজ পিছিয়ে যায়। অন্যদিকে Agile Scrum-এ প্রতি ২ সপ্তাহের স্প্রিন্টে কোডিং ও টেস্টিং একসাথে চলে, ফলে দ্রুত ডেলিভারি নিশ্চিত হয়।"
      }
    ]
  },

  // ─── 6. BUG LIFECYCLE & DEFECT MANAGEMENT ────────────────────
  {
    id: "bug-lifecycle-severity-priority",
    slug: "bug-lifecycle-severity-priority-triage-guide",
    title: "Bug Life Cycle & Defect Management: Triage, Severity vs Priority & Root Cause Analysis",
    titleBn: "বাগ লাইফ সাইকেল ও ডিফেক্ট ম্যানেজমেন্ট: ট্রায়াজ, সিভিয়ারিটি বনাম প্রায়োরিটি ও আরসিএ",
    category: "Process & Jira",
    tagColor: C.fail,
    date: "Aug 2026",
    readTime: "6 min read",
    author: "Rezwanul Rimel",
    excerpt: "How a bug journeys from discovery to closure, mastering the 4 combinations of Severity vs Priority, and running blameless Root Cause Analysis (RCA).",
    excerptBn: "একটি বাগ আবিষ্কার থেকে ক্লোজ হওয়া পর্যন্ত সমস্ত স্টেজ, প্রায়োরিটি ও সিভিয়ারিটির ৪টি বাস্তব উদাহরণ এবং নিখুঁত ডিফেক্ট ম্যানেজমেন্ট।",
    coverGradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(11, 19, 43, 0.9) 100%)",
    tags: ["Bug Lifecycle", "Severity", "Priority", "Jira", "Defect Triage", "RCA"],
    content: [
      {
        type: "paragraph",
        text: "Finding a defect is only half the battle. Communicating its business impact clearly, triaging its urgency, and guiding it through the defect lifecycle to verification is what defines an indispensable QA engineer.",
        textBn: "শুধুমাত্র একটি বাগ খুঁজে পাওয়াই যথেষ্ট নয়; এর ফলে ব্যবসার কী ক্ষতি হচ্ছে তা স্পষ্টভাবে তুলে ধরা এবং ডেভেলপারদের সাথে সমন্বয় করে এটি সমাধান করানোই একজন দক্ষ টেস্টারের কাজ।"
      },
      {
        type: "heading",
        text: "The Full Bug Lifecycle Journey",
        textBn: "বাগ লাইফ সাইকেলের প্রতিটি স্টেজ"
      },
      {
        type: "paragraph",
        text: "NEW → ASSIGNED → OPEN → FIXED → PENDING RETEST → RETEST → CLOSED. If the developer's fix does not resolve the issue or causes a regression, the status transitions from RETEST to REOPENED with updated proof.",
        textBn: "New (নতুন পাওয়া) → Assigned (ডেভেলপারকে দেয়া) → Open (কাজ শুরু) → Fixed (বাগ সমাধান) → Retest (আবার পরীক্ষা) → Closed (সফল হলে বন্ধ)। কিন্তু যদি ফিক্স কাজ না করে তবে Reopened হয়ে আবার ডেভেলপারের কাছে যায়।"
      },
      {
        type: "heading",
        text: "Severity vs Priority Matrix: Real-World Scenarios",
        textBn: "Severity বনাম Priority: ৪টি বাস্তব কম্বিনেশন"
      },
      {
        type: "list",
        items: [
          "High Severity, High Priority: Bank transfer button crashes the server with 500 error (immediate blocker).",
          "High Severity, Low Priority: Legacy accounting export crashes only when exporting data from the year 1980.",
          "Low Severity, High Priority: CEO's name or company logo is misspelled on the public homepage header.",
          "Low Severity, Low Priority: Footer terms of service modal has an extra 3px margin in dark mode."
        ],
        itemsBn: [
          "High Severity, High Priority: পেমেন্ট গেটওয়েতে টাকা কাটার পর সার্ভার ক্র্যাশ করা (তাৎক্ষণিক সমাধান জরুরি)।",
          "High Severity, Low Priority: ১৯৮০ সালের পুরনো রিপোর্ট ডাউনলোড করতে গেলে ক্র্যাশ করা (যা কেউ ব্যবহার করে না)।",
          "Low Severity, High Priority: হোমপেজে কোম্পানির নাম ভুল বানান থাকা (সিস্টেম ঠিক আছে কিন্তু সুনাম নষ্ট হচ্ছে)।",
          "Low Severity, Low Priority: ফুটারে প্রাইভেসির লিংকে সামান্য প্যাডিং এদিক-ওদিক থাকা।"
        ]
      }
    ]
  },

  // ─── 7. TEST DOCUMENTATION & DESIGN ──────────────────────────
  {
    id: "test-documentation-plan-cases-rtm",
    slug: "test-documentation-plan-strategy-test-cases-rtm",
    title: "Test Documentation Mastery: Test Plans, Test Cases, BVA/ECP & RTM",
    titleBn: "টেস্ট ডকুমেন্টেশন গাইড: টেস্ট প্ল্যান, টেস্ট কেস ডিজাইন, BVA/ECP ও ট্রেসেবিলিটি ম্যাট্রিক্স",
    category: "Manual QA",
    tagColor: C.warn,
    date: "Jul 2026",
    readTime: "6 min read",
    author: "Rezwanul Rimel",
    excerpt: "Crafting structured Test Plans, designing high-coverage test cases using Boundary Value Analysis, and maintaining Requirement Traceability Matrices (RTM).",
    excerptBn: "বাস্তবমুখী টেস্ট প্ল্যান তৈরি, BVA ও ECP পদ্ধতিতে শক্তিশালী টেস্ট কেস ডিজাইন এবং ক্লায়েন্টের রিকয়ারমেন্ট ট্রেস করার নিয়ম।",
    coverGradient: "linear-gradient(135deg, rgba(255, 179, 0, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%)",
    tags: ["Test Documentation", "Test Plan", "Test Strategy", "RTM", "BVA", "ECP"],
    content: [
      {
        type: "paragraph",
        text: "Clear documentation is what separates ad-hoc guessing from repeatable engineering. A well-constructed test suite allows any engineer to step in, reproduce conditions, and verify system integrity with 100% confidence.",
        textBn: "স্পষ্ট ডকুমেন্টেশনই সাধারণ অনুমানের সাথে প্রফেশনাল ইঞ্জিনিয়ারিংয়ের পার্থক্য গড়ে দেয়। একটি ভালো টেস্ট স্যুইট থাকলে যে কোনো প্রকৌশলী সিস্টেমে নির্ভরযোগ্যভাবে টেস্ট চালাতে পারেন।"
      },
      {
        type: "heading",
        text: "Boundary Value Analysis (BVA) in Action",
        textBn: "Boundary Value Analysis (BVA)-এর ব্যবহারিক প্রয়োগ"
      },
      {
        type: "paragraph",
        text: "Programmers make the most logical errors at relational boundaries (using > instead of >=). For an input field accepting passwords between 8 and 16 characters, BVA dictates testing: 7 (Min-1, Invalid), 8 (Min, Valid), 9 (Min+1, Valid), 15 (Max-1, Valid), 16 (Max, Valid), 17 (Max+1, Invalid).",
        textBn: "প্রোগ্রামাররা শর্তের শেষ সীমায় সবচেয়ে বেশি ভুল করেন (> এবং >= এর মধ্যে বিভ্রান্তি)। যেমন পাসওয়ার্ডের দৈর্ঘ্য ৮ থেকে ১৬ অক্ষরের হলে টেস্ট মান হবে: ৭ (অবৈধ), ৮ (বৈধ), ৯ (বৈধ), ১৫ (বৈধ), ১৬ (বৈধ), এবং ১৭ (অবৈধ)।"
      },
      {
        type: "heading",
        text: "Requirement Traceability Matrix (RTM)",
        textBn: "রিকয়ারমেন্ট ট্রেসেবিলিটি ম্যাট্রিক্স (RTM) কেন গুরুত্বপূর্ণ?"
      },
      {
        type: "paragraph",
        text: "An RTM maps every business requirement to its corresponding test case ID and logged defects. It proves 100% test coverage to stakeholders and ensures that no requirement was inadvertently skipped during a release sprint.",
        textBn: "RTM হলো একটি ম্যাট্রিক্স যা ক্লায়েন্টের প্রতিটি চাহিদার সাথে টেস্ট কেসের নম্বর ও বাগের নম্বর ম্যাপ করে। এর মাধ্যমে নিশ্চিত হওয়া যায় যে সফটওয়্যারের কোনো রিকয়ারমেন্ট টেস্ট না করে বাদ পড়েনি।"
      }
    ]
  },

  // ─── 8. BUILD, RELEASE & DEPLOYMENT ──────────────────────────
  {
    id: "build-release-deployment-codefreeze",
    slug: "build-release-deployment-code-freeze-test-environments",
    title: "Build vs Release vs Deployment: Code Freeze, Staging & Test Environments",
    titleBn: "বিল্ড বনাম রিলিজ বনাম ডিপ্লয়মেন্ট: কোড ফ্রিজ, স্টেজিং ও টেস্ট এনভায়রনমেন্ট",
    category: "Manual QA",
    tagColor: C.pass,
    date: "Jul 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "Understanding the exact difference between builds, releases, and deployments, why code freeze prevents last-minute bugs, and managing staging test environments.",
    excerptBn: "Build, Release ও Deployment এর মধ্যকার সূক্ষ্ম পার্থক্য, রিলিজের আগে Code Freeze এর প্রয়োজনীয়তা এবং টেস্ট এনভায়রনমেন্ট ম্যানেজমেন্ট।",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%)",
    tags: ["Build vs Release", "Deployment", "Code Freeze", "Staging", "DevOps"],
    content: [
      {
        type: "paragraph",
        text: "Junior testers often confuse a build with a release. In modern software engineering with CI/CD pipelines, dozens of builds are created daily, but only fully validated builds become official releases.",
        textBn: "অনেকেই বিল্ড এবং রিলিজকে এক মনে করেন। আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে প্রতিদিন ডজনখানেক বিল্ড তৈরি হতে পারে, কিন্তু কিউএ টিমের অনুমোদনের পরই কেবল একটি বিল্ড অফিসিয়াল রিলিজ হিসেবে ঘোষিত হয়।"
      },
      {
        type: "heading",
        text: "Build vs Release vs Deployment",
        textBn: "বিল্ড, রিলিজ ও ডিপ্লয়মেন্টের পার্থক্য"
      },
      {
        type: "list",
        items: [
          "Build: A compiled package of source code produced by devs/CI (e.g. Build #412) intended for testing.",
          "Release: An approved, sign-off version delivered to the public with version numbers (e.g. v2.4.0).",
          "Deployment: The technical execution of installing that build or release onto servers (Dev, QA, Staging, Prod)."
        ],
        itemsBn: [
          "বিল্ড: ডেভেলপারদের লেখা কোড কম্পাইল করে কিউএ টিমকে টেস্ট করার জন্য দেয়া ফাইল (যেমন Build #412)।",
          "রিলিজ: সম্পূর্ণ টেস্ট করা অনুমোদিত সংস্করণ যা গ্রাহকের ব্যবহারের জন্য বাজারে ছাড়া হয় (যেমন v2.4.0)।",
          "ডিপ্লয়মেন্ট: কোনো নির্দিষ্ট সার্ভারে সফটওয়্যার ফাইলটি ইনস্টল বা ক্লাউডে লাইভ করার প্রক্রিয়া।"
        ]
      },
      {
        type: "heading",
        text: "What is Code Freeze?",
        textBn: "Code Freeze (কোড ফ্রিজ) কি?"
      },
      {
        type: "paragraph",
        text: "A Code Freeze is a pre-release milestone where no new features or code changes are allowed into the release branch except emergency bug fixes verified by QA. This stabilizes the branch and prevents regression surprises.",
        textBn: "কোড ফ্রিজ হলো রিলিজের আগের একটি সময় যখন ডেভেলপারদের নতুন কোনো কোড বা ফিচার যোগ করতে দেয়া হয় না; শুধুমাত্র ক্রিটিক্যাল বাগ ফিক্স করা হয়। এর ফলে রিলিজের আগে সফটওয়্যার সম্পূর্ণ স্থিতিশীল থাকে।"
      }
    ]
  },

  // ─── 9. API AUTOMATION (POSTMAN + NEWMAN) ─────────────────────
  {
    id: "api-automation-postman-newman",
    slug: "api-automation-postman-newman-cicd",
    title: "API Automation with Postman & Newman: From Manual Testing to CI/CD Gateways",
    titleBn: "Postman ও Newman দিয়ে API অটোমেশন: ম্যানুয়াল টেস্টিং থেকে CI/CD গেটওয়ে",
    category: "API Testing",
    tagColor: C.warn,
    date: "Sep 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "How to chain dynamic JWT tokens, validate JSON Schema contracts, and execute automated collections inside GitHub Actions using Newman with automated HTML reporting.",
    excerptBn: "ডায়নামিক JWT টোকেন চেইনিং, JSON স্কিমা ভ্যালিডেশন এবং GitHub Actions-এ Newman দিয়ে অটোমেটেড API টেস্ট রিপোর্ট তৈরি।",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(0, 245, 212, 0.08) 100%)",
    tags: ["Postman", "Newman", "REST API", "JSON Schema", "CI/CD"],
    content: [
      {
        type: "paragraph",
        text: "Testing APIs manually through Postman is fine for initial exploration. But when a backend team deploys multiple times a day, manual collection clicking becomes a massive bottleneck. Automated API regression is the highest ROI testing you can implement.",
        textBn: "পোস্টম্যানে ম্যানুয়ালি ক্লিক করে API টেস্ট করা প্রাথমিক কাজের জন্য ভালো হলেও, যখন টিম দিনে একাধিকবার কোড ডিপ্লয় করে তখন অটোমেটেড API টেস্টিংই সর্বোচ্চ রিটার্ন দেয়।"
      },
      {
        type: "heading",
        text: "Dynamic Variable Chaining & State Propagation",
        textBn: "ডায়নামিক ভ্যারিয়েবল চেইনিং"
      },
      {
        type: "paragraph",
        text: "A real test suite shouldn't rely on hardcoded auth tokens or IDs. Postman's Tests script tab allows you to capture response values and pass them dynamically to subsequent endpoints.",
        textBn: "প্রকৃত অটোমেশন স্যুইটে হার্ডকোডেড টোকেন ব্যবহার করা উচিত নয়; লগইন রেসপন্স থেকে টোকেন সংগ্রহ করে পরবর্তী প্রতিটি এন্ডপয়েন্টে অটোমেটিকভাবে পাস করতে হবে।"
      },
      {
        type: "code",
        language: "javascript",
        code: `// Postman Tests Script: Login Request
pm.test("Status code is 200 OK", () => {
    pm.response.to.have.status(200);
});

const responseJson = pm.response.json();
pm.environment.set("authToken", responseJson.token);
pm.environment.set("userId", responseJson.user.id);

// Strict JSON Schema Validation
const expectedSchema = {
    type: "object",
    required: ["token", "user"],
    properties: {
        token: { type: "string" },
        user: { type: "object" }
    }
};

pm.test("Validate Token Schema", () => {
    pm.expect(tv4.validate(responseJson, expectedSchema)).to.be.true;
});`
      },
      {
        type: "heading",
        text: "Running Headless Collections with Newman in CI/CD",
        textBn: "Newman দিয়ে CI/CD পাইপলাইনে হেডলেস এক্সিকিউশন"
      },
      {
        type: "paragraph",
        text: "Export your collection and environment files into your Git repository, then execute them via Newman on every PR. Newman generates instant pass/fail exit codes that block faulty backend commits before reaching staging.",
        textBn: "Git রিপোজিটরিতে পোস্টম্যান কালেকশন রেখে Newman দিয়ে প্রতি পুল রিকোয়েস্টে টেস্ট চালানো যায়, যা ত্রুটিযুক্ত ব্যাকএন্ড কোড স্টেজিংয়ে পৌঁছানোর আগেই আটকে দেয়।"
      }
    ]
  },

  // ─── 10. K6 PERFORMANCE TESTING ──────────────────────────────
  {
    id: "k6-performance-testing",
    slug: "performance-stress-testing-k6-benchmarks",
    title: "Performance & Stress Testing with K6: Benchmarking High-Concurrency Systems",
    titleBn: "K6 দিয়ে পারফরম্যান্স ও স্ট্রেস টেস্টিং: হাই-কনকারেন্সি সিস্টেমের বেঞ্চমার্কিং",
    category: "Performance",
    tagColor: C.pass,
    date: "Aug 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "How to design realistic load, spike, and soak test profiles with virtual users (VUs), latency thresholds, and p95 benchmarks before high-traffic events like Black Friday.",
    excerptBn: "ভার্চুয়াল ইউজার (VUs), রেসপন্স টাইম থ্রেশহোল্ড এবং p95 ল্যাটেন্সি দিয়ে হাই-ট্রাফিক ইভেন্টের আগে সিস্টেমের সহনশীলতা পরীক্ষা।",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(255, 107, 107, 0.08) 100%)",
    tags: ["K6", "Performance Testing", "Stress Test", "SRE", "DevOps"],
    content: [
      {
        type: "paragraph",
        text: "An application that works perfectly for 1 user can completely collapse under 500 concurrent users. Performance testing is not just about measuring speed — it's about uncovering database connection pool exhaustion, memory leaks, and third-party API bottlenecks.",
        textBn: "১ জন ইউজারের জন্য নিখুঁত অ্যাপ ৫০০ জন ইউজারের এককালীন চাপে ভেঙে পড়তে পারে। পারফরম্যান্স টেস্টিং শুধু স্পিড মাপা নয়; ডাটাবেজ কানেকশন লিক ও মেমোরি সংকট আগেভাগে ধরা এর মূল লক্ষ্য।"
      },
      {
        type: "heading",
        text: "Designing a Realistic Load Profile in K6",
        textBn: "K6-এ বাস্তবসম্মত লোড প্রোফাইল তৈরি"
      },
      {
        type: "code",
        language: "javascript",
        code: `import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 50 },  // Ramp-up to 50 VUs
    { duration: '3m', target: 200 }, // Steady load at 200 VUs
    { duration: '1m', target: 0 },   // Ramp-down
  ],
  thresholds: {
    http_req_duration: ['p(95)<250'], // 95% of requests must finish within 250ms
    http_req_failed: ['rate<0.01'],   // Error rate must be under 1%
  },
};

export default function () {
  const res = http.get('https://api.example.com/v1/products');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body has products': (r) => r.json().length > 0,
  });
  sleep(1);
}`
      }
    ]
  },

  // ─── 11. MANUAL TESTING VALUE ────────────────────────────────
  {
    id: "manual-still-matters",
    slug: "why-manual-testing-still-earns-its-place",
    title: "Why Manual Exploratory Testing Still Finds the Bugs Automation Misses",
    titleBn: "কেন ম্যানুয়াল এক্সপ্লোরেটরি টেস্টিং আজও সেই বাগগুলো খুঁজে পায় যা অটোমেশন মিস করে",
    category: "Manual QA",
    tagColor: C.info,
    date: "Aug 2026",
    readTime: "4 min read",
    author: "Rezwanul Rimel",
    excerpt: "Automation gets the glory, but the bugs that actually embarrass a business in production are usually the ones no script was written to look for.",
    excerptBn: "অটোমেশন জনপ্রিয় হলেও প্রডাকশনে যে বাগগুলো ব্যবসার ক্ষতি করে, সেগুলোর বেশিরভাগই এমন যা কোনো স্ক্রিপ্টে আগে থেকে ভাবা হয়নি।",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(28, 37, 65, 0.9) 100%)",
    tags: ["Manual QA", "Exploratory Testing", "Edge Cases", "User Psychology"],
    content: [
      {
        type: "paragraph",
        text: "Automated tests are checkers: they confirm that what you already know works continues to work. Exploratory testing is how you discover what you didn't know to check in the first place.",
        textBn: "অটোমেটেড টেস্ট কেবল যাচাই করে যে আগে যা কাজ করত তা এখনও করছে কিনা। কিন্তু এক্সপ্লোরেটরি টেস্টিং হলো নতুন ও অচেনা সমস্যা খুঁজে বের করার মানবীয় অনুসন্ধান।"
      },
      {
        type: "paragraph",
        text: "What happens if a customer pastes an emoji into an international phone number field? What if they click 'Pay' twice during 3G latency? What if they switch browser tabs while a Stripe webhook is processing? No Playwright script is written for those on day one. You find them through curiosity and adversarial user thinking.",
        textBn: "যদি কেউ ফোন নাম্বার ফিল্ডে ইমোজি পেস্ট করে দেয়? যদি স্লো ইন্টারনেটে পে বাটনে দ্রুত দুইবার ক্লিক করে? প্রথম দিনেই এগুলোর জন্য অটোমেশন লেখা থাকে না; এগুলো খুঁজে পাওয়া যায় মানবিক কৌতূহল ও অভিজ্ঞতার জোরে।"
      }
    ]
  },

  // ─── 12. APPIUM MOBILE AUTOMATION ────────────────────────────
  {
    id: "mobile-app-testing-appium",
    slug: "mobile-app-testing-appium-android-automation",
    title: "Mobile App Automation with Appium: Flakiness-Free Android Testing",
    titleBn: "Appium দিয়ে মোবাইল অটোমেশন: ফ্লিকিনেস-মুক্ত অ্যান্ড্রয়েড টেস্টিং ফ্রেমওয়ার্ক",
    category: "Automation",
    tagColor: C.pass,
    date: "Jul 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "Best practices for UIAutomator2, deep-link navigation, gesture handling, and eliminating mobile automation flakiness on real devices vs emulators.",
    excerptBn: "UIAutomator2, ডিপ-লিংক নেভিগেশন, মোবাইল জেসচার হ্যান্ডলিং এবং রিয়েল ডিভাইসে স্ট্যাবল অটোমেশন টেস্ট চালানোর কৌশল।",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)",
    tags: ["Appium", "Mobile QA", "Android", "UIAutomator2", "Test Automation"],
    content: [
      {
        type: "paragraph",
        text: "Mobile testing introduces complex variables that web testing never has to deal with: battery drain, screen rotation, push notifications, OS permission popups, and memory constraints. Appium provides a unified WebDriver protocol, but requires disciplined setup.",
        textBn: "মোবাইল টেস্টিংয়ে ওয়েবের চেয়ে অনেক বেশি জটিলতা থাকে—স্ক্রিন রোটেশন, পুশ নোটিফিকেশন, ওএস পারমিশন পপআপ ও ব্যাটারি সেভার। Appium এগুলো অটোমেট করার শক্তিশালী সমাধান।"
      },
      {
        type: "code",
        language: "javascript",
        code: `// Clean Appium Mobile Locator Strategy
const orderButton = await driver.$('~checkout_submit_button'); // accessibility id
await orderButton.waitForDisplayed({ timeout: 10000 });
await orderButton.click();

// Handling Native System Dialogs
const allowPermission = await driver.$('id=com.android.permissioncontroller:id/permission_allow_button');
if (await allowPermission.isDisplayed()) {
    await allowPermission.click();
}`
      }
    ]
  },

  // ─── 13. SECURITY TESTING (OWASP ZAP) ────────────────────────
  {
    id: "security-testing-owasp-zap",
    slug: "security-testing-owasp-zap-for-qa-engineers",
    title: "Security Testing with OWASP ZAP: A Practical QA Guide to Vulnerability Scans",
    titleBn: "OWASP ZAP দিয়ে সিকিউরিটি টেস্টিং: কিউএ ইঞ্জিনিয়ারদের জন্য ব্যবহারিক গাইড",
    category: "Security",
    tagColor: C.fail,
    date: "Jun 2026",
    readTime: "6 min read",
    author: "Rezwanul Rimel",
    excerpt: "Integrating automated baseline vulnerability scans into your QA workflow to catch SQL Injection, XSS, and insecure headers before deployment.",
    excerptBn: "SQL Injection, Cross-Site Scripting (XSS) এবং অনিরাপদ হেডার ডিপ্লয়মেন্টের আগেই ধরার জন্য স্বয়ংক্রিয় সিকিউরিটি স্ক্যান।",
    coverGradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(11, 19, 43, 0.9) 100%)",
    tags: ["Security", "OWASP ZAP", "Vulnerability Testing", "XSS", "SQLi"],
    content: [
      {
        type: "paragraph",
        text: "Quality Assurance is not just about whether the button clicks and the order submits. If an attacker can inject malicious script into a comment form or access another user's profile by changing an ID in the URL, that is a catastrophic quality failure.",
        textBn: "বাটন ক্লিক করলে অর্ডার সাবমিট হচ্ছে কিনা শুধু এটুকুই কিউএ নয়। যদি কোনো হ্যাকার ইউআরএল-এর আইডি বদলে অন্যের প্রোফাইল দেখে ফেলে বা XSS স্ক্রিপ্ট ঢুকায়, তবে তা চরম ব্যর্থতা।"
      },
      {
        type: "code",
        language: "bash",
        code: `# Running OWASP ZAP Baseline Scan via Docker in CI/CD
docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py \\
    -t https://staging.example.com \\
    -r zap-report.html \\
    -I`
      }
    ]
  },

  // ─── 14. BUG REPORTS DEVELOPERS LOVE ─────────────────────────
  {
    id: "bug-reports-developers-love",
    slug: "art-of-writing-bug-reports-developers-love",
    title: "The Art of Writing Bug Reports That Developers Actually Love",
    titleBn: "যে বাগ রিপোর্ট ডেভেলপাররা সানন্দে ফিক্স করে: নিখুঁত ডিফেক্ট রিপোর্টিং আর্ট",
    category: "Process & Jira",
    tagColor: C.info,
    date: "May 2026",
    readTime: "4 min read",
    author: "Rezwanul Rimel",
    excerpt: "How to eliminate developer pushback with crystal-clear reproduction steps, network HAR archives, video captures, and exact environment contexts.",
    excerptBn: "স্পষ্ট ১-২-৩ স্টেপস, নেটওয়ার্ক লগ, ভিডিও প্রমাণ এবং সঠিক এনভায়রনমেন্ট বিবরণ দিয়ে ডেভেলপারদের সাথে আস্থার সম্পর্ক গড়া।",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(28, 37, 65, 0.9) 100%)",
    tags: ["Jira", "Defect Triage", "Bug Tracking", "Team Collaboration"],
    content: [
      {
        type: "paragraph",
        text: "The worst sentence in software development is: 'Works on my machine.' When a developer closes your ticket as cannot reproduce, it's rarely because the bug doesn't exist — it's because the bug report didn't provide enough deterministic context.",
        textBn: "ডেভেলপমেন্টে সবচেয়ে পরিচিত অজুহাত: 'আমার পিসিতে তো কাজ করছে'। যখন ডেভেলপার টিকিট ক্লোজ করে দেন, তার কারণ বাগটি নেই তা নয়; বরং রিপোর্টে সঠিক তথ্য ও প্রমাণ ছিল না।"
      },
      {
        type: "paragraph",
        text: "Every defect report I author follows a strict template: 1) Clear Title with module tag, 2) Environment context (browser, build, OS, test account), 3) Numbered reproducible steps, 4) Expected vs Actual result, 5) Visual evidence (short MP4 video + console log + network HAR).",
        textBn: "একটি আদর্শ বাগ রিপোর্টে থাকে: মডিউলসহ টাইটেল, নির্দিষ্ট এনভায়রনমেন্ট, নাম্বার দেয়া সুনির্দিষ্ট স্টেপস, প্রত্যাশিত বনাম প্রকৃত ফলাফল এবং স্ক্রিন রেকর্ডিং বা নেটওয়ার্ক লগ।"
      }
    ]
  },

  // ─── 15. AI IN SQA ───────────────────────────────────────────
  {
    id: "ai-in-qa",
    slug: "what-ai-actually-helps-with-in-qa-and-what-it-doesnt",
    title: "What AI Actually Helps with in QA — And What It Doesn't",
    titleBn: "সফটওয়্যার টেস্টিংয়ে কৃত্রিম বুদ্ধিমত্তা (AI): কিউএ-তে কোথায় সাহায্য করে আর কোথায় করে না",
    category: "AI in QA",
    tagColor: C.warn,
    date: "Apr 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "AI tools are genuinely useful for parts of a QA engineer's workflow. They are not yet a substitute for adversarial curiosity and human risk judgment.",
    excerptBn: "টেস্ট কেস ম্যাট্রিক্স তৈরি ও অটোমেশন বয়লারপ্লেটে এআই সাহায্য করলেও মানুষের রিস্ক জাজমেন্ট ও এক্সপ্লোরেটরি বুদ্ধিমত্তার বিকল্প এখনো নেই।",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(0, 245, 212, 0.08) 100%)",
    tags: ["AI in QA", "ChatGPT", "Claude", "Test Strategy"],
    content: [
      {
        type: "paragraph",
        text: "I use AI tools daily — mostly to draft test case matrices from lengthy SRS documents, generate boilerplate Playwright Page Object classes, and summarize bug discussions before team standups. All three save real hours.",
        textBn: "আমি প্রতিদিন এআই টুলস ব্যবহার করি বড় ডকুমেন্ট থেকে টেস্ট কেস ড্রাফট করা, প্লে-রাইটের বয়লারপ্লেট ক্লাস তৈরি ও জিরার বড় বাগ থ্রেড সামারাইজ করতে, যা অনেক সময় বাঁচায়।"
      },
      {
        type: "paragraph",
        text: "Where models consistently fail is risk judgment: deciding which ten test cases actually matter out of the two hundred a model can generate for you. My golden rule: Use AI as a fast first draft, never the final review.",
        textBn: "কিন্তু এআই যেখানে ব্যর্থ হয় তা হলো রিস্ক নির্ধারণ—মডেলের দেয়া ২০০টি টেস্টের মধ্যে কোন ১০টি সবচেয়ে গুরুত্বপূর্ণ তা বোঝার ক্ষমতা এখনো মানুষের অভিজ্ঞতার ওপরই নির্ভরশীল।"
      }
    ]
  },

  // ─── 16. DATABASE & SQL TESTING ──────────────────────────────
  {
    id: "database-sql-testing",
    slug: "database-sql-testing-validating-backend-integrity",
    title: "Database & SQL Testing: Validating What UI Testing Completely Misses",
    titleBn: "ডাটাবেজ ও এসকিউএল টেস্টিং: ফ্রন্টএন্ড UI যা মিস করে তা ব্যাকএন্ডে যাচাই করা",
    category: "Database",
    tagColor: C.info,
    date: "Mar 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "Verifying data integrity, orphan record prevention, foreign key cascades, and ACID transaction rollbacks beneath the frontend UI.",
    excerptBn: "ফ্রন্টএন্ডে সবুজ সাকসেস মেসেজ দেখালেও ডাটাবেজে সঠিক রো আপডেট হলো কিনা, ট্রানজ্যাকশন রোলব্যাক কাজ করে কিনা তা ভেরিফাই করা।",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(28, 37, 65, 0.9) 100%)",
    tags: ["SQL", "Database Testing", "PostgreSQL", "Data Integrity", "Backend QA"],
    content: [
      {
        type: "paragraph",
        text: "A frontend test might show a green 'Order Submitted Successfully' banner on screen. But did the database record the order with the correct status? Was the stock deducted atomically? Did a cancelled payment leave an orphan record in the database?",
        textBn: "স্ক্রিনে সবুজ 'অর্ডার সফল' বার্তা দেখালেও ব্যাকএন্ড ডাটাবেজে কি অর্ডারের স্ট্যাটাস ঠিকমতো বদলেছে? ইনভেন্টরি স্টক কি সঠিকভাবে কমেছে? এসকিউএল টেস্টিং দিয়েই এই গভীর ডেটা অখণ্ডতা যাচাই করতে হয়।"
      },
      {
        type: "code",
        language: "sql",
        code: `-- 1. Verify Transaction Atomicity (No partial writes)
SELECT o.id, o.status, p.amount, p.status 
FROM orders o
JOIN payments p ON o.id = p.order_id
WHERE o.created_at >= NOW() - INTERVAL '1 hour'
  AND (o.status = 'COMPLETED' AND p.status != 'PAID');

-- 2. Detect Orphan Records Following Delete
SELECT oi.id, oi.order_id 
FROM order_items oi
LEFT JOIN orders o ON oi.order_id = o.id
WHERE o.id IS NULL;`
      }
    ]
  },

  // ─── 17. SQA CAREER & INTERVIEW MASTERY ──────────────────────
  {
    id: "sqa-career-interview-mastery",
    slug: "sqa-engineer-career-roadmap-interview-mastery",
    title: "The SQA Engineer Career Blueprint & Cracking Modern QA Interviews",
    titleBn: "কিউএ ইঞ্জিনিয়ার ক্যারিয়ার রোডম্যাপ এবং আধুনিক এসকিউএ ইন্টারভিউ ক্র্যাক করার কৌশল",
    category: "Interview Prep",
    tagColor: C.pass,
    date: "Feb 2026",
    readTime: "7 min read",
    author: "Rezwanul Rimel",
    excerpt: "From manual testing fundamentals to test automation architecture: the exact competencies, portfolio evidence, and scenario answers hiring managers look for in 2026.",
    excerptBn: "ম্যানুয়াল টেস্টিং দক্ষতা থেকে আধুনিক টেস্ট অটোমেশন আর্কিটেকচার পর্যন্ত: চাকরিদাতা কোম্পানিগুলো একজন সফল কিউএ প্রার্থীর মাঝে কী খোঁজেন।",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%)",
    tags: ["Career", "Interview", "Portfolio", "Roadmap", "Hiring"],
    content: [
      {
        type: "paragraph",
        text: "The software testing industry has fundamentally evolved. The modern QA engineer is not someone who just clicks buttons randomly; they are quality gatekeepers with deep technical fluency in APIs, test architecture, and CI/CD pipelines.",
        textBn: "সফটওয়্যার টেস্টিং আগের চেয়ে অনেক উন্নত হয়েছে। বর্তমান কিউএ ইঞ্জিনিয়ার শুধু বাটন ক্লিককারী নন; তারা সিস্টেম আর্কিটেকচার, এপিআই কন্ট্রাক্ট এবং সিআই/সিডি অটোমেশনের রক্ষক।"
      },
      {
        type: "heading",
        text: "The 3 Pillars Interviewers Evaluate",
        textBn: "ইন্টারভিউতে ৩টি মূল স্তম্ভ মূল্যায়ন করা হয়"
      },
      {
        type: "list",
        items: [
          "1. Analytical Mindset: How do you decompose an ambiguous requirement and uncover tricky edge cases?",
          "2. Technical Execution: Can you write reliable Playwright or Postman automated collections with clean assertions?",
          "3. Cross-Team Communication: How do you handle developer pushback professionally without damaging team morale?"
        ],
        itemsBn: [
          "১. অ্যানালিটিকাল মাইন্ডসেট: একটি জটিল রিকয়ারমেন্ট দেখে আপনি কতটা কার্যকরভাবে এজ কেস বের করতে পারেন।",
          "২. টেকনিক্যাল দক্ষতা: পোস্টম্যান বা প্লে-রাইট দিয়ে কার্যকর ও ফ্লিকিনেস-মুক্ত টেস্ট লেখার ক্ষমতা।",
          "৩. পেশাদার যোগাযোগ: ডেভেলপার বা ম্যানেজমেন্টের সাথে বন্ধুত্বপূর্ণ সম্পর্ক রেখে ডিফেক্ট সমাধান করানোর দক্ষতা।"
        ]
      }
    ]
  }
];
