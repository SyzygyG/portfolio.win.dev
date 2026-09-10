(function () {
  "use strict";

  // Mobile menu -----------------------------------------------------------
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  var close = menu ? menu.querySelector(".mobile-menu__close") : null;

  function setOpen(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      if (close) close.focus();
    } else {
      toggle.focus();
    }
  }

  if (toggle) toggle.addEventListener("click", function () { setOpen(true); });
  if (close) close.addEventListener("click", function () { setOpen(false); });
  if (menu) {
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu && menu.classList.contains("is-open")) {
      setOpen(false);
    }
  });

  // Copy-to-clipboard -----------------------------------------------------
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-copy");
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(value).then(function () {
        var original = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = original; }, 1500);
      }).catch(function () {
        btn.textContent = "Copy failed";
      });
    });
  });

  // Subtle reveal on scroll (skipped for reduced motion) -------------------
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach(function (el) { io.observe(el); });
})();
