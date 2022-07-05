/**Con la frase "rfce" creas con function */
/**Con la frase "rafce" creas con arrow function */
import { useState, useEffect } from 'react'
import Paciente from './Paciente';
import Error from './Error'

const Formulario = ( {pacientes, setPacientes, paciente, setPaciente} ) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

     useEffect( () => {
      if( Object.keys(paciente).length > 0 ) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }/**Una vez llenado todos los campos de formulario al querer pasar los campos en "Administra tus pacientes" en el formulario con llamar a cada funcion y dentro de ella llamar al prop "paciente" podemos pasar los campos al formulario y asi editarlos*/

     },[paciente])
     /**El arreglo vacio "[]" es una depedencia y lo que se le coloque sera lo que estara revisando cuando se aplique un cambio
      * "Object.keys()" es una forma de comprobar si el objeto tiene algo
     */
   

    const generarId = () => {
      const random = Math.random().toString(36).substring(2)
      const fecha = Date.now().toString(36)
      /**"toString" crea caracteres de 0 a 9 o de A a Z "substring" elimina los dos primeros elementos */
      return random + fecha;
    }
    /**setNombre(o cualquier nombre de variable en la segunda posición) es una función modificadora*/
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if( [nombre, propietario, email, fecha, sintomas].includes('') ) {

        setError(true)
        return;/**El return sirve como si fuera el else */
      }

      setError(false)/**Esto es un evento */

      //Construir objeto de Paciente
      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas
      }/**Este es el objeto en memoria de lo que se lee en el formulario */

      if(paciente.id) {
        //Editando el registo
        objetoPaciente.id = paciente.id/**El id que ya se crea en un registro se le asigna al objetoPaciente.id */
        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

        setPacientes(pacientesActualizados);
        setPaciente({});/**Elimina el registro que ya fue actualizado */


      }else {
        //Nuevo registro
        objetoPaciente.id = generarId();/**Antes de almacenarlo en el state le genera un id unico*/
        setPacientes([...pacientes, objetoPaciente]);/**Con esto podemos almacenar mas de un paciente, haciendo una copia en "pacientes" agregarlo a objetoPaciente y crear más de uno */

      }
      //Reinicia el Form
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
      /**Al mandar todos los "set" podemos eliminar todos los campos cuando apretemos el boton de "AGREGAR PACIENTE" */ 
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-xl mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-blue-800 font-bold ">Administralos</span>
        </p>

        <form
            onSubmit={handleSubmit}  
            className="bg-white shadow-md rounded-xl py-10 px-5 mb-10"
        >
            {error && <Error mensaje='Todos los campos son obligatorios'/>}
            {/* { error &&
                
                <Error> <p>Todos los campos son obligatorios</p> </Error>
            } */}
            <div className="mb-5">
                <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">
                  Nombre Mascota
                </label>
                
                <input 
                  id='mascota'
                  type="text" 
                  placeholder='Nombre de la Mascota'
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}/**"onChange permite visualizar lo que el usuario escriba en cada sección" */
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propetario" className="block text-gray-700 uppercase font-bold">
                  Nombre Propetario
                </label>
                
                <input 
                  id="propetario"
                  type="text" 
                  placeholder='Nombre del Propetario'
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={propietario}
                  onChange={(e) => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                  Nombre Mascota
                </label>
                
                <input 
                  id="email"
                  type="email" 
                  placeholder="Email del Propetario"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                  alta
                </label>
                
                <input 
                  id="alta"
                  type="date"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                  Síntomas
                </label>
                
                <textarea 
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los Síntomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                className="bg-blue-800 w-full uppercase font-bold text-white p-3 hover:bg-blue-900 cursor-pointer transition-all rounded-md" value={paciente.id ? "Editar paciente"  :"Agregar Paciente" }/**Con el ternario se puede preguntar si existe en el prop paciente un valor se cambia el boton a "editar paciente" */ 
            />

        </form>
    </div>
  )
}

export default Formulario
/**Con display:block toma todo el espacio horizontal 
 * Con el "htmlfor" se asigna para que cuando de click en el label y tenga el mismo nombre el "id" de input se active el input(placeholder)
 * La forma de escribir una variable seguido de la mayuscula se llama camelCase. Ejem; nuevaVariable 
*/