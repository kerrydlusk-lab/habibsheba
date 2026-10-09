/**
 * ====================================================================
 * MAIN JAVASCRIPT - MD. HABIBUR RAHMAN PORTFOLIO
 * Vanilla JS | Glassmorphism Interactive Features & Portfolio Renderer
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Portfolio Data & DOM Rendering
  initPortfolioRendering();

  // 2. Navigation & Sticky Navbar
  initNavigation();

  // 3. Typewriter Effect in Hero Section
  initTypewriter();

  // 4. Mouse Spotlight & Custom Cursor (Desktop Only)
  initMouseEffects();

  // 5. 3D Card Tilt Effects
  initCardTilt();

  // 6. Scroll Reveal Observer
  initScrollReveal();

  // 7. Portfolio Filtering System
  initPortfolioFilter();

  // 8. Contact Form & Action Handlers
  initContactForm();

  // 9. Back To Top Button
  initBackToTop();

  // 10. Local Admin / Content Customizer Drawer
  initLocalEditor();
});

/* --------------------------------------------------------------------------
   1. PORTFOLIO DATA RENDERING
   -------------------------------------------------------------------------- */
function initPortfolioRendering() {
  if (typeof window.portfolioData === "undefined") {
    console.warn("portfolioData is not loaded. Ensure assets/js/portfolio-data.js is included before main.js.");
    return;
  }

  const data = window.portfolioData;

  // Render Copyright Year dynamically
  const copyrightYearEl = document.getElementById("copyright-year");
  if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear();
  }

  // Render Services Cards
  const servicesContainer = document.getElementById("services-grid");
  if (servicesContainer && data.services) {
    servicesContainer.innerHTML = data.services
      .map(
        (service, idx) => `
      <div class="col-lg-4 col-md-6 reveal-on-scroll reveal-delay-${(idx % 3) + 1}">
        <div class="glass-card service-card tilt-card" data-tilt-max="10">
          <div class="service-icon-box">
            <i class="bi ${service.icon}"></i>
          </div>
          <h4>${escapeHtml(service.title)}</h4>
          <p>${escapeHtml(service.summary)}</p>
          <ul class="service-features-list">
            ${service.features
              .map(
                (feat) => `
              <li><i class="bi bi-check2-circle"></i> ${escapeHtml(feat)}</li>
            `
              )
              .join("")}
          </ul>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Render Skills
  renderSkillsSection(data.skills);

  // Render Projects Cards
  renderProjectsGrid(data.projects);

  // Render Process Steps
  const processContainer = document.getElementById("process-grid");
  if (processContainer && data.process) {
    processContainer.innerHTML = data.process
      .map(
        (step, idx) => `
      <div class="col-lg-4 col-md-6 col-12 reveal-on-scroll reveal-delay-${(idx % 3) + 1}">
        <div class="glass-card process-step-card tilt-card" data-tilt-max="8">
          <span class="step-num-badge">${step.step}</span>
          <div class="step-icon-box">
            <i class="bi ${step.icon}"></i>
          </div>
          <h4>${escapeHtml(step.title)}</h4>
          <p>${escapeHtml(step.description)}</p>
        </div>
      </div>
    `
      )
      .join("");
  }
}

/* Helper to render Skills categorized */
function renderSkillsSection(skills) {
  const container = document.getElementById("skills-grid");
  if (!container || !skills) return;

  container.innerHTML = skills
    .map(
      (skill, idx) => `
    <div class="col-lg-6 col-12 reveal-on-scroll reveal-delay-${(idx % 2) + 1}">
      <div class="skill-card-item">
        <div class="skill-header">
          <div class="skill-name-group">
            <i class="bi ${skill.icon || "bi-code-slash"}"></i>
            <span>${escapeHtml(skill.name)}</span>
          </div>
          <span class="skill-pct">${escapeHtml(skill.level)}</span>
        </div>
        <div class="skill-progress-bar-bg">
          <div class="skill-progress-bar-fill" data-progress="${escapeHtml(skill.level)}"></div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Animate skill bars when in view
  const skillObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll(".skill-progress-bar-fill");
          fills.forEach((fill) => {
            const targetWidth = fill.getAttribute("data-progress") || "80%";
            fill.style.width = targetWidth;
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  skillObserver.observe(container);
}

/* Helper to render Project Cards */
function renderProjectsGrid(projects, filterCategory = "all") {
  const container = document.getElementById("projects-grid");
  if (!container || !projects) return;

  const filtered = filterCategory === "all" ? projects : projects.filter((p) => p.category === filterCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted">No projects found for this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map(
      (project, idx) => `
    <div class="col-lg-4 col-md-6 col-12 project-item-col reveal-on-scroll reveal-delay-${(idx % 3) + 1}" data-category="${escapeHtml(
        project.category
      )}">
      <div class="glass-card project-card tilt-card" data-tilt-max="10">
        <div class="project-img-box">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy">
          ${project.isDemo ? `<span class="project-badge-demo">Demo Showcase</span>` : ""}
          <span class="project-category-pill">${escapeHtml(project.categoryLabel || project.category)}</span>
        </div>
        <div class="project-content">
          <h4>${escapeHtml(project.title)}</h4>
          <p>${escapeHtml(project.summary)}</p>
          <div class="project-tags-list">
            ${project.tags.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join("")}
          </div>
          <div class="project-actions">
            <a href="${escapeHtml(project.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn-primary-glow btn-project-link">
              <i class="bi bi-box-arrow-up-right"></i> Live Demo
            </a>
            <a href="${escapeHtml(project.codeUrl)}" target="_blank" rel="noopener noreferrer" class="btn-glass btn-project-link">
              <i class="bi bi-github"></i> Source
            </a>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Re-observe newly inserted cards for scroll animation
  const newCards = container.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1 }
  );
  newCards.forEach((c) => observer.observe(c));

  // Re-init tilt on new project cards
  initCardTilt();
}

/* --------------------------------------------------------------------------
   2. NAVIGATION & STICKY NAVBAR
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.getElementById("main-navbar");
  const navLinks = document.querySelectorAll(".nav-links-desktop a, .mobile-nav-links a");
  const sections = document.querySelectorAll("section[id]");

  // Scroll listener for sticky background and active spy
  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.pageYOffset;

      if (navbar) {
        if (scrollY > 40) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }

      // Active Section Spy
      let currentSectionId = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute("id");
        }
      });

      if (currentSectionId) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
          }
        });
      }
    },
    { passive: true }
  );

  // Mobile Drawer Toggle
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-menu-close");
  const drawer = document.getElementById("mobile-nav-drawer");
  const overlay = document.getElementById("mobile-nav-overlay");

  function openMobileNav() {
    if (drawer) drawer.classList.add("open");
    if (overlay) overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    if (drawer) drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openMobileNav);
  if (closeBtn) closeBtn.addEventListener("click", closeMobileNav);
  if (overlay) overlay.addEventListener("click", closeMobileNav);

  // Close mobile drawer on link click
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}

/* --------------------------------------------------------------------------
   3. TYPEWRITER EFFECT
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const textElement = document.getElementById("typewriter-text");
  if (!textElement) return;

  const titles = (window.portfolioData && window.portfolioData.personalInfo.heroRotatingTitles) || [
    "Modern Websites",
    "WordPress Development",
    "E-commerce Solutions",
    "Creative Web Experiences"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      textElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      textElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 1800; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   4. MOUSE SPOTLIGHT & CUSTOM CURSOR
   -------------------------------------------------------------------------- */
function initMouseEffects() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (prefersReduced || isTouch) return;

  const dot = document.querySelector(".custom-cursor-dot");
  const ring = document.querySelector(".custom-cursor-ring");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update CSS spotlight variables
      document.documentElement.style.setProperty("--mouse-x", `${mouseX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${mouseY}px`);

      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    },
    { passive: true }
  );

  // Smooth lerp follow for custom cursor ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (ring) {
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
    }

    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover triggers for interactive elements
  const hoverTargets = "a, button, input, textarea, select, .project-card, .service-card, .filter-btn";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove("cursor-hover");
    }
  });
}

/* --------------------------------------------------------------------------
   5. 3D CARD TILT EFFECT
   -------------------------------------------------------------------------- */
function initCardTilt() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (prefersReduced || isTouch) return;

  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach((card) => {
    // Avoid double attaching
    if (card.dataset.tiltInitialized) return;
    card.dataset.tiltInitialized = "true";

    const maxTilt = parseFloat(card.dataset.tiltMax) || 10;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

/* --------------------------------------------------------------------------
   6. SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   7. PORTFOLIO FILTER SYSTEM
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter") || "all";
      if (window.portfolioData && window.portfolioData.projects) {
        renderProjectsGrid(window.portfolioData.projects, category);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM & SUBMISSION HANDLERS
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const feedbackMsg = document.getElementById("form-feedback");
  const whatsappDirectBtn = document.getElementById("form-whatsapp-btn");

  if (!form) return;

  // Handle Form Submission (Generates pre-filled mailto directly in static mode)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("contact-name")?.value || "").trim();
    const email = (document.getElementById("contact-email")?.value || "").trim();
    const projectType = document.getElementById("contact-project-type")?.value || "Website Project";
    const budget = document.getElementById("contact-budget")?.value || "Flexible";
    const message = (document.getElementById("contact-message")?.value || "").trim();

    if (!name || !email || !message) {
      showFeedback("Please complete all required fields (Name, Email, and Message).", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback("Please enter a valid email address.", "error");
      return;
    }

    const recipient = window.portfolioData?.personalInfo.emailAddress || "webhubservice44@gmail.com";
    const subject = encodeURIComponent(`New Project Inquiry from ${name} [${projectType}]`);
    const bodyContent = encodeURIComponent(
      `Hi Habibur Rahman,\n\nI would like to discuss a project with you.\n\n` +
        `Client Name: ${name}\n` +
        `Client Email: ${email}\n` +
        `Project Type: ${projectType}\n` +
        `Budget Range: ${budget}\n\n` +
        `Project Details:\n${message}\n\n` +
        `Looking forward to hearing from you!`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${bodyContent}`;

    showFeedback(
      "Preparing your email client... If your email app does not launch automatically, click the WhatsApp button for instant direct chat!",
      "success"
    );

    // Launch email client
    window.location.href = mailtoLink;
  });

  // Handle WhatsApp Button Click with Pre-filled Text
  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener("click", () => {
      const name = (document.getElementById("contact-name")?.value || "").trim();
      const projectType = document.getElementById("contact-project-type")?.value || "Website Project";
      const message = (document.getElementById("contact-message")?.value || "").trim();

      const phone = window.portfolioData?.personalInfo.whatsappClean || "8801954150038";

      let text = `Hello Habibur! I visited your portfolio and would like to discuss a ${projectType}.`;
      if (name) {
        text += ` My name is ${name}.`;
      }
      if (message) {
        text += ` Brief message: ${message}`;
      }

      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }

  function showFeedback(text, type) {
    if (!feedbackMsg) return;
    feedbackMsg.textContent = text;
    feedbackMsg.className = `form-feedback-msg ${type}`;
  }
}

/* --------------------------------------------------------------------------
   9. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 450) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* --------------------------------------------------------------------------
   10. LOCAL CONTENT EDITOR (PREVIEW ONLY)
   -------------------------------------------------------------------------- */
function initLocalEditor() {
  const gearBtn = document.getElementById("admin-gear-btn");
  const drawer = document.getElementById("editor-drawer");
  const closeBtn = document.getElementById("editor-close-btn");
  const exportBtn = document.getElementById("editor-export-btn");
  const applyBtn = document.getElementById("editor-apply-btn");
  const copyBtn = document.getElementById("editor-copy-btn");

  if (!gearBtn || !drawer) return;

  // Toggle drawer with password protection
  let isUnlocked = false;

  gearBtn.addEventListener("click", () => {
    if (!isUnlocked) {
      const pass = prompt("Enter local preview editor PIN (Default: habib2026):");
      if (pass === "habib2026" || pass === "admin") {
        isUnlocked = true;
        populateEditorInputs();
        drawer.classList.add("open");
      } else if (pass !== null) {
        alert("Incorrect PIN. Default is 'habib2026'.");
      }
    } else {
      drawer.classList.add("open");
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => drawer.classList.remove("open"));
  }

  function populateEditorInputs() {
    if (!window.portfolioData) return;
    const p = window.portfolioData.personalInfo;

    setValue("edit-fullname", p.fullName);
    setValue("edit-title", p.professionalTitle);
    setValue("edit-email", p.emailAddress);
    setValue("edit-whatsapp", p.whatsappNumber);
    setValue("edit-website", p.websiteUrl);
    setValue("edit-bio", p.bioSummary);
  }

  function setValue(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  }

  function getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  // Apply preview edits live
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      if (!window.portfolioData) return;
      const p = window.portfolioData.personalInfo;

      p.fullName = getValue("edit-fullname") || p.fullName;
      p.professionalTitle = getValue("edit-title") || p.professionalTitle;
      p.emailAddress = getValue("edit-email") || p.emailAddress;
      p.whatsappNumber = getValue("edit-whatsapp") || p.whatsappNumber;
      p.websiteUrl = getValue("edit-website") || p.websiteUrl;
      p.bioSummary = getValue("edit-bio") || p.bioSummary;

      // Update visible elements
      const nameHero = document.getElementById("hero-name-display");
      if (nameHero) nameHero.textContent = p.fullName;

      const titleHero = document.getElementById("hero-title-display");
      if (titleHero) titleHero.textContent = p.professionalTitle;

      const bioHero = document.getElementById("hero-bio-display");
      if (bioHero) bioHero.textContent = p.bioSummary;

      alert("Changes applied in live preview! Click 'Export Config' to download updated JS code.");
    });
  }

  // Export JSON or JS file
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const jsonContent =
        "// Updated Portfolio Configuration\nconst portfolioData = " +
        JSON.stringify(window.portfolioData, null, 2) +
        ";\n\nif (typeof window !== 'undefined') {\n  window.portfolioData = portfolioData;\n}\n";

      const blob = new Blob([jsonContent], { type: "application/javascript" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "portfolio-data.js";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // Copy code to clipboard
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const jsonContent =
        "// Updated Portfolio Configuration\nconst portfolioData = " +
        JSON.stringify(window.portfolioData, null, 2) +
        ";\n\nif (typeof window !== 'undefined') {\n  window.portfolioData = portfolioData;\n}\n";

      navigator.clipboard
        .writeText(jsonContent)
        .then(() => alert("Configuration code copied to clipboard! Paste into assets/js/portfolio-data.js."))
        .catch(() => alert("Could not access clipboard. Please use 'Export Config' instead."));
    });
  }
}

/* Utility to escape HTML strings */
function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
