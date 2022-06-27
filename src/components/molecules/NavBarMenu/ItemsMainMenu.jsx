import React from 'react'
import ItemMenu from '@/atoms/NavBarMenu/ItemMenu'
import useMainMenu from '@/store/mainMenu'
import clsx from 'clsx'
import useMainMenuPath from '@/store/mainMenuPath'
import { FAKULTAS, ORGANISASI, PROFIL } from '@/utils/constant'

const ItemsMainMenu = () => {
    const show = useMainMenu(state => state.show)
    const path = useMainMenuPath(state => state.path[0])
    const addPath = useMainMenuPath(state => state.addPath)
    const removePath = useMainMenuPath(state => state.removePath)

    const handleClick = React.useCallback((path) => () => {

        removePath(0)
        addPath(path)

    }, [addPath, removePath])

    return (
        <div className="flex flex-col items-start">
            <div 
                className={clsx(
                    show ? 'delay-[200ms] translate-x-0 opacity-100': '-translate-x-64 opacity-0',
                    "mt-10 transition-all duration-300"
                )}
            >
                <ItemMenu type='button' isActive={path === PROFIL} onClick={handleClick(PROFIL)}>Profil</ItemMenu>
            </div>
            <div 
                className={clsx(
                    show ? 'delay-[300ms] translate-x-0 opacity-100': '-translate-x-64 opacity-0',
                    "mt-5 sm:mt-8 transition-all duration-300"
                )}
            >
                <ItemMenu type='link' href="#">Award</ItemMenu>
            </div>
            <div 
                className={clsx(
                    show ? 'delay-[400ms] translate-x-0 opacity-100': '-translate-x-64 opacity-0',
                    "mt-5 sm:mt-8 transition-all duration-300"
                )}
            >
                <ItemMenu type='button' isActive={path === FAKULTAS} onClick={handleClick(FAKULTAS)}>Fakultas</ItemMenu>
            </div>
            <div 
                className={clsx(
                    show ? 'delay-[500ms] translate-x-0 opacity-100': '-translate-x-64 opacity-0',
                    "mt-5 sm:mt-8 transition-all duration-300"
                )}
            >
                <ItemMenu type='button' isActive={path === ORGANISASI} onClick={handleClick(ORGANISASI)}>Organisasi</ItemMenu>
            </div>
            <div 
                className={clsx(
                    show ? 'delay-[600ms] translate-x-0 opacity-100': '-translate-x-64 opacity-0',
                    "mt-5 sm:mt-8 mb-12 transition-all duration-300"
                )}
            >
                <ItemMenu type='link' href="#">PMB</ItemMenu>
            </div>
        </div>
    )
}

export default React.memo(ItemsMainMenu)