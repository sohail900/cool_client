import { newProducts } from '../../constants/index'
import ProductContent from './ProductContent'
import ProductImage from './ProductImage'
const ProductDetailChild = () => {
    return (
        <>
            <section className='h-auto w-full flex flex-col justify-center gap-7 mt-8 lg:flex-row lg:h-[450px]'>
                <div className='w-full  h-full flex flex-col gap-3 overflow-hidden lg:flex-row lg:w-max'>
                    <ProductImage newProducts={newProducts} />
                </div>
                <div className='w-full lg:w-1/3'>
                    <ProductContent
                        title={newProducts[0].title}
                        price={newProducts[0].price}
                        type={newProducts[0].type}
                    />
                </div>
            </section>
        </>
    )
}

export default ProductDetailChild
