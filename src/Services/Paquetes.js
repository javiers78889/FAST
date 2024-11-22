import axios from "axios"
import Swal from "sweetalert2"

const Api = 'https://paperdogback.onrender.com/paquetes'



export const CreatePackage = async (body) => {
    const storedToken = sessionStorage.getItem('token')
    console.log(storedToken)
    const headers = {
        'Authorization': `Bearer ${storedToken}`
    }

    try {
        const response = await axios.post(Api, body, { headers })
        return response.data.mensaje

    } catch (error) {
        Swal.fire({
            title: "Error!",
            text: error,
            icon: "error"
        });
        console.error(error)

    }
}
//ENTREGADO

export const Entregar = async ({ id, estado }) => {

    const storedToken = sessionStorage.getItem('token')
    const headers = {
        'Authorization': `Bearer ${storedToken}`
    }
    const body = {
        id, estado
    }
    console.log(body)
    try {
        const response = await axios.put(Api, body, { headers })
        if (response) {
            Swal.fire({
                title: "Actualizado!",
                text: response.data.mensaje,
                icon: "success"
            });
            console.log(response)

            return response.data.mensaje
        }
    } catch (error) {
        Swal.fire({
            title: "Lo sentimos!",
            text: error,
            icon: "error"
        });

    }

}
//Actualizar estado ; 

export const Edicion = async (body) => {
    const storedToken = sessionStorage.getItem('token')
    const headers = {
        'Authorization': `Bearer ${storedToken}`
    }
    try {
        const response = await axios.put(Api, body, { headers })
   
            return response.data.mensaje
        
    } catch (error) {
        Swal.fire({
            title: "Lo sentimos!",
            text: error,
            icon: "error"
        });

    }
}