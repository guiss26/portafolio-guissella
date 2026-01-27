

export default function Navbar() {
    return (
        <>
        <header className="bg-teal-50 flex p-4">
            <nav className="flex justify-between w-full">
                <div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-900 bg-clip-text text-transparent">guissella_dev</h3>
                </div>
                <div>
                    <ul className="flex gap-10">
                        <li className="text-neutral-600 hover:text-teal-700 transition-colors">Proyectos</li>
                        <li className="text-neutral-600 hover:text-teal-700 transition-colors">Habilidades</li>
                        <li className="text-neutral-600 hover:text-teal-700 transition-colors">Contacto</li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}