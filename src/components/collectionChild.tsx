import { ShoppingBagIcon } from 'lucide-react'
import { ICOLLECTION } from '../types/types'
const CollectionChild = ({ elem, idx }: ICOLLECTION) => {
    return (
        <>
            <div
                className='w-[230px] h-[290px] bg-[#F6F6F6]  rounded-3xl relative shadow-md border border-[##ECF0EF] overflow-hidden '
                key={idx}
            >
                <div className='text-left absolute px-4 py-3 z-10'>
                    <h2 className='text-xl'>{elem.title}</h2>
                    <p className='font-bold text-[#0000009d]'>${elem.price}</p>
                </div>
                <img
                    src={elem.image}
                    alt='image'
                    className='max-w-[100%] h-auto transition object-cover aspect-square cursor-pointer hover:scale-110'
                />
                <button className='flex items-center justify-center gap-2 bg-[#ffffff2c] backdrop-blur-lg  px-2 w-full py-3 bg-white  absolute bottom-0 left-[50%] -translate-x-[50%] '>
                    Add To Cart
                    <ShoppingBagIcon size={18} />
                </button>
            </div>
        </>
    )
}
export default CollectionChild
