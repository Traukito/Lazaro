const TaskCard = ({ task }) => {

  let backgroundColor, statusText;

  switch (task.id_status_work_order) {
    case 1:
      task.completed_percentage <  100 ? (backgroundColor = 'bg-slate-700') : (backgroundColor = 'bg-orange-500');
      task.completed_percentage <  100 ? statusText = 'EN PROCESO' : statusText = 'TRABAJOS EJECUTADOS';
      break;
    case 2:
      backgroundColor = 'bg-yellow-500';
      statusText = 'EN REVISIÓN GMAO';
      break;
    case 3:
      backgroundColor = 'bg-green-500';
      statusText = 'OT CERRRADA CORRECTAMENTE';
      break;
    case 4:
      backgroundColor = 'bg-red-500';
      statusText = 'OT CANCELADA';
      break;
    default:
      backgroundColor = 'bg-white';
      statusText = '';
  }

  return (
    <div className="w-[24rem] md:w-[25rem] bg-slate-800 text-slate-400 shadow-md rounded-lg overflow-hidden mb-8 h-[18rem] border border-slate-600 relative">
      <div className="px-6 py-4">
        <p className="text-xs text-right mb-2">{task.wo_folio}</p>
        <p className=" text-slate-200 text-base">
          Creada el {obtenerFechaYHora(task.creation_date).fecha} a las {obtenerFechaYHora(task.creation_date).hora}
        </p>
        <p className=" text-slate-200 text-base">
          Clase mtto: {task.tasks_log_task_type_main === 'SUPERVISION DE TRABAJOS EXTERNOS' ? 'CPT' : task.tasks_log_task_type_main}
        </p>

        <p className="text-slate-200 text-base">
          Prioridad: {task.priorities_description}
        </p>

        <p className="mb-2 text-slate-200 text-base">
  {task.initial_date != null ? 'Ejecutada el ' + obtenerFechaYHora(task.initial_date).fecha + ' a las ' + obtenerFechaYHora(task.initial_date).hora : 'Estado de avance < al 100%'}
</p>

        <p className="text-xs text-justify mb-1 h-[15rem] w-[22rem] rounded-md bg-">{task.description}</p>

        <p className={`text-slate-100 absolute bottom-0 left-0 right-0 text-xs text-center py-2 ${backgroundColor}`}>
          {statusText} 
        </p>
      </div>
    </div>
  );
};











function obtenerFechaYHora(fechaUTC) {
  const fecha = new Date(fechaUTC);
  const fechaString = fecha.toLocaleDateString(); // Obtiene la fecha en formato de texto
  const hora = fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }); // Obtiene la hora en formato de texto (HH:mm)

  return { fecha: fechaString, hora: hora };
}

export default TaskCard;
