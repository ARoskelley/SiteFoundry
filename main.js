/* =========================
   SMOOTH SCROLL FOR ANCHOR LINKS
========================= */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      
      // Don't prevent default for empty hash
      if (href === "#") return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
}

/* =========================
   INTERSECTION OBSERVER FOR ANIMATIONS
========================= */

function initScrollAnimations() {
  // Only run if browser supports IntersectionObserver
  if (!("IntersectionObserver" in window)) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements that should animate in
  const animatedElements = document.querySelectorAll(
    ".track, .template-card, .step, .pricing-card, .addon-card, .approach-item"
  );

  animatedElements.forEach(el => {
    // Set initial state for elements not already animated via CSS
    if (!el.style.animation) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    }
    observer.observe(el);
  });
}

/* =========================
   FORM HANDLING
========================= */

function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  // Pre-populate service field from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get("service");
  
  if (serviceParam) {
    const serviceSelect = form.querySelector("#service");
    if (serviceSelect) {
      serviceSelect.value = serviceParam;
    }
  }

  // Add submit handler
  form.addEventListener("submit", function(e) {
    // Let Formspree handle the actual submission
    // Just add visual feedback
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
    }
  });
}

/* =========================
   HERO PARALLAX EFFECT
========================= */

function initHeroParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Only on larger screens
  if (window.innerWidth < 768) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    
    // Only apply effect while hero is visible
    if (scrolled < heroHeight) {
      const parallaxSpeed = 0.5;
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      
      // Fade out hero content as we scroll
      const heroContent = hero.querySelector(".hero-content");
      if (heroContent) {
        const opacity = 1 - (scrolled / heroHeight);
        heroContent.style.opacity = Math.max(0, opacity);
      }
    }
  });
}

/* =========================
   FAQ ACCORDION ENHANCEMENT
========================= */

function initFAQEnhancements() {
  const faqItems = document.querySelectorAll(".faq-item");
  
  faqItems.forEach(item => {
    const summary = item.querySelector("summary");
    
    summary.addEventListener("click", (e) => {
      // Close other open items (optional - remove for allow multiple open)
      if (!item.hasAttribute("open")) {
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.hasAttribute("open")) {
            otherItem.removeAttribute("open");
          }
        });
      }
    });
  });
}

/* =========================
   PRICING CARD HOVER EFFECTS
========================= */

function initPricingCardEffects() {
  const pricingCards = document.querySelectorAll(".pricing-card");
  
  pricingCards.forEach(card => {
    card.addEventListener("mouseenter", function() {
      // Subtle tilt effect on hover
      this.style.transform = "translateY(-5px) scale(1.02)";
    });
    
    card.addEventListener("mouseleave", function() {
      this.style.transform = "";
    });
  });
}

/* =========================
   NAVIGATION SCROLL BEHAVIOR
========================= */

function initNavScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScroll = 0;
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 10) {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "none";
    }
    
    lastScroll = currentScroll;
  });
}

/* =========================
   TEMPLATE MOCKUP ANIMATIONS
========================= */

function initTemplateMockups() {
  const mockups = document.querySelectorAll(".template-mockup");
  
  mockups.forEach(mockup => {
    const card = mockup.closest(".template-card");
    
    card.addEventListener("mouseenter", () => {
      mockup.style.transform = "scale(1.05) translateY(-5px)";
      mockup.style.transition = "transform 0.3s ease";
    });
    
    card.addEventListener("mouseleave", () => {
      mockup.style.transform = "";
    });
  });
}

/* =========================
   FORM VALIDATION HELPERS
========================= */

function initFormValidation() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const inputs = form.querySelectorAll("input[required], textarea[required], select[required]");
  
  inputs.forEach(input => {
    input.addEventListener("blur", function() {
      validateField(this);
    });
    
    input.addEventListener("input", function() {
      // Remove error state on input
      if (this.classList.contains("error")) {
        this.classList.remove("error");
      }
    });
  });
  
  form.addEventListener("submit", function(e) {
    let isValid = true;
    
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    if (!isValid) {
      e.preventDefault();
      // Scroll to first error
      const firstError = form.querySelector(".error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });
}

function validateField(field) {
  const value = field.value.trim();
  
  if (!value && field.hasAttribute("required")) {
    field.classList.add("error");
    return false;
  }
  
  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      field.classList.add("error");
      return false;
    }
  }
  
  field.classList.remove("error");
  return true;
}

/* =========================
   LOADING STATE MANAGEMENT
========================= */

function showLoadingState(element, text = "Loading...") {
  element.dataset.originalText = element.textContent;
  element.textContent = text;
  element.disabled = true;
  element.style.opacity = "0.7";
}

function hideLoadingState(element) {
  element.textContent = element.dataset.originalText || "Submit";
  element.disabled = false;
  element.style.opacity = "1";
}

/* =========================
   SERVICE TRACK INTERACTIONS
========================= */

function initServiceTrackInteractions() {
  const tracks = document.querySelectorAll(".track");
  
  tracks.forEach(track => {
    track.addEventListener("click", function(e) {
      // Don't trigger if clicking on a button
      if (e.target.classList.contains("btn")) return;
      
      // Find and click the button inside
      const button = this.querySelector(".btn-track");
      if (button) {
        button.click();
      }
    });
  });
}

/* =========================
   INITIALIZE ALL
========================= */

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initScrollAnimations();
  initContactForm();
  initHeroParallax();
  initFAQEnhancements();
  initPricingCardEffects();
  initNavScroll();
  initTemplateMockups();
  initFormValidation();
  initServiceTrackInteractions();
  
  console.log("✓ SiteFoundry initialized");
});

/* =========================
   PERFORMANCE OPTIMIZATION
========================= */

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add error style to CSS dynamically
const style = document.createElement("style");
style.textContent = `
  .error {
    border-color: var(--forge-fire) !important;
    animation: shake 0.3s ease-in-out;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);