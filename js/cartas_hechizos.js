// =============================
// 🪄 Formulario de Hechizos
// =============================
function renderFormularioHechizo() {
  const formulario = document.getElementById("formulario");

  formulario.innerHTML = `
    <h2>Crear Hechizo</h2>

    <div class="campo">
      <label for="nombre">Nombre del hechizo</label>
      <input id="nombre" type="text" placeholder="Bola de Fuego" />
    </div>

    <div class="campo">
      <label for="nivelHechizo">Nivel del Hechizo</label>
      <input id="nivelHechizo" type="text" placeholder="Nivel 3 (Evocación) / Truco" />
    </div>

    <div class="campo">
      <label for="tiempo">Tiempo de casteo</label>
      <input id="tiempo" type="text" placeholder="1 acción / 1 reacción / 1 minuto..." />
    </div>

    <div class="campo">
      <label for="componentes">Componentes</label>
      <input id="componentes" type="text" placeholder="V, S, M (una mota de azufre)" />
    </div>

    <div class="campo">
      <label for="rango">Rango</label>
      <input id="rango" type="text" placeholder="45 m / Toque / Personal / Círculo 6 m" />
    </div>

    <div class="campo">
      <label for="tirada">Tirada de Salvación o Ataque</label>
      <input id="tirada" type="text" placeholder="TS DEX / TS CON / Ataque con hechizo a distancia" />
    </div>

    <div class="campo">
      <label for="descripcion">Descripción</label>
      <textarea id="descripcion" placeholder="Una explosión ardiente estalla en un punto que eliges... hace 8d6 de daño de fuego..."></textarea>
    </div>

    <div class="campo">
      <label for="nivelesAltos">A niveles más altos</label>
      <textarea id="nivelesAltos" placeholder="+1d6 por cada nivel de conjuro superior al 3"></textarea>
    </div>

    <button id="generar">Agregar Hechizo</button>
  `;

  document.getElementById("generar").onclick = generarCartaHechizo;
}

// =============================
// 🧩 Generar carta de Hechizo
// =============================
function generarCartaHechizo() {
  const nombre = document.getElementById("nombre").value.trim();
  const nivelHechizo = document.getElementById("nivelHechizo").value.trim();
  const tiempo = document.getElementById("tiempo").value.trim();
  const componentes = document.getElementById("componentes").value.trim();
  const rango = document.getElementById("rango").value.trim();
  const tirada = document.getElementById("tirada").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const nivelesAltos = document.getElementById("nivelesAltos").value.trim();

  if (!nombre || !descripcion) {
    alert("Completa al menos el nombre y la descripción del hechizo.");
    return;
  }

  const preview = document.getElementById("preview");

  // 📏 Carta base 6.5cm × 9cm (no cambiar tamaño)
  const carta = document.createElement("div");
  carta.className = "carta";
  carta.style.width = "6.5cm";
  carta.style.height = "9cm";

  carta.innerHTML = `
    <!-- HEADER (1cm): Nombre -->
    <div class="carta-header">
      <h2>${nombre}</h2>
    </div>

    <!-- TOP STATS (2cm totales): dos filas -->
    <div class="carta-top-stats">
      <!-- fila 1: Nivel / Tiempo / Componentes -->
      <div class="carta-top-row">
        <div class="carta-top-cell">
          <strong>Nivel:</strong>
          <span>${nivelHechizo || "—"}</span>
        </div>
        <div class="carta-top-cell">
          <strong>Tiempo:</strong>
          <span>${tiempo || "—"}</span>
        </div>
        <div class="carta-top-cell">
          <strong>Componentes:</strong>
          <span>${componentes || "—"}</span>
        </div>
      </div>

      <!-- fila 2: Rango / Tirada -->
      <div class="carta-top-row">
        <div class="carta-top-cell">
          <strong>Rango:</strong>
          <span>${rango || "—"}</span>
        </div>
        <div class="carta-top-cell">
          <strong>Tirada:</strong>
          <span>${tirada || "—"}</span>
        </div>
        <div class="carta-top-cell"><span></span></div>
      </div>
    </div>

    <!-- BODY SCROLL (flexible): Descripción -->
    <div class="carta-body-scroll">
      ${descripcion || "—"}
    </div>

    <!-- FOOTER (1cm): A niveles más altos -->
    <div class="carta-footer">
      <strong>A niveles más altos:</strong>
      ${nivelesAltos || "—"}
    </div>
  `;

  preview.appendChild(carta);

  // 🔄 Limpio campos
  [
    "nombre",
    "nivelHechizo",
    "tiempo",
    "componentes",
    "rango",
    "tirada",
    "descripcion",
    "nivelesAltos"
  ].forEach(id => (document.getElementById(id).value = ""));
}
