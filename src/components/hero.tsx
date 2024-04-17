//import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Slider } from './HeroSlider'
const Hero = () => {
    return (
        <>
            <main className='h-[100dvh] w-[100vw] bg-colorBackground flex place-content-center flex-col px-4 md:px-24 pt-24 pb-12  overflow-hidden relative'>
                <h3 className='text-3xl font-semibold text-[#aaaeadc9] absolute top-28  font-merri'>
                    NIKE
                </h3>
                <h1 className='text-[7rem] text-center pt-20 font-extrabold text-[#DADEDD] sm:text-[9rem]  md:text-[10rem] lg:text-[15rem] lg:-mt-20 md:-mt-10  md:absolute md:left-[50%] md:translate-x-[-50%]'>
                    SHOES
                </h1>
                <span className='w-52 h-52 hidden  bg-[rgb(42,98,251)] blur-3xl absolute top-64 right-[45%] mix-blend-overlay lg:block z-0'></span>
                <Slider />
                <div className='w-full flex flex-col justify-between gap-4 z-10 mt-40 md:mt-32 lg:flex-row lg:items-center'>
                    <h2 className='text-3xl font-semibold text-text_color'>
                        Your Feet Deserve <br></br>The Best
                    </h2>
                    <div className='flex flex-col gap-1 w-fit'>
                        <button className='buttons py-2 bg-[#2C2C2C] text-white'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero
