

export const Paciente = () => {

    return (
        <>
            <div className='bg-white shadow-md hover:shadow-sm transition rounded py-8 px-4 mt-8 mb-10 ml-4'>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    Dani: {' '}
                    <span className='font-normal normal-case'>Hook</span>
                </p>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    email: {' '}
                    <span className='font-normal normal-case'>correo@correo.com</span>
                </p>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    Fecha alta: {' '}
                    <span className='font-normal normal-case'>10 Diciembre 2021</span>
                </p>
                <p className='font-bold mb-4 text-gray-600 uppercase'>
                    Síntomas: {' '}
                    <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum doloremque nobis fugiat soluta dolore, saepe a provident fuga vel rem! Exercitationem provident maiores velit necessitatibus, nam odit a molestiae!</span>
                </p>
            </div>
        </>
    )
}
