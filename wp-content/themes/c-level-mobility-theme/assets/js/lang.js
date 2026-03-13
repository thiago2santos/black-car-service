/**
 * i18n – troca de idioma (pt-BR / en / es) usando arquivos JSON em locales/.
 * Continua dependendo de elementos com data-i18n e botões com data-lang.
 */
(function () {
  "use strict";

  var currentLang = "pt";
  var translationsCache = {};

  function applyTranslations(dict) {
    var elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict && dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  function setDocumentLang(lang) {
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en" : "es";
  }

  function loadTranslations(lang) {
    if (translationsCache[lang]) {
      applyTranslations(translationsCache[lang]);
      setDocumentLang(lang);
      currentLang = lang;
      return;
    }

    var baseUrl = (typeof clmTheme !== 'undefined' && clmTheme.localesUrl) ? clmTheme.localesUrl : '';
    var path = baseUrl + lang + ".json";

    fetch(path, { cache: "no-cache" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Erro ao carregar traduções para " + lang);
        }
        return response.json();
      })
      .then(function (data) {
        translationsCache[lang] = data || {};
        applyTranslations(translationsCache[lang]);
        setDocumentLang(lang);
        currentLang = lang;
      })
      .catch(function () {
        if (lang !== "pt") {
          loadTranslations("pt");
        }
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadTranslations("pt");

    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        var lang = button.getAttribute("data-lang") || "pt";
        if (lang !== currentLang) {
          loadTranslations(lang);
        }
      });
    });
  });
})();

