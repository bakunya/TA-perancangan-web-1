import React from 'react'
import Anchor from '@/atoms/Anchor'
import { BsArrowRightShort } from 'react-icons/bs'

const CardBasic = ({ title, content, href, link }) => {
    return (
        <div className="p-8 rounded-xl transition-all duration-300 border hover:shadow-xl hover:scale-[1] scale-[0.95]">
            <h1 className="font-bold text-2xl capitalize mb-10">{ title ?? '' }</h1>
            <p className='mb-10'>{ content ?? '' }</p>
            {
                !!href && !!link && (
                    <Anchor href={href} className="text-primary w-full group flex items-center font-bold">
                        { link ?? '' }
                        <BsArrowRightShort className='ml-4 group-hover:ml-6 transition-all' size={25} />
                    </Anchor>
                )
            }
        </div>
    )
}

export default React.memo(CardBasic)