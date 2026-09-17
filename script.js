const root = document.documentElement;
const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const year = document.querySelector("[data-year]");

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

root.dataset.theme = initialTheme;
updateThemeLabel();

function updateThemeLabel() {
  const dark = root.dataset.theme === "dark";
  themeToggle?.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0f1217" : "#f4f5f7");
}

themeToggle?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  updateThemeLabel();
});

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  siteNav?.classList.toggle("is-open", !open);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    siteNav?.classList.remove("is-open");
  });
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", window.scrollY > 16),
  { passive: true },
);

const sections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-25% 0px -60% 0px", threshold: [0.01, 0.25, 0.5] },
);

sections.forEach((section) => sectionObserver.observe(section));

if (year) year.textContent = new Date().getFullYear();
