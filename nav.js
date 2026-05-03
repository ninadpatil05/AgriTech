/**
 * Shared navigation for AgriTech — Smart Crop Detective
 * @param {string} activePage - dashboard | detect | library | weather | reports | about | contact | index
 */
export function renderNav(activePage) {
  const root = document.getElementById("nav-root");
  if (!root) return;

  const brand = "AgriTech — Smart Crop Detective";
  const items = [
    { id: "dashboard", href: "dashboard.html", label: "Home" },
    { id: "detect", href: "detect.html", label: "Detect Crop" },
    { id: "library", href: "library.html", label: "Disease Library" },
    { id: "weather", href: "weather.html", label: "Weather" },
    { id: "reports", href: "reports.html", label: "Reports" },
    { id: "about", href: "about.html", label: "About" },
    { id: "contact", href: "contact.html", label: "Contact Us" },
  ];

  const menuHtml = items
    .map(
      ({ id, href, label }) =>
        `<a href="${href}" class="nav-link${id === activePage ? " active" : ""}">${label}</a>`
    )
    .join("");

  root.innerHTML = `
    <a href="dashboard.html" class="brand" title="${brand}"><span>🌱</span><span class="brand-text">${brand}</span></a>
    <div class="menu">${menuHtml}</div>
  `;
}
