import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

export const Options = () => {
    const { auth } = useContext(UserContext)
  const user = auth
    return (
        <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
            <ul className="flex items-center gap-5">
                <li>
                    <a href="javascript:;" className="flex items-center gap-2 cursor-pointer group">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.5 14.0902L7.5 14.0902M2.5 9.09545V14.0902C2.5 15.6976 2.5 16.5013 2.98816 17.0006C3.47631 17.5 4.26198 17.5 5.83333 17.5H14.1667C15.738 17.5 16.5237 17.5 17.0118 17.0006C17.5 16.5013 17.5 15.6976 17.5 14.0902V10.9203C17.5 9.1337 17.5 8.24039 17.1056 7.48651C16.7112 6.73262 15.9846 6.2371 14.5313 5.24606L11.849 3.41681C10.9528 2.8056 10.5046 2.5 10 2.5C9.49537 2.5 9.04725 2.80561 8.151 3.41681L3.98433 6.25832C3.25772 6.75384 2.89442 7.0016 2.69721 7.37854C2.5 7.75548 2.5 8.20214 2.5 9.09545Z"
                                stroke="black"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="font-medium text-base leading-7 text-gray-900">Home</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" className="flex items-center gap-2 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
                            <path
                                d="M4.12567 1.13672L1 18.8633"
                                stroke="#E5E7EB"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="font-medium text-base leading-7 text-gray-400">Account</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" className="flex items-center gap-2 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
                            <path
                                d="M4.12567 1.13672L1 18.8633"
                                stroke="#E5E7EB"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="font-medium text-base leading-7 text-gray-400">Profile</span>
                        <span className="rounded-full py-1.5 px-2.5 bg-indigo-50 flex items-center justify-center font-medium text-xs text-indigo-600">
                            New
                        </span>
                    </a>
                </li>
            </ul>
            <div className="flex items-center gap-4">
           
                <a href="https://wa.me/50767316173?text=Hola,%20estoy%20interesado%20en%20abrir%20un%20casillero" className="rounded-full border border-solid border-gray-300 bg-gray-50 py-3 px-4 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-50 hover:bg-gray-100 hover:border-gray-300">
                    Message
                </a>
                {user.role === 'admin' ? (
                    <Link to={'/profile/usuarios'} className="rounded-full border border-solid border-indigo-600 bg-blue-600 py-3 px-4 text-sm font-semibold text-white whitespace-nowrap shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-indigo-700 hover:border-indigo-700">
                        Ver Usuario
                    </Link>
                ) : ('')}

            </div>
        </div>
    )
}
