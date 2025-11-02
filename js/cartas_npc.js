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
      <input id="movNPC" type="text" placeholder="30 pies, 40 volando" />
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
// 🧩 Generar carta NPC (nuevo formato con filas fijas)
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
  carta.style.width = "6.5cm";
  carta.style.height = "9cm";

  carta.innerHTML = `
    <div class="carta-header"><h2>${nombre}</h2></div>

    <!-- 🧾 Fila 1: HP / CA / Movimiento / Visión -->
    <div class="carta-top-row grid-4">
      <div><strong>HP:</strong> ${hp || "—"}</div>
      <div><strong>CA:</strong> ${ca || "—"}</div>
      <div><strong>Mov:</strong> ${movimiento || "—"}</div>
      <div><strong>Visión:</strong> ${vision || "—"}</div>
    </div>

    <!-- 💪 Fila 2: Atributos (6 columnas) -->
    <div class="carta-top-row grid-6">
      <div><strong>FUE</strong> ${fue || "—"}</div>
      <div><strong>DES</strong> ${des || "—"}</div>
      <div><strong>CON</strong> ${con || "—"}</div>
      <div><strong>INT</strong> ${intVal || "—"}</div>
      <div><strong>SAB</strong> ${sab || "—"}</div>
      <div><strong>CAR</strong> ${car || "—"}</div>
    </div>

    <!-- 🎯 Fila 3: TS y Pericias -->
    <div class="carta-top-row grid-2">
      <div><strong>TS:</strong> ${ts || "—"}</div>
      <div><strong>Pericias:</strong> ${pericias || "—"}</div>
    </div>

    <!-- 🛡️ Fila 4: Resistencias / Inmunidades / Sentidos -->
    <div class="carta-top-row grid-3">
      <div><strong>Resistencias:</strong> ${resistencias || "—"}</div>
      <div><strong>Inmunidades:</strong> ${inmunidades || "—"}</div>
      <div><strong>Sentidos:</strong> ${sentidosExtra || "—"}</div>
    </div>

    <!-- ⚔️ Fila 5: Acciones y descripción -->
    <div class="carta-body-scroll">
      ${acciones}
    </div>

    <div class="carta-footer"></div>
  `;

  document.getElementById("preview").appendChild(carta);

  // limpiar campos
  [
    "nombreNPC","hpNPC","caNPC","movNPC","visionNPC",
    "fueNPC","desNPC","conNPC","intNPC","sabNPC","carNPC",
    "tsNPC","periciasNPC","resistNPC","inmunNPC","sentidosNPC","accionesNPC"
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}
