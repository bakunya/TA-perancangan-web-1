import clsx from 'clsx'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs/index'

const AnchorCollapse = ({ title, className, children }) => {
    const [show, setShow]  = React.useState(false)
    const id = React.useId()

    const handleToggle = React.useCallback(() => setShow(prev => !prev), [setShow])
    const handleHide = React.useCallback(() => setShow(false), [setShow])

    React.useEffect(() => {

        const parent = document.getElementById(id)
        const listener = (e) => !parent.contains(e.target) && handleHide()

        document.addEventListener('click', listener)
        return () => document.removeEventListener('click', listener)

    }, [id, handleHide])

    return (
        <div className='relative' id={id}>
            <button type='button' className={clsx(className, show ? 'text-third' : 'text-white', 'flex items-center')} onClick={handleToggle}>
                {title}
                <BsChevronDown width={23} height={23} className={clsx(show ? '-rotate-180' : 'rotate-0', "duration-500 transition-all ml-2")} />
            </button>
            <div 
                className={clsx(
                    show ? 'translate-y-0 scale-y-none opacity-100' : 'scale-y-0 -translate-y-[20px] opacity-0',
                    "flex flex-col origin-top transition-all duration-500 text-white absolute right-0 top-0 mt-[60px] bg-primary p-5 border-t-4 border-secondary rounded-b-[10px] shadow-lg"
                )}
            >
                { children }
            </div>
        </div>
    )
}

export default React.memo(AnchorCollapse)