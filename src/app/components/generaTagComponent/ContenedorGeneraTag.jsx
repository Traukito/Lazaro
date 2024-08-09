"use client";

import { useState } from "react";
import { generateNonce } from "./nonceGenerate";

const nonceGenerated = generateNonce(4);

const ContenedorGeneraTag = () => {
  const [showInstalacion, setShowInstalacion] = useState(true);
  const [showEdificio, setShowEdificio] = useState(false);
  const [showEmplazamiento, setShowEmplazamiento] = useState(false);
  const [showAtiende, setShowAtiende] = useState(false);
  const [showServicio, setShowServicio] = useState(false); // CODIFICADO EL 25-07-2024
  const [showClasificacion, setShowClasificacion] = useState(false);
  const [showRequisito, setShowRequisito] = useState(false);
  const [showNivelOperacional, setShowNivelOperacional] = useState(false);
  const [showSistema, setShowSistema] = useState(false);
  const [showActivo, setShowActivo] = useState(false);
  const [showSubActivo, setShowSubActivo] = useState(false);
  const [showComponente, setShowComponente] = useState(false);
  const [showProveedorServicios, setShowProveedorServicios] = useState(false); // CODIFICADO EL 04-08-2024
  const [showAuxiliar, setShowAuxiliar] = useState(false);
  const [showDetalles, setShowDetalles] = useState(false);

  // Estados para almacenar las selecciones de cada sección
  const [selectedInstalacion, setSelectedInstalacion] = useState("$eo|Gj");
  const [selectedEdificio, setSelectedEdificio] = useState("l01KvC");
  const [selectedEmplazamiento, setSelectedEmplazamiento] = useState("5oP3j4I");
  const [selectedAtiende, setSelectedAtiende] = useState("R&#Fs");
  const [selectedServicio, setSelectedServicio] = useState("7Nl#Mos"); //CREAR CÓDIGO (25-07-2024)
  const [selectedClasificacion, setSelectedClasificacion] = useState("QnNm$");
  const [selectedRequisito, setSelectedRequisito] = useState("y$JjK");
  const [selectedNivelOperacional, setSelectedNivelOperacional] = useState("Qh%E&");
  const [selectedSistema, setSelectedSistema] = useState("Y-k$$G");
  const [selectedActivo, setSelectedActivo] = useState("xfdDDDx");
  const [selectedSubActivo, setSelectedSubActivo] = useState("egjdbRK"); //CODIFICADO 24-07-2024
  const [selectedComponente, setSelectedComponente] = useState("iuzTgmG");
  const [selectedProveedorServicios, setSelectedProveedorServicios] = useState("3rh0E");
  // const [selectedAuxiliar, setSelectedAuxiliar] = useState("");

  const [codeState, setCodeState] = useState(
    "COPIAR EL CÓDIGO DE ESTE RECUADRO"
  );

  const handleshowInstalacionChange = () => {
    setShowInstalacion(!showInstalacion);
    setShowEdificio(!showEdificio);
  };
  const handleshowEdificioChange = () => {
    setShowEdificio(!showEdificio);
    setShowEmplazamiento(!showEmplazamiento);
  };
  const handleshowEmplazamientoChange = () => {
    setShowEmplazamiento(!showEmplazamiento);
    setShowAtiende(!showAtiende);
  };
  const handleshowAtiendeChange = () => {
    setShowAtiende(!showAtiende);
    setShowServicio(!showServicio);
  };
  const handleshowServicioChange = () => { //CODIFICADO EL 25-07-2024
    setShowServicio(!showServicio);
    setShowClasificacion(!showClasificacion);
  };
  const handleshowClasificacionChange = () => {
    setShowClasificacion(!showClasificacion);
    setShowRequisito(!showRequisito);
  };
  const handleshowRequisitoChange = () => {
    setShowRequisito(!showRequisito);
    setShowNivelOperacional(!showNivelOperacional);
  };
  const handleshowNivelOperacionalChange = () => {
    setShowNivelOperacional(!showNivelOperacional);
    setShowSistema(!showSistema);
  };
  const handleshowSistemaChange = () => {
    setShowSistema(!showSistema);
    setShowActivo(!showActivo);
  };
  const handleshowActivoChange = () => {
    setShowActivo(!showActivo);
    setShowSubActivo(!showSubActivo);
  };
  const handleshowSubActivoChange = () => { //INCORPORADO 24-07-2024
    setShowSubActivo(!showSubActivo);
    setShowComponente(!showComponente);
  };
  const handleshowComponenteChange = () => {
    setShowComponente(!showComponente);
    setShowProveedorServicios(!showProveedorServicios);
  };
  const handleshowProveedorServiciosChange = () => { //INCORPORADO 04-08-2024
    setShowProveedorServicios(!showProveedorServicios);
    setShowAuxiliar(!showAuxiliar);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault(); // Evita el envió del formulario y la recarga de la página por defecto

    setCodeState(
      selectedInstalacion +
        selectedEdificio +
        selectedEmplazamiento +
        selectedAtiende +
        selectedServicio +
        selectedClasificacion +
        selectedRequisito +
        selectedNivelOperacional +
        selectedSistema +
        selectedActivo +
        selectedSubActivo +
        selectedComponente +
        selectedProveedorServicios +
        nonceGenerated
    );
   
    const data = {
      instalacion: selectedInstalacion,
      edificio: selectedEdificio,
      emplazamiento: selectedEmplazamiento,
      atiende: selectedAtiende,
      servicio: selectedServicio,
      clasificacion: selectedClasificacion,
      conRequisito: selectedRequisito,
      nivelOperacional: selectedNivelOperacional,
      sistema: selectedSistema,
      activoFijo: selectedActivo,
      subActivoFijo: selectedSubActivo,
      componente: selectedComponente,
      proveedorServicio: selectedProveedorServicios,
      // auxiliar: selectedAuxiliar,
      correlativo: nonceGenerated,
      codeActivo:
        selectedInstalacion +
        selectedEdificio +
        selectedEmplazamiento +
        selectedAtiende +
        selectedServicio +
        selectedClasificacion +
        selectedRequisito +
        selectedNivelOperacional +
        selectedSistema +
        selectedActivo +
        selectedSubActivo +
        selectedComponente +
        selectedProveedorServicios +
        nonceGenerated,

      userCreater: "marcos.amaya@usach.cl",
    };


    //Dentro de este Try/Catch se encuentra el código que guarda los datos a través del ORM Prisma
    try {
      const response = await fetch("/api/codeTagActivoFijo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar datos");
      }
      const newData = await response.json();
      console.log("Nuevo código activo:", newData);
      setShowDetalles(!showDetalles)

    } catch (error) {
      console.error("Error al enviar datos:", error);
    } 
  
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        <form onSubmit={handlerSubmit}>



          {showInstalacion && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Instalación
              </label>
              <select
                name="selectInstalacion"
                className="block bg-slate-800 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedInstalacion} // Establecer el valor seleccionado
                onChange={(e) => setSelectedInstalacion(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className={twClass.inputOption} value="$eo|Gj">
                  Sucursal Principal
                </option>
                <option className={twClass.inputOption} value="JQu007">
                  CM Antonio Varas
                </option>
                <option className={twClass.inputOption} value="c$u&tl"> {/*AGREGAR A LA PLANILLA DE CÓDIGOS*/}
                  Ed. corporativo y tecnológico Sta. Isabel
                </option>
                <option className={twClass.inputOption} value="TZt1ck">
                  Manuel Montt
                </option>
                <option className={twClass.inputOption} value="nq0Ybs
                ">
                  Viña del Mar
                </option>
              </select>

              <div className="flex flex-row-reverse">
                <button
                  className="m-4 p-3 rounded-3xl bg-blue-800 transition ease-in-out duration-1000 hover:bg-blue-600"
                  // className= {twClass.colorBoton}
                  onClick={handleshowInstalacionChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {showEdificio && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">Edificio</label>
              <select
                name="selectEdificio"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedEdificio} // Establecer el valor seleccionado
                onChange={(e) => setSelectedEdificio(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className={twClass.inputOption} value="l01KvC">
                  Central o principal
                </option>
                <option className={twClass.inputOption} value="wCyC$-">
                  Norte
                </option>
                <option className={twClass.inputOption} value="ERhISa">
                  Sur
                </option>
                <option className={twClass.inputOption} value="8sOoou">
                  Oriente
                </option>
                <option className={twClass.inputOption} value="gg1bas">
                  Poniente
                </option>
                <option className={twClass.inputOption} value="$MexZF
                ">
                  Ciclotrón
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowInstalacionChange}
                >
                  Anterior
                </button>

                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowEdificioChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {showEmplazamiento && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Emplazamiento específico
              </label>
              <select
                name="selectEmplazamiento"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedEmplazamiento} // Establecer el valor seleccionado
                onChange={(e) => setSelectedEmplazamiento(e.target.value)} // Actualizar el estado cuando cambie
              >
                <optgroup label="TECHUMBRES" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="5oP3j4I">
                Techumbre azotea Nor Oriente Piso 6
                </option>
                <option className={twClass.inputOption} value="qzGZCeD">
                  Techumbre azotea Nor Poniente. Piso 6
                </option>
                <option className={twClass.inputOption} value="0J5IhHC">
                  Techumbre edificio Oriente. Piso 2
                </option>
                <option className={twClass.inputOption} value="to5sWAJ">
                  Techumbre edificio Oriente. Piso 4
                </option>
                <option className={twClass.inputOption} value="H088y1k">
                  Techumbre edificio Poniente, piso 2
                </option>
                <option className={twClass.inputOption} value="vmktmUm">
                Entre techumbre (pasillo mecánico) edificio SurPoniente (piso 1 1/2)
                </option>
                <option className={twClass.inputOption} value="DPqbRSX">
                Entre techumbre (pasillo mecánico) edificio NorPoniente (piso 1 1/2)
                </option>
                <option className={twClass.inputOption} value="SixIEwo">
                Techumbre SurOriente piso 1 (sobre RT, por constructora)
                </option>

                <optgroup label="SALAS DE MÁQUINAS" className="my-3 py-3" ></optgroup>
                <option className={twClass.inputOption} value="b0fBgj9">
                Sala de máquinas NorPoniente piso 1
                </option>
                <option className={twClass.inputOption} value="cnkDvnV">
                Sala de máquinas SurPoniente piso -1 
                </option>
                <option className={twClass.inputOption} value="7pme1a9">
                Sala de máquinas NorOriente piso 1 (acceso peatonal Infante)
                </option>
                <option className={twClass.inputOption} value="g-fV1rR">
                Sala de máquinas Oriente piso -2 (sala ascensor)
                </option>
                 <option className={twClass.inputOption} value="d52yieV">
                Sala de máquinas NorPoniente azotea piso 6 (ascensores)
                </option>
                <option className={twClass.inputOption} value="kMXz2ia">
                Sala de bombas Norte piso -6
                </option>
                <option className={twClass.inputOption} value="0n0rlsF">
                Sala de máquinas Ciclotrón
                </option>
                <option className={twClass.inputOption} value="&AZh.-F">
                Sala de bombas Norte, piso -6
                </option>
                <option className={twClass.inputOption} value="OM.yxhQ">
                Patio Inglés
                </option>
                <option className={twClass.inputOption} value="vFbV#SA">
                Central de gases clínicos (piso 1, edificio Poniente)
                </option>
                <option className={twClass.inputOption} value="">
                Piso 1, edificio Poniente lado Sur (entrada autos Av. Rancagua)
                </option>


                <optgroup label="SHAFT" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="xwU3x1o">
                Shaft Nor Oriente piso 1
                </option>
                <option className={twClass.inputOption} value="REquaU3">
                Shaft Nor Oriente piso 2
                </option>
                <option className={twClass.inputOption} value="Je2Fc2H">
                Shaft Nor Oriente piso 3
                </option>
                <option className={twClass.inputOption} value="bwBVzsr">
                Shaft Nor Oriente piso 4
                </option>
                <option className={twClass.inputOption} value="nMJswV4">
                Shaft Nor Oriente piso 5
                </option>
                <option className={twClass.inputOption} value="hHojwJD">
                Shaft Nor Poniente piso 2
                </option>
                <option className={twClass.inputOption} value="2G1Urij">
                Shaft Nor Poniente piso 3
                </option>
                <option className={twClass.inputOption} value="GPKGlMt">
                Shaft Nor Poniente piso 4
                </option>
                <option className={twClass.inputOption} value="i2wnuy0">
                Shaft Nor Poniente piso 5
                </option>

                <optgroup label="EDIFICIOS Y NIVELES" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="80lSjYO">
                Norte piso -6
                </option>
                <option className={twClass.inputOption} value="MqgqHNH">
                Norte piso -5
                </option>
                <option className={twClass.inputOption} value="Sv2wtPF">
                Norte piso -4
                </option>
                <option className={twClass.inputOption} value="6gTv0Ev">
                Norte piso -3
                </option>
                <option className={twClass.inputOption} value="irsFZgZ">
                Norte piso -2
                </option>
                <option className={twClass.inputOption} value="GpSXqsn">
                Norte piso -1
                </option>
                <option className={twClass.inputOption} value="RNe59E1">
                Norte piso 1
                </option>
                <option className={twClass.inputOption} value="fTm3T8z">
                Norte piso 2
                </option>
                <option className={twClass.inputOption} value="zU50gly">
                Norte piso 3
                </option>
                <option className={twClass.inputOption} value="C2RKqH5">
                Norte piso 4
                </option>
                <option className={twClass.inputOption} value="7NARJAa">
                Norte piso 5
                </option>
                <option className={twClass.inputOption} value="E84wwaK">
                Norte piso 6
                </option>

                <option className={twClass.inputOption} value="Yw6WjFQ">
                Oriente piso -3
                </option>
                <option className={twClass.inputOption} value="1BJOpEk">
                Oriente piso -2
                </option>
                <option className={twClass.inputOption} value="JZm3v6a">
                Oriente piso -1
                </option>
                <option className={twClass.inputOption} value="3gmnZQa">
                Oriente piso 1
                </option>
                <option className={twClass.inputOption} value="oZrPJp6">
                Oriente piso 2
                </option>
                <option className={twClass.inputOption} value="f43uRCh">
                Oriente piso 3
                </option>
                <option className={twClass.inputOption} value="7uyCAbs">
                Oriente piso 4
                </option>
                <option className={twClass.inputOption} value="ejhLyNI">
                Poniente piso 1
                </option>
                <option className={twClass.inputOption} value="s3AhI4P">
                Poniente piso 2
                </option>
                <option className={twClass.inputOption} value="oGJSpM5">
                Poniente piso 3
                </option>
                <option className={twClass.inputOption} value="0f7x#Nf">
                Poniente piso -1
                </option>
                <option className={twClass.inputOption} value="OzDNe.U">
                Poniente piso -2
                </option>
                <option className={twClass.inputOption} value="tmv|hsQ">
                Poniente piso -3
                </option>
                <option className={twClass.inputOption} value="kND6W65">
                Ciclotrón subterráneo 3
                </option>
                <option className={twClass.inputOption} value="YGJWCDU">
                Ciclotrón subterráneo 2
                </option>
                <option className={twClass.inputOption} value="3ghr1v3">
                Ciclotrón subterráneo 1
                </option>
                <option className={twClass.inputOption} value="CI8vmlQ">
                Ciclotrón piso 1
                </option>
                <option className={twClass.inputOption} value="e3W4uPj">
                En parte de un edificio
                </option><option className={twClass.inputOption} value="1.I..|R">
                En el edificio completo
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowEdificioChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowEmplazamientoChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}


          {showAtiende && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Atiende a:
              </label>
              <select
                name="selectAtiende"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedAtiende} // Establecer el valor seleccionado
                onChange={(e) => setSelectedAtiende(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className={twClass.inputOption} value="R&#Fs">
                  No aplica
                </option>
                <option className={twClass.inputOption} value="slIkK">
                  Sexto piso
                </option>
                <option className={twClass.inputOption} value="rBj7P">
                  Quinto piso
                </option>
                <option className={twClass.inputOption} value="n&cNA">
                Cuarto piso
                </option>
                <option className={twClass.inputOption} value="i#Led">
                Tercer piso
                </option>
                <option className={twClass.inputOption} value="EcZTI">
                Segundo piso
                </option>
                <option className={twClass.inputOption} value="W9A8L">
                Primer piso
                </option>
                <option className={twClass.inputOption} value="mB8Ur">
                Entre pisos
                </option>
                <option className={twClass.inputOption} value="SDR5g">
                Subterráneo 1
                </option>
                <option className={twClass.inputOption} value="d6Vjs">
                Subterráneo 2
                </option>
                <option className={twClass.inputOption} value="7IbeY">
                Subterráneo 3
                </option>
                <option className={twClass.inputOption} value="r#y5A">
                Subterráneo 4
                </option>
                <option className={twClass.inputOption} value="CgTmg">
                Subterráneo 5
                </option>
                <option className={twClass.inputOption} value="cOEGz">
                Subterráneo 6
                </option>
                <option className={twClass.inputOption} value="9YjaP">
                Azotea
                </option>
                <option className={twClass.inputOption} value="RzCPh">
                Estacionamiento -2
                </option>
                <option className={twClass.inputOption} value="uM$pt">
                Estacionamiento -3
                </option>
                <option className={twClass.inputOption} value="JtXxL">
                Estacionamiento -4
                </option>
                <option className={twClass.inputOption} value="lPub#">
                Estacionamiento -5
                </option>
                <option className={twClass.inputOption} value="zvwdM">
                Estacionamiento -6
                </option>
                <option className={twClass.inputOption} value="OSXd&1X">
               Algunos sectores del piso
                </option>
                <option className={twClass.inputOption} value=".2b87N6">
               Todos los sectores del piso
                </option>
                  <option className={twClass.inputOption} value="Wv1CE">
                Una proporción de los pisos del edificio
                </option>
                <option className={twClass.inputOption} value="8RGpfU0">
                Todos los pisos del edificio
                </option>
                <option className={twClass.inputOption} value="uBbWJ3D">
                Edificio Norte
                </option>
                <option className={twClass.inputOption} value="f$s4Tjg">
                Edificio Sur
                </option>
                <option className={twClass.inputOption} value="bLE0zrG">
                Edificio Poniente y Oriente
                </option>
                <option className={twClass.inputOption} value="b&E!Jcb">
                Grupo de edificios
                </option>
                <option className={twClass.inputOption} value="FDM&o1G">
                Todos los pisos y a todos los edificios
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowEmplazamientoChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowAtiendeChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}



 
      {showServicio && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Servicio, Unidad, Departamento, etc.
              </label>
              <select
                name="selectServicio"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedServicio} // Establecer el valor seleccionado
                onChange={(e) => setSelectedServicio(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className={twClass.inputOption} value="7Nl#Mos">
                  No aplica
                </option>
                <option className={twClass.inputOption} value="tD#fe5$">
                  Gerencia
                </option>
                <option className={twClass.inputOption} value="erZM$$z">
                  Pabellón
                </option>
                <option className={twClass.inputOption} value="VUAuJzF">
                Sala de biopsia rápida
                </option>
                <option className={twClass.inputOption} value="lgrH0ob">
                Baño funcionarios
                </option>
                <option className={twClass.inputOption} value="Q72D6CD">
                Módulo secretaria y Enfermera Jefe
                </option>
                <option className={twClass.inputOption} value="fuZV1m3">
                Unidad de cuidados intensivos (UCI)
                </option>
                <option className={twClass.inputOption} value="5i0WS85">
                Unidad de terapia intensiva (UTI)
                </option>
                <option className={twClass.inputOption} value="#8quLO6">
                Médico Quirúrgico 
                </option>
                <option className={twClass.inputOption} value="Dc$KpL$">
                Quimioterapia
                </option>
                <option className={twClass.inputOption} value="XYsRS$9">
               Cardiología
                </option>
                <option className={twClass.inputOption} value="JKHG6Jl">
                Auditorio
                </option>
                <option className={twClass.inputOption} value="6SIvjmG">
                Radio terapia avanzada
                </option>
                <option className={twClass.inputOption} value="eLp4R9p">
                UPO
                </option>
                <option className={twClass.inputOption} value="Suu1CnL">
                UPI
                </option>
                <option className={twClass.inputOption} value="rIZY68K">
                UPOR
                </option>
                <option className={twClass.inputOption} value="hmD9vcW">
                Radio farmacia
                </option>
                <option className={twClass.inputOption} value="Vxetesh">
                Ciclotrón
                </option>
                <option className={twClass.inputOption} value="XQHQhBp">
                Consultas médicas / Centro médico
                </option>
                <option className={twClass.inputOption} value="$aHk6XA">
                Admisión
                </option>
                <option className={twClass.inputOption} value="mk60qdd">
                Estacionamiento
                </option>
                <option className={twClass.inputOption} value="UyqITdD">
                Ex plataforma
                </option>
                <option className={twClass.inputOption} value="qG&eZrF">
                Algunos servicios del piso
                </option>
                <option className={twClass.inputOption} value="LUv-Vqw">
                Todo el piso
                </option>
                <option className={twClass.inputOption} value="OQA0B&i">
                Una proporción de las unidades del edificio
                </option>
                <option className={twClass.inputOption} value="9KcxGCT">
                Todas las unidades de un edificio 
                </option>
                <option className={twClass.inputOption} value="i7de|!W">
                Grupo de servicios de diferentes edificios
                </option>
                <option className={twClass.inputOption} value="nONprr#">
                Grupo de edificios
                </option>
                <option className={twClass.inputOption} value="NsCNe6Q">
                Todas las unidades de la instalación y de los edificios
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowAtiendeChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowServicioChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}




          {showClasificacion && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Clasificación
              </label>
              <select
                name="selectClasificacion"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedClasificacion} // Establecer el valor seleccionado
                onChange={(e) => setSelectedClasificacion(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className="" value="QnNm$">
                  Infraestructura e instalaciones
                </option>
                <option className={twClass.inputOption} value="L$O59">
                  Equipamiento biomédico
                </option>
                <option className={twClass.inputOption} value="elROa"> 
                  Transporte (camionetas, vans, etc)
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowServicioChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowClasificacionChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {showRequisito && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Requisito normativo
              </label>
              <select
                name="selectRequisito"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedRequisito} // Establecer el valor seleccionado
                onChange={(e) => setSelectedRequisito(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className={twClass.inputOption} value="y$JjK">
                  Sin requisitos
                </option>
                <option className={twClass.inputOption} value="KV|2x">
                  Acreditable 
                </option>
                <option className={twClass.inputOption} value="Tumg-">
                  Certificable
                </option>
                <option className={twClass.inputOption} value="KV|2xTumg-">
                  Acreditable y certificable
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowClasificacionChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowRequisitoChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {showNivelOperacional && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Nivel operacional
              </label>
              <select
                name="selectNivelOperacional"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedNivelOperacional} // Establecer el valor seleccionado
                onChange={(e) => setSelectedNivelOperacional(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className={twClass.inputOption} value="Qh%-&">
                  Bajo
                </option>
                <option className={twClass.inputOption} value="0-$Y9">
                  Medio
                </option>
                <option className={twClass.inputOption} value="hT|.&">
                  Alto o relevante
                </option>
                <option className={twClass.inputOption} value="$-&d.">
                  Crítico
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowRequisitoChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowNivelOperacionalChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {showSistema && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Sistema especializado
              </label>
              <select
                name="selecSistema"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedSistema} // Establecer el valor seleccionado
                // value={selectedActivo} // Establecer el valor seleccionado

                onChange={(e) => setSelectedSistema(e.target.value)} // Actualizar el estado cuando cambie
              >
                 <option className={twClass.inputOption} value="Y-k$$G">
                  No aplica
                </option>
                <option className={twClass.inputOption} value="i.&Z!j">
                  Transporte vertical
                </option>
                <option className={twClass.inputOption} value="4v-zW|">
                  Detección y mitigación de incendios
                </option>
                <option className={twClass.inputOption} value="W-Ex|P">
                Almacenamiento, impulsión y distribución de agua potable
                </option>
                <option className={twClass.inputOption} value="k.bq|h">
                Respaldo energético
                </option>
                <option className={twClass.inputOption} value="&k&FK$">
                Alcantarillados
                </option>  <option className={twClass.inputOption} value="N9eSGy">
                Vigilancia e intrusión
                </option>
                <option className={twClass.inputOption} value="ja-.|P">
                Climatización y/o refrigeración
                </option>
                <option className={twClass.inputOption} value="3-HimDD">
                Gases clínicos
                </option>
                <option className={twClass.inputOption} value="|A-ko1">
                SCC
                </option>
                <option className={twClass.inputOption} value="T8|S-T">
                SAC
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowNivelOperacionalChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowSistemaChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {showActivo && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Activo fijo (equipamiento)
              </label>

              <select
                name="selectActivo"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedActivo} // Establecer el valor seleccionado
                onChange={(e) => setSelectedActivo(e.target.value)} // Actualizar el estado cuando cambie
              >
                <optgroup label="INDUSTRIALES" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="xfNHnEq">
                  Grupo electrógeno
                </option>
                <option className={twClass.inputOption} value="PNGRXLj">
                Tableros eléctricos (fuerza y control, transferencia, bco condensadores, etc)
                </option>
                <option className={twClass.inputOption} value="wg!e&kV">
                  Iluminación de emergencia (lazo)
                </option>
                <option className={twClass.inputOption} value="gMGrgvD">
                  Compresor aire medicinal
                </option>
                <option className={twClass.inputOption} value="Z6krV7f">
                  Compresor de aire
                </option>
                <option className={twClass.inputOption} value="VKNHWf6">
                Compresor vacío medicinal
                </option>
                <option className={twClass.inputOption} value="YW1WE2H">
                Compresor de N2O
                </option>
                <option className={twClass.inputOption} value="RXfuw1S">
                Central de O2
                </option>
                <option className={twClass.inputOption} value="LwuHMOu">
                Motobombas 
                </option>
                <option className={twClass.inputOption} value="xSWvUzY">
                Paneles solares térmicos
                </option>
                <option className={twClass.inputOption} value="KBKvs2W">
                Planta de tratamiento de agua (osmósis inversa)
                </option>
                <option className={twClass.inputOption} value="LtUSMCg">
                Estanque recirculador de agua potable
                </option>
                <option className={twClass.inputOption} value="NQr5GnM">
                Estanque de expasión
                </option>
                <option className={twClass.inputOption} value="#ZwU1-i">
                Estanque acumulador de agua (boiler)
                </option>

                <optgroup label="CLIMATIZACIÓN" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="AnsLtod">
                Chiller
                </option>
                <option className={twClass.inputOption} value="IQOsjUW">
                Unidad manejadora/tratamiento de aire (U-M/T-A)
                </option>
                <option className={twClass.inputOption} value="fi5aznK">
                Caldera
                </option>
                <option className={twClass.inputOption} value="W5eJhct">
                Boiler
                </option>
                <option className={twClass.inputOption} value="FmD4Xwr">
                Equipo inverve (VRF / VRV)
                </option>
                <option className={twClass.inputOption} value="BXZMexH">
                Unidad compacta
                </option>
                <option className={twClass.inputOption} value="Fk8fbGr">
                Heavy Duty
                </option>
                <option className={twClass.inputOption} value="O1Nsr7a">
                FFU
                </option>
                <option className={twClass.inputOption} value="9dBvnlN">
                Fan coil
                </option>
                <option className={twClass.inputOption} value="whiEUll">
                Unidadad exterior
                </option>
                <option className={twClass.inputOption} value="M85GbOU">
                Split
                </option>
                <option className={twClass.inputOption} value="aqfevED">
                Multi split
                </option>
                <option className={twClass.inputOption} value="OuBSV6o">
                Multi split suelo techo
                </option>
                <option className={twClass.inputOption} value="ePPhQIB">
                Split cassette
                </option>
                <option className={twClass.inputOption} value="9PHvQgW">
                Multi split cassette
                </option>
                <option className={twClass.inputOption} value="nLU3gw3">
                Sistema de conducto
                </option>
                <option className={twClass.inputOption} value="66mPgEd">
                Equipo de ventana
                </option>
                <option className={twClass.inputOption} value="zmT83Mp">
                Roof top
                </option>
                <option className={twClass.inputOption} value="$10wmDK"> {/*  NUEVO PARA REPLICAR VIN INTERNO A EXTERNO (MISMO CÓDIGO LOS 2 VIN)*/}
                VIN externo
                </option>
                <option className={twClass.inputOption} value="#%5b#AE"> {/*  NUEVO PARA REPLICAR VEX INTERNO A EXTERNO (MISMO CÓDIGO LOS 2 VEX)*/}
                VEX externo
                </option>
                <option className={twClass.inputOption} value="gk6Ib9r"> {/*  NUEVO PARA REPLICAR  GPF VIN INTERNO A EXTERNO (MISMO CÓDIGO TODOS LOS GPF*/}
                GPF externo
                </option>
                <option className={twClass.inputOption} value="n8wN6XE">
                Acumulador de agua sanitaria (boiler)
                </option>
                <option className={twClass.inputOption} value="&%eNJCu">
                Motor base
                </option>
              


                <optgroup label="TPTE VERTICAL" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="U3J266C">
                Ascensor pasajeros
                </option>
                <option className={twClass.inputOption} value="D0efT18">
                Ascensor monta camilla
                </option>
                <option className={twClass.inputOption} value="BsfPrcx">
                Ascensor monta carga
                </option>
                <option className={twClass.inputOption} value="36eMXNd">
                Ascensor min carga
                </option>
                <option className={twClass.inputOption} value="qQVJAFR">
                Escalera mecánica
                </option>
                <option className={twClass.inputOption} value="qvOQfFq">
                Silla salva escaleras
                </option>
                <option className={twClass.inputOption} value="2fps4yv">
                Oruga salva escaleras
                </option>

                <optgroup label="SDI y SEI" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="5VJVb0S">
                  Extintor
                </option>
                <option className={twClass.inputOption} value="lHbvR7c">
                  Red húmeda
                </option>
                <option className={twClass.inputOption} value="1D$NFeC">
                  Red seca
                </option>
                <option className={twClass.inputOption} value="MNQOoUI">
                  Pull station (palanca de amergencia)
                </option>
                <option className={twClass.inputOption} value="EHD8&.Y">
                  Audio de evacuación
                </option>
                


                <optgroup label="OTROS TIPOS" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="lk88Z$N">
                  Techumbre
                </option>
                <option className={twClass.inputOption} value="G%6Q#EW">
                  Equipos Híbridos
                </option>
                <option className={twClass.inputOption} value="F%ZZmE8">
                  Otro
                </option>
                <option className={twClass.inputOption} value="lNhTpbk">
                  Mock
                </option>
                <optgroup label="" className="my-3 py-3"></optgroup>
                

              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowSistemaChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowActivoChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}




          {showSubActivo && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Sub equipo (descendencia en la cadena de jerarquías)
              </label>

              <select
                name="selectSubActivo"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedSubActivo} // Establecer el valor seleccionado
                onChange={(e) => setSelectedSubActivo(e.target.value)} // Actualizar el estado cuando cambie
              >
                <optgroup label="CLIMATIZACIÓN" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="egjdbRK">
                No aplica
                </option>
                <option className={twClass.inputOption} value="3w7PO3k">
                Gabinete Porta Filtros
                </option>
                <option className={twClass.inputOption} value="SOy&#5&">
                VIN interior
                </option>
                <option className={twClass.inputOption} value="J$ZN30e">
                VEX interior
                </option>
                <option className={twClass.inputOption} value="#GUHam2">
                Quemador caldera
                </option>
                <option className={twClass.inputOption} value="qC-$Dgx">
                Intercambiador de calor (de placas)
                </option>

                <optgroup label="MEDIDORES" className="my-3 py-3"></optgroup>
                <option className={twClass.inputOption} value="#SJfArF">
                Manómetro de presión
                </option>
                <option className={twClass.inputOption} value="c#$51ED">
                Manómetro de temperatura
                </option>
                <optgroup label="" className="my-3 py-3"></optgroup>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowActivoChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowSubActivoChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}


          {showComponente && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Componente
              </label>

              <select
                name="selectComponente"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedComponente} // Establecer el valor seleccionado
                onChange={(e) => setSelectedComponente(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className={twClass.inputOption} value="Sg9vXUo">
                No aplica
                </option>
                <option className={twClass.inputOption} value="wSAac3u">
                VDF
                </option>
                <option className={twClass.inputOption} value="SYaOJmQ">
                Potenciómetro
                </option>
                <option className={twClass.inputOption} value="1ZWt01Y">
                Eje
                </option>
                <option className={twClass.inputOption} value="e7EMjmX">
                Correa 
                </option>
                <option className={twClass.inputOption} value="JIBBU5o">
                Cojinete
                </option>
                <option className={twClass.inputOption} value="dMNIVat">
                Rodamientos
                </option>
                <option className={twClass.inputOption} value="woKql6T">
                Caja conexión
                </option>
                <option className={twClass.inputOption} value="Jc3zBUo">
                Estator
                </option>
                <option className={twClass.inputOption} value="aF5uz8w">
                Capacitor
                </option>
                <option className={twClass.inputOption} value="w6vPzxV">
                Polea
                </option>
                <option className={twClass.inputOption} value="j4bumLs">
                Hélice
                </option>
                <option className={twClass.inputOption} value="8qu7MYr">
                Motor de arranque
                </option>
                <option className={twClass.inputOption} value="ZOihmDj">
                Motor
                </option>
                <option className={twClass.inputOption} value="e59CtWv">
                Sistema de refrigeración
                </option>
                <option className={twClass.inputOption} value="BS0o0eC">
                Regulador de velocidad
                </option>  
                <option className={twClass.inputOption} value="Q16AmgV">
                Filtro de aire
                </option>
                <option className={twClass.inputOption} value="s7rvj5j">
                Filtro de aceite
                </option>
                <option className={twClass.inputOption} value="m5ej5ei">
                Panel de control
                </option>
                <option className={twClass.inputOption} value="5B8JJok">
                Calefactor
                </option>
                <option className={twClass.inputOption} value="GvyjPJ1">
                  Válvula
                </option>
                <option className={twClass.inputOption} value="MiZp111">
                  Otro...
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowSubActivoChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowComponenteChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {showProveedorServicios && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              <label className="ml-5 mt-4 mb-4 italic text-xl">
                Proveedor de servicios de Mantenimiento
              </label>

              <select
                name="selectProveedorServicios"
                className="block bg-slate-900 text-slate-200 py-1 px-4 ml-5 mr-7 mb-2 rounded-full"
                value={selectedProveedorServicios} // Establecer el valor seleccionado
                onChange={(e) => setSelectedProveedorServicios(e.target.value)} // Actualizar el estado cuando cambie
              >
                <option className={twClass.inputOption} value="3rh0E">
                No aplica
                </option>
                <option className={twClass.inputOption} value="&E.qw">
                Schindler
                </option>
                <option className={twClass.inputOption} value="CP#HU">
                Altivert
                </option>
                <option className={twClass.inputOption} value="YaF9I">
                Fabrimetal
                </option>
                <option className={twClass.inputOption} value="U94Z#">
                Heaven Guard 
                </option>
                <option className={twClass.inputOption} value="&oPLz">
                Termofrío
                </option>
                <option className={twClass.inputOption} value="tMmY.">
                Qclass
                </option>
                <option className={twClass.inputOption} value="vu$vP">
                Sistemas de frío
                </option>
                <option className={twClass.inputOption} value="oXoO-">
                Ingetrol
                </option>
                <option className={twClass.inputOption} value="&mwtr">
                Antiflama
                </option>
                <option className={twClass.inputOption} value="#U#ne">
                Isamed
                </option>
                <option className={twClass.inputOption} value="5#31Y">
                Instaplan
                </option>
                <option className={twClass.inputOption} value="G2$gq">
                Apolo Spa (extintores)
                </option>
              </select>

              <div className="flex justify-between">
                <button
                  className="m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowComponenteChange}
                >
                  Anterior
                </button>
                <button
                  className="m-4 p-3 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
                  onClick={handleshowProveedorServiciosChange}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}


          

          {showAuxiliar && (
            <div className="mx-1 my-2 flex flex-col border rounded-xl">
              {/* <label className="ml-5 mt-4 mb-4 italic text-xl">
                Auxiliar opcional (recomendado)
              </label>
              <input
                type="text"
                name="inputAuxiliar"
                className="border border-slate-400 block w-[14rem] bg-slate-900 text-slate-200 py-1 px-4 mx-auto mb-2 rounded-full"
                placeholder="Max 20 caracteres"
                autoFocus
                maxLength={22}
                value={selectedAuxiliar} // Establecer el valor seleccionado
                onChange={(e) => setSelectedAuxiliar(e.target.value)} // Actualizar el estado cuando cambie
              /> */}

              <div className="flex justify-center">
                <button
                  className="m-4 p-3 rounded-3xl bg-teal-800 transition ease-in-out duration-1000 hover:bg-teal-600"
                >
                  Generar TAG
                </button>
              </div>
            </div>
          )}

        </form>
       

        <div className="flex h-[12rem] p-10 text-md justify-center items-center text-center border border-slate-300 rounded-xl">
          <span>{codeState}</span>
        </div>


      </div>
    </div>
  );
};

const twClass = {
  divSelect: "mx-1 my-2 flex flex-col border rounded-xl",
  labelSelect: "ml-5 mt-4 mb-4 italic text-xl",
  inputSelect:
    "block bg-slate-900 text-slate-200 py-2 px-4 ml-5 mr-7 mb-5 rounded-full",
  inputOption: "p-3",
  colorBoton: "m-4 p-3 px-4 rounded-3xl bg-violet-800 transition ease-in-out duration-1000 hover:bg-violet-600"
};


export default ContenedorGeneraTag;
