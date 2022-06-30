import React from 'react'
import Lazy from '@/atoms/Image/Lazy'

const CardDosen = ({ src, nim, name }) => {
    return (
        <div className="w-full border-white bg-primary/80 p-10 rounded-xl shadow-xl border shadow-primary/50 max-w-[300px] mx-auto">
            <div className="h-[130px] w-[130px] rounded-full overflow-hidden grid place-content-center bg-gray-200 mx-auto">
                {
                    src && (
                        <Lazy 
                            containerClassName="w-full" 
                            imgClassName="object-cover object-center ml-auto border border-gray-300" 
                            imgSizeClassName="w-[140px] h-[140px]"
                            src={src} 
                        />
                    )
                }
            </div>
            <p className="text-white text-center mt-5">{ nim ?? '' }</p>
            <p className="text-2xl mt-2 font-bold text-center text-white">{ name ?? '' }</p>
        </div>
    )
}

export default React.memo(CardDosen)