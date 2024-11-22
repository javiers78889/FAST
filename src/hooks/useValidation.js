import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { autenticar } from "../Services/Service";
import { jwtDecode } from "jwt-decode";
import { CreatePackage, Edicion, Entregar } from "../Services/Paquetes";
import Swal from "sweetalert2";
import { ActualizarPaquete } from "../Services/ActualizarPaquetes";
import { crearUsuario } from "../Services/Usuarios";
import { actualizameusuario, EncontrarUsuario } from "../Services/ActualizarUsuario";

const initialDatos = {
    "email": '',
    "password": ''
}
const initialPaquetes = JSON.parse(sessionStorage.getItem('paquetes')) || []


export const useValidation = () => {
    const navigate = useNavigate()
    const [datos, setDatos] = useState(initialDatos)
    const [auth, setAuth] = useState([])
    const [update, setUpdate] = useState([])
    const { id, tracking: seguimiento, email, usuario, password: contrasena, role, plan, estado, peso, total } = update
    const [tupla, setTupla] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [paquetes, setPaquetes] = useState(initialPaquetes)
    const [actualizar, setActualizar] = useState([])
    const [valido, setValido] = useState(true)
    const [spiner, setSpiner] = useState(true)
    const [reload, setReload] = useState(false);
    const [open, setOpen] = useState(false);
    const { email: emails, password } = datos
    const [capturar, setCapturar] = useState([])
    const { email: correo, track, peso: libra, tarifa: costoso, plan: planes } = capturar
    const [dosabrir, setDosabrir] = useState(false)

    const onInputChange = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })

    }
    const data = async () => {
        if (valido) {

            const decoded = auth
            if (decoded && Object.keys(decoded).length > 0) {
                setPaquetes(tupla.paquetes)
                setUsuarios(tupla.usuarios)
                Swal.fire({
                    title: "Acceso Aprobado!",
                    text: 'Bienvenido',
                    icon: "success"
                });

                navigate('/profile')
            }

        } else {
            const token = await autenticar(datos);
            if (token.token.length > 0) {

                setPaquetes(token.paquetes)
                setUsuarios(token.usuarios)

            }

            Swal.fire({
                title: "Hecho!",
                text: 'Perfecto',
                icon: "success"
            });


        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setSpiner(true)
        const token = await autenticar(datos) || ''
        if (token?.token?.length > 0) {

            setTupla(token)
            const decoded = jwtDecode(token.token)

            setAuth(decoded)
            setReload(!reload)
        }
        else {
            setSpiner(false)
        }





    }

    const logout = () => {
        setValido(true)
        sessionStorage.removeItem('token')
        setSpiner(false)


        navigate('/login')

    }
    const onCheck = (id) => {

        setActualizar(id)

    }
    const toggleActualizaModal = async () => {
        const obj = {
            "id": actualizar
        }
        const response = await ActualizarPaquete(obj)
        if (response) {
            setUpdate(response)
            setOpen(!open);
            setValido(false)
        }

    };

    const onCreateUser = async (event) => {
        event.preventDefault()
        await crearUsuario(update)
        setValido(false)
        setReload(!reload)

        setUpdate([])
    }
    const cerrar = () => {
        setOpen(!open);
    }

    const onChangeModal = (event) => {
        console.log(event.target.name)
        setUpdate({ ...update, [event.target.name]: event.target.value })

    }
    const onActualiza = async () => {
        setValido(false)
        const ob = {
            "id": actualizar,
            "estado": "Entregado"
        }
        await Entregar(ob)

        setReload(!reload);
    }

    const Editar = async (event) => {
        event.preventDefault()
        const response = await Edicion(update)
        if (response) {
            setReload(!reload)
            setOpen(!open)
        }

    }
    const onCreate = (event) => {


        setCapturar({ ...capturar, [event.target.name]: event.target.value })

    }
    const crearPaquete = async (event) => {
        event.preventDefault()
        setValido(false)
        const { tarifa, peso, tracking, email, plan } = capturar


        const pesado = Number(peso)
        const estado = 'pendiente'
        const total = parseFloat((Number(tarifa) * peso).toFixed(1));

        // Objeto a enviar
        const datos = {
            tracking: tracking,    // Este es un ejemplo
            email: email,
            plan: plan,
            peso: pesado,
            total: total,              // El total ahora es un número flotante con un decimal
            estado: estado
        };

        const response = await CreatePackage(datos)
        if (response) {
            Swal.fire({
                title: "Ok!",
                text: response,
                icon: "Success"
            });
            setReload(!reload)


        }



    }
    const toggleActualiza = async () => {
        const obj = {
            "id": actualizar
        }
        const response = await EncontrarUsuario(obj)

        if (response) {

            setUpdate(response.exist)

            setDosabrir(!dosabrir)

        }
        else {
            console.log('error')
        }



    }
    const onUpdateUser = async (event) => {

        event.preventDefault()
        const { email, usuario, role, plan } = update
        const obj = {
            id, email, usuario, role, plan
        }
        const response = await actualizameusuario(obj)
        console.log(response)
        if (response) {
            setValido(false)
            setReload(!reload)
            setDosabrir(!dosabrir)
            setUpdate([])
        }
    }

    const actuaCierra = () => {
        setDosabrir(!dosabrir)
    }

    useEffect(() => {
        data();
        setSpiner(!spiner)

    }, [reload]);
    return {
        onInputChange,
        onSubmit,
        logout,
        data,
        onCheck,
        onActualiza,
        reload,
        emails,
        password,
        paquetes,
        spiner, toggleActualizaModal, open,
        seguimiento, email, estado, peso, total, onChangeModal, cerrar, id, Editar, usuarios, auth,
        crearPaquete,
        onCreate,
        correo,
        track,
        libra,
        costoso,
        planes, contrasena, usuario,
        role,
        plan, onCreateUser, toggleActualiza, dosabrir, actuaCierra, onUpdateUser

    }
}
