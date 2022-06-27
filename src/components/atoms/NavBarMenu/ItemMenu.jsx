import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'

const ItemMenu = ({ className, type = 'button', onClick = () => {}, children, href = "#", isActive }) => {
    return (
        type === 'button'
            ? (
                <button 
                    className={clsx(
                        className, 
                        isActive ? 'text-white' : 'text-white/50', 
                        'hover:text-white focus:text-white transition duration-300 text-5xl sm:text-6xl font-display font-semibold group flex items-start flex-col'
                    )} 
                    onClick={onClick}
                >
                    {children}
                    <span 
                        className={clsx(
                            isActive ? 'w-36' : 'w-0',
                            'bg-white transition-all duration-300 mt-5 group-hover:w-36 group-focus:w-36 h-[2px]'
                        )}
                    />
                </button>
            )
            : (
                <Link href={href}>
                    <a 
                        className={clsx(
                            className, 
                            isActive ? 'text-white' : 'text-white/50', 
                            'hover:text-white focus:text-white transition duration-300 text-5xl sm:text-6xl font-display font-semibold group flex items-start flex-col'
                        )}
                    >
                        {children}
                        <span 
                            className={clsx(
                                isActive ? 'w-36' : 'w-0',
                                'bg-white transition-all duration-300 mt-5 group-hover:w-36 group-focus:w-36 h-[2px]'
                            )}
                        />
                    </a>
                </Link>
            )
    )
}

export default React.memo(ItemMenu)