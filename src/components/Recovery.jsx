import { Link } from "react-router-dom"
import paper from '../img/ags.png'
import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import { ModalPassword } from "../widgets/Modal/ModalPassword"
import { Footer } from "./Footer"

export const Recovery = () => {
    const { Recover, onChangeRecover, cambio } = useContext(UserContext)
    const { emails, usuario, carga: spiner } = cambio


    return (
        <>
        <ModalPassword/>
            <section className="bg-gradient-to-b from-blue-600 to-yellow-100 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img
                            alt="Your Company"
                            src={paper}
                            className="h-20 w-auto"
                        />
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red-900 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Cambiar Password

                            </h1>

                            <form className="space-y-4 md:space-y-6" onSubmit={Recover}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Su Correo</label>
                                    <input onChange={onChangeRecover} value={emails} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                    <input onChange={onChangeRecover} value={usuario} type="text" name="usuario" id="password" placeholder="juan perezPDG####" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-center justify-between">


                                </div>
                                {spiner ? (
                                    <div className="flex items-center justify-center  ">
                                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-t-transparent"><img src={paper} alt="" /></div>
                                    </div>

                                ) : (
                                    <>
                                        <button type="submit" className="w-full text-white bg-yellow-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Validar</button>
                                        <Link className="w-full text-white bg-red-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 my-4" to={"/login"}>
                                            Volver
                                        </Link>
                                    </>

                                )}


                                <br />

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
