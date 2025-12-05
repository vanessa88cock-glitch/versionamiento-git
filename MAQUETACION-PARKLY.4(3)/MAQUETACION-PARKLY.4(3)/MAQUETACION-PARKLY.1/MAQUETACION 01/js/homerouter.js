// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los enlaces del nav
  const links = document.querySelectorAll("nav ul li a");
  // Seleccionamos todas las secciones
  const sections = document.querySelectorAll("main section");

  // Recorremos cada enlace
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // evita que recargue la página

      // Obtiene el id de la sección a mostrar (ej: #registrarUsuario)
      const targetId = link.getAttribute("href");

      // Oculta todas las secciones
      sections.forEach(section => section.classList.remove("active"));

      // Muestra solo la sección seleccionada
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });

  // Opcional: mostrar por defecto la primera sección
  if (sections.length > 0) {
    sections[0].classList.add("active");
  }
});
