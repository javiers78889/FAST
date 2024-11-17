
import { useLoading } from "../hooks/useLoading"
import { usePaquetes } from "../hooks/usePaquetes"
import { UseUser } from "../hooks/UseUser"
import { useValidation } from "../hooks/useValidation"
import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {
  const { isLoading } = useLoading()
  const { onChange, onInput, onFind, tracking, rastreo, buscando, filtro, toggleModal, isOpen } = UseUser()
  const { onInputChange, onSubmit, logout, email, password, paquetes, reload, spiner, onCheck, onActualiza } = useValidation()


  return (
    <UserContext.Provider value={{
      isLoading, onChange, onInput,
      tracking, rastreo, buscando, email, password, paquetes, filtro, spiner, isOpen, reload, logout, onFind, toggleModal, onCheck, onActualiza,
      onInputChange, onSubmit
    }}>
      {children}
    </UserContext.Provider>
  )
}
