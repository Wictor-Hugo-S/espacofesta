

import { servicosObjects } from './ServicosObejcts'
import './style.scss'

export default function GaleriaServicos() {
    return (

        <>

            <section className="servicos-galeria">

                <div className="container-servicos">
                    <div className="texto-servicos">
                        <h1>O que oferecemos?</h1>

                    </div>
                    <div className='wrapper-servicos'>



                        {servicosObjects.map((item) => {
                            return (
                                <>
                                    <div className='teste'>
                                        <div key={item.id} className='boxes-servicos'>
                                            <div className='images-servicos'>
                                                <img src={item.image}></img>
                                            </div>


                                        </div>

                                        <div className='boxes-title-servicos'>
                                            <span>Mesas</span>
                                        </div>
                                        <div className='descricao-servicos'>
                                            <p>{item.descricao}</p>
                                        </div>
                                    </div>

                                </>
                            )
                        })}


                    </div>
                </div>


            </section>





        </>

    )
}