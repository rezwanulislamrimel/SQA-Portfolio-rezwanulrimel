import { C } from "../constants/theme";

export const PERSONAL_INFO = {
  name: "Rezwanul Rimel",
  title: "SQA Engineer",
  location: "Dhaka, Bangladesh",
  phone: "+8801600005412",
  email: "rezwanul.rimel97@gmail.com",
  linkedin: "https://linkedin.com/in/rezwanulrimel",
  github: "https://github.com/rezwanulislamrimel",
  cvLink: "./cv/rezwanul_rimel_cv.pdf",
  education: "B.Sc. in Computer Science & Engineering — AIICT , 2020",
};

export const CERTIFICATIONS = [
  { name: "Ostad", detail: "Manual & Automation Testing", meta: "6-Month Program", color: "warn", initials: "OS" },
  { name: "Programming Hero", detail: "Complete Web Development", meta: "Batch: Lucky 7", color: "info", initials: "PH" },
  { name: "Codeman BD", detail: "Full Stack Development", meta: "Batch 189", color: "pass", initials: "CB" },
];

export const STACK_ITEMS = [
  "PLAYWRIGHT", "POSTMAN + NEWMAN", "K6", "JMETER", "OWASP ZAP",
  "JIRA", "GITHUB ACTIONS", "JENKINS", "APPIUM", "SQL",
];

export const EXPERIENCES = [
  {
    role: "Jnr SQA Engineer",
    company: "unidevGO Software Solutions Ltd.",
    location: "Florida, USA (HQ) · Remote from Dhaka",
    period: "Feb 2026 — Present",
    status: "active",
    icon: "Building2",
    points: [
      "Read through SRS documents and built test plans covering every requirement without gaps.",
      "Wrote and ran functional and regression test cases; caught several critical bugs pre-release.",
      "Tracked bugs in Jira with clear reproduction steps, re-testing after each fix was deployed.",
      "Ran API tests in Postman and Newman, validating response data, status codes, and schemas.",
      "Built end-to-end automation scripts in Playwright using a Page Object Model structure.",
    ],
  },
  {
    role: "Founder & Lead ICT Instructor",
    company: "ICT Success Academy",
    location: "Dhaka, Bangladesh",
    period: "Ongoing",
    status: "active",
    icon: "BookOpen",
    points: [
      "Run ICT courses for SSC, HSC/Inter, and Honors-level students.",
      "Teach hands-on Office Applications, Basic Computer Use, and Web Fundamentals.",
      "Design, build, and maintain the academy's own web portal with React, then run quality testing on it end to end.",
    ],
  },
  {
    role: "Frontend & Shopify / E-Commerce Developer",
    company: "Freelance — Shopify & Local Web Clients",
    location: "Dhaka, Bangladesh · Remote",
    period: "2018 — 2023",
    status: "past",
    icon: "Code2",
    points: [
      "Built and customized Shopify storefronts and e-commerce sites for local and international clients — theming, product/checkout flows, and app integrations.",
      "Delivered local frontend websites end-to-end: HTML5, CSS3, Flexbox/Grid, Tailwind, and Bootstrap for responsive, cross-browser layouts.",
      "Wrote JavaScript (ES6) and DOM logic to wire up interactive UI, form validation, and API-driven data on client sites.",
      "Built full-stack features with React.js, Node.js, Express.js, MongoDB, and Firebase — auth, data persistence, and deployment.",
      "Used Git/GitHub for version control across every project, keeping a clean commit history and branch workflow.",
      "This five-year hands-on build history is the technical foundation behind my move into SQA — I test software with a builder's understanding of how it's actually put together, not just how it's supposed to behave.",
    ],
    link: { label: "View work on Behance", url: "https://www.behance.net/rezwanulrimel" },
  },
  {
    role: "Co-Founder",
    company: "Rizzq (@Rizzqbd) — Islamic Lifestyle & Product Brand",
    location: "Dhaka, Bangladesh · Online",
    period: "Ongoing",
    status: "active",
    icon: "Briefcase",
    points: [
      "Founded and run Rizzq, an Islamic lifestyle & product brand, handling the business end-to-end from sourcing to sale.",
      "Manage day-to-day online shop operations: product listings, order processing, and fulfillment.",
      "Handle customer communication, inquiries, and after-sales support directly, building repeat trust with buyers.",
      "Run the brand's e-commerce presence and marketing on Facebook, driving discovery and sales through the page.",
      "This entrepreneurial, customer-facing experience complements my technical and SQA background — I understand the business impact of a bug or a broken checkout, not just the ticket.",
    ],
    link: { label: "Visit Rizzq on Facebook", url: "https://www.facebook.com/Rizzqbd" },
  },
];

export const PROJECTS = [
  { title: "ICT Success Academy Web Portal", status: "pass", tag: "React + QA", desc: "Institutional web portal built in React with student-portal workflows and cross-browser testing.", tech: ["React", "UI Testing", "Tailwind"] },
  { title: "Drivers Lesson — Performance Suite", status: "pass", tag: "K6 + CI/CD", desc: "Load, stress, spike, and soak tests in K6, wired into GitHub Actions and Jenkins pipelines.", tech: ["K6", "GitHub Actions", "Jenkins"] },
  { title: "Web Automation Framework", status: "pass", tag: "Playwright", desc: "Full E2E framework using the Page Object Model, async/await, and Playwright's auto-wait handling.", tech: ["Playwright", "TypeScript", "POM"] },
  { title: "Restful-Booker API Suite", status: "pass", tag: "API QA", desc: "20+ automated cases across CRUD endpoints, with JSON schema checks and Newman HTML reports.", tech: ["Postman", "Newman", "JSON Schema"] },
  { title: "Evershop E-commerce QA", status: "pass", tag: "Manual QA", desc: "Full functional, UI, and regression coverage, with every defect logged in Jira with repro steps.", tech: ["Jira", "Manual", "Regression"] },
  { title: "Local Merchant Checkout QA", status: "pass", tag: "Local Work", desc: "End-to-end manual validation of payment checkout flows for local merchant platforms.", tech: ["Functional QA", "Payment QA"] },
];

export const LOCAL_CLIENTS = [
  { name: "Avian BPO", category: "BPO & Operations", initials: "AB" },
  { name: "Deqlo", category: "Software & Web Tech", initials: "DQ" },
  { name: "Cyber Bit Bite", category: "IT & Cybersecurity", initials: "CB" },
  { name: "Rent Yard", category: "Real Estate & Rentals", initials: "RY" },
  { name: "Khagrachori Protidin", category: "News & Digital Media", initials: "KP" },
];

export const SKILL_CATEGORIES = [
  { category: "Testing", skills: ["Manual", "Functional", "Regression", "API", "Performance", "Database"] },
  { category: "Automation", skills: ["Playwright (JS/TS)", "Selenium"] },
  { category: "Performance & Security", skills: ["K6", "JMeter", "OWASP ZAP"] },
  { category: "Mobile", skills: ["Android Testing", "Appium"] },
  { category: "CI/CD & Tools", skills: ["GitHub Actions", "Jenkins", "Postman", "Newman", "Jira", "TestRail", "Git"] },
  { category: "Concepts", skills: ["SDLC", "STLC", "Agile Scrum", "Bug Life Cycle"] },
  { category: "Languages", skills: ["JavaScript", "TypeScript", "SQL"] },
  { category: "Web Development", skills: ["HTML5 & CSS3", "Tailwind & Bootstrap", "JavaScript (ES6+)", "React & React Router", "Node.js & Express", "MongoDB", "Firebase Auth & JWT", "REST API Design"] },
  { category: "🤖 AI Tools", skills: ["ChatGPT", "DeepSeek", "Gemini", "Claude", "Google AI Studio"], note: "Exploring and leveraging AI tools based on project requirements, QA workflows, and problem-solving needs." },
  { category: "💻 AI Coding & Automation", skills: ["GitHub Copilot"], note: "AI-assisted coding, test automation, debugging, and development workflow support." },
];

/* ═══════════════════════════════════════════
   BLOG — three original posts, written in Rezwanul's voice
═══════════════════════════════════════════ */
export const BLOG_POSTS = [
  {
    id: "manual-still-matters",
    tag: "MANUAL",
    tagColor: C.info,
    title: "Why manual testing still earns its place",
    date: "Aug 2026",
    readTime: "4 min",
    excerpt: "Automation gets the attention, but the bugs that actually embarrass a team are usually the ones no script was written to look for.",
    body: [
      "Every QA conversation I have lately starts with automation coverage numbers, and I get why — they're easy to report on. But most of the bugs that made it to production on projects I've worked on weren't missing from a test suite. They were missing from anyone's imagination.",
      "Manual testing is where exploratory thinking happens. You click somewhere you weren't supposed to, resize a window at an awkward moment, paste an emoji into a phone number field — the kind of behavior no one writes a Playwright script for on day one, because no one thought of it yet.",
      "On the unidevGO projects I test, I still run a full manual pass before I even think about automating a flow. It tells me which parts of the app are fragile, which error states are missing, and which edge cases are worth locking into a script. Automation without that first pass just automates your blind spots.",
      "The honest framing I use with junior testers I mentor at ICT Success Academy: automation checks that what you already know works keeps working. Manual testing is how you find out what you didn't know to check in the first place. You need both, and the order matters.",
    ],
  },
  {
    id: "playwright-framework",
    tag: "AUTOMATION",
    tagColor: C.pass,
    title: "Building a Playwright framework that doesn't rot",
    date: "Jul 2026",
    readTime: "5 min",
    excerpt: "Most automation suites don't fail because Playwright is bad. They fail because nobody planned for the framework to still be alive in six months.",
    body: [
      "The first automation suite I built was fast to write and painful to maintain — locators scattered across test files, no shared setup, and a single failing selector that broke twelve unrelated tests. That suite taught me more than any tutorial did.",
      "What actually holds up over time is boring: a strict Page Object Model, one source of truth per locator, and test data that's generated rather than hardcoded. When a button's selector changes, I want to fix it in exactly one file, not grep the whole repo.",
      "Playwright's auto-wait handling removes a lot of the flakiness that used to plague Selenium suites, but it doesn't remove bad test design. I still see teams add arbitrary sleep() calls out of habit, which just hides timing issues instead of fixing them.",
      "The other habit that pays off: wiring the suite into CI early, even before coverage is high. A five-test suite that runs on every GitHub Actions push catches more regressions than a two-hundred-test suite that only runs manually before a release.",
      "A framework doesn't rot because the tool is wrong. It rots because nobody treated the test code with the same discipline as the product code.",
    ],
  },
  {
    id: "ai-in-qa",
    tag: "AI + QA",
    tagColor: C.warn,
    title: "What AI actually helps with in QA — and what it doesn't",
    date: "Jun 2026",
    readTime: "4 min",
    excerpt: "AI tools are genuinely useful for parts of a QA job. They are not yet a substitute for judgment about what's actually worth testing.",
    body: [
      "I use AI tools daily now — mostly to draft test case skeletons from an SRS document, generate boilerplate Playwright locators, and summarize long bug threads in Jira before a standup. All three save real time.",
      "Where it consistently falls short is risk judgment: deciding which ten test cases actually matter out of the two hundred a model can generate for you. That's a product-and-context call, and I haven't found a tool that reliably knows what's fragile in this specific codebase versus what's textbook coverage.",
      "It's also unreliable for exploratory testing. The value of exploratory testing is the tester's curiosity and memory of past failures — 'this form broke last time someone pasted in a long string' — which isn't something a prompt reproduces without being told the history first.",
      "My current workflow treats AI as a fast first draft, never the final review. I'll ask it to draft a regression checklist from a ticket, then cut it down by hand based on what I actually know is likely to break. That combination is faster than doing it manually, and more accurate than trusting the draft as-is.",
      "The teams I've seen get burned by AI in QA are the ones that skipped that second step — shipping the model's checklist instead of a tester's judgment on top of it.",
    ],
  },
];

export const NAV = [
  { id: "home", label: "Home" },
  { id: "bug-defense", label: "QA Defense" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];
