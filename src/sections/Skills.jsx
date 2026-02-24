import { Code2, Database, DatabaseZap, Zap, FileCog, ShieldCheck } from 'lucide-react';

const skillsCategories = [
    {
        icon: Code2,
        title: 'Frontend',
        skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'React Router', 'React Hook Form', 'Material-UI', 'TypeScript'],
        color: 'bg-linear-to-r from-violet-600 to-indigo-600'
    },
    {
        icon: DatabaseZap,
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Sequelize', 'Mongoose', 'JavaScript', 'TypeScript'],
        color: 'bg-linear-to-r from-emerald-600 to-teal-600'
    },
    {
        icon: Database,
        title: 'Base de datos',
        skills: ['MySQL', 'MongoDB'],
        color: 'bg-linear-to-r from-pink-600 to-rose-600'
    },
    {
        icon: FileCog,
        title: 'Testing',
        skills: ['Jest', 'Supertest', 'Vitest', 'TDD'],
        color: 'bg-linear-to-r from-orange-600 to-amber-600'
    },
    {
        icon: ShieldCheck,
        title: 'Seguridad',
        skills: ['JWT', 'Bcrypt'],
        color: 'bg-linear-to-r from-cyan-600 to-blue-600'
    },
    {
        icon: Zap,
        title: 'Herramientas',
        skills: ['Git', 'GitHub', 'Postman', 'VSCode'],
        color: 'bg-linear-to-r from-purple-600 to-violet-600'
    }
]

export default function Skills() {

    return (
        <>
            <section id="skills" className='min-h-screen bg-neutral-50 flex flex-col justify-center py-15'>
                <article className='mx-8'>
                    <div>
                        <h2 className='text-5xl pb-2.5'>Habilidades</h2>
                        <p className='text-neutral-600'>Tecnologías y herramientas con las que trabajo</p>
                    </div>

                    {/* skills-box */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
                        {skillsCategories.map((skill, index) => {
                            const Icon = skill.icon; return (
                                <div key={index} className='bg-white hover:shadow-xl transition-all duration-300 p-5 rounded-xl'>
                                    <div className='flex gap-2.5 items-center'>
                                        <div className={`${skill.color} rounded-xl p-2`}>
                                            <Icon className='size-6 text-white' />
                                        </div>
                                        <h3 className='text-xl'>{skill.title}</h3>
                                    </div>
                                    <div className='flex flex-wrap gap-2 pt-4'>
                                        {skill.skills.map((skilldev) => (
                                            <span key={skilldev} className='bg-gray-200 px-3 rounded-md text-sm'>{skilldev}</span>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </article>
            </section>
        </>
    )
}