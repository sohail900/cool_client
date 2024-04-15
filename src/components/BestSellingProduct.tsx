import { FC } from 'react'
import { IPRODUCT } from '../types/types'
const BestSellingProduct: FC<IPRODUCT> = ({ index, elem }) => {
    return (
        <>
            <div className='flex gap-4' key={index}>
                <div className='w-[330px] h-auto mb-10 cursor-pointer'>
                    <img
                        src={elem.image}
                        alt={elem.title}
                        className='w-full h-[250px] object-cover rounded-md '
                    />
                    <div className='px-3 py-3'>
                        <h2 className='text-[1.2rem]  font-semibold'>
                            {elem.title}
                        </h2>
                        <p className='text-gray-500 '>Gender</p>
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
