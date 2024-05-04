import { useState } from 'react'
import { matchedProduct } from '../../utility/utility'
import { ISHOEPRO } from '../../types/types'
import ProductContainer from './ProductContainer'
const AllProduct = () => {
    const [products, setProducts] = useState<ISHOEPRO[] | null>(null)
    const [showTitle, setShowTitle] = useState<string>('All')
    //-------------------------------------------
    function handleClick(productType: string) {
        setShowTitle(productType)
        const elem = matchedProduct(productType)
        if (elem !== null) {
            setProducts(elem)
        }
    }
    return (
        <>
            <section className='mt-20 mb-10'>
                <h2 className='conatiner_name mb-3'>All Products</h2>
                <div className='flex justify-center'>
                    <div className='w-max flex justify-center mb-10 bg-colorBackground p-[0.35rem]  rounded-md overflow-hidden shadow-sm shadow-gray-300 gap-2'>
                        <button
                            className={`all_product_nav_buttons ${
                                showTitle == 'All' ? 'active_button' : ''
                            }`}
                            onClick={() => handleClick('All')}
                        >
                            All
                        </button>
                        <button
                            className={`all_product_nav_buttons ${
                                showTitle == "Men's Shoes"
                                    ? 'active_button'
                                    : ''
                            }`}
                            onClick={() => handleClick("Men's Shoes")}
                        >
                            Men
                        </button>
                        <button
                            className={`all_product_nav_buttons ${
                                showTitle == "Women's Shoes"
                                    ? 'active_button'
                                    : ''
                            }`}
                            onClick={() => handleClick("Women's Shoes")}
                        >
                            Women
                        </button>
                    </div>
                </div>
                <h2 className='mt-2 text-xl font-semibold text-text_color'>
                    {showTitle}
                </h2>
                <ProductContainer products={products} />
            </section>
        </>
    )
}

export default AllProduct
