
import Button from '../../components/ButtonEventos/ButtonEventos'
import GaleriaServicos from '../../components/GaleriaServicos/GaleriaServicos'
import Menu from '../../components/Menu/Menu'
import './style.scss'

export default function Servicos() {
  return (
    <>
      <main>
        <Menu />

        <section className='servicos'>
          <GaleriaServicos />



        </section>

        <section className='agendar-evento'>
          <div className='container-agendar-evento'>
            <div className='title-agendar-evento'>
              <h1>Pensando no <br></br>seu evento?</h1>
            </div>

            <div className='buttons-agendar-evento'>
              <Button>
                Vamos Conversar
              </Button>
              
              <Button>
                Vejas nossos eventos
              </Button>

            </div>
          </div>

        </section>


      </main>

    </>
  )
}