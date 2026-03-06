import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult("");

        emailjs.sendForm(
            import.meta.env.VITE_SERVICES_ID,    // services
            import.meta.env.VITE_TEMPLATE_ID,   // template
            e.target,            
            import.meta.env.VITE_API_KEYS   // api_keys
        )
            .then(() => {
                setResult('¡Mensaje enviado correctamente!');
                setLoading(false);
                e.target.reset();

                setTimeout(() => setResult(''), 4000)
            })
            .catch(() => {
                setResult('❌ Error al enviar');
                setLoading(false);
                setTimeout(() => setResult(''), 4000);
            });
    };

    return (
        <>
            <section id='contact' className="bg-white min-h-screen py-20 px-6 md:px-10">
                <form id='form' onSubmit={onSubmit} method='POST'>
                    <h2 className='text-4xl md:text-5xl pb-3'>Trabajemos juntos</h2>
                    <p className='text-neutral-600'>¿Tienes un proyecto en mente? Me encantaría escuchar sobre él</p>

                    <div className='flex flex-col md:flex-row justify-between w-full gap-8 md:gap-11 mt-10'>
                        <fieldset className='w-full md:w-1/2 px-0 md:px-7 py-5'>
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
                                        <Github className='text-white' size={20} />
                                    </div>
                                    <div>
                                        <h3 className='text-neutral-500'>GitHub</h3>
                                        <p className='text-sm'>@guiss26</p>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/guissella-p%C3%A9rez/" target='_blank' className='bg-neutral-100 p-3 flex gap-3 rounded-xl hover:bg-neutral-200 transition-colors group'>
                                    <div className='bg-linear-to-br from-teal-600 to-blue-900 flex items-center justify-center px-3 rounded-xl'>
                                        <Linkedin className='text-white' size={20} />
                                    </div>
                                    <div>
                                        <h3 className='text-neutral-500'>LinkedIn</h3>
                                        <p className='text-sm'>guissella-perez</p>
                                    </div>
                                </a>
                            </div>
                        </fieldset>

                        {/* Formulario */}
                        <fieldset className='w-full md:w-1/2 text-left flex flex-col gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor="name" className='mb-2'>Nombre</label>
                                <input id='name' name='name' type="text" className='bg-neutral-50 p-3 border border-neutral-200 rounded-xl text-sm' placeholder='Tu nombre' required />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="email" className='mb-2'>Email</label>
                                <input id='email' name='email' type="email" className='bg-neutral-50 p-3 border border-neutral-200 rounded-xl text-sm' placeholder='ejemplo@email.com' required />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="message" className='mb-2'>Mensaje</label>
                                <textarea name="message" id="message" className='bg-neutral-50 p-3 text-sm border border-neutral-200 rounded-xl c' placeholder='Cuéntame sobre tu proyecto...' rows={3} required></textarea>
                            </div>

                            <button type='submit' className='bg-linear-to-r from-teal-600 to-blue-900 text-white rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center p-3 gap-2' disabled={loading}>{loading ? 'Enviando...' : 'Enviar mensaje'}<Send className='text-white' size={15} /> </button>
                            {/* <p>{result}</p> */}
                            {result && (
                            <p className={`text-sm text-center ${result.includes('❌') ? 'text-red-500' : 'text-teal-600'}`}>
                                {result}
                            </p>
                        )}
                        </fieldset>
                    </div>
                </form>
            </section>
        </>
    )
}