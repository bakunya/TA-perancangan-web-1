import React from 'react'
import ImageLazy from './Lazy'

const MenuImageBackground = () => {
    return (
        <ImageLazy 
            src="https://images.unsplash.com/photo-1479030160180-b1860951d696?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1200&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTY1NjIyNDI5OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=3000"
            withLoader={false}
            imgClassName="h-full w-full object-cover object-center"
            containerClassName="h-full w-full"
        />
    )
}

export default React.memo(MenuImageBackground)