import './style.scss'



type ButtonProps = {
   children:string,
  onClick?:()=>void


}

export default function Button({onClick,children}:ButtonProps) {

    return (
        <>

            <div className='buttons-agendar-evento'>
               
               <button onClick={onClick}> {children} </button>

            </div>

        </>
    )
}