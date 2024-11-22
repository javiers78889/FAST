import amazon from '../svg/amazon-ar21.svg'
import ebay from '../svg/ebay-ar21.svg'
import aliexpress from '../svg/aliexpress-ar21.svg'
import alibaba from '../svg/alibabagroup-icon.svg'
import wallmart from '../svg/walmart-ar21.svg'

export const Recomended = () => {
    return (
        <div id='recomendadas' className="bg-gradient-to-b from-blue-900 to-black py-24 sm:py-32 ">
            <div className=' flex justify-center items-center'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-9 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    />
                </svg>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="mt-2 text-balance text-center text-4xl font-semibold tracking-tight text-yellow-300 sm:text-6lg ">
                    Tiendas Recomendadas

                </p>

                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        alt="Transistor"
                        src={amazon}
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 shadow-[0_0_10px_2px_#fff,0_0_20px_4px_#fff,0_0_30px_6px_#fff] bg-yellow-200"
                    />
                    <img
                        alt="Reform"
                        src={ebay}
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 shadow-[0_0_10px_2px_#fff,0_0_20px_4px_#fff,0_0_30px_6px_#fff] bg-green-200"
                    />
                    <img
                        alt="Tuple"
                        src={aliexpress}
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 shadow-[0_0_10px_2px_#fff,0_0_20px_4px_#fff,0_0_30px_6px_#fff] bg-red-200"
                    />
                    <img
                        alt="SavvyCal"
                        src={alibaba}
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 shadow-[0_0_10px_2px_#fff,0_0_20px_4px_#fff,0_0_30px_6px_#fff] bg-orange-200"
                    />
                    <img
                        alt="Statamic"
                        src={wallmart}
                        width={158}
                        height={48}
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 shadow-[0_0_10px_2px_#fff,0_0_20px_4px_#fff,0_0_30px_6px_#fff] bg-blue-200"
                    />
                </div>
            </div>
        </div>
    )
}
