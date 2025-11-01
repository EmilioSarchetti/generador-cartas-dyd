// =============================
// ⚒️ Formulario de Ítems / Artefactos
// =============================
function renderFormularioItem() {
  const formulario = document.getElementById("formulario");

  formulario.innerHTML = `
    <h2>Crear Ítem / Artefacto</h2>

    <div class="campo">
      <label for="nombreItem">Nombre del ítem</label>
      <input id="nombreItem" type="text" placeholder="Armadura de Adamantita" />
    </div>

    <div class="campo">
      <label for="tipoItem">Tipo / Categoría</label>
      <input id="tipoItem" type="text" placeholder="Armadura / Anillo / Varita / Arma / Poción..." />
    </div>

    <div class="campo">
      <label for="rarezaItem">Rareza</label>
      <input id="rarezaItem" type="text" placeholder="common / uncommon / rare / very rare / legendary / artifact" />
    </div>

    <div class="campo">
      <label for="vinculacionItem">Vinculación (Attunement)</label>
      <input id="vinculacionItem" type="text" placeholder="Requiere sintonía / No requiere sintonía" />
    </div>

    <div class="campo">
      <label for="efectoItem">Descripción / Efecto</label>
      <textarea id="efectoItem" placeholder="Esta armadura convierte cualquier golpe crítico que recibas en un golpe normal."></textarea>
    </div>

    <button id="generarItem">Agregar Ítem</button>
  `;

  document.getElementById("generarItem").onclick = generarCartaItem;
}

// =============================
// 🎴 Generar carta de Ítem
// =============================
function generarCartaItem() {
  const nombre = document.getElementById("nombreItem").value.trim();
  const tipo = document.getElementById("tipoItem").value.trim();
  const rareza = document.getElementById("rarezaItem").value.trim();
  const vinculacion = document.getElementById("vinculacionItem").value.trim();
  const efecto = document.getElementById("efectoItem").value.trim();

  if (!nombre || !efecto) {
    alert("Completa al menos el nombre y la descripción del ítem.");
    return;
  }

  const carta = document.createElement("div");
  carta.className = "carta";

  // 📏 Tamaño físico fijo (uniforme con el resto)
  carta.style.width = "6.5cm";
  carta.style.height = "9cm";

  carta.innerHTML = `
    <div class="carta-header">
      <h2>${nombre}</h2>
    </div>

    <!-- TOP STATS (2 cm totales) -->
    <div class="carta-top-stats">
      <div class="carta-top-row">
        <div class="carta-top-cell">
          <strong>Tipo:</strong>
          <span>${tipo || "—"}</span>
        </div>
        <div class="carta-top-cell">
          <strong>Rareza:</strong>
          <span>${rareza || "—"}</span>
        </div>
        <div class="carta-top-cell">
          <strong>Vinculación:</strong>
          <span>${vinculacion || "—"}</span>
        </div>
      </div>
      <!-- Segunda fila vacía para completar los 2 cm -->
      <div class="carta-top-row">
        <div class="carta-top-cell"><span></span></div>
        <div class="carta-top-cell"><span></span></div>
        <div class="carta-top-cell"><span></span></div>
      </div>
    </div>

    <!-- CUERPO (flexible, ~5 cm) -->
    <div class="carta-body-scroll">
      ${efecto}
    </div>

    <!-- FOOTER (1 cm reservado) -->
    <div class="carta-footer"></div>
  `;

  document.getElementById("preview").appendChild(carta);

  ["nombreItem","tipoItem","rarezaItem","vinculacionItem","efectoItem"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}
