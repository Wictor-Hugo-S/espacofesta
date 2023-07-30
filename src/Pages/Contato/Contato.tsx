import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'


import './style.scss'
import { useState } from "react";
import { duvidasObjetos } from "./duvidasObjetos";
import Button from "../../components/ButtonEventos/ButtonEventos";


type DuvidaObjeto = {
    id: number;
    isActive: boolean;
    pergunta: string;
    resposta: string;

};



export default function Contato() {

    const [duvidas, setDuvidas] = useState<DuvidaObjeto[]>(duvidasObjetos);

    const handleClick = (id: number) => {

        setDuvidas((prevPergunta) => {
            const updatedDuvidasObjetos = prevPergunta.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        isActive: !item.isActive,
                    };
                }

                return item


            });

            return updatedDuvidasObjetos;
        });
    };



    return (
        <>
            <main>
                <Header />

                <section className="duvidas">
                    <div className="container-duvidas">
                        <div className="title-duvidas">

                            <h1>Dúvidas Frequentes</h1>

                        </div>

                        <div className="wrapper-duvidas">
                            {duvidas.map((item) => {
                                return (
                                    <>

                                        <div key={item.id} className="box-duvidas">

                                            <div onClick={() => handleClick(item.id)} className="pergunta">
                                                <span> {item.pergunta}</span>

                                            </div>
                                            <div className="icon-duvidas">
                                                {item.isActive ? (
                                                    <MdKeyboardArrowDown size={17} />
                                                ) : (
                                                    <MdKeyboardArrowUp size={17} />
                                                )}

                                            </div>
                                        </div>
                                        {item.isActive && (
                                            <div className="respotas">
                                                <p>{item.resposta} </p>
                                            </div>
                                        )}


                                        <div className="border-bottom"></div>


                                    </>
                                )
                            })}

                            <div className="texto-duvida">
                                <h1>Ainda tem dúvida?</h1>

                                <Button>
                                    Fale Conosco
                                </Button>
                            </div>

                        </div>


                    </div>
                </section>



                <Form />


            </main >


        </>
    )
}