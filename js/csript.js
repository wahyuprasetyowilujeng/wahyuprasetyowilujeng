// Menu mobile
const nav = document.querySelector("#nav");
const burger = document.querySelector("#hamburger-menu");

const setMenu = (open) => {
  nav.classList.toggle("active", open);
  burger.setAttribute("aria-expanded", String(open));
};

burger.addEventListener("click", () => setMenu(!nav.classList.contains("active")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !nav.contains(e.target)) setMenu(false);
});

// Animasi muncul saat scroll
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 });
  items.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 80}ms`; io.observe(el); });
} else {
  items.forEach((el) => el.classList.add("visible"));
}
