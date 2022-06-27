import React from 'react'
import ItemsMainMenu from '@/molecules/NavBarMenu/ItemsMainMenu'
import ItemsPrimaryMenu from '@/molecules/NavBarMenu/ItemsPrimaryMenu'
import ItemsSecondaryMenu from '@/molecules/NavBarMenu/ItemsSecondaryMenu'

const MainMenuContent = () => {
    return (
        <div className='bg-primary/80 pt-3 px-5 h-[calc(100vh-(78px+80px))] grid grid-cols-3 w-full overflow-hidden relative'>
            <div className="h-24 bg-primary-transparent absolute top-0 left-0 right-0 z-[9]"></div>
            <div className="h-24 bg-transparent-primary absolute bottom-0 left-0 right-0 z-[9]"></div>

            <div className="col-span-1 overflow-y-auto py-10 pr-5">
                <ItemsMainMenu />
            </div>
            <div className="col-span-1 overflow-y-auto py-10 px-5">
                <ItemsPrimaryMenu />
            </div>
            <div className="col-span-1 overflow-y-auto py-10 px-5">
                <ItemsSecondaryMenu />
            </div>
        </div>
    )
}

export default React.memo(MainMenuContent)