import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">

        { pacientes && pacientes.length ? (
        /* *Esto es como si fuera: if( pacientes && pacientes.length === 0)
          *Nada mas que se utiliza un ternario "?"
        *Aca comprobamos si el formulario tiene llenado todos los campos para agregarlos a "Listado Pacientes" */    
        <>
          
          <h2 className="font-black text-3xl text-center ">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-blue-800 font-bold">Pacientes y Citas</span>
          </p>

          { pacientes.map( paciente => (
            <Paciente 
              key={paciente.id}/*"key" nos sirve para crear usuarios "unicos"*/
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}  
        </>/**Es necesario agregar un fragment ya que solo en React se puede retornar un solo valor fragment -> "<></>"*/
        ) : (

          <>
             <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
             <p className="text-xl mt-5 mb-10 text-center">
                  Comienza agregando pacientes {''}
                  <span className="text-blue-800 font-bold">y apareceren en este lugar</span>
             </p>
          </>
        )}               

        </div>
    
  )
}
export default ListadoPacientes
/**"margin-top" abarca todo el espacio horizontal*/
/**".map()" sirve para iterar en cada elemento pero tambien te retorna a uno nuevo 
 * Si solo se retorna un valor en .map() se puede quitar tanto el "return como las llaves"
 * {/* { pacientes.map( () => {
              
              return(
                <h1>Desde map</h1>
              )
          })} 
          Para retornar multiples valores}
*/


