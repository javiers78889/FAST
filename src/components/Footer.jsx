import ags from '../img/ags.png'

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img
                                src={ags}
                                className="h-12 me-3 "
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Fast Shipping AGS
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sucursales</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://wa.me/50761125919?text=Hola,%20estoy%20interesado%20en%20abrir%20un%20casillero%20en%20Chorrera" className="hover:underline">La Chorrera</a>
                                </li>
                                <li>
                                    <a href="https://wa.me/50761125919?text=Hola,%20estoy%20interesado%20en%20abrir%20un%20casillero%20en%20Villa%20Lucre" className="hover:underline">Villa Lucre</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siguenos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.instagram.com/fastshippingags?igsh=MTF5Nmw2dTV6eTQ2cA==" className="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/fastshippingags?igsh=MTF5Nmw2dTV6eTQ2cA==" className="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2019 <a href="#" className="hover:underline">Fast Shipping AGS</a>. Todos Los Derechos Reservados.
                    </span>
                    
                </div>
            </div>
        </footer>
    )
}
