import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    Swal.fire({
      title: '¿Estás seguro de eliminar la cita?',
      text: "¡No puedes revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
  }).then((result) => {
      if (result.isConfirmed) {
          eliminarPaciente(id);  //llamar el prop y enviar el id
          Swal.fire(
          'Eliminado!',
          'Tu cita se ha eliminado.',
          'success'
          )
      }
  })
}

  return (

    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-600 uppercase">
            Nombre: {''}
              <span className="font-normal normal-case">{nombre}</span>
          </p>

          <p className="font-bold mb-3 text-gray-600 uppercase">
            Propietario: {''}
              <span className="font-normal normal-case">{propietario}</span>
          </p>

          <p className="font-bold mb-3 text-gray-600 uppercase">
            Email: {''}
              <span className="font-normal normal-case">{email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-600 uppercase">
            Fecha de Alta: {''}
              <span className="font-normal normal-case">{fecha}</span>
          </p>

          <p className="font-bold mb-3 text-gray-600 uppercase">
            Síntomas: {''}
              <span className="font-normal normal-case">{sintomas}</span>
          </p>
      
        <div className=" flex justify-between flex-col lg:flex-row mt-10">
            <button 
              type="button" 
              className=" bg-blue-700 hover:bg-blue-800 uppercase text-xl font-bold text-white rounded-lg px-10 py-2 cursor-pointer mt-4"
              onClick={() => setPaciente(paciente)}
              >editar</button>

              <button 
                type="button" 
                className=" bg-red-700 hover:bg-red-800 uppercase text-xl font-bold text-white rounded-lg px-10 py-2 cursor-pointer mt-4"
                onClick={handleEliminar}/**Si no le ponemos "()" esperara a que suceda el evento */
              >eliminar</button>
        </div>
   
    </div>
  )
}

export default Paciente
/**con "justify-between" podemos mandarlos a cada extremo de un contenedor */
