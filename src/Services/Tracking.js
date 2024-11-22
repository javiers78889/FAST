import axios from "axios";

const ApiRegister = 'https://paperdogback.onrender.com/tracking';

export const findPaquetes = async (number) => {
    try {
        // Enviar la solicitud con el número en el cuerpo como JSON
        const registro = await axios.post(ApiRegister, { number }, {
            headers: {
                'Content-Type': 'application/json', // Asegúrate de que el servidor espera JSON
            }
        });
        return registro.data;
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
    }
};
