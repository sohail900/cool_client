import ReactSlider from 'react-slick'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { handlePre, handleNext } from '../utility/utility'
import { heroContents } from '../constants'
const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    speed: 500,
    initialSlide: 0,
    arrows: false,
    dots: false,
}
export const Slider = () => {
    const sliderRef = useRef<ReactSlider>(null)
    return (
        <>
            <ReactSlider
                ref={sliderRef}
                {...settings}
                className='w-[100vw] sm:w-full h-[300px] flex items-center justify-center'
            >
                {heroContents?.map((elem, index) => {
                    return (
                        <>
                            <div
                                className='mt-20 p-0 flex items-center justify-center'
                                key={index}
                            >
                                <img
                                    src={elem.image}
                                    alt='hero-image'
                                    width={380}
                                    loading='lazy'
                                    className='max-w-[100%] mt-24'
                                />
                                <h2 className='text-4xl font-bold text-[#aaaeadc9] mt-72 hidden sm:block'>
                                    ${elem.price}
                                </h2>
                            </div>
                        </>
                    )
                })}
            </ReactSlider>
            <div className='absolute top-[78%] right-40 translate-x-1/2 z-20 bg-[rgba(0,0,0,0.08)] rounded-full overflow-hidden hidden sm:flex'>
                <button
                    className='py-2 w-[59px] px-4 grid place-items-center border-r-2 border-gray-300 transition-all hover:bg-slate-300'
                    onClick={() => handlePre(sliderRef)}
                >
                    <ChevronLeft size={22} />
                </button>
                <button
                    className='py-2 w-[59px] px-4 place-items-center transition-all hover:bg-slate-300'
                    onClick={() => handleNext(sliderRef)}
                >
                    <ChevronRight size={22} />
                </button>
            </div>
        </>
    )
}
