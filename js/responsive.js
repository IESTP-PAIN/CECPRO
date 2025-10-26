(function(){
  const MOBILE_MAX = 991.98;

  // ==============================
  // 1️⃣ Función: Acordeón móvil
  // ==============================
  function enableAccordionMobile() {
    // Quitar handlers previos (si existen)
    document.querySelectorAll('.dropdown-submenu > .dropdown-item').forEach(link => {
      if (link._acc) {
        link.removeEventListener('click', link._acc);
        delete link._acc;
      }
    });

    // Solo en móvil
    if (window.innerWidth > MOBILE_MAX) return;

    document.querySelectorAll('.dropdown-submenu > .dropdown-item').forEach(link => {
      const handler = function(e) {
        e.preventDefault();
        e.stopPropagation();

        const parent = this.parentElement; // .dropdown-submenu
        // Alternar estado
        parent.classList.toggle('show');

        // Cerrar hermanos (acordeón estricto)
        const siblings = Array.from(parent.parentElement.children)
          .filter(ch => ch !== parent && ch.classList.contains('dropdown-submenu'));
        siblings.forEach(sib => sib.classList.remove('show'));
      };

      link.addEventListener('click', handler);
      link._acc = handler; // guardar referencia para eliminar luego
    });

    // Evitar que clicks dentro del dropdown principal cierren todo (Bootstrap auto-close)
    document.querySelectorAll('.navbar .dropdown-menu').forEach(menu => {
      menu.addEventListener('click', function(e){
        if (window.innerWidth <= MOBILE_MAX) e.stopPropagation();
      });
    });
  }

  // ==============================
  // 2️⃣ Función: Marcar enlace activo
  // ==============================
  function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".navbar .nav-link").forEach(link => {
      const href = link.getAttribute("href");
      if (href && href === currentPage) {
        link.classList.add("active");
      }
    });
  }

  // ==============================
  // 3️⃣ Inicialización
  // ==============================
  document.addEventListener('DOMContentLoaded', () => {
    enableAccordionMobile();
    highlightActiveLink();
  });

  // Recalcular en resize (con debounce)
  let t;
  window.addEventListener('resize', function(){
    clearTimeout(t);
    t = setTimeout(enableAccordionMobile, 120);
  });
})();