document.addEventListener("DOMContentLoaded", function() {
  // Solo aplica para móvil
  if (window.innerWidth < 992) {
    // Nivel 1 (Diplomados → se abre)
    document.querySelectorAll(".nav-item.dropdown > .nav-link").forEach(link => {
      link.addEventListener("click", function(e) {
        const parent = this.parentElement;
        e.preventDefault();
        e.stopPropagation();

        // Cierra otros dropdowns del mismo nivel
        document.querySelectorAll(".nav-item.dropdown.show").forEach(open => {
          if (open !== parent) open.classList.remove("show");
        });

        // Alterna este
        parent.classList.toggle("show");
      });
    });

    // Nivel 2 (Educación, Informática, etc.)
    document.querySelectorAll(".dropdown-submenu > .dropdown-item").forEach(link => {
      link.addEventListener("click", function(e) {
        const parent = this.parentElement;
        e.preventDefault();
        e.stopPropagation();

        // Cierra otros submenús del mismo nivel
        parent.parentElement.querySelectorAll(".dropdown-submenu.show").forEach(open => {
          if (open !== parent) open.classList.remove("show");
        });

        // Alterna este submenú
        parent.classList.toggle("show");
      });
    });
  }
});