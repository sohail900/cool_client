import { useState } from 'react'
import { ISHOEPRO } from '../../types/types'
type TPRO = {
    newProducts: ISHOEPRO[]
}
const ProductImage = (props: TPRO) => {
    const [imageIndex, setImageIndex] = useState<number>(0)
    const { newProducts } = props
    return (
        <>
            <div className='flex flex-row flex-wrap gap-3 lg:flex-col lg:flex-nowrap'>
                {newProducts.map((elem, index) => {
                    return (
                        <>
                            <img
                                src={elem.image}
                                alt={elem.title}
                                key={index}
                                className='w-20 h-20 aspect-square object-cover rounded-lg 
                                        cursor-pointer shadow-md'
                                onMouseEnter={() => setImageIndex(index)}
                            />
                        </>
                    )
                })}
            </div>
            <img
                src={newProducts[imageIndex].image}
                alt={newProducts[imageIndex].title}
                className='w-full h-[300px] lg:w-[450px] lg:h-full aspect-square object-cover bg-center rounded-lg shadow-md shadow-black/20'
            />
        </>
    )
}

export default ProductImage
