import fastShippingImg from '../img/ags.png'; // Asegúrate de que esta ruta sea válida.
import jsPDF from "jspdf";
import "jspdf-autotable"; // Asegúrate de tener instalado este plugin.

export const generatePDF = async (body) => {
    try {
        const pacData = [body]
        console.log(pacData[0])
        // Validar que el dato recibido sea un arreglo y no esté vacío
        if (!Array.isArray(pacData) || pacData.length === 0) {
            console.log("No se encontró el paquete o el formato es incorrecto.");
            return;
        }

        // Tomar el primer paquete (siempre y cuando sea lo esperado)
        const pack = pacData[0];

        // Validar las propiedades del paquete
        if (!pack.email || !pack.peso || !pack.tracking || !pack.total) {
            console.log("Faltan datos necesarios para generar el PDF.");
            return;
        }

        // Crear la instancia del documento PDF
        const doc = new jsPDF();

        // Función para formatear fechas
        const formatDate = (dateString) => {
            const fecha = new Date(dateString);
            const anio = fecha.getFullYear();
            const mes = String(fecha.getMonth() + 1).padStart(2, '0');
            const dia = String(fecha.getDate()).padStart(2, '0');
            return `${anio}-${mes}-${dia}`;
        };

        const fechaFormateada = formatDate(pack.createdAt);

        // Agregar el título del documento
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.text(`N° DE FACTURA FS-${pack.id}`, 10, 10);
        doc.text(`FECHA ${fechaFormateada}`, 70, 10);
        doc.addImage(fastShippingImg, 'PNG', 150, 5, 50, 40);

        // Información de facturación
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text("FACTURAR A", 10, 40);
        doc.text("FAST SHIPPING AGS:", 150, 50);
        doc.setFont("helvetica", "normal");

        doc.text(`${pack.email}`, 10, 50);
        doc.text("PANAMA OESTE, LA CHORRERA", 150, 55);
        doc.text("VALLE DORADO, CALLE12,", 150, 60);
        doc.text("OFICINA AK45", 150, 65);
        doc.text("TEL: 6112-5919", 150, 70);
        doc.text("CORREO:", 150, 75);
        doc.text("fastshippingags507@gmail.com", 150, 80);

        // Crear la tabla con los datos
        doc.autoTable({
            startY: 90,
            head: [['LIBRAS.', 'DESCRIPCIÓN', 'TARIFA', 'TOTAL']],
            body: [
                [pack.peso, pack.tracking, pack.plan==='aereo'?('2.50'):'15', pack.total.toFixed(2)]
            ],
            headStyles: {
                fillColor: [0, 0, 0],
                textColor: [255, 255, 255],
                fontStyle: 'bold'
            },
        });

        // Total de la factura
        const finalY = doc.lastAutoTable.finalY || 70;
        doc.setFontSize(20);
        doc.setFont("helvetica", "bold");
        doc.text(`TOTAL FACTURA $ ${pack.total.toFixed(2)} USD`, 15, finalY + 20);

        // Condiciones de pago
        doc.setFontSize(10);
        doc.text("CONDICIONES Y FORMA DE PAGO", 15, finalY + 45);
        doc.setFontSize(9);
        doc.text("MÁXIMO 20 DIAS CALENDARIO LIBRE DE ALMACENAJE DESPUÉS DE LA FECHA DE FACTURA, $1 POR DIA DE RECARGO.", 15, finalY + 55);

        // Información de la cuenta bancaria
        doc.setFontSize(9);
        doc.text("FAST SHIPPING AGS", 15, finalY + 75);
        doc.text("04-72-98-303943-0", 15, finalY + 80);
        doc.text("CTA AHORRO", 15, finalY + 85);
        doc.text("BANCO GENERAL.", 15, finalY + 90);
        doc.text("YAPPY COMERCIAL:", 15, finalY + 95);
        doc.text("FAST SHIPPING AGS", 15, finalY + 100);

        const pdfData = doc.output("bloburl");
        window.open(pdfData, "_blank");
    } catch (error) {
        console.error("Error generando el PDF:", error);
    }
};
