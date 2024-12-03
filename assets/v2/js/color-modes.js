(() => {
  "use strict";

  // Force the theme to be light
  const forceLightTheme = () => {
    document.documentElement.setAttribute("data-bs-theme", "light");

    // Remove or disable any elements related to theme switching
    const themeSwitcher = document.querySelector("#bd-theme");
    if (themeSwitcher) {
      themeSwitcher.style.display = "none"; // Hide the theme switcher
    }
  };

  window.addEventListener("DOMContentLoaded", forceLightTheme);

  // Optional: Override any theme change event listeners
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .removeEventListener("change", forceLightTheme);
})();
