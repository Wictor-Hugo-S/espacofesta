import { useState } from "react";
import Button from '../ButtonEventos/ButtonEventos';
import { imageObjects } from './imagesObjects';
import './style.scss';

export default function GaleriaEventos() {

    const [isLoading, setLoading] = useState(false);
    const [galeria, setGaleria] = useState(imageObjects);
    const [visibleItems, setVisibleItems] = useState(3);
    const[totalItems, setTotalItems] = useState<number| null>(3)

    const handleClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setVisibleItems((prevVisibleItems) => {
                console.log(prevVisibleItems)
                const nextVisibleItems = prevVisibleItems + 3;
                setTotalItems(nextVisibleItems)
                return nextVisibleItems
            });
        }, 3000);

      
    };

    const handleShowLess = () => {
        setLoading(true);
        console.log('visible'+visibleItems)
        setTimeout(() => {
            setLoading(false);
            setVisibleItems((prevVisibleItems) => {
            if(prevVisibleItems>3){
                return prevVisibleItems -3 ;
            }
            else{
                return 3

            }
            });
        }, 3000);

        console.log(visibleItems)
        console.log(galeria.length)
    };

    return (
        <>
            <section className="eventos">
                <div className="container-eventos">
                    <div className="texto-eventos">
                        <h1>Galeria de eventos</h1>
                    </div>
                    <div className='imagens-eventos'>
                        {galeria.slice(0, visibleItems).map((item, index) => (
                            <img key={index} src={item.image} alt={`Imagem ${index + 1}`} />
                        ))}
                    </div>

                    {visibleItems < galeria.length &&(
                        <Button onClick={handleClick}>
                            {isLoading ? 'Carregando...' : 'Ver mais'}
                        </Button>
                    ) }
                       { visibleItems > 3 && (
                            <Button onClick={handleShowLess}>
                                {isLoading ? 'Carregando...' : 'Ver Menos'}
                            </Button>
                        )}
                    
                </div>
            </section>
        </>
    );
}
