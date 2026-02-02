import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    // falta funcionalidad a la hroa de enviar un correo, esgestión de formulario de contacto 
    return (
        <>
            <section id='contact' className="bg-white min-h-screen py-20 px-10">
                <form>
                    <h2 className='text-5xl pb-3'>Trabajemos juntos</h2>
                    <p className='text-neutral-600'>¿Tienes un proyecto en mente? Me encantaría escuchar sobre él</p>
                    <div className='flex justify-between w-full gap-11 mt-10'>
                        <fieldset className='w-full px-7 py-5'>
                            <legend className='font-medium text-xl text-left'>Información de contacto</legend>

                            <div className='flex flex-col gap-3 text-left'>
                                <a href="mailto:guissella584@gmail.com" target='_blank' className='bg-neutral-100 p-3 flex gap-3 rounded-xl hover:bg-neutral-200 transition-colors group '>
                                    <div className='bg-linear-to-br from-teal-600 to-cyan-700 flex items-center justify-center px-3 rounded-xl'>
                                        <Mail className='text-white' size={20} />
                                    </div>
                                    <div>
                                        <h3 className='text-neutral-500'>Email</h3>
                                        <p className='text-sm'>guissella584@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://github.com/guiss26" target='_blank' className='bg-neutral-100 p-3 flex gap-3 rounded-xl hover:bg-neutral-200 transition-colors group'>
                                    <div className='bg-linear-to-r from-orange-600 to-amber-600 flex items-center justify-center px-3 rounded-xl'>
                                        <Github className='text-white' size={20}/>
                                    </div>
                                    <div>
                                        <h3 className='text-neutral-500'>GitHub</h3>
                                        <p className='text-sm'>@guiss26</p>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/guissella-p%C3%A9rez/" target='_blank' className='bg-neutral-100 p-3 flex gap-3 rounded-xl hover:bg-neutral-200 transition-colors group'>
                                    <div className='bg-linear-to-br from-teal-600 to-blue-900 flex items-center justify-center px-3 rounded-xl'>
                                        <Linkedin className='text-white' size={20}/>
                                    </div>
                                    <div>
                                        <h3 className='text-neutral-500'>LinkedIn</h3>
                                        <p className='text-sm'>guissella-perez</p>
                                    </div>
                                </a>
                            </div>
                        </fieldset>
                        <fieldset className='w-full text-left flex flex-col gap-4'>
                            <div className='flex flex-col '>
                                <label htmlFor="name" className='mb-2'>Nombre</label>
                                <input id='name' name='name' type="text" className='bg-neutral-50 p-3 border border-neutral-200 rounded-xl text-sm' placeholder='Tu nombre'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='mb-2'>Email</label>
                                <input id='email' name='email' type="email" className='bg-neutral-50 p-3 border border-neutral-200 rounded-xl text-sm' placeholder='ejemplo@email.com'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="message" className='mb-2'>Mensaje</label>
                                <textarea name="message" id="message" className='bg-neutral-50 p-3 text-sm border border-neutral-200 rounded-xl c' placeholder='Cuéntame sobre tu proyecto...' rows={3}></textarea>
                            </div>

                            <button className='bg-linear-to-r from-teal-600 to-blue-900 text-white rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center p-3 gap-2'>Enviar mensaje <Send className='text-white' size={15}/> </button>
                        </fieldset>
                    </div>
                </form>
            </section>
        </>
    )
}