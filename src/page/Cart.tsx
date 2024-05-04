import CartProduct from '../components/Cart/CartProduct'
import ProductSummary from '../components/Cart/ProductSummary'
import { newProducts } from '../constants/index'
const Cart = () => {
    const myProducts = newProducts[0]
    const size = [6, 7, 8, 9, 10]
    const quantity = [1, 2, 3, 4, 5]
    return (
        <>
            <section className='w-screen flex flex-col justify-around  mt-32 px-[2rem] md:px-[3.5rem] md:flex-row'>
                <div className='w-auto'>
                    <h1 className='conatiner_name mb-4'>Cart</h1>
                    <CartProduct
                        title={myProducts.title}
                        image={myProducts.image}
                        price={myProducts.price}
                        type={myProducts.type}
                        size={size}
                        quantity={quantity}
                    />
                </div>
                <div className='w-auto md:w-2/6'>
                    <h1 className='conatiner_name mb-4'>Summary</h1>
                    <ProductSummary price={myProducts.price} />
                </div>
            </section>
        </>
    )
}

export default Cart
