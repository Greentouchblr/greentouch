const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target) }
  })
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const form = document.getElementById("form");
const toast = document.getElementById("toast");
form.addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(form);
  const msg = `Hi Green Touch! I'd like to book an appointment.%0A%0AName: ${d.get("name")}%0APhone: ${d.get("phone")}%0AService: ${d.get("service")}%0ADate: ${d.get("date") || "Not specified"}%0ATime: ${d.get("time") || "Not specified"}%0ADetails: ${d.get("message") || "Not specified"}`;
  navigator.clipboard?.writeText(decodeURIComponent(msg)).catch(() => { });
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
  window.open("https://www.instagram.com/greentouch_blr/", "_blank", "noopener");
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const el = document.querySelector(a.getAttribute("href"));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }) }
  })
});
