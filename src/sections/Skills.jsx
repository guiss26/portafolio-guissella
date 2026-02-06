import { Code2, Database, DatabaseZap, Zap, FileCog, ShieldCheck } from 'lucide-react';

const skillsCategories = [ //probar hacerlo con un array de objeto y recorrerlo
    {
        icon: Code2,
        title: 'Frontend',
        skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'React Router', 'React Hook Form', 'Material-UI', 'TypeScript'],
        color: 'from-violet-600 to-indigo-600m'
    }
]

export default function Skills() {
    return (
        <>
            <section id="skills" className='min-h-screen bg-neutral-50 flex flex-col justify-center py-15'>
                <article className='mx-8'>
                    <div>
                        <h2 className='text-5xl pb-2.5'>Habilidades</h2>
                        <p className='text-neutral-600'>Tecnologías y herramientas con las que trabajo</p>
                    </div>

                    {/* skills-box */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
                        {/* frontend */}
                        <div id="frontend" className='bg-white hover:shadow-xl transition-all duration-300 p-5 rounded-xl'>
                            <div className='flex gap-2.5 items-center'>
                                <div className='bg-linear-to-r from-violet-600 to-indigo-600 rounded-xl p-2'>
                                    <Code2 className='size-6 text-white' />
                                </div>
                                <h3 className='text-xl'>Frontend</h3>
                            </div>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>HTML</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>CSS</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Tailwind CSS</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>JavaScript</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>React</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>React Router</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>React Hook Form</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Material-UI</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>TypeScript</span>
                            </div>
                        </div>

                        {/* backend  */}
                        <div id="backend" className='bg-white hover:shadow-xl transition-all duration-300 p-5 rounded-xl'>
                            <div className='flex gap-2.5 items-center'>
                                <div className='bg-linear-to-r from-emerald-600 to-teal-600 rounded-xl p-2'>
                                    <DatabaseZap className='size-6 text-white' />
                                </div>
                                <h3 className='text-xl'>Backend</h3>
                            </div>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Node.js</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Express</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Sequelize</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Mongoose</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>TypeScript</span>

                            </div>
                        </div>

                        {/* databases */}
                        <div id="bbdd" className='bg-white hover:shadow-xl transition-all duration-300 p-5 rounded-xl'>
                            <div className='flex gap-2.5 items-center'>
                                <div className='bg-linear-to-r from-pink-600 to-rose-600 rounded-xl p-2'>
                                    <Database className='size-6 text-white' />
                                </div>
                                <h3 className='text-xl'>Base de datos</h3>
                            </div>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>MySQL</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>MongoDB</span>
                            </div>
                        </div>

                        {/* testing */}
                        <div id="testing" className='bg-white hover:shadow-xl transition-all duration-300 p-5 rounded-xl'>
                            <div className='flex gap-2.5 items-center'>
                                <div className='bg-linear-to-r from-orange-600 to-amber-600 rounded-xl p-2'>
                                    <FileCog className='size-6 text-white'/>
                                </div>
                                <h3 className='text-xl'>Testing</h3>
                            </div>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Jest</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Supertest</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Vitest</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>TDD</span>
                            </div>
                        </div>

                        {/* security */}
                        <div id="seguridad" className='bg-white hover:shadow-xl transition-all duration-300 p-5 rounded-xl'>
                            <div className='flex gap-2.5 items-center'>
                                <div className='bg-linear-to-r from-cyan-600 to-blue-600 rounded-xl p-2'>
                                    <ShieldCheck className='size-6 text-white'/>
                                </div>
                                <h3 className='text-xl'>Seguridad</h3>
                            </div>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>JWT</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Bcrypt</span>
                            </div>
                        </div>

                        {/* tools */}
                        <div id="herramientas" className='bg-white hover:shadow-xl transition-all duration-300 p-5 rounded-xl'>
                            <div className='flex gap-2.5 items-center'>
                                <div className='bg-linear-to-r from-purple-600 to-violet-600 rounded-xl p-2'>
                                    <Zap className='size-6 text-white'/>
                                </div>
                                <h3 className='text-xl'>Herramientas</h3>
                            </div>
                            <div className='flex flex-wrap gap-2 pt-4'>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Git y GitHub</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>Postman</span>
                                <span className='bg-gray-200 px-3 rounded-md text-sm'>VSCode</span>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}