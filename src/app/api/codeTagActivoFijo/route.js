import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";


export async function GET() {
  const codesActives = await prisma.codeTagActivoFijo.findMany();
  console.log(codesActives);
  return NextResponse.json(codesActives);
}

export async function POST(request) {
  const {
    instalacion,
    edificio,
    emplazamiento,
    atiende,
    clasificacion,
    conRequisito,
    nivelOperacional,
    sistema,
    activoFijo,
    componente,
    auxiliar,
    correlativo,
    codeActivo,
    userCreater,
  } = await request.json();

  const newCodeActive = await prisma.codeTagActivoFijo.create({
    data: {
      instalacion,
      edificio,
      emplazamiento,
      atiende,
      clasificacion,
      conRequisito,
      nivelOperacional,
      sistema,
      activoFijo,
      componente,
      auxiliar,
      correlativo,
      codeActivo,
      userCreater,
    },
  });
  return NextResponse.json(newCodeActive);
}
