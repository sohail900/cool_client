import { newProducts } from '../constants'
import ProductCard from './ProductCard'

const CollectionContainer = () => {
    return (
        <>
            <section className='mt-20'>
                <h2 className='conatiner_name'>New Collection 2024</h2>
                <div className='flex  flex-wrap items-center gap-8 justify-center'>
                    {newProducts.map((elem, index) => (
                        <ProductCard elem={elem} idx={index} />
                    ))}
                </div>
            </section>
        </>
    )
}
export default CollectionContainer
