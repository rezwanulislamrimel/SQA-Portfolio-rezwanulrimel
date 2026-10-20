import { C } from "../constants/theme";

export const BLOG_CATEGORIES = [
  "All",
  "Automation",
  "API Testing",
  "Performance",
  "Manual QA",
  "Security",
  "AI in QA",
  "Process & Jira",
  "Database",
];

export const ALL_BLOG_POSTS = [
  {
    id: "playwright-framework",
    slug: "building-production-grade-playwright-framework",
    title: "Building a Production-Grade Playwright Framework That Never Rots",
    category: "Automation",
    tagColor: C.pass,
    date: "Oct 2026",
    readTime: "6 min read",
    author: "Rezwanul Rimel",
    excerpt: "Most automation suites don't fail because Playwright is bad. They fail because nobody planned for the framework to still be maintainable six months and 200 releases later.",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(56, 189, 248, 0.08) 100%)",
    tags: ["Playwright", "TypeScript", "POM", "CI/CD", "GitHub Actions"],
    content: [
      {
        type: "paragraph",
        text: "The first automation suite I built was fast to write and excruciating to maintain. Locators were duplicated across test files, setup logic was copy-pasted, and a single renamed CSS class broke fifteen unrelated tests. That painful experience taught me the true engineering discipline behind scalable QA."
      },
      {
        type: "heading",
        text: "1. The Strict Page Object Model (POM)"
      },
      {
        type: "paragraph",
        text: "Every page or major component (like navigation bars or checkout modals) must have its own dedicated class. Test scripts should never touch raw locators or CSS selectors directly. When a locator changes, you update exactly one line in one file, not perform repo-wide greps."
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
        text: "2. Eliminate Flaky Sleeps with Auto-Waiting"
      },
      {
        type: "paragraph",
        text: "Adding arbitrary waitForTimeout(3000) calls is a dangerous anti-pattern. It artificially inflates suite execution time and hides race conditions. Playwright natively auto-waits for actionability (visible, stable, enabled). For dynamic network calls, always wait on explicit network responses or web assertions like expect(locator).toHaveText()."
      },
      {
        type: "heading",
        text: "3. Shift-Left CI/CD Pipeline Integration"
      },
      {
        type: "paragraph",
        text: "A five-test suite that runs on every pull request caught more regressions than a 300-test suite that only runs manually once a month before release. Wire Playwright into GitHub Actions from day one with automatic video/trace recording on failure."
      }
    ]
  },
  {
    id: "api-automation-postman-newman",
    slug: "api-automation-postman-newman-cicd",
    title: "API Automation with Postman & Newman: From Manual Testing to CI/CD Gateways",
    category: "API Testing",
    tagColor: C.warn,
    date: "Sep 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "How to chain dynamic JWT tokens, validate JSON Schema contracts, and execute automated collections inside GitHub Actions using Newman with automated HTML reporting.",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(0, 245, 212, 0.08) 100%)",
    tags: ["Postman", "Newman", "REST API", "JSON Schema", "CI/CD"],
    content: [
      {
        type: "paragraph",
        text: "Testing APIs manually through Postman is fine for initial exploration. But when a backend team deploys multiple times a day, manual collection clicking becomes a massive bottleneck. Automated API regression is the highest ROI testing you can implement."
      },
      {
        type: "heading",
        text: "Dynamic Variable Chaining & State Propagation"
      },
      {
        type: "paragraph",
        text: "A real test suite shouldn't rely on hardcoded auth tokens or IDs. Postman's Tests script tab allows you to capture response values and pass them dynamically to subsequent endpoints."
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
        text: "Running Headless Collections with Newman in CI/CD"
      },
      {
        type: "paragraph",
        text: "Export your collection and environment files into your Git repository, then execute them via Newman on every PR. Newman generates instant pass/fail exit codes that block faulty backend commits before reaching staging."
      }
    ]
  },
  {
    id: "k6-performance-testing",
    slug: "performance-stress-testing-k6-benchmarks",
    title: "Performance & Stress Testing with K6: Benchmarking High-Concurrency Systems",
    category: "Performance",
    tagColor: C.pass,
    date: "Aug 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "How to design realistic load, spike, and soak test profiles with virtual users (VUs), latency thresholds, and p95 benchmarks before high-traffic events like Black Friday.",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(255, 107, 107, 0.08) 100%)",
    tags: ["K6", "Performance Testing", "Stress Test", "SRE", "DevOps"],
    content: [
      {
        type: "paragraph",
        text: "An application that works perfectly for 1 user can completely collapse under 500 concurrent users. Performance testing is not just about measuring speed — it's about uncovering database connection pool exhaustion, memory leaks, and third-party API bottlenecks."
      },
      {
        type: "heading",
        text: "Designing a Realistic Load Profile in K6"
      },
      {
        type: "paragraph",
        text: "K6 allows testers to write performance suites in JavaScript. Rather than hitting an endpoint with flat traffic, simulate realistic ramp-up, steady-state load, and ramp-down stages."
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
      },
      {
        type: "heading",
        text: "The Key Metrics That Matter to Clients"
      },
      {
        type: "paragraph",
        text: "Average response time is misleading because outliers hide catastrophic delays. Always report on 95th and 99th percentile latencies (p95 / p99), error rates under peak concurrency, and server recovery time following a traffic spike."
      }
    ]
  },
  {
    id: "manual-still-matters",
    slug: "why-manual-testing-still-earns-its-place",
    title: "Why Manual Exploratory Testing Still Finds the Bugs Automation Misses",
    category: "Manual QA",
    tagColor: C.info,
    date: "Aug 2026",
    readTime: "4 min read",
    author: "Rezwanul Rimel",
    excerpt: "Automation gets the glory, but the bugs that actually embarrass a business in production are usually the ones no script was written to look for.",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(28, 37, 65, 0.9) 100%)",
    tags: ["Manual QA", "Exploratory Testing", "Edge Cases", "User Psychology"],
    content: [
      {
        type: "paragraph",
        text: "Every QA conversation today starts with automation coverage metrics. But in my five years of testing and software building, most production incidents weren't missing from a test suite — they were missing from anyone's imagination."
      },
      {
        type: "heading",
        text: "Automation Verifies; Manual Testing Discovers"
      },
      {
        type: "paragraph",
        text: "Automated tests are checkers: they confirm that what you already know works continues to work. Exploratory testing is how you discover what you didn't know to check in the first place."
      },
      {
        type: "paragraph",
        text: "What happens if a customer pastes an emoji into an international phone number field? What if they click 'Pay' twice during 3G latency? What if they switch browser tabs while a Stripe webhook is processing? No Playwright script is written for those on day one. You find them through curiosity and adversarial user thinking."
      },
      {
        type: "heading",
        text: "The Balanced SQA Philosophy"
      },
      {
        type: "paragraph",
        text: "On my projects at unidevGO, I always conduct an exhaustive manual exploratory pass before writing a single line of automation. It exposes which workflows are fragile, which error states are missing, and where edge-case guards are essential. Automating without exploratory testing just automates your blind spots."
      }
    ]
  },
  {
    id: "mobile-app-testing-appium",
    slug: "mobile-app-testing-appium-android-automation",
    title: "Mobile App Automation with Appium: Flakiness-Free Android Testing",
    category: "Automation",
    tagColor: C.pass,
    date: "Jul 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "Best practices for UIAutomator2, deep-link navigation, gesture handling, and eliminating mobile automation flakiness on real devices vs emulators.",
    coverGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)",
    tags: ["Appium", "Mobile QA", "Android", "UIAutomator2", "Test Automation"],
    content: [
      {
        type: "paragraph",
        text: "Mobile testing introduces complex variables that web testing never has to deal with: battery drain, screen rotation, push notifications, OS permission popups, and memory constraints. Appium provides a unified WebDriver protocol, but requires disciplined setup."
      },
      {
        type: "heading",
        text: "Selecting the Right Locators in Android"
      },
      {
        type: "paragraph",
        text: "Avoid brittle XPath locators in mobile apps. In native Android apps, XPath traversals require full XML hierarchy parsing which slows test execution down 10x. Always work with developers to ensure resource-id and accessibility-id (content-desc) are present."
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
      },
      {
        type: "heading",
        text: "Real Devices vs Cloud Emulators"
      },
      {
        type: "paragraph",
        text: "Emulators are great for fast PR checks. But hardware-specific bugs (camera scanners, biometric login, GPS spoofing, low-RAM background killing) only surface on physical devices. A hybrid approach ensures maximum coverage at minimum cost."
      }
    ]
  },
  {
    id: "security-testing-owasp-zap",
    slug: "security-testing-owasp-zap-for-qa-engineers",
    title: "Security Testing with OWASP ZAP: A Practical QA Guide to Vulnerability Scans",
    category: "Security",
    tagColor: C.fail,
    date: "Jun 2026",
    readTime: "6 min read",
    author: "Rezwanul Rimel",
    excerpt: "Integrating automated baseline vulnerability scans into your QA workflow to catch SQL Injection, XSS, and insecure headers before deployment.",
    coverGradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(11, 19, 43, 0.9) 100%)",
    tags: ["Security", "OWASP ZAP", "Vulnerability Testing", "XSS", "SQLi"],
    content: [
      {
        type: "paragraph",
        text: "Quality Assurance is not just about whether the button clicks and the order submits. If an attacker can inject malicious script into a comment form or access another user's profile by changing an ID in the URL, that is a catastrophic quality failure."
      },
      {
        type: "heading",
        text: "Passive vs Active Vulnerability Scanning"
      },
      {
        type: "paragraph",
        text: "Passive scanning inspects headers, cookies, and responses without altering requests (safe to run against production). Active scanning injects known payload attacks to find SQLi, CSRF, and XSS (only run against isolated staging environments)."
      },
      {
        type: "code",
        language: "bash",
        code: `# Running OWASP ZAP Baseline Scan via Docker in CI/CD
docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py \\
    -t https://staging.example.com \\
    -r zap-report.html \\
    -I`
      },
      {
        type: "heading",
        text: "Top 3 Security Flaws Every QA Should Check"
      },
      {
        type: "paragraph",
        text: "1. Missing Content Security Policy (CSP) & CORS headers.\n2. Broken Object Level Authorization (BOLA/IDOR) — can user A view user B's invoice?\n3. Sensitive data exposure in HTTP response bodies (passwords, tokens, PII)."
      }
    ]
  },
  {
    id: "bug-reports-developers-love",
    slug: "art-of-writing-bug-reports-developers-love",
    title: "The Art of Writing Bug Reports That Developers Actually Love",
    category: "Process & Jira",
    tagColor: C.info,
    date: "May 2026",
    readTime: "4 min read",
    author: "Rezwanul Rimel",
    excerpt: "How to eliminate developer pushback with crystal-clear reproduction steps, network HAR archives, video captures, and exact environment contexts.",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(28, 37, 65, 0.9) 100%)",
    tags: ["Jira", "Defect Triage", "Bug Tracking", "Team Collaboration"],
    content: [
      {
        type: "paragraph",
        text: "The worst sentence in software development is: 'Works on my machine.' When a developer closes your ticket as cannot reproduce, it's rarely because the bug doesn't exist — it's because the bug report didn't provide enough deterministic context."
      },
      {
        type: "heading",
        text: "The Anatomy of a Flawless Jira Bug Ticket"
      },
      {
        type: "paragraph",
        text: "Every defect report I author follows a strict template:\n\n1. **Title**: [Module][Severity] Concise description of the failure (e.g. `[Checkout][High] Double-click on 'Pay' creates duplicate transaction on 3G network`).\n2. **Environment**: Chrome 128, Windows 11, Staging Build #412, Test Account: user_staging_04.\n3. **Steps to Reproduce**: 1-2-3 numbered steps with exact input values.\n4. **Expected vs Actual Result**.\n5. **Evidence**: 10-second MP4 screen recording + Chrome DevTools Console error + Network HAR file."
      },
      {
        type: "heading",
        text: "Why Developers Value This Workflow"
      },
      {
        type: "paragraph",
        text: "When a developer has exact reproduction steps and network payloads, they don't have to spend 2 hours guessing how to trigger the issue. They can fix it in 20 minutes and push a clean patch. That builds deep engineering trust."
      }
    ]
  },
  {
    id: "ai-in-qa",
    slug: "what-ai-actually-helps-with-in-qa-and-what-it-doesnt",
    title: "What AI Actually Helps with in QA — And What It Doesn't",
    category: "AI in QA",
    tagColor: C.warn,
    date: "Apr 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "AI tools are genuinely useful for parts of a QA engineer's workflow. They are not yet a substitute for adversarial curiosity and human risk judgment.",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(0, 245, 212, 0.08) 100%)",
    tags: ["AI in QA", "ChatGPT", "Claude", "Copilot", "Test Strategy"],
    content: [
      {
        type: "paragraph",
        text: "I use AI tools daily — mostly to draft test case matrices from lengthy SRS documents, generate boilerplate Playwright Page Object classes, and summarize bug discussions before team standups. All three save real hours."
      },
      {
        type: "heading",
        text: "Where AI Excels in QA"
      },
      {
        type: "paragraph",
        text: "- Generating boundary value test datasets (valid/invalid credit cards, edge-case Unicode strings, long text payloads).\n- Transforming manual test steps into initial automation code skeletons.\n- Regex patterns for API response validation."
      },
      {
        type: "heading",
        text: "Where AI Dangerously Falls Short"
      },
      {
        type: "paragraph",
        text: "Where models consistently fail is risk judgment: deciding which ten test cases actually matter out of the two hundred a model can generate for you. That is a product-and-context call that requires understanding user behavior, business impact, and technical fragility in this specific codebase."
      },
      {
        type: "paragraph",
        text: "My golden rule: Use AI as a fast first draft, never the final review. The teams that get burned are the ones that ship an AI-generated checklist without a senior QA's critical eye on top of it."
      }
    ]
  },
  {
    id: "database-sql-testing",
    slug: "database-sql-testing-validating-backend-integrity",
    title: "Database & SQL Testing: Validating What UI Testing Completely Misses",
    category: "Database",
    tagColor: C.info,
    date: "Mar 2026",
    readTime: "5 min read",
    author: "Rezwanul Rimel",
    excerpt: "Verifying data integrity, orphan record prevention, foreign key cascades, and ACID transaction rollbacks beneath the frontend UI.",
    coverGradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(28, 37, 65, 0.9) 100%)",
    tags: ["SQL", "Database Testing", "PostgreSQL", "Data Integrity", "Backend QA"],
    content: [
      {
        type: "paragraph",
        text: "A frontend test might show a green 'Order Submitted Successfully' banner on screen. But did the database record the order with the correct status? Was the stock deducted atomically? Did a cancelled payment leave an orphan record in the database?"
      },
      {
        type: "heading",
        text: "Essential SQL Checks Every QA Must Run"
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
      },
      {
        type: "heading",
        text: "End-to-End Data Lifecycle Validation"
      },
      {
        type: "paragraph",
        text: "Always pair UI or API tests with direct database queries. Verifying that the backend state precisely mirrors frontend user interactions is how you catch high-severity data corruption issues before they compound in production."
      }
    ]
  }
];
