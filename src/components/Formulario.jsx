import { useEffect, useState } from "react"
import { Error } from "./";





export const Formulario = ({pacientes, setPacientes}) => {

    const [nombre, setNombre] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación del formulario
        if ([nombre, nombrePropietario, email, fecha, sintomas].includes('')) {
            console.log('Todos los campos deben estar complimentados');
            setError(true);
            return;
        } 

        setError(false)

        //Objeto de Paciente
        const objetoPaciente = {
            nombre,
            nombrePropietario,
            email,
            fecha,
            sintomas
        }

        // console.log(objetoPaciente);

        // setPacientes(objetoPaciente);
        setPacientes([...pacientes, objetoPaciente]);

        //Reiniciar el Form
        setNombre('');
        setNombrePropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    }



    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimineto pacientes</h2>

            <p className='text-lg mt-4 text-center'>
                Añade pacientes y {' '} <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                action="" className="bg-white shadow-md hover:shadow-sm transition-all rounded py-8 px-4 mt-8 mb-10">
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className='mb-6'>
                    <label
                        htmlFor="mascota"
                        className='block text-gray-700 uppercase font-bold'>Nombre mascota: {nombre}</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 round-m"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="propietario"
                        className='block text-gray-700 uppercase font-bold'>Nombre propietario: {nombrePropietario}</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 round-m"
                        value={nombrePropietario}
                        onChange={(e) => setNombrePropietario(e.target.value)}
                    />

                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="email"
                        className='block text-gray-700 uppercase font-bold '>email: <span className="lowercase">{email}</span></label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de contacto"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 round-m"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="alta"
                        className='block text-gray-700 uppercase font-bold'>alta: {fecha}</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 rounded"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="sintomas"
                        className='block text-gray-700 uppercase font-bold'>Sintomas: {sintomas}</label>
                    <textarea
                        name="sintomas"
                        id="sintomas"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 rounded"
                        cols="30"
                        rows="10"
                        placeholder='Describe los síntomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    >

                    </textarea>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full text-white uppercase font-bold p-2 hover:bg-indigo-500 cursor-pointer transition-all"
                    value="Agregar paciente" />
            </form>
        </div>
    )
}
