
import { Paciente } from './Paciente';


export const ListadoPacientes = ({ pacientes }) => {
    

    return (

        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

            <p className='text-lg mt-4 text-center'>
                Administra tus {' '}
                <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
            </p>

            {
                pacientes.length !== 0 ?
                pacientes.map( paciente => (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                    />
                )) : (
                    <div className='font-black text-3xl text-center p-10 bg-slate-200 mt-8'>
                        <p>No hay pacientes aún</p>    
                    </div>
                )
            }

            


        </div>

    )
}
