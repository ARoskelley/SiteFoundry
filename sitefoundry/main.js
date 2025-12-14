/* =========================
   THEME TOGGLE
========================= */

function initThemeToggle() {
  const toggleButton = document.getElementById("themeToggle");

  if (!toggleButton) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleButton.textContent = "☀️";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleButton.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.textContent = "🌙";
    }
  });
}

/* =========================
   SERVICES (ARRAY + OBJECTS)
========================= */

function loadServices() {
  const servicesSection = document.getElementById("services");
  if (!servicesSection) return;

  const services = [
    {
      title: "Custom Websites",
      description:
        "Hand-crafted websites designed specifically for your brand, goals, and audience."
    },
    {
      title: "Responsive Design",
      description:
        "Layouts that look great and function smoothly on phones, tablets, and desktops."
    },
    {
      title: "Performance Focused",
      description:
        "Fast load times, clean code, and modern best practices for excellent Lighthouse scores."
    }
  ];

  const grid = servicesSection.querySelector(".service-grid");
  grid.innerHTML = "";

  services.forEach(service => {
    const card = document.createElement("article");
    card.className = "service-card";

    card.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;

    grid.appendChild(card);
  });
}

/* =========================
   CONTACT FORM HANDLING
========================= */

function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", () => {});
}

/* =========================
   INIT
========================= */

initThemeToggle();
loadServices();
initContactForm();
