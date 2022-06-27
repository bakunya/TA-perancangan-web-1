import Link from 'next/link'
import React from 'react'

const index = ({ children, className, href="#", style = {} }) => {
    return (
        <Link href={href}>
            <a className={className} style={style}>{children}</a>
        </Link>
    )
}

export default React.memo(index)