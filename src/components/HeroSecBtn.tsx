import { handlePre, handleNext } from '../utility/utility'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroSecBtn = ({ sliderRef }: any) => {
    return (
        <section className='flex flex-col gap-3 w-fit'>
            <div className=' flex  z-20 bg-[rgba(0,0,0,0.08)] rounded-full overflow-hidden '>
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
            <button className='buttons py-2 bg-[#2C2C2C] text-white'>
                Add To Cart
            </button>
        </section>
    )
}

export default HeroSecBtn
