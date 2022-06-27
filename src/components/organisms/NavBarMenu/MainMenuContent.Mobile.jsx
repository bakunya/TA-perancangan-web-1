import React from 'react'
import ItemsMainMenu from '@/molecules/NavBarMenu/ItemsMainMenu'
import ItemsPrimaryMenu from '@/molecules/NavBarMenu/ItemsPrimaryMenu'
import ItemsSecondaryMenu from '@/molecules/NavBarMenu/ItemsSecondaryMenu'
import useMainMenuPath from '@/store/mainMenuPath'
import { BsArrowLeftShort } from 'react-icons/bs'

const MainMenuContent = () => {
    const path = useMainMenuPath(state => state.path)
    const removePath = useMainMenuPath(state => state.removePath)

    const handlePrev = React.useCallback((index) => () => removePath(index), [removePath])

    return (
        <div className='bg-primary/80 pt-3 px-5 h-[calc(100vh-(78px+80px))] grid grid-cols-1 w-full overflow-hidden relative'>
            <div className="h-24 bg-primary-transparent absolute top-0 left-0 right-0 z-[9]"></div>
            <div className="h-24 bg-transparent-primary absolute bottom-0 left-0 right-0 z-[9]"></div>

            <div className="col-span-1 overflow-y-auto py-10 pr-5">
                {
                    path.length <= 0
                        ? <ItemsMainMenu />
                        : path[1]
                            ? (
                                <>
                                    <button className='mt-10 flex items-center' onClick={handlePrev(1)}>
                                        <div className="mr-3 rounded-full border p-1 bg-white text-primary">
                                            <BsArrowLeftShort size={25} />
                                        </div>
                                        {path[0]}
                                    </button>
                                    <ItemsSecondaryMenu />
                                </>
                            )
                            : (
                                <>
                                    <button className='mt-10 flex items-center' onClick={handlePrev(0)}>
                                        <div className="mr-3 rounded-full border p-1 bg-white text-primary">
                                            <BsArrowLeftShort size={25} />
                                        </div>
                                        Menu Utama
                                    </button>
                                    <ItemsPrimaryMenu />
                                </>
                            )
                }
            </div>
        </div>
    )
}

export default React.memo(MainMenuContent)