
import { useEffect } from 'react';
import { Paciente } from './Paciente';


export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    useEffect(() => {
        if(pacientes.length > 0){

            console.log('Paciente Creado');
        }
    }, [pacientes])
    

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
                        setPaciente = {setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                    />
                )) : (
                    <div className='font-black text-3xl text-center p-10 bg-slate-200 mt-8 shadow-md hover:shadow-sm transition-all'>
                        <p>No hay pacientes aún</p>    
                    </div>
                )
            }

            {/* {

                pacientes && pacientes.length ? (
                    <>
                        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

                        <p className='text-lg mt-4 text-center'>
                            Administra tus {' '}
                            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
                        </p>

                        {
                            pacientes.map(paciente => {

                                <Paciente
                                    key={paciente.id}
                                    paciente={paciente}
                                />
                            })
                        }
                    </>
                ) :
                    (

                        <>
                            <h2 className='font-black text-3xl text-center'>No hay pacientes aun</h2>

                            <p className='text-lg mt-4 text-center'>
                                Empieza a ñadir pacientes {' '}
                                <span className='text-indigo-600 font-bold'>y aparecerán aquí</span>
                            </p>
                        </>
                    )

            } */}




        </div>

    )
}
