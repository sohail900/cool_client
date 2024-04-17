import { FC } from 'react'
import { IPRODUCT } from '../types/types'
const BestSellingProduct: FC<IPRODUCT> = ({ index, elem }) => {
    return (
        <>
            <div className='flex items-center justify-center gap-4' key={index}>
                <div className='w-[400px] md:w-[300px] lg:w-[260px] xl:w-[320px] h-auto mb-10 cursor-pointer'>
                    <img
                        src={elem.image}
                        alt={elem.title}
                        className='w-full h-[250px] object-cover rounded-md '
                    />
                    <div className='px-3 py-3'>
                        <h2 className='text-[1.2rem]  font-semibold'>
                            {elem.title}
                        </h2>
                        <p className='text-text_color2 -mt-1'>{elem.type}</p>
                        <p className='text-[1.1rem] font-semibold'>
                            ${elem.price}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSellingProduct
