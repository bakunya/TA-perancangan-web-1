import { PROFIL, PROFIL_LINKS } from '@/utils/constant'
import React from 'react'
import ItemsMenuSection from './ItemsMenuSection'

const ProfileMenu = () => {
    React.useEffect(() => {
      const elms = window !== undefined ? document.querySelectorAll(`.${PROFIL}-profile-menu-desktop`) : []
    
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
                PROFIL_LINKS.map((itm, i) => (
                    <ItemsMenuSection
                        key={i}
                        href={itm.href}
                        desc={itm.desc}
                        title={itm.title}
                        classNameIdentifier={`${PROFIL}-profile-menu-desktop`}
                    />
                ))
            }
        </div>
    )
}

export default React.memo(ProfileMenu)