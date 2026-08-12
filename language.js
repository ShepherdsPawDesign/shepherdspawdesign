(function () {
  const savedLanguage = localStorage.getItem("site-language");
  const isEnglishPage = window.location.pathname.includes("/en/");
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".language-switch a").forEach(function (link) {
    link.addEventListener("click", function () {
      localStorage.setItem(
        "site-language",
        link.textContent.trim() === "English" ? "en" : "ja"
      );
    });
  });

  if (savedLanguage) {
    return;
  }

  const browserLanguage = (navigator.language || "").toLowerCase();
  const preferredLanguage = browserLanguage.startsWith("ja") ? "ja" : "en";
  const shouldBeEnglish = preferredLanguage === "en";

  if (shouldBeEnglish && !isEnglishPage) {
    window.location.replace("en/" + currentFile);
  } else if (!shouldBeEnglish && isEnglishPage) {
    window.location.replace("../" + currentFile);
  }
})();
