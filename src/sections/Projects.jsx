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
        { // Sprintflow
            id: 1,
            photo: sprintFlow,
            alt: 'sprintflow-dashboard-admin',
            title: 'SprintFlow',
            description: 'Aplicación fullstack para mejorar la gestión ágil de proyectos basado es Scrum con métricas en tiempo real, calculadora de puntos de usuario, de las velocidades reales y ponderadas.',
            tools: ['React', 'Node.js', 'MongoDB', 'Material UI', 'JWT', 'Bcrypt'],
            code: 'https://github.com/orgs/SprintFlow/repositories'
        },
        { // CelestialBloom
            id: 2,
            photo: celestialBloom,
            alt: 'celestial-bloom-hero',
            title: 'Celestial Bloom: blog de astronomía y botánica',
            description: 'Blog de astronomía y botánica con gestión de usuarios y roles. Los usuarios leen artículos mientras los administradores gestionan el contenido completo.',
            tools: ['React', 'CSS', 'Cloudinary', 'TypeScript', 'MongoDB'],
            code: 'https://github.com/orgs/Sylva-Organization/repositories'
        },
        { // API-Noctiluca
            id: 3,
            photo: apiNoctiluca,
            alt: 'noctiluca-gallery-photos',
            title: 'API-Noctiluca',
            description: 'Creación de aplicación fullstack del proyecto Noctiluca (Cuaderno de campo de Campo de Mariposas). Este trabajo se centra en construir y mantener tanto backend (API y lógica de servidor) como el frontend del sistema.',
            tools: ['React', 'Tailwind', 'MongoDB', 'MySQL', 'Cloudinary'],
            code: 'https://github.com/API-Noctiluca'
        },
        { // Tarot
            id: 4,
            photo: tarotCards,
            alt: 'tarot-reading-cards',
            title: 'Cartas del Tarot',
            description: 'Aplicación web del Tarot místico, donde se pueden visualizar las cartas del tarot y a su vez, las mujeres del mundo de la ciencia y tecnoloía asociadas. Lectura de cartas pasado, presente y futuro.',
            tools: ['React', 'CSS', 'JavaScript', 'API externa'],
            code: 'https://github.com/guiss26/tarot-cards'
        },
        { // Polinizadores de América
            id: 5,
            photo: polinizadoresAmerica,
            alt: 'polinizadores-gallery',
            title: 'Polinizadores de América',
            description: 'Aplicación web sobre polinizadores de América (mariposas), cuaderno de campo digital para documentar y conservar polinizadores de toda América en peligro de extinción',
            tools: ['React', 'CSS', 'Tailwind', 'JavaScript', 'json-server'],
            code: 'https://github.com/irinatiron/polinizadores-america-mariposas'
        },
        { // Nitrógeno
            id: 6,
            photo: nitrogeno,
            alt: 'history-nitrogeno',
            title: 'Tabla periódica: Nitrógeno',
            description: 'Creación de una aplicación web sobre el elemento Nitrógeno de la tabla periódica, como medio para aprender y conocer más acerca de dicho elemento de manera dinámica.',
            tools: ['HTML', 'CSS', 'JavaScript'],
            code: 'https://github.com/guiss26/nitrogeno.git'
        },
        { // Piedras Angulares
            id: 7,
            photo: piedrasAngulares,
            alt: 'piedras-angulares-cards',
            title: 'Piedras Angulares',
            description: 'Creación de una aplicación web sobre mujeres en la ciencia que tuvieron un aporte importante pero pasaron desapercibidas.',
            tools: ['HTML', 'CSS', 'JavaScript'],
            code: 'https://github.com/guiss26/piedras-angulares'
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
                        {/* QUEDA PASARLO A CARRUSEL */}
                        {projectsB.map((project) => (
                            <div key={project.id} className="bg-neutral-50 rounded-2xl">
                                <figure className="h-60 object-cover">
                                    <img src={project.photo} alt={project.alt} className="h-full w-full rounded-t-2xl" />
                                </figure>
                                <figcaption className="text-left p-7">
                                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                                    <p className="text-neutral-600 text-sm">{project.description}</p>

                                    <div className="mt-4 inline-flex gap-1.5 flex-wrap">
                                        {project.tools.map((tool) => (
                                            <span key={tool} className="bg-white py-1 px-3 rounded-3xl border border-neutral-300 text-neutral-800 text-sm">{tool}</span>
                                        ))}

                                    </div>

                                    <div>
                                        <a href={project.code} className='inline-flex gap-1 font-medium mt-6 text-sm'>
                                            <Github /> Código
                                        </a>
                                    </div>
                                </figcaption>
                            </div>
                        ))}

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

                    </div>
                </article>
            </section>
        </>
    )
}