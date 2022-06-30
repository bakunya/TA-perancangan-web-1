import clsx from 'clsx'
import React from 'react'
import ListItem from '@/atoms/ListItem'

const List = ({ title, size, items, withIndent, titleClassName, listClassName, prefixClassName }) => {
    return (
        <>
            <h1 className={clsx(titleClassName, "text-4xl md:text-6xl mt-0 tracking-wider font-display font-bold")}>{ title }</h1>
            {
                Array.isArray(items) && items.map((itm, i) => (
                    <ListItem withIndent={withIndent} className={listClassName} prefixClassName={prefixClassName} size={size} prefix={itm.key ?? i + 1}>
                        { itm.content }
                    </ListItem>
                ))
            }
        </>
    )
}

export default List