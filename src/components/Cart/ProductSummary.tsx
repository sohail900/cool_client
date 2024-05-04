type Tprice = { price: number }
const ProductSummary = (props: Tprice) => {
    return (
        <>
            <section className='w-full flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-4'>
                    <p className='font-semibold'>Subtotal</p>
                    <p className='font-semibold'>${props.price}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold'>
                        Estimate Shipping & Handling
                    </p>
                    <p className='font-semibold'>$20.00</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold'>Estimate Tex</p>
                    <p className='font-semibold'>-</p>
                </div>
                <hr className='hr' />
                <div className='flex items-center justify-between'>
                    <p className='font-semibold'>Total</p>
                    <p className='font-semibold'>$300</p>
                </div>
                <hr className='hr' />
                <button className='btn_style font-semibold   px-5 py-3.5'>
                    Checkout
                </button>
            </section>
        </>
    )
}
export default ProductSummary
