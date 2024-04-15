import { useRef } from 'react'
import ReactSlick from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BestSellingProduct from './BestSellingProduct'
import { bestSellingData } from '../constants'

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    speed: 500,
    initialSlide: 0,
}
const BestSelling = () => {
    const sliderRef = useRef<ReactSlick>(null)
    const handlePrev = () => {
        if (sliderRef?.current !== null) sliderRef?.current.slickPrev()
    }
    const handleNext = () => {
        if (sliderRef?.current !== null) sliderRef?.current?.slickNext()
    }

    return (
        <>
            <section className='mt-20 flex justify-between'>
                <h2 className='conatiner_name'>Best Selling</h2>
                <div className='pr-10 flex gap-4'>
                    <button className='carosal_button' onClick={handlePrev}>
                        <ChevronLeft size={22} />
                    </button>
                    <button className='carosal_button' onClick={handleNext}>
                        <ChevronRight size={22} />
                    </button>
                </div>
            </section>
            <ReactSlick ref={sliderRef} {...settings}>
                {bestSellingData?.map((elem, index) => {
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
