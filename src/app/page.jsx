import LayoutHomePage from "./components/homePageLayout/LayoutHomePage";
import { prisma } from "@/libs/prisma";

const ultimoID = async () => {
  const ultimo = await prisma.codeTagActivoFijo.findFirst({
    orderBy: { id: 'desc' }
  })
  console.log("desde el principal:  " + Number(ultimo.id))
}

 const page = () => {

  ultimoID()
   return (
     <div>
      <LayoutHomePage />
     </div>
   )
 }
 
 export default page;