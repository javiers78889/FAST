import  { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext'

export const Normalin = ({n}) => {
    const { onCheck } = useContext(UserContext)
    return (
        <tr key={n.tracking} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="w-4 px-4 py-3">
          <div className="flex items-center">
                    <input
                        id={`checkbox-${n.tracking}`}
                        type="checkbox"
                        onClick={()=>onCheck(n.id)}
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={`checkbox-${n.tracking}`} className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image" className="w-auto h-8 mr-3" />
                {n.id}
            </th>
            <td className="px-4 py-2">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{n.email}</span>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                  
                    {n.usuario}
                </div>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{n.role}</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-gray-400" aria-hidden="true">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    {n.plan}
                </div>
            </td>
            <td className="px-4 py-2">{n.createdAt}</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{n.updatedAt}</td>
        </tr>
    )
}
