# 🚀 Md. Habibur Rahman - Web Design & Development Portfolio

A premium, modern, glassmorphic portfolio website engineered for **Md. Habibur Rahman** (Web Designer & Full Stack Web Developer). Built with clean semantic **HTML5**, **CSS3 (Glassmorphism & Electric Blue/Cyan Theme)**, and **Vanilla JavaScript**, optimized for direct deployment to **GitHub Pages** without requiring any backend or build steps.

---

## 🌟 Features Overview

- **Aesthetic:** Dark Navy (`#07111F`) background with frosted glass cards, electric blue (`#168BFF`) and cyan (`#50E6FF`) accents, subtle borders, and smooth backdrop blurs.
- **Hero Section:** Features your authentic photograph framed in a glassmorphic card with glowing animated rings, floating tech badges, typewriter animations, and instant CTA buttons.
- **Interactive FX:** Cursor spotlight ambient lighting, 3D card tilt effects on hover, fluid scroll reveals, and custom accessible cursor follower.
- **Dynamic Content Engine:** All services, skills, portfolio projects, and personal data are loaded and completely editable in `assets/js/portfolio-data.js`.
- **Demo Portfolio:** Showcases 6 demonstration projects with category filters (E-commerce, Business Websites, Landing Pages, Web Development), tech tags, live demo links, and source code links.
- **Functional Contact Links:** Form validation with direct email mailto client trigger and instant pre-filled WhatsApp link (`+8801954150038`).
- **Local Content Customizer:** Built-in settings drawer (PIN: `habib2026`) that allows browser-based live preview editing and one-click JSON/JS export.
- **100% Mobile Responsive:** Fluid layouts from 320px mobile screens to large desktop monitors.
- **Zero Server Overhead:** 100% static, fast-loading, SEO-ready with Open Graph tags, `sitemap.xml`, and `robots.txt`.

---

## 📁 Repository Structure

```text
habibur-portfolio/
├── index.html                  # Main website landing page (Must be in root)
├── assets/
│   ├── css/
│   │   └── style.css           # Glassmorphism design system & responsive styling
│   ├── js/
│   │   ├── main.js             # Interactions, animations, and render logic
│   │   └── portfolio-data.js   # Single file to edit projects, bio, skills & services
│   └── images/
│       ├── habibur-rahman.png  # Your profile photograph
│       ├── about.jpg           # About section image
│       ├── project1.jpg        # Demo project thumbnail (E-commerce)
│       ├── project2.jpg        # Demo project thumbnail (Startup)
│       ├── project3.jpg        # Demo project thumbnail (Hotel)
│       ├── project4.jpg        # Demo project thumbnail (Consulting)
│       ├── project5.jpg        # Demo project thumbnail (Digital App)
│       └── project6.jpg        # Demo project thumbnail (Travel)
├── favicon.svg                 # Electric blue & cyan vector favicon
├── robots.txt                  # Search engine crawler instructions
├── sitemap.xml                 # Search engine XML sitemap
└── README.md                   # Deployment and editing guide
```

> **Important Note:** All asset links use relative paths (e.g. `assets/css/style.css`, not `/assets/css/style.css`), ensuring the website displays seamlessly whether hosted on a custom domain or a GitHub Pages subfolder.

---

## 🌐 Step-by-Step GitHub Pages Deployment Guide

Deploying this portfolio to GitHub Pages is 100% free, fast, and requires no command-line knowledge if you prefer using the GitHub web interface.

### Step 1: Create a GitHub Account
1. Visit [https://github.com/](https://github.com/).
2. If you don't have an account, click **Sign up** and follow the instructions to create your free account.
3. If you already have an account, click **Sign in**.

### Step 2: Create a New Public Repository
1. In the top-right corner of GitHub, click the `+` icon and choose **New repository**.
2. Set the **Repository name** to:
   ```
   habibur-portfolio
   ```
3. Set the visibility to **Public** (GitHub Pages requires public repositories on free accounts).
4. Leave *Add a README file* unchecked (since we already have a complete `README.md`).
5. Click **Create repository**.

### Step 3: Upload All Project Files
1. On the new repository page, click the link that says **uploading an existing file** (or click **Add file** → **Upload files**).
2. Drag and drop all the files and folders from this folder:
   - `index.html`
   - `assets/` (with `css`, `js`, and `images` inside)
   - `favicon.svg`
   - `robots.txt`
   - `sitemap.xml`
   - `README.md`
3. Verify that `index.html` is located directly in the root directory (not inside a subfolder).
4. In the commit message box, type: `Initial commit: Habibur Rahman portfolio`.
5. Click the green **Commit changes** button.

### Step 4: Configure GitHub Pages
1. Go to the repository's **Settings** tab (the gear icon near the top right).
2. In the left navigation sidebar under the **Code and automation** section, click **Pages**.
3. Under the **Build and deployment** heading:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master` if that was your default branch).
   - **Folder**: Ensure `/ (root)` is selected.
4. Click **Save**.

### Step 5: Wait for Deployment and View Your Live Site
1. GitHub will take 1 to 2 minutes to publish the static site.
2. Refresh the **Pages** page. You will see a banner at the top saying:
   > *"Your site is live at https://YOUR-USERNAME.github.io/habibur-portfolio/"*
3. The expected URL structure is:
   ```
   https://YOUR-USERNAME.github.io/habibur-portfolio/
   ```
   *(Replace `YOUR-USERNAME` with your actual GitHub username).*
4. Click **Visit site** to view your live, published portfolio!

---

## ✏️ How to Customize and Update Website Content

You do **not** need to touch complex HTML to update your projects, skills, or contact info. Everything is controlled from:

```
assets/js/portfolio-data.js
```

### 1. Updating Projects
Open `assets/js/portfolio-data.js` and locate the `projects: [...]` array. Each project item looks like this:

```javascript
{
  id: "shop-ui",
  title: "Your Project Title",
  category: "ecommerce",          // Options: "ecommerce", "business", "landing", "webdev"
  categoryLabel: "E-commerce",
  image: "assets/images/project1.jpg",
  isDemo: true,                   // Change to false if it's a real completed client project
  summary: "Brief 1-2 sentence overview of what the project does.",
  tags: ["HTML5", "CSS3", "JavaScript"],
  demoUrl: "https://your-live-demo-link.com",
  codeUrl: "https://github.com/your-username/project-repo",
  featured: true
}
```

### 2. Updating Contact and Personal Information
In `assets/js/portfolio-data.js`, update the `personalInfo` object:
- `fullName`: Your name
- `professionalTitle`: Your title
- `whatsappNumber`: Formatted WhatsApp number (e.g. `+8801954150038`)
- `whatsappClean`: Digits only for wa.me URL (e.g. `8801954150038`)
- `emailAddress`: Your email
- `websiteUrl`: Your domain link

### 3. Replacing Profile or Project Images
- Profile photograph: Replace `assets/images/habibur-rahman.png` with any new high-resolution photo. Keep the same filename to update automatically, or update the filename path in `portfolio-data.js` and `index.html`.
- Project screenshots: Place your images inside `assets/images/` and update the `image` property in `portfolio-data.js`.

### 4. Updating GitHub Repository After Making Edits
Whenever you edit any file locally:
1. Go to your repository on GitHub.
2. Click on the file you modified (e.g. `assets/js/portfolio-data.js`), click the pencil icon (Edit), paste your changes, and commit.
3. OR use Git from your computer:
   ```bash
   git add .
   git commit -m "Update portfolio projects and contact details"
   git push origin main
   ```
4. GitHub Pages will automatically redeploy the new version within 60 seconds!

---

## 🛠 Local Development & Testing

Since this is a 100% static website, you can run and test it locally using any standard method:

1. **Directly in Browser:** Double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.
2. **VS Code Live Server:** Right-click `index.html` and click **Open with Live Server**.
3. **Local HTTP Server (Python):**
   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.
4. **Local HTTP Server (Node.js):**
   ```bash
   npx serve .
   ```

---

## 📄 License & Credits

- Designed & Developed for **Md. Habibur Rahman**.
- Built with standard open-source web technologies: HTML5, CSS3, Vanilla JavaScript, Bootstrap 5, and Bootstrap Icons.
