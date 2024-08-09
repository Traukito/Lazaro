import crypto from "crypto"; //requiere instalación previa (npm i crypto)
import TaskCard from "../components/taskCard/TaskCard";


export const metadata = { title: "Status Planta" };

const idApp = process.env.NEXT_PUBLIC_USER_ID;
const secretKey = process.env.NEXT_PUBLIC_USER_TOKEN;
const host = "app.fracttal.com";

function generateNonce(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function createHMACBase64Hash(data, hashAlg = "sha256") {
  return crypto.createHmac(hashAlg, secretKey).update(data).digest("base64");
}

function createHMACAuthHeader(nonce, method, route, host, timespan, port) {
  const payloadHeader = "hawk.1.header";
  const macString = `${payloadHeader}\n${timespan}\n${nonce}\n${method}\n${route}\n${host}\n${port}\n\n\n`;
  return createHMACBase64Hash(macString);
}
const realizarSolicitudHawk = async () => {
  try {
    const method = "GET";
    const route = "/api/work_orders";
    const timespan = Math.floor(Date.now() / 1000);
    const url = `https://${host}${route}`;
    const nonce = generateNonce(5);
    const hmac = createHMACAuthHeader(
      nonce,
      method,
      route,
      host,
      timespan,
      "443"
    );

    const requestOptions = {
      method,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Hawk id="${idApp}", ts="${timespan}", nonce="${nonce}", mac="${hmac}"`,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    };

    const response = await fetch(url, requestOptions);
    const infoResponse = await response.json();
    return infoResponse.data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};





const statusEquipo = async () => {
  const items = await realizarSolicitudHawk();

  
const separatedData = separateByUserAssigned(items);

  return (
    <div>
    <div className="border border-slate-700 relative h-[300px] m-5 overflow-y-auto">
      <table className="min-w-full table-auto border-collapse ">
        <thead className="sticky top-0 bg-slate-700">
          <tr>
            <th className="text-xs text-center p-3">ID OT</th>
            <th className="text-xs text-center p-3">ACTIVO</th>
            <th className="text-xs text-center p-3">PRIORIDAD</th>
            <th className="text-xs text-center p-3">TÉCNICO</th>
            <th className="text-xs text-center p-3">CLASE</th>
            <th className="text-xs text-center p-3">SEVERIDAD</th>
            <th className="text-xs text-center p-3">HECHO</th>

          </tr>
        </thead>

        <tbody>
          {Object.values(items).map((value, index) => (
            <tr
              key={value.wo_folio}
              className={
                index % 2 === 0
                  ? "bg-gray-900 hover:bg-slate-700"
                  : "bg-gray-800 hover:bg-slate-700"
              }
            >
              <td className="p-2 text-xs text-center">{value.wo_folio}</td>
              <td className="p-2 text-xs text-center">
                {value.code != null
                  ? value.code
                  : 'NO DEFINIDO'}
              </td>
              <td className="p-2 text-xs text-center">
                {value.priorities_description}
              </td>
              <td className="p-2 w-40 text-xs text-center">
                {obtenerPrimerNombreYApellido(value.personnel_description)}
              </td>
              <td className="p-2 text-xs text-center">
                {value.tasks_log_task_type_main}
              </td>
              <td className="p-2 text-xs text-center">
                {value.severiry_description != null ? value.severiry_description : 'NO ESPECIFICA'}
              </td>
              <td className="p-2 text-xs text-center">
                {value.done === true ? 'SI' : 'NO'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



    
    <div className="container grid grid-cols-1 gap-1 mx-auto px-4 py-5">
      {Object.entries(separatedData).map(([user, tasks]) => (
        <div key={user} className="mb-8">
          <h2 className="p-5 bg-violet-900 text-slate-300 text-2xl text-center italic font-bold mb-3">{user}</h2>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-cyan-500"> */}
          <div className="flex flex-row justify-between flex-wrap gap-3">
            {tasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};














function obtenerPrimerNombreYApellido(nombreCompleto) {
  // Dividir el nombre completo en partes (asumiendo que los nombres están separados por espacios)
  const partes = nombreCompleto.split(" ");

  // Obtener el primer nombre y el primer apellido
  const primerNombre = partes[0];
  const primerApellido = partes[partes.length - 2]; // El penúltimo elemento es el primer apellido

  // Devolver el primer nombre y el primer apellido
  return `${primerNombre} ${primerApellido}`;
}






// pages/utils/separator.js

function separateByUserAssigned(data) {
  const separatedArrays = {};

  data.forEach(item => {
    const userAssigned = item.user_assigned;

    if (!separatedArrays[userAssigned]) {
      separatedArrays[userAssigned] = [];
    }

    separatedArrays[userAssigned].push(item);
  });

  return separatedArrays;
}


export default statusEquipo;
