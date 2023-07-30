import GaleriaEventos from "../../components/GaleriaEventos/GaleriaEventos";
import Header from "../../components/Header/Header";



import './style.scss'

export default function Sobre() {
    return (
        <>
            <main>

                <Header />

                <GaleriaEventos />


                <section className='feedback'>

                    <div className='container-feedback'>
                        <div className='wrapper-feedback'>
                            <div className='texto-feedback'>
                                <h1>O que dizem por aí ... </h1>
                            </div>
                            <div className="subtitle-feedback">
                                <h3>
                                    Superou todas as minhas expectativas</h3>
                            </div>

                            <div className="box-descricao">

                                <div className="descricao">
                                    <p>
                                        "Sou um depoimento. Clique aqui para editar seu próprio texto. Você também pode alterar a fonte e mais. Use este espaço para compartilhar algo bom sobre você e seus serviços."
                                    </p>
                                </div>
                                <div className="title">
                                    <span>Wictor Hugo</span>
                                </div>
                                <div className="rating">

                                    <span>
                                        Avaliação
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}