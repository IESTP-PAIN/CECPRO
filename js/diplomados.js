/*document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-comprar")) {
    const nombre = e.target.dataset.nombre;
    const precio = e.target.dataset.precio;
    
    document.getElementById("precioDiplomado").textContent = `${nombre} - S/ ${precio}.00`;
    document.getElementById("diplomadoSeleccionado").value = nombre;
    document.getElementById("montoSeleccionado").value = precio;
    
    modal.style.display = "flex";
  }
});

document.getElementById("enviarPago").addEventListener("click", () => {
  const comp = document.getElementById("comprobantePago").files[0];
  if (!comp) return alert("Por favor sube tu comprobante antes de continuar.");

  const nombre = document.getElementById("diplomadoSeleccionado").value;
  const monto = document.getElementById("montoSeleccionado").value;
  const numeroJefe = "51989585056";
  const mensaje = encodeURIComponent(`Hola, acabo de pagar el diplomado ${nombre} (S/ ${monto}). Adjunto mi comprobante para validación.`);

  // Enviar por WhatsApp
  window.open(`https://wa.me/${numeroJefe}?text=${mensaje}`, "_blank");

  // Aquí en el futuro enviarás los datos a PHP con fetch()
  // Ejemplo futuro:
  // fetch('procesar_pago.php', {
  //   method: 'POST',
  //   body: new FormData(document.getElementById('pagoForm'))
  // });

  alert("✅ Pago enviado a coordinación. Tu diplomado aparecerá pronto como 'Inactivo'.");
  modal.style.display = "none";
});*/

// ======== DATOS DE DIPLOMADOS ==========
const diplomados = [
  {
    area: "derecho",
    nombre: "Derecho Civil",
    duracion: "10 meses",
    modalidad: "Presencial",
    certificacion: "UNT",
    precio: 400,
    descripcion: "Profundiza en las normas que rigen las relaciones entre personas naturales y jurídicas.",
    img: "img/civil.jpg",
    url: "diplomados/derecho/civil.html"
  },
  {
    area: "derecho",
    nombre: "Derecho Penal",
    duracion: "10 meses",
    modalidad: "Presencial",
    certificacion: "UNT",
    precio: 420,
    descripcion: "Desarrolla competencias en la interpretación y aplicación del derecho penal y procesal.",
    img: "img/penal.jpg",
    url: "diplomados/derecho/penal.html"
  },
  {
    area: "educacion",
    nombre: "Curriculum e Innovación Pedagógica",
    duracion: "10 meses",
    modalidad: "Virtual",
    certificacion: "UNT",
    precio: 380,
    descripcion: "Diseña programas educativos innovadores adaptados a los nuevos modelos de enseñanza.",
    img: "img/curriculum.jpg",
    url: "diplomados/educacion/curriculum.html"
  },
  {
    area: "enfermeria",
    nombre: "Instrumentación Quirúrgica",
    duracion: "10 meses",
    modalidad: "Presencial",
    certificacion: "UNT",
    precio: 410,
    descripcion: "Aprende técnicas avanzadas para asistir en procedimientos quirúrgicos de forma profesional.",
    img: "img/instrumentacion_quirurgica.webp",
    url: "diplomados/enfermeria/instrumentacion_quirurgica.html"
  },
  {
    area: "farmacia",
    nombre: "Administración Farmacéutica",
    duracion: "10 meses",
    modalidad: "Virtual",
    certificacion: "UNT",
    precio: 390,
    descripcion: "Gestiona eficientemente los recursos y operaciones en farmacias y entornos hospitalarios.",
    img: "img/admi_farmaceutica.webp",
    url: "diplomados/farmacia/adm_farmaceutica.html"
  },
  {
    area: "obstetricia",
    nombre: "Asistente de Obstetricia",
    duracion: "10 meses",
    modalidad: "Presencial",
    certificacion: "UNT",
    precio: 430,
    descripcion: "Domina las técnicas básicas de atención prenatal, parto y puerperio con enfoque humanizado.",
    img: "img/asistente_obs.webp",
    url: "diplomados/obstetricia/asistente_obstetricia.html"
  }
];

// ======== ELEMENTOS ==========
const grid = document.getElementById("diplomadosGrid");
const botones = document.querySelectorAll(".area-btn");
const modal = document.getElementById("modalYape");
const cerrarModal = document.getElementById("cerrarModal");
const precioDiplomado = document.getElementById("precioDiplomado");

// ======== MOSTRAR DIPLOMADOS ==========
function mostrarDiplomados(filtro) {
  grid.innerHTML = "";

  const filtrados =
    filtro === "todos"
      ? diplomados
      : diplomados.filter((d) => d.area === filtro);

  if (filtrados.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#666;">No hay diplomados disponibles en esta área.</p>`;
    return;
  }

  filtrados.forEach((d) => {
    const card = document.createElement("div");
    card.classList.add("diplomado-card");
    card.innerHTML = `
      <img src="${d.img}" class="diplomado-img" alt="${d.nombre}">
      <div class="diplomado-info">
        <h3>${d.nombre}</h3>
        <p>${d.descripcion}</p>
        <div class="diplomado-meta">
          <span><i class="fa fa-clock"></i>${d.duracion}</span>
          <span><i class="fa fa-desktop"></i>${d.modalidad}</span>
          <span><i class="fa fa-graduation-cap"></i>${d.certificacion}</span>
        </div>
      </div>
      <div class="diplomado-actions">
        <a href="${d.url}" class="btn-vermas">Ver más</a>
        <button class="btn-comprar" data-nombre="${d.nombre}" data-precio="${d.precio}">Comprar</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ======== FILTRAR AL HACER CLIC ========
botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    botones.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    mostrarDiplomados(btn.dataset.area);
  });
});

// ======== MODAL DE PAGO ==========
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-comprar")) {
    const nombre = e.target.dataset.nombre;
    const precio = e.target.dataset.precio;

    document.getElementById("precioDiplomado").textContent =
      `${nombre} - S/ ${precio}.00`;
    document.getElementById("diplomadoSeleccionado").value = nombre;
    document.getElementById("montoSeleccionado").value = precio;

    modal.style.display = "flex";
  }
});

cerrarModal.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

document.getElementById("enviarPago").addEventListener("click", () => {
  const comp = document.getElementById("comprobantePago").files[0];
  if (!comp) return alert("Por favor sube tu comprobante antes de continuar.");

  const nombre = document.getElementById("diplomadoSeleccionado").value;
  const monto = document.getElementById("montoSeleccionado").value;
  const numeroJefe = "51989585056";
  const mensaje = encodeURIComponent(
    `Hola, acabo de pagar el diplomado ${nombre} (S/ ${monto}). Adjunto mi comprobante para validación.`
  );

  window.open(`https://wa.me/${numeroJefe}?text=${mensaje}`, "_blank");
  alert("✅ Pago enviado a coordinación. Tu diplomado aparecerá pronto como 'Inactivo'.");
  modal.style.display = "none";
});

// ======== MOSTRAR TODOS AL CARGAR ==========
document.addEventListener("DOMContentLoaded", () => mostrarDiplomados("todos"));
