

export default function Navbar() {
    return (
        <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm flex py-4 px-8">
            <nav className="flex justify-between w-full">
                <div>
                    <h3 className="text-xl font-semibold bg-linear-to-r from-teal-600 to-blue-900 bg-clip-text text-transparent">guiperez_dev</h3>
                </div>
                <div>
                    <ul className="flex gap-10">
                        <li className="text-neutral-600 hover:text-teal-700 transition-colors font-medium"><a href="#about">Sobre mí</a></li>
                        <li className="text-neutral-600 hover:text-teal-700 transition-colors font-medium"><a href="#skills">Habilidades</a></li>
                        <li className="text-neutral-600 hover:text-teal-700 transition-colors font-medium"><a href="#proyects">Proyectos</a></li>
                        <li className="text-neutral-600 hover:text-teal-700 transition-colors font-medium"><a href="#contact">Contacto</a></li>
                    </ul>
                </div>

                {/* añadir modo oscuro y mirar lo del scrollbar-behavior: smooth*/}
            </nav>
        </header>
        </>
    )
}