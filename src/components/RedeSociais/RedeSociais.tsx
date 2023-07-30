import { CiFacebook, CiInstagram } from 'react-icons/ci'
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineCloseCircle,AiOutlineWhatsApp } from 'react-icons/ai'


import './style.scss'
export default function RedeSociais() {
    return (
        <>

            <div className='redes-sociais'>

                <div className="wrapper-redes-sociais">
                    <div className="icons">
                    <AiOutlineWhatsApp size={26}/>
                        <CiFacebook />
                        <CiInstagram />
                       
                    </div>

                    <div className="telephone">
                        {/* <BsFillTelephoneFill/> */}
                        <p>(81)99764-7606</p>
                    </div>

                </div>

            </div>

        </>
    )
}