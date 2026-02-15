// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const htmlElement = document.documentElement;

const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

const currentTheme = localStorage.getItem("theme") || "dark";
if (currentTheme === "light") {
  htmlElement.setAttribute("data-theme", "light");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "light") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  }
});

// Download CV functionality
document.getElementById("downloadCV").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./CV_Jaime-Almendras-Cruz.pdf";
  alert("¡CV descargado con exito!");
});

// Animación suave para los elementos al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".skill-category, .project-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

// Efecto parallax suave en el scroll
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector(".bg-grid");
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
});
