
import { Options } from './Options'
import { Redes } from './Redes'
import paper from '../../img/oficial.png'
import dog from '../../img/ags.png'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
export const MenuInicio = () => {
    const{auth}=useContext(UserContext)
    const datostoken = auth

    return (
        <section className="relative pt-36 pb-24 ">
            <img
                src={paper}
                alt="cover-image"
                className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
            />
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center  justify-center relative z-10 mb-2.5">
                    <img
                        src={dog}
                        alt="user-avatar-image"
                        className="border-4 border-solid bg-yellow-400 border-white rounded-tl-lg object-cover h-36  "
                    />
                </div>
                <Options />
                <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900 mb-3">Bienvenido</h3>
                <p className="font-normal text-base leading-7 text-gray-500 text-center mb-8">
                {datostoken.usuario}
                </p>
                <Redes />
            </div>
        </section>
    )
}
