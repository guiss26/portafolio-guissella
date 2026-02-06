import { Github } from 'lucide-react';
import sprintFlow from '../assets/sprint-flow-3.PNG'
import celestialBloom from '../assets/celestial-bloom.PNG'
import apiNoctiluca from '../assets/api-noctiluca.PNG'
import tarotCards from '../assets/tarot-cards.PNG'
import polinizadoresAmerica from '../assets/polinizadoreas-america.PNG'
import nitrogeno from '../assets/nitrogeno.PNG'
import piedrasAngulares from '../assets/piedras-angulares.PNG'

export default function Projects() {

    const projectsB = [
        {
            
        }
    ]

    return (
        <>
            <section id="proyects" className="min-h-screen bg-white flex flex-col items-center justify-center py-15 border-b border-neutral-200">
                <article className="">
                    <div className="py-5">
                        <h2 className="text-5xl pb-5">Proyectos descatados</h2>
                        <p className="text-neutral-600 text-sm">Una selección de mis trabajos más recientes que demuestran mis habilidades y pasión por el desarrollo web</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-10">
                        
                        {/* SprintFlow */}
                        <div className="bg-neutral-50 rounded-2xl">
                            <figure className="h-60 object-cover">
                                <img src={sprintFlow} alt="sprintflow-dashboard-admin" className="h-full w-full rounded-t-2xl" />
                            </figure>
                            <figcaption className="text-left p-7">
                                <h3 className="text-xl font-medium mb-2">SprintFlow</h3>
                                <p className="text-neutral-600 text-sm">Aplicación fullstack para mejorar la gestión ágil de proyectos basado es Scrum con métricas en tiempo real, calculadora de puntos de usuario, de las velocidades reales y ponderadas.</p>

                                <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">React</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">Node.js</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">MongoDB</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">Material UI</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">JWT</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">Bcrypt</span>
                                </div>

                                <div>
                                    <a href="https://github.com/orgs/SprintFlow/repositories" className='inline-flex gap-1 font-medium mt-6 text-sm'>
                                        <Github /> Código
                                    </a>
                                </div>
                            </figcaption>
                        </div>

                        {/* Celestial Bloom */}
                        <div className="bg-neutral-50 rounded-2xl">
                            <figure className="h-60 object-cover">
                                <img src={celestialBloom} alt="celestial-bloom-hero" className="h-full w-full rounded-t-2xl" />
                            </figure>
                            <figcaption className='text-left p-7'>
                                <h3 className="text-xl font-medium mb-2">Celestial Bloom: blog de astronomía y botánica</h3>
                                <p className="text-neutral-600 text-sm">Aplicación fullstack de Blog temático de astronomía y botánica, con gestión de usuarios y control de roles. Los usuarios pueden leer los artículos publicados, mientras que los administradores cuentas con funcionalidades completas de gestión de contenido (crear, editar, leer y borrar artículos).</p>

                                <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">React</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">CSS</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">Cloudinary</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">TypeScript</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">MongoDB</span>
                                </div>

                                <div>
                                    <a href="https://github.com/orgs/Sylva-Organization/repositories" className='inline-flex gap-1 font-medium mt-6 text-sm'><Github /> Código</a>
                                </div>
                            </figcaption>
                        </div>

                        {/* API-Noctiluca */}
                        <div className="bg-neutral-50 rounded-2xl">
                            <figure className="h-60 object-cover">
                                <img src={apiNoctiluca} alt="noctiluca-gallery-photos" className="h-full w-full drop-shadow-lg rounded-t-2xl" />
                            </figure>
                            <figcaption className="text-left p-7">
                                <h3 className="text-xl font-medium mb-2">API-Noctiluca</h3>
                                <p className="text-neutral-600 text-sm">Creación de aplicación fullstack del proyecto Noctiluca (Cuaderno de campo de Campo de Mariposas). Este trabajo se centra en construir y mantener tanto backend (API y lógica de servidor) como el frontend del sistema.</p>

                                <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">React</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">Tailwind</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">MongoDB</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">MySQL</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">Cloudinary</span>
                                </div>

                                <div>
                                    <a href="https://github.com/API-Noctiluca" className='inline-flex gap-1 font-medium mt-6 text-sm'><Github /> Código</a>
                                </div>
                            </figcaption>
                        </div>

                        {/* Cartas del Tarot */}
                        <div className="bg-neutral-50 rounded-2xl">
                            <figure className="h-60 object-cover">
                                <img src={tarotCards} alt="tarot-reading-cards" className="h-full w-full rounded-t-2xl" />
                            </figure>
                            <figcaption className="text-left p-7">
                                <h3 className="text-xl font-medium mb-2">Cartas del Tarot</h3>
                                <p className="text-neutral-600 text-sm">Aplicación web del Tarot místico, donde se pueden visualizar las cartas del tarot y a su vez, las mujeres del mundo de la ciencia y tecnoloía asociadas. Lectura de cartas pasado, presente y futuro.</p>

                                <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">React</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">CSS</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">JavaScript</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">API externa</span>
                                </div>

                                <div>
                                    <a href="https://github.com/guiss26/tarot-cards" className='inline-flex gap-1 font-medium mt-6 text-sm'><Github /> Código</a>
                                </div>
                            </figcaption>
                        </div>

                        {/* Polinizadores de América  */}
                        <div className="bg-neutral-50 rounded-2xl">
                            <figure className="h-60 object-cover">
                                <img src={polinizadoresAmerica} alt="polinizadores-gallery" className="h-full w-full rounded-t-2xl" />
                            </figure>
                            <figcaption className="text-left p-7">
                                <h3 className="text-xl font-medium mb-2">Polinizadores de América</h3>
                                <p className="text-neutral-600 text-sm">Aplicación web sobre polinizadores de América (mariposas), cuaderno de campo digital para documentar y conservar polinizadores de toda América en peligro de extinción</p>

                                <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">React</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">CSS</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">Tailwind</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">JavaScript</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">json-server</span>
                                </div>

                                <div>
                                    <a href="https://github.com/irinatiron/polinizadores-america-mariposas" className='inline-flex gap-1 font-medium mt-6 text-sm'><Github /> Código</a>
                                </div>
                            </figcaption>
                        </div>

                        {/* Cine de verano  */}
                        {/* <div className="bg-neutral-50 rounded-2xl">
                            <figure className="h-60">
                                <img src="" alt="" className="h-full w-full object-cover rounded-t-2xl"/>
                            </figure>
                            <figcaption className="text-left p-7">
                                <h3 className="text-xl font-medium mb-2">Cine de Verano</h3>
                                <p className="text-neutral-600 text-sm">Creación de una aplicación web de cine de verano con recomendaciones de películas que se pueda leer, editar, guardar y eliminar datos de manera dinámica.</p>

                                <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">CSS</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">HTML</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">React</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">Tailwind</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">JavaScript</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">API-pública</span>
                                </div>

                                <div>
                                    <a href="" className='inline-flex gap-1 font-medium mt-6 text-sm'><Github /> Código</a>
                                </div>
                            </figcaption>
                        </div> */}

                        {/* Nitrógeno  */}
                        <div className="bg-neutral-50 rounded-2xl">
                            <figure className="h-60 object-cover">
                                <img src={nitrogeno} alt="history-nitrogeno" className="h-full w-full rounded-t-2xl" />
                            </figure>
                            <figcaption className="text-left p-7">
                                <h3 className="text-xl font-medium mb-2">Tabla periódica: Nitrógeno</h3>
                                <p className="text-neutral-600 text-sm">Creación de una aplicación web sobre el elemento Nitrógeno de la tabla periódica, como medio para aprender y conocer más acerca de dicho elemento de manera dinámica.</p>

                                <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">HTML</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">CSS</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">JavaScript</span>
                                </div>

                                <div>
                                    <a href="https://github.com/guiss26/nitrogeno.git" className='inline-flex gap-1 font-medium mt-6 text-sm'><Github /> Código</a>
                                </div>
                            </figcaption>
                        </div>

                        {/* Piedras Angulares */}
                        <div className="bg-neutral-50 rounded-2xl">
                            <figure className="h-60 object-cover">
                                <img src={piedrasAngulares} alt="piedras-angulares-cards" className="h-full w-full rounded-t-2xl" />
                            </figure>
                            <figcaption className="text-left p-7">
                                <h3 className="text-xl font-medium mb-2">Piedras Angulares</h3>
                                <p className="text-neutral-600 text-sm">Creación de una aplicación web sobre mujeres en la ciencia que tuvieron un aporte importante pero pasaron desapercibidas.</p>

                                <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">HTML</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">CSS</span>
                                    <span className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">JavaScript</span>
                                </div>

                                <div>
                                    <a href="https://github.com/guiss26/piedras-angulares" className='inline-flex gap-1 font-medium mt-6 text-sm'><Github /> Código</a>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}