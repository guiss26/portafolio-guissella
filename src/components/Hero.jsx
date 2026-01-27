
export default function Hero() {
    return (
        <>
            <section id="hero" className="min-h-screen flex items-center justify-center gap-5">
                <div className="max-w-2xl mx-auto flex flex-col gap-5 py-5">
                    <div className="">
                        <span className="bg-teal-50 text-teal-800 rounded-full py-2 px-4">Disponible para trabajar</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-6xl">Hola, soy <span className="bg-linear-to-r from-teal-600 to-blue-900 bg-clip-text text-transparent">Guissella Pérez</span></h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Desarrolladora web fullstack apasionada por crear experiencias digitales únicas y funcionales, cuidando tanto la experiencia del usuario como la calidad del código.
                        
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-3 my-5">
                        <svg className="bg-white rounded-full p-2 size-10 hover:bg-neutral-100 shadow-md transition-colors" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        <svg className="bg-white rounded-full p-2 size-10 hover:bg-neutral-100 shadow-md transition-colors" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        <svg className="bg-white rounded-full p-2 size-10 hover:bg-neutral-100 shadow-md transition-colors" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                    </div>
                    <div>
                        <a href="#proyects" className="py-2 px-5 rounded-full text-white bg-linear-to-r from-teal-600 to-blue-900 hover:shadow-lg transition-shadow">Ver mis proyectos ↓</a>
                    </div>
                </div>

                {/* Elementos decorativos - circulo difuso | VER SI QUIERARLO */}
                {/* <div className="absolute top-1/4 left-10 w-20 h-20 bg-teal-300 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-50"></div> */}
            </section>
        </>
    )
}