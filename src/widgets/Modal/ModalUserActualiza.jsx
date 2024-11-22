import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

export const ModalUserActualiza = () => {
    const { dosabrir, onChangeModal, onUpdateUser, email, usuario, role, plan,actuaCierra} = useContext(UserContext)


    return dosabrir ? (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

            <div
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden"
            >
                <div className="relative p-4 w-full max-w-md">
                    {/* Contenido del modal */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Encabezado del modal */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Actualiza Un Usuario
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={actuaCierra}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/* Cuerpo del modal */}
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" onSubmit={onUpdateUser}>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email de Cliente
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={onChangeModal}
                                        placeholder="Email del cliente"

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Usuario
                                    </label>
                                    <input
                                        type="text"
                                        name="usuario"
                                        id="usuario"
                                        value={usuario}
                                        onChange={onChangeModal}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="tracking"
                                        required
                                    />
                                </div>
                         


                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Role
                                    </label>
                                    <select id="countries" value={role} onChange={onChangeModal} name='role' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                        <option value="">Elige un Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>

                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Plan
                                    </label>
                                    <select id="countries" value={plan} onChange={onChangeModal} name='plan' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                        <option value="">Elige un Plan</option>
                                        <option value="Aereo">Aereo</option>
                                        <option value="admin">Admin</option>
                                        <option value="Maritimo">Maritimo</option>

                                    </select>
                                </div>


                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Actualizar Usuario
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null
}
