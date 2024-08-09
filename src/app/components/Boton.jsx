'use client';
import { useRouter } from "next/navigation";


const Boton = ({ text, routePage,  atajoTeclado}) => {
  const router = useRouter();  

  return (
    <div>
      <button className="m-5 p-7 rounded-3xl bg-teal-800 transition ease-in-out duration-1000 hover:bg-teal-600"
      onClick={() => {router.push(routePage)}} accessKey={atajoTeclado}>
        {text}
      </button>
    </div>
  );
};
export default Boton;
