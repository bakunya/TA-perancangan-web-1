import React from 'react'
import { ORGANISASI_LINKS, ORGANISASI } from '@/utils/constant'
import ItemsMenuSection from './ItemsMenuSection'

const OrganisasiMenu = () => {
    React.useEffect(() => {
      const elms = window !== undefined ? document.querySelectorAll(`.${ORGANISASI}-organisasi-menu-desktop`) : []
    
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
                ORGANISASI_LINKS.map((itm, i) => (
                    <ItemsMenuSection
                        key={i}
                        href={itm.href}
                        desc={itm.desc}
                        title={itm.title}
                        classNameIdentifier={`${ORGANISASI}-organisasi-menu-desktop`}
                    />
                ))
            }
        </div>
    )
}

export default React.memo(OrganisasiMenu)