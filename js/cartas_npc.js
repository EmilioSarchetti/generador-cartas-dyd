// =============================
// 🧟‍♂️ Formulario de Criaturas / NPCs
// =============================
function renderFormularioNPC() {
  const f = document.getElementById("formulario");
  f.innerHTML = `
    <h2>Crear Criatura / NPC</h2>

    <div class="campo">
      <label for="nombreNPC">Nombre</label>
      <input id="nombreNPC" type="text" placeholder="Diablillo" />
    </div>

    <div class="campo">
      <label for="hpNPC">HP</label>
      <input id="hpNPC" type="text" placeholder="10 (3d6)" />
    </div>

    <div class="campo">
      <label for="caNPC">CA</label>
      <input id="caNPC" type="text" placeholder="13 (armadura natural)" />
    </div>

    <div class="campo">
      <label for="movNPC">Movimiento</label>
      <input id="movNPC" type="text" placeholder="20 pies, 40 volando" />
    </div>

    <div class="campo">
      <label for="visionNPC">Visión</label>
      <input id="visionNPC" type="text" placeholder="120 pies, oscura" />
    </div>

    <div class="campo">
      <label>Atributos (mod incluido)</label>
      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <input id="fueNPC" class="small-input" type="text" placeholder="FUE 8 (-1)" />
        <input id="desNPC" class="small-input" type="text" placeholder="DES 17 (+3)" />
        <input id="conNPC" class="small-input" type="text" placeholder="CON 13 (+1)" />
        <input id="intNPC" class="small-input" type="text" placeholder="INT 11 (0)" />
        <input id="sabNPC" class="small-input" type="text" placeholder="SAB 12 (+1)" />
        <input id="carNPC" class="small-input" type="text" placeholder="CAR 14 (+2)" />
      </div>
    </div>

    <div class="campo">
      <label for="tsNPC">Tiradas de Salvación (TS)</label>
      <input id="tsNPC" type="text" placeholder="FUE +5, DES +2..." />
    </div>

    <div class="campo">
      <label for="periciasNPC">Pericias</label>
      <input id="periciasNPC" type="text" placeholder="Engañar +4, Perspicacia +3, Sigilo +5..." />
    </div>

    <div class="campo">
      <label for="resistNPC">Resistencias</label>
      <input id="resistNPC" type="text" placeholder="Frío; daño de armas no mágicas..." />
    </div>

    <div class="campo">
      <label for="inmunNPC">Inmunidades</label>
      <input id="inmunNPC" type="text" placeholder="Fuego y Veneno" />
    </div>

    <div class="campo">
      <label for="sentidosNPC">Sentidos extra</label>
      <input id="sentidosNPC" type="text" placeholder="Tremorsense 10 pies, Percepción pasiva 12" />
    </div>

    <div class="campo">
      <label for="accionesNPC">Acciones / Rasgos / Ataques</label>
      <textarea id="accionesNPC" placeholder="Ataque de aguijón... Invisibilidad..."></textarea>
    </div>

    <button id="generarNPC">Agregar NPC / Criatura</button>
  `;
  document.getElementById("generarNPC").onclick = generarCartaNPC;
}

// =============================
// 🧩 Generar carta NPC
// =============================
function generarCartaNPC() {
  const nombre = document.getElementById("nombreNPC").value.trim();
  const hp = document.getElementById("hpNPC").value.trim();
  const ca = document.getElementById("caNPC").value.trim();
  const movimiento = document.getElementById("movNPC").value.trim();
  const vision = document.getElementById("visionNPC").value.trim();

  const fue = document.getElementById("fueNPC").value.trim();
  const des = document.getElementById("desNPC").value.trim();
  const con = document.getElementById("conNPC").value.trim();
  const intVal = document.getElementById("intNPC").value.trim();
  const sab = document.getElementById("sabNPC").value.trim();
  const car = document.getElementById("carNPC").value.trim();

  const ts = document.getElementById("tsNPC").value.trim();
  const pericias = document.getElementById("periciasNPC").value.trim();
  const resistencias = document.getElementById("resistNPC").value.trim();
  const inmunidades = document.getElementById("inmunNPC").value.trim();
  const sentidosExtra = document.getElementById("sentidosNPC").value.trim();
  const acciones = document.getElementById("accionesNPC").value.trim();

  if (!nombre || !acciones) {
    alert("Debes completar al menos el nombre y las acciones.");
    return;
  }

  const carta = document.createElement("div");
  carta.className = "carta";

  // 📏 Fuerza tamaño fijo físico, igual a las demás cartas
  carta.style.width = "6.5cm";
  carta.style.height = "9cm";

  carta.innerHTML = `
    <div class="carta-header">
      <h2>${nombre}</h2>
    </div>

    <!-- TOP STATS (2cm) -->
    <div class="carta-top-stats">
      <!-- Fila 1: HP / CA / Mov / Visión -->
      <div class="carta-top-row">
        <div class="carta-top-cell"><strong>HP:</strong><span>${hp || "—"}</span></div>
        <div class="carta-top-cell"><strong>CA:</strong><span>${ca || "—"}</span></div>
        <div class="carta-top-cell"><strong>Mov:</strong><span>${movimiento || "—"}</span></div>
        <div class="carta-top-cell"><strong>Visión:</strong><span>${vision || "—"}</span></div>
      </div>

      <!-- Fila 2: Atributos + TS / Pericias -->
      <div class="carta-top-row">
        <div class="carta-top-cell">
          <strong>Atributos:</strong>
          <span>
            FUE ${fue || "—"}, DES ${des || "—"}, CON ${con || "—"}<br>
            INT ${intVal || "—"}, SAB ${sab || "—"}, CAR ${car || "—"}
          </span>
        </div>
        <div class="carta-top-cell">
          <strong>TS / Pericias:</strong>
          <span>
            ${ts ? `TS: ${ts}<br>` : ""}
            ${pericias ? `Pericias: ${pericias}` : ""}
            ${(!ts && !pericias) ? "—" : ""}
          </span>
        </div>
      </div>
    </div>

    <!-- CUERPO (flexible 5cm) -->
    <div class="carta-body-scroll">
      ${resistencias || inmunidades || sentidosExtra ? `
        <strong>Resistencias:</strong> ${resistencias || "—"}<br>
        <strong>Inmunidades:</strong> ${inmunidades || "—"}<br>
        <strong>Sentidos:</strong> ${sentidosExtra || "—"}<br><br>
      ` : ""}
      ${acciones}
    </div>

    <!-- FOOTER (1cm, reservado para uniformidad) -->
    <div class="carta-footer"></div>
  `;

  document.getElementById("preview").appendChild(carta);

  [
    "nombreNPC","hpNPC","caNPC","movNPC","visionNPC",
    "fueNPC","desNPC","conNPC","intNPC","sabNPC","carNPC",
    "tsNPC","periciasNPC","resistNPC","inmunNPC","sentidosNPC",
    "accionesNPC"
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}
