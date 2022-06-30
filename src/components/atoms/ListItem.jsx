import clsx from 'clsx'
import React from 'react'

const ListItem = ({ size, children, contentClassName, className, prefixClassName, withoutPrefix }) => {
    const sizeClassName = React.useMemo(() => {
        switch(size.toLowerCase()) {
            case 'large':
                return {
                    p: 'text-lg tracking-wide',
                    prefix: 'w-10 h-10 mt-2',
                }
            case 'small':
                return {
                    p: 'text-sm',
                    prefix: 'w-6 h-6 mt-1 block ml-auto mr-5',
                }
            default:
                return {
                    p: 'text-lg tracking-wide',
                    prefix: 'w-10 h-10 mt-2',
                }
        }

    }, [size])

    return (
        <div className={clsx(className, "grid-cols-12 grid items-start")}>
            <div className="col-span-2">
                {
                    !withoutPrefix && <div className={clsx(prefixClassName, sizeClassName.prefix, "rounded-full bg-white/30")} />
                }
            </div>
            <div className="col-span-10">
                <p className={clsx(sizeClassName.p, contentClassName, "font-semibold leading-loose relative")}>{children}</p>
            </div>
        </div>
    )
}

export default React.memo(ListItem)
