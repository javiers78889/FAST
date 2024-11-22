import { useState, useEffect } from 'react';

const stats = [
    { id: 1, name: 'Paquetes importados', value: '6 mil', target: 6000 },
    { id: 2, name: 'Paquetes exportados', value: '3 mil', target: 3000 },
    { id: 3, name: 'Clientes Satisfechos', value: '2 mil', target: 2000 },
];

export const ConteoPersonas = () => {
    const [counters, setCounters] = useState(stats.map(stat => ({ ...stat, current: 0 })));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prevCounters =>
                prevCounters.map(stat => {
                    const increment = Math.ceil(stat.target / 100); // Incrementa en 1% cada vez
                    const newValue = Math.min(stat.current + increment, stat.target);
                    return { ...stat, current: newValue };
                })
            );
        }, 100); // Actualiza cada 100 ms

        // Detén el conteo cuando se alcanza el objetivo
        const timeout = setTimeout(() => clearInterval(interval), 5000); // Dura 5 segundos

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (

        <div id='clientes' className="bg-white py-24 sm:py-32 text-center bg-gradient-to-b from-blue-800 to-blue-900  ">
            <div className=' flex justify-center items-center'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5" // Cambia a camelCase
                    stroke="currentColor"
                    className="size-12 text-white" // Asegúrate de que esta clase esté definida en tu CSS
                >
                    <path
                        strokeLinecap="round" // Cambia a camelCase
                        strokeLinejoin="round" // Cambia a camelCase
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                </svg>
            </div>
            <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-yellow-300 sm:text-6xl mb-5 ">
                Nuestros Clientes

            </p>
            <div className='flex justify-center mb-5'>
                <div className='animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="animate-bounce w-6 h-6 text-violet-500 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        />
                    </svg>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {counters.map(stat => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-white">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-yellow-400 sm:text-5xl">
                                {stat.current}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};
