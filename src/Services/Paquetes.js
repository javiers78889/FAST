import axios from "axios"
import Swal from "sweetalert2"

const Api = 'https://paperdogback.onrender.com/paquetes'
const ApUser = 'https://paperdogback.onrender.com/userpaquetes'
const storedToken = sessionStorage.getItem('token')
const headers = {
    'Authorization': `Bearer ${storedToken}`
}
export const findPaquetes = async () => {
    try {

        const response = await axios.get(Api, { headers })

        return response.data

    } catch (error) {

        console.error(error)

    }
}

//filtra dependiendo del usuario logueado
export const userPaquetes = async (body) => {

    try {

        const response = await axios.post(ApUser, body, { headers })

        return response.data

    } catch (error) {

        console.error(error)

    }
}

//Actualizar estado ; es decir ENTREGADO

export const Entregar = async ({ id, estado }) => {
    const body = {
        id, estado
    }
    try {
        const response = await axios.put(Api, body, { headers })
        if (response) {
            
            return response
        }
    } catch (error) {
        Swal.fire({
            title: "Lo sentimos!",
            text: error,
            icon: "error"
        });

    }

}