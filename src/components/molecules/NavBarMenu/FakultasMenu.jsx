import React from 'react'
import { FAKULTAS_LINKS, FAKULTAS } from '@/utils/constant'
import useMainMenuPath from '@/store/mainMenuPath'
import ItemsMenuSection from './ItemsMenuSection'

const FakultasMenu = () => {
    const addPath = useMainMenuPath(state => state.addPath)
    const removePath = useMainMenuPath(state => state.removePath)

    const handleClick = React.useCallback((path) => () => {

        removePath(1)
        addPath(path)

    }, [addPath, removePath])


    React.useEffect(() => {
      const elms = window !== undefined ? document.querySelectorAll(`.${FAKULTAS}-fakultas-menu-desktop`) : []

      elms.forEach((itm, i) => {
          setTimeout(() => {
            itm.classList.remove('-translate-x-64')
            itm.classList.remove('opacity-0')
          }, (150*i));
      })
    }, [])
    

    return (
        <div className='mt-3 mb-10 flex flex-col items-start'>
            {
                FAKULTAS_LINKS.map((itm, i) => (
                    <ItemsMenuSection
                        key={i}
                        href={itm.href}
                        desc={itm.desc}
                        title={itm.title}
                        classNameIdentifier={`${FAKULTAS}-fakultas-menu-desktop`}
                    >
                        <button 
                            className='border border-white ml-auto p-3 rounded mt-5 block mb-8 mr-5 hover:mr-0 active:mr-0 transition-all duration-200'
                            onClick={handleClick(itm.child)}
                        >Lihat Prodi</button>
                    </ItemsMenuSection>
                ))
            }
        </div>
    )
}

export default React.memo(FakultasMenu)