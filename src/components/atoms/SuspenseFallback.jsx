import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

const Fallback = React.memo(() => (
    <div className="min-h-[500px] flex items-center justify-center">
        <AiOutlineLoading className='animate-[spin_300ms_linear_infinite]' size={23} />
    </div>
))

export default Fallback