import React from 'react'
import clsx from 'clsx'
import Anchor from '@/atoms/Anchor'
import { BsArrowRightShort } from 'react-icons/bs'

const ItemsMenuSection = ({ children, desc, classNameIdentifier, href, title }) => {
    return (
        <div
            className={clsx(
                'mt-7 transition-all duration-300 opacity-0 -translate-x-64 w-full',
                classNameIdentifier,
            )}
        >
            <Anchor 
                className={'font-bold text-2xl group flex items-start group'}
                href={href} 
            >
                <span className='w-10/12'>{title}</span>
                <BsArrowRightShort className='ml-3 text-white/40 group-hover:text-white group-hover:ml-5 transition-all duration-100' size={35} />
            </Anchor>
            {
                desc && (
                    <p className='mt-3 text-sm mb-4'>{desc}</p>
                )
            }
            {
                children
            }
        </div>
    )
}

export default React.memo(ItemsMenuSection)