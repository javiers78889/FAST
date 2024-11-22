
import { Slider } from '../widgets/Slider/Slider'
import { Servicios } from '../widgets/Servicios'
import { Planes } from '../widgets/Planes'
import { ConteoPersonas } from '../widgets/ConteoPersonas'
import { Recomended } from '../widgets/Recomended'


export const Inicio = () => {
    return (
        <>
            
            <Slider />
            <Servicios />
            <Planes />
            <ConteoPersonas />
            <Recomended />
            
        </>
    )
}
