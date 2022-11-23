

export const Formulario = () => {
    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimineto pacientes</h2>

            <p className='text-lg mt-4 text-center'>
                Añade pacientes y {' '} <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form action="" className="bg-white shadow-md rounded py-8 px-4 mt-8 mb-10">
                <div className='mb-6'>
                    <label
                        htmlFor="mascota"
                        className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 rounde" />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="propietario"
                        className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 rounde" />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="email"
                        className='block text-gray-700 uppercase font-bold'>email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de contacto"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 rounde" />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="alta"
                        className='block text-gray-700 uppercase font-bold'>alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 rounded" />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor="sintomas"
                        className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                    <textarea
                        name="sintomas"
                        id="sintomas"
                        className="border-2 w-full mt-2 placeholder-cyan-600 px-2 rounded"
                        cols="30"
                        rows="10"
                        placeholder='Describe los síntomas'>
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
