import axios from "axios";
import Swal from "sweetalert2";

const Api = "https://paperdogback.onrender.com/users";

export const crearUsuario = async (body) => {
    const storedToken = sessionStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${storedToken}`,
    };

    try {
        const response = await axios.post(Api, body, { headers });
        // Verificar si la respuesta fue exitosa
        if (response.status === 200) {
            Swal.fire({
                title: "Usuario creado",
                text: response.data.mensaje, // Correcto acceso al mensaje
                icon: "success",
            });
        }
    } catch (error) {
        // Manejo detallado del error
        if (error.response) {
            // El servidor respondió con un código fuera del rango 2xx
            const errorMessage =
                error.response.data?.mensaje || "Error desconocido en el servidor";
            Swal.fire({
                title: "Error!",
                text: errorMessage,
                icon: "error",
            });
        } else if (error.request) {
            // La solicitud fue enviada pero no hubo respuesta
            Swal.fire({
                title: "Error de conexión",
                text: "No se pudo conectar con el servidor. Inténtalo más tarde.",
                icon: "warning",
            });
        } else {
            // Otro tipo de error
            Swal.fire({
                title: "Error inesperado",
                text: error.message,
                icon: "error",
            });
        }
        console.error("Detalles del error:", error);
    }
};
