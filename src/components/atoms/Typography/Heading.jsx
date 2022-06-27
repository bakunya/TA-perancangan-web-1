import clsx from 'clsx'
import React from 'react'

const Heading = ({ className, children }) => {
    return (
        <h1 className={clsx(className, "text-2xl sm:text-3xl xl:text-4xl font-semibold")}>{children}</h1>
    )
}

export default React.memo(Heading)