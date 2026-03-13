/**
 * Banner discreto de feedback quando ?sent=1 na URL.
 * Mostra a mensagem de sucesso e depois permite fechar.
 */
(function () {
  "use strict";

  function init() {
    var banner = document.getElementById("sent-banner");
    if (!banner) return;

    var params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      banner.classList.remove("hidden");

      // Limpa o parâmetro da URL para não reaparecer em navegações futuras.
      if (window.history && window.history.replaceState) {
        try {
          var url = new URL(window.location.href);
          url.searchParams.delete("sent");
          window.history.replaceState({}, "", url.toString());
        } catch (e) {
          // ignora se URL API não estiver disponível
        }
      }
    }

    var closeBtn = banner.querySelector("[data-dismiss='sent-banner']");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        banner.classList.add("hidden");
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

