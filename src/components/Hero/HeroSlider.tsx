import ReactSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { heroContents } from '../../constants'
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Slider = ({ sliderRef }: any) => {
    return (
        <>
            <ReactSlider
                ref={sliderRef}
                {...settings}
                className=' sm:w-full h-[300px] flex items-center justify-center'
            >
                {heroContents?.map((elem, index) => {
                    return (
                        <>
                            <div
                                className='mt-5 p-0 flex items-center justify-center'
                                key={index}
                            >
                                <img
                                    src={elem.image}
                                    alt='hero-image'
                                    loading='lazy'
                                    className='w-[300px] md:w-[380px]'
                                />
                                <h2 className='text-4xl font-extrabold text-[#aaaeadb6]  absolute bottom-10 text-left sm:bottom-20'>
                                    ${elem.price}
                                </h2>
                            </div>
                        </>
                    )
                })}
            </ReactSlider>
        </>
    )
}
