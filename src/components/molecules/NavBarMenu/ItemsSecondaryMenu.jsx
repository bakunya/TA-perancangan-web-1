import React from 'react'
import useMainMenuPath from '@/store/mainMenuPath'
import { FES, FIK, FST } from '@/utils/constant'
import FESMenu from './FESMenu'
import FIKMenu from './FIKMenu'
import FSTMenu from './FSTMenu'

const Elements = {
    [FES]: <FESMenu />,
    [FIK]: <FIKMenu />,
    [FST]: <FSTMenu />,
}

const ItemsPrimaryMenu = () => {
    const path = useMainMenuPath(state => state.path[1])
    
    return Elements[path] ?? ''
}

export default React.memo(ItemsPrimaryMenu)