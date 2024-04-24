//import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Slider } from './HeroSlider'
import HeroSecBtn from './HeroSecBtn'
const Hero = () => {
    const sliderRef = useRef(null)
    return (
        <>
            <main className='h-[100dvh] w-[100vw] bg-colorBackground flex place-content-center flex-col px-4 md:px-24 pt-24 pb-12  overflow-hidden relative'>
                <h1 className='text-[7rem] text-center font-extrabold text-[#DADEDD] sm:text-[9rem]  md:text-[10rem] lg:text-[15rem] -mt-32 absolute left-[50%] translate-x-[-50%]'>
                    <span className='text-3xl font-semibold text-[#aaaeadc9] absolute top-12'>
                        NIKE
                    </span>
                    SHOES
                </h1>
                <span className='w-52 h-52 hidden  bg-[rgb(42,98,251)] blur-3xl absolute top-64 right-[45%] mix-blend-overlay lg:block z-0'></span>
                <Slider sliderRef={sliderRef} />
                <div className='w-full flex flex-col justify-between gap-4 z-10 mt-40 md:mt-32 lg:flex-row lg:items-center'>
                    <h2 className='text-3xl font-semibold text-text_color'>
                        Your Feet Deserve <br></br>The Best
                    </h2>
                    <HeroSecBtn sliderRef={sliderRef} />
                </div>
            </main>
        </>
    )
}

export default Hero
