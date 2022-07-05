import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const[pacientes, setPacientes] = useState( JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});
  /**Ya que cada uno de los pacientes es un objeto al llamar a paciente se le tiene que poner llaves para que sea un objeto vacio */

   useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
   },[pacientes])
  
  /**"JSON.stringify" nos permit convertir en string a los arreglos
  *"setItem()" cuando reciba un valor lo almacenara o actualizara en este caso en pacientes */

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);

  }/**".filter()" no edita el arreglo original si no que retorna uno nuevo */

  return (
   <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes= {pacientes}
          setPacientes= {setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes= {pacientes}/**Esto es un prop*/
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
   </div>
  )
}

export default App
/**Primero generamos la función
 * Despues la pasamos al componente
 * Y por último la agregamos a la función
 */