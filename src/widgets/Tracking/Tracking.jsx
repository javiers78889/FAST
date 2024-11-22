
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { Decoracion } from './Decoracion'
import { Resultado } from './Resultado'
import ags from '../../img/ags.png'
import { Recomended } from '../Recomended'
export const Tracking = () => {
    const { onChange, onInput, rastreo, tracking, buscando } = useContext(UserContext)
    return (
        <>
            <div className="relative isolate  bg-gradient-to-b from-blue-600 to-blue-900 py-16 sm:py-24 lg:py-40 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 my-16">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-4xl font-semibold tracking-tight text-white ">Rastrea tu paquete a nivel mundial</h2>
                            <p className="mt-4 text-lg text-gray-300">
                                Introduce tu Número de Tracking
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="Tracking Number" className="sr-only">
                                    Tracking Number
                                </label>
                                <input
                                    id="email-address"
                                    name="tracking"
                                    type="email"
                                    value={tracking}
                                    onChange={onChange}
                                    required
                                    placeholder="Enter your Tracking"
                                    autoComplete="email"
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    onClick={onInput}
                                >
                                    Rastrear
                                </button>
                            </div>
                        </div>
                        {rastreo ? (
                            <Resultado />

                        ) : (

                            buscando ? (

                                <div className="flex items-center justify-center  ">
                                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-t-transparent"><img src={ags} alt="" /></div>
                                </div>


                            ) : (
                                <Decoracion />
                            )
                        )}

                    </div>
                </div>
                <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
            </div>
            <Recomended />
        </>
    )
}
