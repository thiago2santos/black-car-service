/**
 * Formulário: autocomplete dos campos Origem e Destino com Nominatim (OpenStreetMap).
 * Exibe sugestões de endereços/locais (Brasil) em um dropdown para cada campo.
 */
(function () {
  "use strict";

  var debounceMs = 400;
  var minLength = 2;
  var lastRequest = 0;

  function initAutocomplete(input, list) {
    var debounceTimer = null;
    var selectedIndex = -1;

    function hideSuggestions() {
      list.innerHTML = "";
      list.hidden = true;
      input.setAttribute("aria-expanded", "false");
      selectedIndex = -1;
    }

    function highlightOption(index) {
      var opts = list.querySelectorAll("[role=option]");
      opts.forEach(function (el, i) {
        el.classList.toggle("bg-slate-800", index >= 0 && i === index);
      });
    }

    function showSuggestions(items) {
      list.innerHTML = "";
      items.forEach(function (item, i) {
        var li = document.createElement("li");
        li.setAttribute("role", "option");
        li.className = "cursor-pointer px-3 py-2 text-sm text-slate-200 hover:bg-slate-800";
        li.textContent = item.display_name;
        li.dataset.value = item.display_name;
        li.addEventListener("click", function () {
          input.value = li.dataset.value;
          hideSuggestions();
          input.focus();
        });
        list.appendChild(li);
      });
      list.hidden = false;
      input.setAttribute("aria-expanded", "true");
      selectedIndex = -1;
    }

    function fetchSuggestions(query) {
      var now = Date.now();
      if (now - lastRequest < 1100) return;
      lastRequest = now;

      var url =
        "https://nominatim.openstreetmap.org/search?format=json&q=" +
        encodeURIComponent(query) +
        "&countrycodes=br&limit=5";
      fetch(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "CLevelMobilityLanding/1.0 (transport executive; jundiai)",
        },
      })
        .then(function (r) {
          return r.json();
        })
        .then(function (data) {
          if (Array.isArray(data) && data.length) showSuggestions(data);
          else hideSuggestions();
        })
        .catch(function () {
          hideSuggestions();
        });
    }

    function onInput() {
      var q = input.value.trim();
      if (q.length < minLength) {
        hideSuggestions();
        return;
      }
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        fetchSuggestions(q);
      }, debounceMs);
    }

    input.addEventListener("input", onInput);
    input.addEventListener("focus", function () {
      if (list.children.length) list.hidden = false;
    });
    input.addEventListener("blur", function () {
      setTimeout(hideSuggestions, 200);
    });

    input.addEventListener("keydown", function (e) {
      var opts = list.querySelectorAll("[role=option]");
      if (!opts.length) return;
      if (e.key === "Escape") {
        hideSuggestions();
        e.preventDefault();
        return;
      }
      if (e.key === "ArrowDown") {
        selectedIndex = Math.min(selectedIndex + 1, opts.length - 1);
        highlightOption(selectedIndex);
        e.preventDefault();
        return;
      }
      if (e.key === "ArrowUp") {
        selectedIndex = Math.max(selectedIndex - 1, -1);
        highlightOption(selectedIndex >= 0 ? selectedIndex : -1);
        e.preventDefault();
        return;
      }
      if (e.key === "Enter" && selectedIndex >= 0 && opts[selectedIndex]) {
        input.value = opts[selectedIndex].dataset.value;
        hideSuggestions();
        e.preventDefault();
      }
    });

    document.addEventListener("click", function (e) {
      if (
        e.target !== input &&
        e.target !== list &&
        !list.contains(e.target)
      ) {
        hideSuggestions();
      }
    });
  }

  function init() {
    var originInput = document.getElementById("origin");
    var originList = document.getElementById("origin-suggestions");
    if (originInput && originList) initAutocomplete(originInput, originList);

    var destInput = document.getElementById("destination");
    var destList = document.getElementById("destination-suggestions");
    if (destInput && destList) initAutocomplete(destInput, destList);
  }

  document.addEventListener("DOMContentLoaded", init);
})();

