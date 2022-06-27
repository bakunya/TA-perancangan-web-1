import { FES_LINKS, FES } from '@/utils/constant'
import React from 'react'
import ItemsMenuSection from './ItemsMenuSection'

const FESMenu = () => {
    React.useEffect(() => {
      const elms = window !== undefined ? document.querySelectorAll(`.${FES}-fes-menu-desktop`) : []
    
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
                FES_LINKS.map((itm, i) => (
                    <ItemsMenuSection
                        key={i}
                        href={itm.href}
                        desc={itm.desc}
                        title={itm.title}
                        classNameIdentifier={`${FES}-fes-menu-desktop`}
                    />
                ))
            }
        </div>
    )
}

export default React.memo(FESMenu)