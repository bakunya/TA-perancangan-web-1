import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'

const AnchorCollapseCard = ({ links, title, className }) => {
    return (
        <div className={className}>
            {
                title && <h1 className="font-bold mb-3 flex flex-col after:content-[''] after:mt-1 after:h-[2px] after:w-[30px] after:bg-white">{title}</h1>
            }
            {
                Array.isArray(links)
                    && links.map((itm, i) => (
                        <Link href={itm.href} key={i}>
                            <a className={clsx((i !== 0) && 'mt-3', 'block w-max')}>{itm.title}</a>
                        </Link>
                    ))
            }
        </div>
    )
}

export default React.memo(AnchorCollapseCard)