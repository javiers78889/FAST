
import { Barrita } from '../widgets/Paqueteria/Barrita'
import { Tabla } from '../widgets/Paqueteria/Tabla'
import { Modal } from '../widgets/Modal/Modal'
import { ModalActualiza } from '../widgets/Modal/ModalActualiza'

export const Paqueteria = () => {
  

    
    return (
        <section className="bg-gray-50 bg-gradient-to-b from-blue-600 to-gray-900 py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <Modal/>
                    <ModalActualiza/>
                    <Barrita />
                    <Tabla />
                
                    
                </div>
            </div>
        </section>
    )
}
