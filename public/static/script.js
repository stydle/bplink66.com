(function(){const isDark=window.matchMedia("(prefers-color-scheme: dark)").matches;const colorMode=localStorage.getItem("data-color-mode");const theme=("string"==typeof colorMode?("light"===colorMode?colorMode:"dark"):(isDark?"dark":"light"));const root=document.documentElement;root.setAttribute("data-theme",theme);root.style.setProperty("--color-scheme",theme)})();