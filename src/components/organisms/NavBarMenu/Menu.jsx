import React from 'react'
import MainMenu from './MainMenu'
import Button from '@/atoms/NavBarMenu/Button'
import useMainMenu from '@/store/mainMenu'
import useMainMenuPath from '@/store/mainMenuPath'

const Search = () => {
    const show = useMainMenu(state => state.show)
    const setHide = useMainMenu(state => state.setHide)
    const setShow = useMainMenu(state => state.setShow)
    const removePath = useMainMenuPath(state => state.removePath)

    const handleShow = React.useCallback(() => {
        setShow()
        document.body.classList.add('overflow-hidden')
    }, [setShow])
    
    const handleHide = React.useCallback(() => {
        setHide()
        removePath(0)
        document.body.classList.remove('overflow-hidden')
    }, [setHide])


    return (
        <div className="sm:relative">
            <Button onClick={handleShow}>
                <div className="flex flex-col items-center w-[20px] sm:mr-4 h-full justify-center">
                    <div className="w-full h-[2px] bg-white"></div>
                    <div className="w-full h-[2px] bg-white mt-[6px]"></div>
                </div>
                <span className="hidden sm:block">Menu</span>
            </Button>
            <MainMenu isShow={show} onHide={handleHide} />
        </div>
    )
}

export default React.memo(Search)