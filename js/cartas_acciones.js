/// =============================
// 🐉 Formulario de Acción Legendaria
// =============================
function renderFormularioAccion() {
  const formulario = document.getElementById("formulario");

  formulario.innerHTML = `
    <h2>Crear Acción Legendaria</h2>

    <div class="campo">
      <label for="nombreAccion">Nombre de la acción legendaria</label>
      <input id="nombreAccion" type="text" placeholder="Aliento abrasador / Grito aterrador" />
    </div>

    <div class="campo">
      <label for="costeAccion">Coste de acciones</label>
      <input id="costeAccion" type="text" placeholder="1 acción legendaria / 2 acciones legendarias" />
    </div>

    <div class="campo">
      <label for="frecuenciaAccion">Frecuencia o tipo de uso</label>
      <input id="frecuenciaAccion" type="text" placeholder="Una vez por turno / Recarga 5-6 / Permanente" />
    </div>

    <div class="campo">
      <label for="descripcionAccion">Efecto completo</label>
      <textarea id="descripcionAccion" placeholder="Alcance, TS, ataque, daño, condiciones, etc."></textarea>
    </div>

    <div class="campo">
      <label for="notasAccion">Notas especiales o condiciones</label>
      <textarea id="notasAccion" placeholder="Solo si tiene la mitad de vida / Requiere recarga, etc."></textarea>
    </div>

    <button id="generarAccion">Agregar Acción Legendaria</button>
  `;

  document.getElementById("generarAccion").onclick = generarCartaAccion;
}

// =============================
// ⚔️ Generar carta de Acción Legendaria
// =============================
function generarCartaAccion() {
  const nombre = document.getElementById("nombreAccion").value.trim();
  const coste = document.getElementById("costeAccion").value.trim();
  const frecuencia = document.getElementById("frecuenciaAccion").value.trim();
  const descripcion = document.getElementById("descripcionAccion").value.trim();
  const notas = document.getElementById("notasAccion").value.trim();

  if (!nombre || !descripcion) {
    alert("Completa al menos el nombre y la descripción de la acción.");
    return;
  }

  const carta = document.createElement("div");
  carta.className = "carta";

  // 📏 Tamaño fijo físico (mismo que las demás)
  carta.style.width = "6.5cm";
  carta.style.height = "9cm";

  carta.innerHTML = `
    <!-- HEADER (1 cm) -->
    <div class="carta-header">
      <h2>${nombre}</h2>
    </div>

    <!-- TOP STATS (2 cm totales) -->
    <div class="carta-top-stats">
      <div class="carta-top-row">
        <div class="carta-top-cell">
          <strong>Coste:</strong>
          <span>${coste || "—"}</span>
        </div>
        <div class="carta-top-cell">
          <strong>Frecuencia:</strong>
          <span>${frecuencia || "—"}</span>
        </div>
      </div>
      <!-- Segunda fila vacía para completar los 2 cm -->
      <div class="carta-top-row">
        <div class="carta-top-cell"><span></span></div>
        <div class="carta-top-cell"><span></span></div>
      </div>
    </div>

    <!-- CUERPO (flexible ~5 cm) -->
    <div class="carta-body-scroll">
      ${descripcion}
    </div>

    <!-- FOOTER (1 cm) -->
    <div class="carta-footer">
      <strong>Notas:</strong>
      ${notas || "—"}
    </div>
  `;

  document.getElementById("preview").appendChild(carta);

  ["nombreAccion","costeAccion","frecuenciaAccion","descripcionAccion","notasAccion"]
    .forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
}
