import { useRef } from 'react'
import ReactSlick from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BestSellingProduct from './BestSellingProduct'
import { bestProducts } from '../constants'
import { handlePre, handleNext } from '../utility/utility'
const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    speed: 500,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                speed: 500,
                initialSlide: 0,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                speed: 500,
                initialSlide: 0,
            },
        },
    ],
}
const BestSelling = () => {
    const sliderRef = useRef<ReactSlick | null>(null)
    return (
        <>
            <section className='mt-32 flex justify-between'>
                <h2 className='conatiner_name'>Best Selling</h2>
                <div className='pr-10 flex gap-4 mb-5'>
                    <button
                        className='carosal_button'
                        onClick={() => handlePre(sliderRef)}
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        className='carosal_button'
                        onClick={() => handleNext(sliderRef)}
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            </section>
            <ReactSlick ref={sliderRef} {...settings}>
                {bestProducts?.map((elem, index) => {
                    return (
                        <>
                            <BestSellingProduct elem={elem} index={index} />
                        </>
                    )
                })}
            </ReactSlick>
        </>
    )
}

export default BestSelling
