//import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Slider } from './HeroSlider'
import HeroSecBtn from './HeroSecBtn'
import HeroSecContent from './HeroSecContent'
const Hero = () => {
    const sliderRef = useRef(null)
    return (
        <>
            <main className='h-[100dvh] w-[100vw] bg-colorBackground flex place-content-center flex-col px-4 md:px-24 pt-24 pb-12  overflow-hidden relative'>
                <HeroSecContent />
                <Slider sliderRef={sliderRef} />
                <div className='w-full flex flex-col justify-between gap-4 z-10 mt-52 lg:mt-32 lg:flex-row lg:items-center'>
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
