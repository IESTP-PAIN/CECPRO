document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown-submenu > .dropdown-item');

  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
      const parent = this.parentElement;
      
      // Evitar que Bootstrap cierre el menú
      e.preventDefault();
      e.stopPropagation();
      
      // Cerrar otros submenús
      document.querySelectorAll('.dropdown-submenu').forEach(function(item) {
        if (item !== parent) item.classList.remove('show');
      });

      // Alternar este submenú
      parent.classList.toggle('show');
    });
  });
});