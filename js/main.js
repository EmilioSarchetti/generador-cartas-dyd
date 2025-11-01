// =============================
// 🧠 CONTROLADOR CENTRAL DE MODOS
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const modo = document.getElementById("modo");
  const formulario = document.getElementById("formulario");
  const preview = document.getElementById("preview");

  // ==========================
  // 🔁 Inicialización
  // ==========================
  const ultimoModo = localStorage.getItem("modoSeleccionado");
  if (ultimoModo) modo.value = ultimoModo;

  // Render inicial
  renderModoActual(modo.value);

  // ==========================
  // 🧩 Cambiar de modo
  // ==========================
  modo.addEventListener("change", () => {
    localStorage.setItem("modoSeleccionado", modo.value);
    formulario.innerHTML = "";
    preview.innerHTML = "";
    renderModoActual(modo.value);
  });

  // ==============================
  // 🔄 Función despachadora global
  // ==============================
  function renderModoActual(modoActual) {
    switch (modoActual) {
      case "hechizos":
        if (typeof renderFormularioHechizo === "function") {
          renderFormularioHechizo();
        } else {
          formulario.innerHTML = "<p>Error: Falta archivo cartas_hechizos.js</p>";
        }
        break;

      case "npc":
        if (typeof renderFormularioNPC === "function") {
          renderFormularioNPC();
        } else {
          formulario.innerHTML = "<p>Error: Falta archivo cartas_npc.js</p>";
        }
        break;

      case "items":
        if (typeof renderFormularioItem === "function") {
          renderFormularioItem();
        } else {
          formulario.innerHTML = "<p>Error: Falta archivo cartas_items.js</p>";
        }
        break;

      case "acciones":
        if (typeof renderFormularioAccion === "function") {
          renderFormularioAccion();
        } else {
          formulario.innerHTML = "<p>Error: Falta archivo cartas_acciones.js</p>";
        }
        break;

      default:
        formulario.innerHTML = "<p>Selecciona un modo para comenzar.</p>";
    }
  }
});
