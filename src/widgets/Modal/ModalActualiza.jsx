import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

export const ModalActualiza = () => {
    const { open, cerrar,seguimiento, email,Editar, estado, peso, total,id,onChangeModal } = useContext(UserContext)
    return open ? (
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
                                Actualiza un Paquete
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={cerrar}
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
                            <form className="space-y-4" onSubmit={Editar}>
                                <div>
                                    
                                    <input
                                        type="number"
                                        name="id"
                                        id="id"
                                        value={id}
                                        onChange={onChangeModal}
                                        className="bg-gray-50 border hidden border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email de Cliente
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        placeholder="Email del cliente"
                                        onChange={onChangeModal}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Tracking
                                    </label>
                                    <input
                                        type="text"
                                        name="tracking"
                                        id="tracking"
                                        value={seguimiento}
                                        onChange={onChangeModal}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="tracking"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Peso/Volúmen
                                    </label>
                                    <input
                                        type="number"
                                        name="peso"
                                        id="peso"
                                        value={peso}
                                        
                                        onChange={onChangeModal}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Ingresa El peso o volúmen"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Total
                                    </label>
                                    <input
                                        type="number"
                                        name="total"
                                        id="total"
                                        value={total}
                                        onChange={onChangeModal}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Ingresa El peso o volúmen"
                                        required
                                    />
                                </div>
                               
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Plan
                                    </label>
                                    <select id="countries" onChange={onChangeModal} value={estado} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        
                                        <option value="Entregado">Entregado</option>
                                        <option value="pendiente">pendiente</option>

                                    </select>
                                </div>


                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Actualizar Paquete
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null
}
