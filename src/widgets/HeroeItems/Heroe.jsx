import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import paper from '../../img/ags.png'

const navigation = [
  { name: 'Inicio', to: '/', current: false },
  { name: 'Servicios', to: '#servicios', current: false },
  { name: 'Planes', to: '#planes', current: false },
  { name: 'Clientes', to: '#clientes', current: false },
  { name: 'Recomendadas', to: '#recomendadas', current: false },
  { name: 'Bodega', to: 'https://fuzioncargo.com/seguimiento-v2/', current: false },
  { name: 'Rastrear', to: '/tracking', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Heroe = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Función para hacer scroll suave a la sección
  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const cierraModal = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <Disclosure as="nav" className="bg-white shadow-2xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to='/'>
                <img
                  alt="Your Company"
                  src={paper}
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-80 sm:mt-5 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  // Si es un link interno, usamos handleScrollTo
                  item.to.startsWith('#') ? (
                    <button
                      key={item.name}
                      onClick={() => handleScrollTo(item.to.slice(1))}  // Eliminar '#' al pasar como id
                      className={classNames(
                        item.current ? 'bg-purple-900 hover:scale-110 text-white' : 'text-gray-900 font-semibold hover:bg-purple-700 hover:scale-110 hover:text-white',
                        'rounded-md px-3 py-2 text-normal font-medium'
                      )}
                    >
                      {item.name}
                    </button>
                  ) : (
                    // Si es un link a una página externa, usamos el NavLink
                    <NavLink
                      key={item.name}
                      to={item.to}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-purple-900 hover:scale-110 text-white' : 'text-gray-900 font-semibold hover:bg-purple-700 hover:scale-110 hover:text-white',
                        'rounded-md px-3 py-2 text-normal font-medium'
                      )}
                    >
                      {item.name}
                    </NavLink>
                  )
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  
                
                    <UserIcon className="h-8 w-7 text-white hover:text-blue-500 transition duration-300" />
                
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Login
                  </NavLink>
                </MenuItem>
               
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            item.to.startsWith('#') ? (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.to.slice(1))}  // Eliminar '#' al pasar como id
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </button>

            ) : (
              <NavLink
                key={item.name}
                as="a"
                to={item.to}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </NavLink>

            )

          ))}
        </div>
      </DisclosurePanel>
    </Disclosure >
  )
}
