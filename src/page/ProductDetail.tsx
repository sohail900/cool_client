import ProductDetailChild from '../components/ProductDetails/ProductDetailChild'

const ProductDetail = () => {
    return (
        <>
            <section className='w-[100vw] h-auto flex   flex-col px-[2rem] md:px-[3.5rem] '>
                <h1 className='conatiner_name mb-8 mt-24'>PRODUCT DETAIL</h1>
                <ProductDetailChild />
            </section>
        </>
    )
}

export default ProductDetail
