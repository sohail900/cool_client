import { useState } from 'react'
import { TProductDetail } from '../../types/types'

const ProductContent = (props: TProductDetail) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [size, setSize] = useState([
        'Size 6',
        'Size 7',
        'Size 8',
        'Size 9',
        'Size 10',
        'Size 11',
        'Size 12',
    ])
    return (
        <>
            <h1 className='text-4xl font-semibold '>
                {props.title}
                <p className='text-[1rem] mb-2 text-text_color2 '>
                    {props.type}
                </p>
            </h1>
            <p className='font-bold text-black'>{props.price}$</p>
            <div className='w-full'>
                <p className='mb-2 font-semibold mt-8 text-text_color2 '>
                    Select Size
                </p>
                <div className='w-full flex flex-wrap items-center gap-2'>
                    {size.map((elem, index) => {
                        return (
                            <>
                                <h2
                                    key={index}
                                    className='w-max px-4 border-2 border-black/20 rounded-md py-2 
                                            text-center font-semibold shadow-md cursor-pointer'
                                >
                                    {elem}
                                </h2>
                            </>
                        )
                    })}
                </div>
            </div>
            <button className='btn_style py-3 px-8 mt-5 font-semibold '>
                Add to Cart
            </button>
        </>
    )
}
export default ProductContent
