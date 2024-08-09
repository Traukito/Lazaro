import Boton from "../Boton"
import { texto } from "./textosLayoutInicio.js" //texttos en las tarjetas de inicio sobre crear TAG y buscar TAG

const LayoutHomePage = () => {
  return (

    //Envoltorio principal
    <div className="p-1 bg-slate-800 rounded-2xl overflow-hidden">


      {/*Envoltorio secundario-superior 1 columna*/}
      <div className="grid grid-cols-1 grid-rows-1 items-center text-center justify-items-end">
        <p title="Bienvenido a la 4° revolución industrial" className='invisible md:visible md:m-1 md:p-1 text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-200 italic text-center w-min'>
          {/* Industria 4.0 */}
        </p>
      </div>

      {/*Envoltorio secundario-inferior*/}
      {/* <div className="mt-1 gap-2 md:gap-2 grid grid-cols-1 md:grid-cols-2 text-center items-center"> */}
      {/* Es una modificación del div anterior. Le quité el md:grid-cols-2*/}
      <div className="mt-1 gap-2 md:gap-2 grid grid-cols-1 text-center items-center">



        {/*contenedor superior (o izquierdo)  dividido en 2 filas*/}
        <div className="flex flex-row min-h-full border-1 border-slate-500 rounded-3xl">
          {/* Columna Izquierda - 2/3 */}
          <div className="w-2/4">
            <p contentEditable="false" className="min-h-full mt-3 mx-3 p-3 text-xs md:text-lg lg:text-1xl leading-normal md:leading-relaxed lg:leading-loose text-slate-100 italic text-left justify-center items-start">
              {texto.textoTargetaIzquierda}
            </p>
          </div>

          {/* Columna Derecha - 1/3 */}
          <div className="w-2/4 flex justify-center items-center">
            <Boton text='Generar' routePage='./generaTag' atajoTeclado='Alt+t' />
          </div>
        </div>

        {/* <div className="flex flex-row grid-cols-2 min-h-full border-2 border-slate-500 rounded-3xl"> 
          <p contentEditable="false" className="min-h-full mt-3 mx-3 p-3 text-xl md:text-1xl lg:text-2xl leading-normal md:leading-relaxed lg:leading-loose text-slate-100 italic text-center justify-center items-start">
            {texto.textoTargetaIzquierda}
          </p>
          <div className="flex justify-center items-end">
            <Boton text='Generar' routePage='./generaTag' atajoTeclado='Alt+t' />
          </div>
        </div> */}

        {/*contenedor inferior (o derecho) dividido en 2 filas*/}
        <div className="min-h-full border-2 border-slate-400 rounded-3xl">
          <p contentEditable="false" className="min-h-full m-3 p-3 text-xl md:text-1xl lg:text-2xl leading-normal md:leading-relaxed lg:leading-loose text-slate-100  italic text-center justify-center items-start">
            {texto.textoTarjetaDerecha}
          </p>
          <div className="flex text-center justify-center justify-items-end items-end">
            <Boton text='Buscar' routePage='./buscarTag' />
          </div>

        </div>

      </div>

    </div>
  )
}
export default LayoutHomePage;
