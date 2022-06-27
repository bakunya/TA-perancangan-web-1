import { FIK_LINKS, FIK } from '@/utils/constant'
import React from 'react'
import ItemsMenuSection from './ItemsMenuSection'

const FIKMenu = () => {
    React.useEffect(() => {
      const elms = window !== undefined ? document.querySelectorAll(`.${FIK}-fik-menu-desktop`) : []
    
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
                FIK_LINKS.map((itm, i) => (
                    <ItemsMenuSection
                        key={i}
                        href={itm.href}
                        desc={itm.desc}
                        title={itm.title}
                        classNameIdentifier={`${FIK}-fik-menu-desktop`}
                    />
                ))
            }
        </div>
    )
}

export default React.memo(FIKMenu)