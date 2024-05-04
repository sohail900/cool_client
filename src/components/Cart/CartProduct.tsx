import { Trash2Icon } from 'lucide-react'
import Options from './Options'
import { ICart } from '../../types/types'
const CartProduct = (props: ICart) => {
    return (
        <>
            <section className='mb-6'>
                <div className='w-auto flex flex-wrap justify-between sm:flex-nowrap md:justify-around md:gap-14'>
                    <div className='flex flex-wrap sm:flex-nowrap gap-5'>
                        <img
                            src={props.image}
                            alt={props.title}
                            className='w-full  h-[200px] object-cover rounded-md shadow-lg sm:w-[120px] sm:h-[120px]'
                        />
                        <div>
                            <h1 className='text-black text-[1.2rem] mb-1 font-semibold'>
                                {props.title}
                            </h1>
                            <h1 className='font-semibold text-[1.2rem] -mt-1 mb-1 sm:hidden'>
                                ${props.price}.00
                            </h1>
                            <p className='font-semibold text-text_color2 -mt-1 mb-2'>
                                {props.type}
                            </p>
                            <div className='flex gap-1'>
                                <p className='font-semibold text-text_color2'>
                                    Size
                                </p>
                                <Options name='size' data={props.size} />
                                <p className='font-semibold text-text_color2'>
                                    Quantity
                                </p>
                                <Options
                                    name='quantity'
                                    data={props.quantity}
                                />
                            </div>
                            <button className=' mt-2'>
                                <Trash2Icon
                                    fill='white'
                                    stroke='rgba(0,0,0,0.8)'
                                    size={22}
                                />
                            </button>
                        </div>
                    </div>
                    <h1 className='font-semibold text-[1.2rem] hidden sm:block'>
                        ${props.price}.00
                    </h1>
                </div>
            </section>
        </>
    )
}
export default CartProduct
