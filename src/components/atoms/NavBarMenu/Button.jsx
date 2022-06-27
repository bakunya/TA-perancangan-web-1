import clsx from 'clsx'
import React from 'react'

const Button = ({ withBorder, onClick, children }) => {
    return (
        <button 
            className={clsx(
                withBorder && 'border-r border-white',
                'transition duration-300 outline-none bg-primary focus:bg-secondary hover:bg-secondary flex items-center text-white h-full text-lg p-7 h-[78px]'
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default React.memo(Button)