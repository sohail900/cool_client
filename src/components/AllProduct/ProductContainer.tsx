import ProductCard from './ProductCard'
import { ISHOEPRO } from '../../types/types'

const ProductContainer = ({ products }: any) => {
    return (
        <>
            <div className='flex justify-center gap-10 flex-wrap mt-3 '>
                {products?.map((elem, index) => {
                    return (
                        <>
                            <ProductCard elem={elem} idx={index} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ProductContainer
