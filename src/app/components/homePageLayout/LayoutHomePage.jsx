import Boton from "../Boton"
import { texto } from "./textosLayoutInicio.js" //texttos en las tarjetas de inicio sobre crear TAG y buscar TAG

const LayoutHomePage = () => {
  return (

    <div className="overflow-hidden">
      <div className="flex flex-col text-center items-center justify-center">
        <div className="flex flex-col h-56">
          <div className="w-3/5 min-h-full">
            <p contentEditable="false" className="text-slate-400 hover:text-slate-200 transition-colors duration-1000 ease-in-out m-1 p-7 rounded-xl min-h-full text-lg lg:text-1xl font-sans text-justify justify-center items-center ">

                {texto.textoBeneficiosAcondicionamientoConCopilotSystem}

            </p>
          </div>
        </div>

        <div className="w-5/6 min-h-72 relative z-0 transform -rotate-x-4 -rotate-y-6 absolute top-2/4 transform -translate-y-1/4">
          <div className="w-2/5 min-h-full">
            <p contentEditable="false" className="text-slate-400 hover:text-slate-200 transition-colors duration-1000 ease-in-out bg-gradient-to-br from-slate-950 to-slate-900 
            m-1 p-7 rounded-xl min-h-full text-lg lg:text-1xl font-sans text-justify justify-center items-center ">

                {texto.textoBeneficiosAcondicionamientoConCopilotSystem}

            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
export default LayoutHomePage;
