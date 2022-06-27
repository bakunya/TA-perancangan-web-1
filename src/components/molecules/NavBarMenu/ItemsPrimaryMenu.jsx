import React from 'react'
import ProfileMenu from './ProfileMenu'
import useMainMenuPath from '@/store/mainMenuPath'
import { FAKULTAS, ORGANISASI, PROFIL } from '@/utils/constant'
import FakultasMenu from './FakultasMenu'
import OrganisasiMenu from './OrganisasiMenu'

const Elements = {
    [PROFIL]: <ProfileMenu />,
    [FAKULTAS]: <FakultasMenu />,
    [ORGANISASI]: <OrganisasiMenu />,
}

const ItemsPrimaryMenu = () => {
    const path = useMainMenuPath(state => state.path[0])

    return Elements[path] ?? ''
}

export default React.memo(ItemsPrimaryMenu)