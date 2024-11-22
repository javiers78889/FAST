import axios from "axios"

const Api = 'https://paperdogback.onrender.com/paquetesexist'

//verifica si el paquete existe
export const ActualizarPaquete = async (id) => {
    const storedToken = sessionStorage.getItem('token')
    const headers = {
        'Authorization': `Bearer ${storedToken}`
    }
    try {
        const response = await axios.post(Api, id, { headers })
        return response.data

    } catch (error) {
        console.error(error)

    }
}