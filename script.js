(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function currentTheme() {
    return root.getAttribute("data-theme") || "dark";
  }

  function setTheme(next) {
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    if (themeBtn) {
      themeBtn.querySelector(".icon").textContent = next === "light" ? "☀" : "☾";
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
    themeBtn.querySelector(".icon").textContent = currentTheme() === "light" ? "☀" : "☾";
  }

  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && revealItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }
})();
