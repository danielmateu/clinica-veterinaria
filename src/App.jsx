import { useState } from "react";
import { Formulario, Header, ListadoPacientes } from "./components";


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-2 md:flex ">
        <Formulario 
          pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente = {setPaciente}
        />
      </div>
    </div>
  )
}

export default App
