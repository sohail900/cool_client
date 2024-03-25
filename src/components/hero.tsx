//import { ArrowLeft, ArrowRight } from 'lucide-react'
import Slider from './slider'
const Hero = () => {
    return (
        <>
            <main className='w-[100vw] h-[100dvh] bg-colorBackground flex place-content-center flex-col px-16 md:px-24 pt-24 pb-12  overflow-hidden relative'>
                <h3 className='text-3xl font-semibold text-[#aaaeadc9] absolute top-28'>
                    SPORTS
                </h3>
                <h1 className='text-[6rem] text-center  -mt-7 md:text-[10rem] lg:text-[15rem] lg:-mt-20 md:-mt-10  font-extrabold text-[#DADEDD] absolute left-[50%] translate-x-[-50%]'>
                    SHOES
                </h1>
                <span className='w-52 h-52 hidden  bg-[#2a62fb] blur-3xl absolute top-64 right-[45%] mix-blend-overlay lg:block z-0'></span>
                <Slider />
                <div className='w-full flex flex-col justify-between gap-4 mt-52 md:mt-20 lg:flex-row absolute bottom-5 right-0  px-16 md:px-24'>
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
