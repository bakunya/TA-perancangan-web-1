import React from 'react'
import Container from '@/atoms/Container'
import CardBasic from '@/atoms/CardBasic'

const Alasan = ({ val }) => {
    return (
        <Container 
            wrapperClassName="mt-44"
            cardClassName="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7"
        >
            {
                Array.isArray(val) && val.map(itm => (
                    <CardBasic 
                        key={itm.key}
                        title={itm.title}
                        content={itm.content}
                        link={itm.link?.content}
                        href={itm.link?.href}
                    />
                ))
            }
        </Container>
    )
}

export default React.memo(Alasan)