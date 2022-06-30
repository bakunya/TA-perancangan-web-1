import React from 'react'
import Lazy from '@/atoms/Image/Lazy'

const Content = ({ content, img, id }) => {
    return (
        content && img && (Number(id) % 2 === 0)
            ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-center">
                    <div className="col-span-1">
                        <Lazy
                            containerClassName="w-full max-w-[800px]"
                            imgClassName="w-[100%] border border-primary rounded-lg mx-auto lg:mx-0"
                            src={img}
                        />
                    </div>
                    <div className="col-span-1 mt-5 sm:mt-0">
                        <p className="sm:text-md sm:tracking-wide leading-loose indent-8">{content}</p>
                    </div>
                </div>
            )
            : content && img && (Number(id) % 2 === 1)
                ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-center">
                        <div className="col-span-1 mt-5 sm:mt-0">
                            <p className="sm:text-md sm:tracking-wide leading-loose indent-8">{content}</p>
                        </div>
                        <div className="col-span-1">
                            <Lazy
                                containerClassName="w-full max-w-[800px]"
                                imgClassName="w-[100%] border border-primary rounded-lg mx-auto lg:mx-0"
                                src={img}
                            />
                        </div>
                    </div>
                )
                : content 
                    ? <p className="sm:text-md sm:tracking-wide leading-loose indent-8">{content}</p>
                    : img
                        ? (
                            <Lazy
                                containerClassName="w-full max-w-[800px]"
                                imgClassName="w-[100%] border border-primary rounded-lg"
                                src={img}
                            />
                        )
                        : null
                    
    )
}

export default Content