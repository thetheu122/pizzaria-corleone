import Lottie from 'react-lottie'

import NosJSON from '../../../assets/lottieJSON/perfil.json'

export const SobreNos = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NosJSON 
    }

    return <Lottie options={defaultOptions} width={200} height={200}/>
}