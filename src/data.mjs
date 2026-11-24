// All site content lives here. Every fact comes from the existing portfolio,
// the project repositories or the live sites; nothing is invented.
// Fields ending in Html may contain inline HTML; everything else is plain text.

export const site = {
  name: 'Chimdiume Azie',
  title: 'Chimdiume Azie · Software and AI/ML developer',
  url: 'https://achimdi.github.io/portfolio/',
  email: 'chimdiazie2022@gmail.com',
  location: 'Nigeria',
  availability: 'Open to entry-level AI/ML and software engineering roles, remote or relocation.',
  availabilityShort: 'Open to entry-level roles, remote or relocation',
  education: { degree: 'B.Sc. Computer Science', school: 'Godfrey Okoye University', year: '2026', project: 'NeuroScan AI' },
  cv: 'CV.pdf',
  social: [
    { id: 'github', label: 'GitHub', handle: 'Achimdi', url: 'https://github.com/Achimdi' },
    { id: 'linkedin', label: 'LinkedIn', handle: 'chimdiume-azie', url: 'https://www.linkedin.com/in/chimdiume-azie-73a477448/' },
    { id: 'instagram', label: 'Instagram', handle: '@azie_web', url: 'https://www.instagram.com/azie_web/' },
  ],
  ogImage: 'assets/og.jpg',
  ogAlt: 'Chimdiume Azie, software and AI/ML developer: portrait with the headline Building software that solves real problems.',
};

export const gmailCompose = (subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}` +
  (subject ? `&su=${encodeURIComponent(subject)}` : '') + (body ? `&body=${encodeURIComponent(body)}` : '');

// What I build (home page). Each area points to the projects that show it.
export const expertise = [
  { icon: 'layout', title: 'Web applications', text: 'Fast, mobile-first apps and sites that work on the phones people already have, installable from a link.', proof: ['tallybox', 'twzee-foods'] },
  { icon: 'package', title: 'Business software', text: 'Stock, sales, records and roles: tools a team can run its day on, with every change traceable.', proof: ['tallybox', 'neuroscan-ai'] },
  { icon: 'cpu', title: 'AI and machine learning', text: 'Models you can inspect, and agents that show where their answers come from.', proof: ['neuroscan-ai', 'nellow'] },
  { icon: 'layers', title: 'Full-stack development', text: 'Front end, back end, sign-in and databases, tested and deployed on Cloudflare, Render and GitHub Pages.', proof: ['tallybox', 'nellow'] },
];

// Skill groups. slug = Simple Icons logo; no slug = text only.
export const skills = [
  { group: 'Frontend', items: [
    { name: 'React', slug: 'react' }, { name: 'TypeScript', slug: 'typescript' }, { name: 'JavaScript', slug: 'javascript' },
    { name: 'HTML', slug: 'html5' }, { name: 'CSS', slug: 'css3' }, { name: 'Tailwind CSS', slug: 'tailwindcss' }, { name: 'Vite', slug: 'vite' } ] },
  { group: 'Backend', items: [
    { name: 'Python', slug: 'python' }, { name: 'Flask', slug: 'flask' }, { name: 'FastAPI', slug: 'fastapi' },
    { name: 'Supabase', slug: 'supabase' }, { name: 'Deno', slug: 'deno' }, { name: 'JWT auth', slug: 'jsonwebtokens' } ] },
  { group: 'AI and machine learning', items: [
    { name: 'PyTorch', slug: 'pytorch' }, { name: 'scikit-learn', slug: 'scikitlearn' }, { name: 'OpenCV', slug: 'opencv' },
    { name: 'Hugging Face', slug: 'huggingface' }, { name: 'Ollama', slug: 'ollama' }, { name: 'timm and torchvision' },
    { name: 'Grad-CAM' }, { name: 'Transfer learning' }, { name: 'LLM agents (Llama, Groq)' } ] },
  { group: 'Data and databases', items: [
    { name: 'PostgreSQL', slug: 'postgresql' }, { name: 'SQLite', slug: 'sqlite' }, { name: 'NumPy', slug: 'numpy' },
    { name: 'Pandas', slug: 'pandas' }, { name: 'SQLAlchemy' }, { name: 'Matplotlib and Seaborn' } ] },
  { group: 'Tools and infrastructure', items: [
    { name: 'Git', slug: 'git' }, { name: 'GitHub', slug: 'github' }, { name: 'Cloudflare', slug: 'cloudflare' },
    { name: 'Render', slug: 'render' }, { name: 'Vitest', slug: 'vitest' }, { name: 'Playwright' }, { name: 'GitHub Actions CI' } ] },
];

export const about = {
  introHtml: `I just graduated in Computer Science and spent my final year on one question: when a model says a scan looks like early Alzheimer's, can a doctor see why? I report weak results next to strong ones, and I fix what I find.`,
  // How I work: each point is backed by something in a project.
  approach: [
    { title: 'Show the work', text: 'NeuroScan AI shows a Grad-CAM heatmap with each prediction, and Nellow lists the sources behind each answer.' },
    { title: 'Report the weak results too', text: 'NeuroScan reaches 98.66% on validation but 77.35% on a skewed test set. I publish both and treat the gap as a warning.' },
    { title: 'Test what ships', text: 'Every push to Tallybox runs unit, database, Edge Function and end-to-end tests across Android, Chrome, Firefox and iPhone.' },
    { title: 'Keep it simple to run', text: "Twzee Foods' whole menu and prices live in one commented file the owner can edit without me." },
  ],
  interests: ['Explainable AI for health', 'Software small businesses can run on', 'Local-first AI agents', 'Testing and reliability'],
};

// Ways to work together (from the old services page, without the unconfirmed parts).
export const services = [
  { title: 'Menu and ordering websites', text: 'A fast, mobile-first site where customers browse your menu or products and send a ready-written order on WhatsApp. Prices live in one file you can update.', example: 'twzee-foods' },
  { title: 'Business and internal tools', text: 'Web apps with sign-in, roles and a database for records your team keeps today in spreadsheets or on paper.', example: 'tallybox' },
  { title: 'AI assistants that cite their sources', text: 'An assistant that searches the web and answers with links, running on your own machine or on a cloud model.', example: 'nellow' },
];

export const projects = [
  {
    slug: 'neuroscan-ai',
    name: 'NeuroScan AI',
    category: 'Medical AI research prototype',
    accent: 'neuro',
    year: '2026',
    short: 'Classifies brain MRI scans into four Alzheimer\'s stages and shows the regions behind each prediction with Grad-CAM, inside a hospital web app.',
    overview: 'Can a doctor see why a model flags early Alzheimer\'s? NeuroScan AI classifies brain MRI scans into four Alzheimer\'s stages, shows the regions behind each prediction with Grad-CAM heatmaps, and wraps both in a hospital web app.',
    tags: ['PyTorch', 'EfficientNet-B0', 'Grad-CAM', 'Flask', 'SQLite'],
    facts: [
      ['Role', 'Designer and developer'],
      ['Context', 'Final-year project, B.Sc. Computer Science, 2026'],
      ['Status', 'Research prototype; web app deployed'],
      ['Stack', 'PyTorch, Flask, SQLite'],
    ],
    links: [
      { label: 'Open the web app', url: 'https://neuroscan-ai-yjp8.onrender.com/', note: 'Sign-in required' },
      { label: 'Model on Hugging Face', url: 'https://huggingface.co/ChimdiAzie/neuroscan-alzheimer-model' },
    ],
    repoNote: 'The source repository is private.',
    cardImage: { src: 'assets/img/gradcam.webp', w: 336, h: 408, alt: 'Grad-CAM heatmap over an axial brain MRI slice. Warm colours mark the regions that most influenced the prediction.' },
    problemHtml: `<p>Deep-learning models can flag signs of Alzheimer's in an MRI scan, but a bare label gives a doctor no way to check the reasoning. I spent my final year on one question: when a model says a scan looks like early Alzheimer's, can a doctor see why?</p>`,
    objectives: [
      'Classify MRI scans into four stages: NonDemented, VeryMildDemented, MildDemented and ModerateDemented.',
      'Show the regions behind each prediction with Grad-CAM, so a prediction can be inspected instead of taken on trust.',
      'Put the model inside a workflow a hospital would recognise: admins, doctors, patients and their scans.',
      'Report results honestly, including where the model is weak.',
    ],
    roleHtml: `<p>I built the whole system: preparing the data, training and evaluating the model, generating Grad-CAM heatmaps, and the Flask API and web interface around them.</p>`,
    features: [
      { title: 'Four-stage classification', text: 'EfficientNet-B0, fine-tuned with transfer learning on 224×224 MRI slices.' },
      { title: 'Grad-CAM heatmaps', text: 'Each prediction comes with a heatmap of the regions that most influenced it.' },
      { title: 'Admin and Doctor roles', text: 'JWT sign-in. Admins issue single-use registration codes, and can deactivate or reactivate doctor accounts.' },
      { title: 'Patient records and MRI upload', text: 'Doctors add patients, upload scans and see each scan\'s prediction with its heatmap.' },
      { title: 'Transfers with history', text: 'Admins move patients between doctors, and every transfer is recorded as an audit trail.' },
      { title: 'Dashboards', text: 'The admin dashboard counts doctors, patients, scans, unused codes and transfers; each doctor sees their patients broken down by predicted stage.' },
    ],
    build: [
      ['Data', 'OASIS Alzheimer\'s MRI (Kaggle): 44,355 training images and a separate test set of 46,184. The 80/20 training and validation split keeps each patient\'s scans together, so no patient appears on both sides.'],
      ['Model', 'EfficientNet-B0 with transfer learning (timm): 4,012,672 parameters fine-tuned, 224×224 input.'],
      ['Training', 'Class-weighted cross-entropy, light augmentation, Adam 1e-4, batch 32, 25 epochs: about 119 hours on a laptop with no GPU (training, not inference).'],
      ['Grad-CAM', 'For Mild and Moderate cases the heatmaps concentrated around the hippocampus, medial temporal lobe and ventricles: consistent with known Alzheimer\'s regions, but not clinically validated.'],
      ['Web app', 'Flask REST API with separate modules for auth, admin, doctors and patients; Flask-JWT-Extended and Flask-SQLAlchemy over SQLite; an HTML, CSS and JavaScript front end. The trained model is downloaded from Hugging Face when the app starts, and the app is deployed on Render.'],
    ],
    stack: [
      { name: 'Python', slug: 'python' }, { name: 'PyTorch', slug: 'pytorch' }, { name: 'timm' }, { name: 'torchvision' },
      { name: 'OpenCV', slug: 'opencv' }, { name: 'scikit-learn', slug: 'scikitlearn' }, { name: 'NumPy', slug: 'numpy' },
      { name: 'Pandas', slug: 'pandas' }, { name: 'Matplotlib' }, { name: 'Seaborn' }, { name: 'Flask', slug: 'flask' },
      { name: 'Flask-JWT-Extended', slug: 'jsonwebtokens' }, { name: 'Flask-SQLAlchemy' }, { name: 'SQLite', slug: 'sqlite' },
      { name: 'HTML, CSS, JavaScript', slug: 'html5' }, { name: 'Hugging Face', slug: 'huggingface' }, { name: 'Render', slug: 'render' },
    ],
    gallery: [
      { src: 'assets/img/confusion-matrix.webp', w: 800, h: 660, alt: 'Confusion matrix on the 46,184-image test set. Most NonDemented scans are correct; many are predicted VeryMildDemented, and no ModerateDemented scan is predicted correctly.', caption: 'Confusion matrix on the held-out test set.' },
      { src: 'assets/img/roc-curves.webp', w: 800, h: 636, alt: 'One-vs-rest ROC curves for the four classes.', caption: 'ROC curves, one-vs-rest.' },
      { src: 'assets/img/training-curves.webp', w: 900, h: 321, alt: 'Training and validation loss and accuracy curves over 25 epochs.', caption: 'Training and validation curves over 25 epochs.', wide: true },
      { src: 'assets/img/neuroscan-signin.webp', w: 700, h: 620, alt: 'NeuroScan AI sign-in screen with Admin and Doctor roles.', caption: 'Sign-in with Admin and Doctor roles.', center: true },
    ],
    challenges: [
      { problem: 'No GPU for training', solution: 'I used transfer learning on a small pretrained network, EfficientNet-B0 with about 4 million parameters, and kept training to 25 epochs. Even so, training took about 119 hours on a laptop CPU.' },
      { problem: 'A score that looked too good', solution: 'The model reached 98.66% on validation but 77.35% on the separate test set, which is 88.5% NonDemented. The training split keeps each patient\'s scans together, so the gap is not one patient leaking into both sides. I report both numbers, treat the gap as a warning about the split rather than a verdict on the idea, and plan stratified splitting next.' },
      { problem: 'A model too large to ship with the code', solution: 'The trained weights live on Hugging Face, and the app downloads them when it starts, so the deployed app on Render stays small.' },
    ],
    outcomeHtml: `<p>Final-year project for my B.Sc. in Computer Science (2026). The web app is deployed and the trained model is published on Hugging Face.</p><p><strong>It is a research prototype: not clinically validated and not a medical device.</strong></p>`,
    nextSteps: ['Stratified splitting', 'GPU training', 'Local Nigerian hospital data', 'Clinical validation', 'Longitudinal tracking', 'A lightweight offline or mobile version'],
  },

  {
    slug: 'tallybox',
    name: 'Tallybox',
    category: 'Business software: inventory and sales',
    accent: 'tally',
    year: '2026',
    short: 'Inventory and sales for small and large businesses, opened from a link on the phones they already have. An order only counts once payment is ticked as received.',
    overview: 'Inventory and sales for small and large businesses, from shops and pharmacies to restaurants, opened from a link on the phones they already have. Every sale takes stock off automatically, and an order only counts once staff tick that payment was received.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Cloudflare'],
    facts: [
      ['Role', 'Designer and developer'],
      ['Built', 'November 2026, 97 commits'],
      ['Status', 'Live, version 0.1.0'],
      ['Stack', 'React, TypeScript, Supabase, Cloudflare'],
    ],
    links: [
      { label: 'Visit live site', url: 'https://tallybox.pages.dev/' },
      { label: 'GitHub', url: 'https://github.com/Achimdi/tallybox', github: true },
    ],
    video: { src: 'assets/videos/tallybox.mp4', poster: 'assets/img/tallybox-poster.webp', w: 1916, h: 896, caption: 'Demo on a test business: registering, signing in as an owner, and the dashboard, orders, items and reports. Names in the video are blurred.', fallback: 'assets/img/tallybox-home.webp' },
    cardImage: { src: 'assets/img/tallybox-dashboard.webp', w: 1280, h: 800, alt: 'Tallybox owner dashboard on demo data: sales today, orders, payment methods and top items for Sunrise Pharmacy.' },
    cardPhone: { src: 'assets/img/tallybox-neworder.webp', w: 600, h: 1298, alt: 'Tallybox new-order screen on a phone, with items, prices, stock levels and a cart of four items.' },
    problemHtml: `<p>Businesses that sell over the counter work fast, take cash and bank transfers, and need staff to be quick. Without a record of every sale it is hard to know what is on the shelf, what sold and whether the day's money matches.</p>`,
    objectives: [
      'Record every sale and take it off stock automatically.',
      'Count only paid orders, so totals match the money.',
      'Run from a link: no app store and no installs, on phones, tablets and laptops.',
      'Keep each business\'s data separate and every change traceable.',
    ],
    roleHtml: `<p>I designed and built Tallybox on my own: the React front end, the Postgres schema and database functions, the Edge Functions, the tests and the deployment.</p>`,
    features: [
      { title: 'Fast selling', text: 'Tap items, adjust quantities, take the payment. Search and categories find anything in seconds.' },
      { title: 'Only paid orders count', text: 'An order is confirmed only after staff tick "Payment received". Waiting for a transfer? Hold the order; no stock is taken until it is paid.' },
      { title: 'Stock that counts itself', text: 'Sales take stock off and deliveries add it back, with warnings before items run out.' },
      { title: 'Shared supplies', text: 'Link items to stock they share, like bottles and caps. Every sale takes its share automatically.' },
      { title: 'Reports', text: 'Today against yesterday, payment methods, best and slowest sellers, stock value at cost, any date range, a CSV export and a one-page PDF.' },
      { title: 'Staff accounts with limits', text: 'Staff take orders. Only owners see totals, cost prices, reports and settings.' },
      { title: 'Receipts', text: 'As a picture or PDF, shared or printed from the browser.' },
      { title: 'Business access', text: 'Businesses register with a single-use activation code. A developer area manages businesses and access periods.' },
    ],
    build: [
      ['Front end', 'React and TypeScript with Vite, Tailwind CSS, TanStack Query, React Hook Form and Zod. An installable web app whose service worker caches only the app shell, never business data.'],
      ['One data interface', 'Screens talk to a single TallyboxApi with two versions: demo data kept in the browser, and Supabase. Business rules are pure functions shared by both.'],
      ['Database', 'Supabase Postgres with Row Level Security. The browser never writes to tables: every change goes through a database function or an Edge Function (Deno) that checks who is asking. Ten migrations and ten Edge Functions.'],
      ['Security', 'The browser only gets the publishable key, and the app refuses to start with a secret key in its place. Cloudflare Turnstile protects sign-in and registration and is checked on the server. A Content Security Policy is set in headers, and personal data is removed from logs.'],
      ['Testing and CI', 'Unit and component tests (Vitest and Testing Library), database tests (pgTAP), Edge Function tests (Deno), and Playwright end-to-end tests on Pixel 7, desktop Chrome, Firefox and iPhone 14, with automated accessibility checks (axe). CI runs on every push to main and every pull request; a weekly job takes an AES-256-encrypted production backup.'],
      ['Hosting', 'Cloudflare Pages builds every push to main and serves the app at tallybox.pages.dev.'],
    ],
    stack: [
      { name: 'React', slug: 'react' }, { name: 'TypeScript', slug: 'typescript' }, { name: 'Vite', slug: 'vite' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' }, { name: 'TanStack Query' }, { name: 'Zod' },
      { name: 'Supabase', slug: 'supabase' }, { name: 'PostgreSQL', slug: 'postgresql' }, { name: 'Deno', slug: 'deno' },
      { name: 'Vitest', slug: 'vitest' }, { name: 'Playwright' }, { name: 'pgTAP' }, { name: 'Cloudflare', slug: 'cloudflare' },
      { name: 'GitHub Actions', slug: 'github' },
    ],
    walkthrough: [
      { src: 'assets/img/tallybox-neworder.webp', w: 600, h: 1298, phone: true, alt: 'New-order screen on a phone: item cards with prices and stock, and a cart bar showing four items for ₦13,500.', caption: 'Staff tap items into an order.' },
      { src: 'assets/img/tallybox-cart.webp', w: 600, h: 1298, phone: true, alt: 'Cart on a phone: three items, a ₦13,500 total, payment method buttons and a Payment received checkbox.', caption: 'The order is confirmed only after "Payment received" is ticked.' },
      { src: 'assets/img/tallybox-dashboard.webp', w: 1280, h: 800, alt: 'Owner dashboard: sales today ₦9,600 from 4 orders, payment methods and top items.', caption: 'The owner sees the day at a glance.' },
      { src: 'assets/img/tallybox-reports.webp', w: 1280, h: 800, alt: 'Reports for this week: ₦40,950 in sales from 11 orders, with a sales-by-day chart, CSV export and PDF summary.', caption: 'Reports for any range, with a CSV export and PDF summary.' },
      { src: 'assets/img/tallybox-supplies.webp', w: 1280, h: 800, alt: 'Supplies screen for a restaurant: a 300 ml bottle and a bottle cap, each used by four drinks.', caption: 'Shared supplies: one bottle stock used by four drinks.' },
    ],
    walkthroughNote: 'Screens from Tallybox\'s built-in demo mode, which uses made-up businesses and people.',
    challenges: [
      { problem: 'Totals that match the money', solution: 'Orders are confirmed only after staff tick "Payment received", and held orders take no stock until they are paid. The day\'s totals only include money someone has checked.' },
      { problem: 'Keeping businesses apart and records honest', solution: 'Row Level Security keeps each business to its own data, and every change runs through a server-checked function. Sales, voids and stock changes are kept for good, with who made each one.' },
      { problem: 'Updating an app people install', solution: 'The service worker caches only the app shell. The app checks for a new version on start, when the tab regains focus, when the network returns and every 30 minutes, then offers a refresh; raising a minimum version forces old copies to update.' },
      { problem: 'A build tool blocked by Windows', solution: 'Windows Smart App Control blocked a freshly released copy of Tailwind\'s native scanner, which left pages unstyled. I pinned Tailwind to an exact version and documented the fix.' },
    ],
    outcomeHtml: `<p>Live at <a href="https://tallybox.pages.dev/">tallybox.pages.dev</a> (version 0.1.0), with the code public on GitHub. Businesses register with a single-use activation code.</p>`,
  },

  {
    slug: 'nellow',
    name: 'Nellow',
    category: 'AI agent: web answers with sources',
    accent: 'nellow',
    year: '2026',
    short: 'An AI agent that searches the live web, reads what it finds and answers with sources, on local models or a cloud model on Groq.',
    overview: 'An AI agent that searches the live web, reads what it finds and answers with sources. It runs on my own hardware or in the cloud, using a local Llama model for quick answers and a larger cloud model on Groq for harder reasoning.',
    tags: ['Python', 'FastAPI', 'Ollama', 'Llama', 'Groq'],
    facts: [
      ['Role', 'Designer and developer'],
      ['Runs on', 'My own machine, with an optional cloud model'],
      ['Status', 'Open source'],
      ['Stack', 'Python, FastAPI, Ollama, Groq'],
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Achimdi/nellow', github: true },
    ],
    video: { src: 'assets/videos/nellow.mp4', poster: 'assets/img/nellow-poster.webp', w: 1918, h: 896, caption: 'Demo: signing in, choosing a mode and asking what is trending in tech this week.', fallback: 'assets/img/nellow-landing.webp' },
    cardImage: { src: 'assets/img/nellow-answer.webp', w: 1200, h: 712, alt: 'Nellow answer about this week\'s tech news, ending with source links such as tomshardware.com and finance.yahoo.com.' },
    problemHtml: `<p>Language models answer from what they learned in training, so they cannot know this week's news, and they rarely show where an answer came from. Nellow searches the web first, reads the pages and answers with links to its sources.</p>`,
    objectives: [
      'Answer questions about recent events by searching the web and the news.',
      'Show the sources behind every answer.',
      'Run on my own hardware with local models, with a cloud option for harder questions.',
      'Keep each person\'s chats and projects.',
    ],
    roleHtml: `<p>I built the FastAPI back end (tools, model routing, streaming and storage) and the single-page web interface.</p>`,
    features: [
      { title: 'Three modes', text: 'Balanced runs Llama 3.2 3B locally. Thorough runs Qwen3 4B with step-by-step reasoning, or the cloud model when a key is set. Turbo uses gpt-oss-120b on Groq.' },
      { title: 'Search, news and reading tools', text: 'The model can search the web, search the news and read a page in full before it answers.' },
      { title: 'Answers with sources', text: 'The sources behind each answer are saved with it and shown as links.' },
      { title: 'Decides when to search', text: 'In the local modes, a small model first decides whether a message needs the web at all.' },
      { title: 'Questions about images', text: 'Attach an image and a local vision model (Gemma 3 4B) answers.' },
      { title: 'Accounts, chats and projects', text: 'Sign up or continue as a guest; conversations are kept per person and can be grouped into projects. Answers stream in as they are written.' },
    ],
    build: [
      ['Back end', 'Python and FastAPI. Answers stream to the browser as server-sent events. SQLite stores users, chats, messages with their sources, and projects.'],
      ['Models', 'Through Ollama: llama3.2:3b for routing and Balanced mode, qwen3:4b for Thorough, gemma3:4b for images. Through the Groq API: openai/gpt-oss-120b, falling back to gpt-oss-20b.'],
      ['Tools', 'web_search and news_search use the ddgs library; read_page uses trafilatura to pull the readable text out of a page. The model can call tools over several rounds, up to a fixed limit, before it must answer.'],
      ['Instructions', 'Today\'s date goes into every conversation. The model is told to check dates, ignore old articles for recent questions, state only what the sources say and say so when results are unclear or conflicting.'],
      ['Accounts', 'Passwords are hashed with scrypt and a random per-user salt, and checked with a constant-time comparison.'],
    ],
    stack: [
      { name: 'Python', slug: 'python' }, { name: 'FastAPI', slug: 'fastapi' }, { name: 'Ollama', slug: 'ollama' },
      { name: 'Llama 3.2' }, { name: 'Qwen3' }, { name: 'Gemma 3' }, { name: 'Groq API' }, { name: 'ddgs' },
      { name: 'trafilatura' }, { name: 'SQLite', slug: 'sqlite' }, { name: 'HTML, CSS, JavaScript', slug: 'html5' },
    ],
    walkthrough: [
      { src: 'assets/img/nellow-workspace.webp', w: 1200, h: 560, alt: 'Nellow workspace: chat history on the left, suggested prompts in the middle, and the mode menu open on Balanced, Thorough and Turbo (cloud).', caption: 'Pick a mode: Balanced, Thorough or Turbo.' },
      { src: 'assets/img/nellow-answer.webp', w: 1200, h: 712, alt: 'The end of an answer about this week\'s tech news, followed by source links.', caption: 'Each answer ends with its sources.' },
      { src: 'assets/img/nellow-landing.webp', w: 1200, h: 556, alt: 'Nellow landing page in a dark theme with a sign-in prompt.', caption: 'The landing page.', wide: true },
    ],
    challenges: [
      { problem: 'Not every message needs the web', solution: 'In the local modes, a small model first reads the recent messages and replies SEARCH or not, at temperature 0 with a four-token limit, so greetings and general questions are answered directly.' },
      { problem: 'Rate limits on the cloud model', solution: 'When Groq returns a rate-limit or request-size error, Nellow switches to the smaller gpt-oss-20b model, which has its own limit. If a tool call fails, it retries once without tools.' },
      { problem: 'Answers that stay with the sources', solution: 'The instructions tell the model to state only what the sources say and to flag conflicts, and the app stores and shows the links it used, so every claim can be checked.' },
    ],
    outcomeHtml: `<p>Open source on GitHub. It runs locally with Ollama; Turbo mode needs a Groq API key.</p>`,
  },

  {
    slug: 'twzee-foods',
    name: 'Twzee Foods',
    category: 'Food ordering website',
    accent: 'twzee',
    year: '2026',
    short: 'A mobile-first menu and WhatsApp ordering website for a Nigerian healthy-food business. Prices live in one file the owner can update.',
    overview: 'A mobile-first menu and WhatsApp ordering website for a Nigerian healthy-food business. Visitors pick sizes and extras and send a ready-written order on WhatsApp. Prices live in one file the owner can update.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cloudflare', 'GitHub'],
    facts: [
      ['Role', 'Designer and developer'],
      ['For', 'Twzee Foods, Enugu'],
      ['Status', 'Live'],
      ['Stack', 'HTML, CSS, JavaScript, Cloudflare'],
    ],
    links: [
      { label: 'Visit live site', url: 'https://twzee.foodss.workers.dev/' },
      { label: 'GitHub', url: 'https://github.com/Achimdi/twzee', github: true },
    ],
    video: { src: 'assets/videos/twzee.mp4', poster: 'assets/img/twzee-poster.webp', w: 1914, h: 894, caption: 'Demo: browsing the menu, choosing options and building an order.', fallback: 'assets/img/twzee-home.webp' },
    cardImage: { src: 'assets/img/twzee-home.webp', w: 1200, h: 640, alt: 'Twzee Foods home page: the headline Healthy tastes better here, Order now and Catering and trays buttons, and a banner offering free delivery within Enugu City on orders from ₦30,000.' },
    cardPhones: [
      { src: 'assets/img/twzee-menu.webp', w: 600, h: 1298, alt: 'Twzee Foods menu on a phone: the Shawarma and Bites category with Shawarma, Club Sandwich and Chicken and Chips.' },
      { src: 'assets/img/twzee-product.webp', w: 600, h: 1298, alt: 'Shawarma options on a phone: four combos with prices and optional extra chicken or beef.' },
      { src: 'assets/img/twzee-order.webp', w: 600, h: 1298, alt: 'Order summary on a phone: delivery or pickup, a free-delivery progress bar and a Send my order button.' },
    ],
    problemHtml: `<p>Customers should be able to see every item and price, build an order and send it in under a minute, and the owner should be able to change the menu and prices without a developer.</p>`,
    objectives: [
      'Show the full menu with photos, prices, sizes and extras on a phone.',
      'Turn a basket into a ready-written WhatsApp message.',
      'Let the owner change the menu and prices by editing one file.',
      'Load quickly on mobile data.',
    ],
    roleHtml: `<p>I designed and built the site: the layout and visual design, the menu and ordering flow, the photo pipeline and the hosting.</p>`,
    features: [
      { title: 'Menu by category', text: 'Photos, prices, sizes, combos and optional add-ons, with category chips to jump between sections.' },
      { title: 'Order basket', text: 'Delivery or pickup: a flat ₦1,500 delivery fee within Enugu City, free delivery on orders from ₦30,000, and a bar showing how close the order is.' },
      { title: 'Order on WhatsApp', text: '"Send my order" opens WhatsApp with the order written out. Nothing is sent until the customer presses send.' },
      { title: 'Live opening hours', text: 'An "Open now" or "Closed" badge for Monday to Saturday, 8am to 6pm, always in Nigerian time.' },
      { title: 'Catering and trays', text: 'Event packs and a custom food tray, with a quick way to ask for a quote.' },
    ],
    build: [
      ['Code', 'Plain HTML, CSS and JavaScript, with no framework and no build step.'],
      ['Menu data', 'One commented file, js/menu-data.js, holds every product: name, description, price or sizes (each size can have its own photo), extras, a required choice, "Ask us" items, and items hidden until they get a price.'],
      ['Photos', 'A Python script (Pillow) makes 400, 800 and 1200 px WebP copies of every photo, plus 5:4 card versions that show the whole picture on a soft blurred background, so posters with text are never cropped.'],
      ['Hosting', 'Cloudflare (static assets on Workers) with security headers, deployed from GitHub.'],
    ],
    stack: [
      { name: 'HTML', slug: 'html5' }, { name: 'CSS', slug: 'css3' }, { name: 'JavaScript', slug: 'javascript' },
      { name: 'Python (Pillow)', slug: 'python' }, { name: 'Cloudflare', slug: 'cloudflare' }, { name: 'Git', slug: 'git' }, { name: 'GitHub', slug: 'github' },
    ],
    walkthrough: [
      { src: 'assets/img/twzee-menu.webp', w: 600, h: 1298, phone: true, alt: 'Menu on a phone: Shawarma and Bites, from ₦1,500, with Shawarma, Club Sandwich and Chicken and Chips cards.', caption: 'Browse the menu by category.' },
      { src: 'assets/img/twzee-product.webp', w: 600, h: 1298, phone: true, alt: 'Shawarma options: four combos from ₦4,000 to ₦5,500, and extra chicken or beef for ₦500.', caption: 'Pick a combo and any extras.' },
      { src: 'assets/img/twzee-order.webp', w: 600, h: 1298, phone: true, alt: 'Order summary: delivery for ₦1,500 or pickup, a free-delivery progress bar, name and address fields, and Send my order.', caption: 'Send the order on WhatsApp.' },
      { src: 'assets/img/twzee-home.webp', w: 1200, h: 640, alt: 'Twzee Foods home page on a laptop: Healthy tastes better here, with Order now and Catering and trays buttons, and the free-delivery banner.', caption: 'The home page on a laptop.', wide: true },
    ],
    challenges: [
      { problem: 'Prices that change often', solution: 'Everything the owner might change, from products and prices to contact details, lives in one documented file, so an update is a small edit rather than a code change.' },
      { problem: 'Ordering without a payment system', solution: 'The basket becomes a ready-written WhatsApp message. The customer reviews it and presses send, and the business confirms the total and timing in the chat.' },
      { problem: 'Opening hours for visitors anywhere', solution: 'The open or closed badge is always worked out in Nigerian time (UTC+1), whatever the visitor\'s own time zone.' },
      { problem: 'Poster photos that crop badly', solution: 'The photo script places each picture whole on a blurred background in a 5:4 card, so text on a poster is never cut off.' },
    ],
    outcomeHtml: `<p>Live at <a href="https://twzee.foodss.workers.dev/">twzee.foodss.workers.dev</a> for Twzee Foods in Enugu, with the code public on GitHub.</p>`,
  },
];

// Order of projects on the home page and in "next project" links.
export const featuredOrder = ['tallybox', 'neuroscan-ai', 'nellow', 'twzee-foods'];
export const bySlug = Object.fromEntries(projects.map(p => [p.slug, p]));
