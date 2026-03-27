/**
 * Formulário: validação do campo Telefone/WhatsApp.
 * Permite apenas números, espaços, +, - e parênteses; remove letras em tempo real.
 */
(function () {
  "use strict";

  function init() {
    var phone = document.getElementById("phone");
    if (!phone) return;

    function filterPhone() {
      var v = phone.value.replace(/[^\d\s\-\+\(\)]/g, "");
      if (v !== phone.value) phone.value = v;
    }

    phone.addEventListener("input", filterPhone);
    phone.addEventListener("paste", function () {
      setTimeout(filterPhone, 0);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
