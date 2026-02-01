import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <>
            <section className="bg-white">
                <form>
                    <div>
                        <h2>Trabajemos juntos</h2>
                        <p text-neutral-700>¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte</p>

                        <fieldset>
                            <legend>Información de contacto</legend>

                            <div>
                                <div>
                                    <Mail />
                                    <div>
                                        <h3>Email</h3>
                                        <a href="mailto:guissella584@gmail.com">guissella584@gmail.com</a>
                                    </div>
                                </div>
                                <div>
                                    <Github />
                                    <div>
                                        <h3>GitHub</h3>
                                        <a href="https://github.com/guiss26">@guiss26</a>
                                    </div>
                                </div>
                                <div>
                                    <Linkedin />
                                    <div>
                                        <h3>LinkedIn</h3>
                                        <a href="https://www.linkedin.com/in/guissella-p%C3%A9rez/">guissella-perez</a>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label htmlFor="">Nombre</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="email" />
                            </div>
                            <div>
                                <label htmlFor="">Mensaje</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </section>
        </>
    )
}