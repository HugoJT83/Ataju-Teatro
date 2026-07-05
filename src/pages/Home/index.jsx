import React from 'react'

const Home = () => {
    return (
        <>
            {/* Primera sección - presentación */}
            <div className="bg-linear-to-b from-white to-ataju-green">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="font-title sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
                            Asociación de Teatro Aficionado Juvenil y Universitario
                        </h1>
                        <div className='py-2 not-sm:px-4 text-xl sm:text-lg'>
                            <p className="leading-relaxed italic text-center sm:text-justify">
                                ¡Bienvenido a la página web de ATAJÚ Teatro! </p>
                            <p className="mb-8 leading-relaxed text-justify">
                                Aquí podrás conocer el funcionamiento del grupo, información de las representaciones pasadas y venideras e informarte de plazos de inscripción y participación en talleres gratuitos organizados por sus miembros.
                                Si te gusta el teatro y te interesa un grupo amateur, síguenos en nuestras redes sociales.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-royal-gold border-0 py-2 px-6 focus:outline-none hover:bg-dark-royal-gold hover:cursor-pointer rounded text-lg">
                                Botón 1
                            </button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:cursor-pointer rounded text-lg">
                                Botón 2
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </div>

            {/* Segunda sección - Obras */}
            <div className='bg-ataju-green'>
                <div
                    className='bg-cover not-sm:bg-top h-200'
                    style={{ backgroundImage: "url('/logo_ataju_vectorizado_blanco_translucido.svg" }}
                >
                    <div className='container mx-auto px-5 py-5 sm:py-24 '>
                        <div>
                            <h1 className='font-title sm:text-5xl text-3xl mb-4 font-medium text-gray-900'>
                                Qué hacemos
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tercera sección - equipo */}
            <div className='bg-white'>
                <div className='h-200'>
                    <div className='container mx-auto px-5 py-24'>
                        <div>
                            <h1 className='font-title text-end sm:text-5xl text-3xl mb-4 font-medium text-gray-900'>
                                El equipo
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home