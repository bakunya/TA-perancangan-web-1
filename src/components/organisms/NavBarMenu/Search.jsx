import React from 'react'
import { BsSearch, BsX } from 'react-icons/bs'
import Button from '@/atoms/NavBarMenu/Button'
import clsx from 'clsx'

const Search = () => {
    const inputRef = React.useRef()
    const [isShow, setShow] = React.useState(false)
    const id = React.useId()

    const handleShow = React.useCallback(() => {
        setShow(true)
        inputRef.current?.focus()
    }, [setShow, inputRef])

    const handleHide = React.useCallback((removeEventListenerCallback) => {
        setShow(false)
        if(removeEventListenerCallback instanceof Function) removeEventListenerCallback()
    }, [setShow])

    React.useEffect(() => {

        const parent = document.getElementById(id)
        const listener = (e) => {
            if(!parent.contains(e.target)) handleHide(() => {
                document.removeEventListener('click', listener)
            })
        }

        document.addEventListener('click', listener)

        return () => document.removeEventListener('click', listener)

    }, [id, handleHide])

    return (
        <div className="sm:relative" id={id}>
            <Button withBorder={true} onClick={handleShow}>
                <BsSearch className='sm:mr-4' size={22} />
                <span className="hidden sm:block">Search</span>
            </Button> 
            <form 
                action=""
                className={clsx(
                    !isShow ? '-translate-y-[100px] opacity-0': 'translate-y-0 opacity-100',
                    "z-[99] sm:translate-x-1 transition-all absolute top-0 right-0 sm:max-w-[500px] w-screen h-full bg-primary border border-white flex justify-between p-5 sm:rounded items-center"
                )}>
                    <input ref={inputRef} type="text" placeholder='Search in Amikom ...' className='w-full h-full bg-transparent border-none outline-none pr-4' />
                    <div className="flex items-center">
                        <button type='submit'>
                            <BsSearch className='mr-4' size={22} />
                        </button>
                        <button type='button' onClick={handleHide} className="border rounded-full border-white">
                            <BsX size={30} />
                        </button>
                    </div>
            </form>
        </div>
    )
}

export default React.memo(Search)