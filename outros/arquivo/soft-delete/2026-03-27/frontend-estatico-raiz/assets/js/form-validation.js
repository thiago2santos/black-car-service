/**
 * Formulário: ao falhar validação no envio, sobe o foco e a página até o primeiro campo inválido.
 */
(function () {
  "use strict";

  function init() {
    var form = document.querySelector("#contact form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
          firstInvalid.focus();
        }
        return;
      }
      var url = (form.dataset.submitUrl || "").trim();
      if (url) {
        form.action = url;
      } else {
        e.preventDefault();
        alert(
          "Configure a URL de envio: preencha data-submit-url no formulário com a URL da Web App do Google (veja scripts/google-sheets-webapp.gs)."
        );
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
