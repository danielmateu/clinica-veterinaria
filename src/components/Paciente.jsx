

export const Paciente = ({paciente}) => {

    const {nombre, nombrePropietario, email, fecha, sintomas} = paciente

    return (
        
            <div className='bg-white shadow-md hover:shadow-sm transition rounded py-8 px-4 mt-8 mb-10 ml-4'>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    Nombre: {' '}
                    <span className='font-normal normal-case'>{nombre}</span>
                </p>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    Nombre Propietari@: {' '}
                    <span className='font-normal normal-case'>{nombrePropietario}</span>
                </p>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    email: {' '}
                    <span className='font-normal normal-case'>{email}</span>
                </p>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    Fecha alta: {' '}
                    <span className='font-normal normal-case'>{fecha}</span>
                </p>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    Síntomas: {' '}
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>
            </div>
        
    )
}
