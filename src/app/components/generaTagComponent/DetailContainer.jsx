const DetailContainer = ( { txtInstalacion } ) => {
  return (
      <div>
        <div className="mx-1 my-2 flex flex-col border rounded-xl">
          <label className="ml-5 mt-4 mb-4 italic text-xl">Instalación</label>
          <div className="flex flex-row">
            <input
              type="text"
              name="inputInstalacion"
              disabled
              className="border border-slate-400 block w-[25rem] bg-slate-900 text-slate-200 py-1 px-4 mx-auto mb-2 rounded-full"
              value={txtInstalacion} // Establecer el valor seleccionado
            />
            <input
              type="text"
              name="inputInstalacion"
              disabled
              className="border border-slate-400 block w-[7rem] bg-slate-900 text-slate-200 py-1 px-4 mx-auto mb-2 rounded-full"
              value={txtInstalacion} // Establecer el valor seleccionado
            />
          </div>

          <label className="ml-5 mt-4 mb-4 italic text-xl">Edificio</label>
          <div className="flex flex-row">
            <input
              type="text"
              name="inputInstalacion"
              disabled
              className="border border-slate-400 block w-[25rem] bg-slate-900 text-slate-200 py-1 px-4 mx-auto mb-2 rounded-full"
              value={txtInstalacion} // Establecer el valor seleccionado
            />
            <input
              type="text"
              name="inputInstalacion"
              disabled
              className="border border-slate-400 block w-[7rem] bg-slate-900 text-slate-200 py-1 px-4 mx-auto mb-2 rounded-full"
              value={txtInstalacion} // Establecer el valor seleccionado
            />
          </div>
        </div>
      </div>
  );
};

export default DetailContainer;
