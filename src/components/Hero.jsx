import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <>
            <section id="hero" className="min-h-screen flex items-center justify-center gap-5 py-20">
                <div className="max-w-2xl mx-auto flex flex-col gap-5 py-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-7xl mt-5 font-medium text-neutral-700">Guissella Pérez</h1>
                        <span className="text-2xl bg-linear-to-r from-teal-600 to-blue-900 bg-clip-text text-transparent">Junior FullStack Developer</span>
                        <p className="text-xl mt-6 text-neutral-600 max-w-2xl mx-auto">Desarrolladora web fullstack apasionada por crear experiencias digitales únicas y funcionales, cuidando tanto la experiencia del usuario como la calidad del código.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-3 my-5">
                        <a href="https://github.com/guiss26" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 hover:bg-neutral-100 shadow-md transition-colors" >
                            <Github />
                        </a>

                        <a href="https://www.linkedin.com/in/guissella-p%C3%A9rez/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 hover:bg-neutral-100 shadow-md transition-colors" >
                            <Linkedin />
                        </a>

                        <a href="mailto:guissella584@gmail.com" rel="noopener noreferrer" className="bg-white rounded-full p-3 hover:bg-neutral-100 shadow-md transition-colors" >
                            <Mail />
                        </a>
                    </div>
                    <div>
                        <a href="#proyects" className="py-3 px-5 rounded-full text-white bg-linear-to-r from-teal-600 to-blue-900 hover:shadow-lg transition-shadow">Ver mis proyectos ↓</a>
                    </div>
                </div>

                {/* añadir posiblemente un fondo de otro color */}
            </section>
        </>
    )
}