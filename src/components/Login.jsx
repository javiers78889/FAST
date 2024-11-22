import { useContext } from "react"
import { UserContext } from "../Context/UserContext"
import paper from '../img/ags.png'
import { Link } from "react-router-dom"

export const Login = () => {
    const { emails, password, onInputChange, onSubmit, spiner } = useContext(UserContext)


    return (
        <section className="bg-gradient-to-b from-purple-600 to-purple-400 dark:bg-gradient-to-b dark:from-yellow-600 dark:to-blue-400">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img
                        alt="Your Company"
                        src={paper}
                        className="h-20 w-auto"
                    />
                </div>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Bienvenido

                        </h1>

                        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Su Correo</label>
                                <input onChange={onInputChange} value={emails} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input onChange={onInputChange} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-center justify-between">

                                <Link to='/recovery' className="text-sm font-medium text-white hover:underline dark:text-primary-500">Olvidó su Contraseña?</Link>
                            </div>
                            {spiner ? (
                                <div className="flex items-center justify-center  ">
                                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-t-transparent"><img src={paper} alt="" /></div>
                                </div>

                            ) : (

                                <button type="submit" className="w-full text-white bg-yellow-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            )}

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                No tienes cuenta aún? <a href="https://wa.me/50767316173?text=Hola,%20estoy%20interesado%20en%20abrir%20un%20casillero" className="font-medium text-white hover:underline dark:text-primary-500">Regístrate</a>
                            </p>
                            <br />
                            <Link className="w-full text-white bg-red-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 my-4" to={"/"}>
                                Volver
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
