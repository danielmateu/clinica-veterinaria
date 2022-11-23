import { Formulario, Header, ListadoPacientes } from "./components";


function App() {



  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-2 md:flex ">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
