import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Pagination({ page, setPage, max }) {
    const [spanPage, setSpanPage] = useState(1)

    const nextPage = () => {
        if (page < max) {
            setSpanPage(spanPage + 1)
            setPage(page + 1)
        }
    }

    const previousPage = () => {
        if (page > 1) {
            setSpanPage(spanPage - 1)
            setPage(page - 1)
        }
    }

    return (
        <>
            <div className='flex items-center justify-center gap-3 '>
                <button onClick={previousPage} disabled={page <= 1} className='cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all'><ChevronLeft /></button>
                <p><span className='font-bold'>{spanPage}</span> de <span className='font-bold'>{max}</span> </p>
                <button onClick={nextPage} disabled={page >= max} className='cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all'><ChevronRight /></button>
            </div>
        </>
    )
}