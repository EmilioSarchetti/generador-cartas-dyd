// =====================================================
// 📜 Generador PDF para cartas D&D - versión definitiva
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  const btnDescargar = document.getElementById("btnDescargar");
  const preview = document.getElementById("preview");

  btnDescargar.addEventListener("click", async () => {
    // 🧩 Validación inicial
    if (!preview || preview.children.length === 0) {
      alert("⚠️ No hay cartas generadas para descargar.");
      return;
    }

    // 📚 Inicializamos jsPDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      unit: "cm",
      format: "a4",
    });

    // ===============================================
    // 📏 Configuración de tamaño y cuadrícula
    // ===============================================
    const cartaWidth = 6.5;  // ancho real de carta (cm)
    const cartaHeight = 9;   // alto real de carta (cm)
    const marginX = 0.3;     // margen horizontal (cm)
    const marginY = 0.3;     // margen vertical (cm)
    const pageWidth = 21;    // ancho A4 (cm)
    const pageHeight = 29.7; // alto A4 (cm)
    const columnas = 3;      // 3 cartas por fila
    const filas = 3;         // 3 filas por página
    const cartasPorPagina = columnas * filas;

    // ===============================================
    // 🔍 Capturamos cada carta y la colocamos
    // ===============================================
    const cartas = Array.from(preview.children);
    let paginaActual = 1;

    for (let i = 0; i < cartas.length; i++) {
      const carta = cartas[i];

      // 🖼️ Render de cada carta individual con html2canvas
      const canvas = await html2canvas(carta, {
        scale: 3,
        backgroundColor: "#ffffff",
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");

      // 🧮 Calcular posición dentro de la cuadrícula
      const indexEnPagina = i % cartasPorPagina;
      const col = indexEnPagina % columnas;
      const row = Math.floor(indexEnPagina / columnas);

      const x = marginX + col * (cartaWidth + marginX);
      const y = marginY + row * (cartaHeight + marginY);

      // 📄 Si es la primera carta de una nueva página, agregar página
      if (i > 0 && indexEnPagina === 0) {
        pdf.addPage();
        paginaActual++;
      }

      // 🧩 Agregar carta a la posición exacta
      pdf.addImage(imgData, "PNG", x, y, cartaWidth, cartaHeight);
    }

    // ===============================================
    // 💾 Guardar el PDF
    // ===============================================
    const fecha = new Date().toLocaleDateString("es-AR").replace(/\//g, "-");
    const nombreArchivo = `cartas_dnd_${fecha}.pdf`;

    alert(`✅ Se generó correctamente el PDF con ${pdf.getNumberOfPages()} página(s).`);
    pdf.save(nombreArchivo);
  });
});
