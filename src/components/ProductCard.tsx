import { ICOLLECTION } from '../types/types'
const ProductCard = ({ elem, idx }: ICOLLECTION) => {
    return (
        <>
            <div className='w-[240px] relative' key={idx}>
                <div className='text-left absolute px-4 py-3 z-10'>
                    <h2 className='text-xl'>{elem.title}</h2>
                    <p className='text-text_color2'>{elem.type}</p>
                </div>
                <img
                    src={elem.image}
                    alt='image'
                    className='max-w-[100%] transition rounded-3xl object-cover aspect-square  shadow-md shadow-gray-300   cursor-pointer hover:scale-105'
                />
                <p className='bg-colorBackground  font-semibold text-black w-20 h-9 p-4 rounded-full backdrop-blur-md shadow-md  shadow-gray-400 grid place-content-center absolute -bottom-5 left-[50%] -translate-x-[50%]'>
                    ${elem.price}
                </p>
            </div>
        </>
    )
}

export default ProductCard
