import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Cierra el menú al hacer scroll y detecta si hay scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    // Cierra el menú al hacer clic en un enlace
    const handleLinkClick = () => setIsOpen(false);

    const links = [
        { href: "#about", label: "Sobre mí" },
        { href: "#skills", label: "Habilidades" },
        { href: "#proyects", label: "Proyectos" },
        { href: "#contact", label: "Contacto" },
    ];

    return (
        <>
            {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm flex py-4 px-8">
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
                </nav>
            </header> */}
            <header
            className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
                scrolled ? "shadow-md" : "shadow-sm"
            } bg-white/80 backdrop-blur-md`}
        >
            <nav className="flex justify-between items-center py-4 px-8">
                {/* Logo */}
                <h3 className="text-xl font-semibold bg-linear-to-r from-teal-600 to-blue-900 bg-clip-text text-transparent">
                    guiperez_dev
                </h3>

                {/* Links */}
                <ul className="hidden md:flex gap-10">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="text-neutral-600 hover:text-teal-700 transition-colors font-medium"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botón hamburguesa — móvil NO SIRVE? */}
                <button
                    className="md:hidden text-neutral-600 hover:text-teal-700 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menú"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Menú desplegable — móvil */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col px-8 pb-6 gap-4 bg-white/95 backdrop-blur-md">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={handleLinkClick}
                                className="block text-neutral-600 hover:text-teal-700 transition-colors font-medium py-1 border-b border-neutral-100"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
        </>
    )
}