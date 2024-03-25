import ReactSlick from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { heroContents } from '../constants'
const Slider = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
    }
    return (
        <>
            <ReactSlick {...settings}>
                {heroContents?.map((elem, index) => {
                    return (
                        <>
                            <div
                                className='m-0 p-0 flex place-items-center justify-center'
                                key={index}
                            >
                                <img
                                    src={elem.image}
                                    alt='hero-image'
                                    width={380}
                                    className='max-w-[100%]'
                                />
                                <h2 className='text-4xl text-right  right-5 bottom-10  font-bold text-[#aaaeadc9]'>
                                    ${elem.price}
                                </h2>
                            </div>
                        </>
                    )
                })}
            </ReactSlick>
        </>
    )
}

export default Slider
