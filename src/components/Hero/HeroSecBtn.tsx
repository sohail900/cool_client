import { handlePre, handleNext } from '../../utility/utility'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroSecBtn = ({ sliderRef }: any) => {
    return (
        <section className='flex flex-col gap-3 w-fit'>
            <div className=' flex z-20 bg-[#DADEDD] rounded-full overflow-hidden '>
                <button
                    className='py-2 w-1/2 px-4 grid place-items-center border-r-2 border-gray-300 transition-all hover:bg-slate-300'
                    onClick={() => handlePre(sliderRef)}
                >
                    <ChevronLeft size={22} />
                </button>
                <button
                    className='py-2 w-1/2 px-4 place-items-center transition-all hover:bg-slate-300'
                    onClick={() => handleNext(sliderRef)}
                >
                    <ChevronRight size={22} />
                </button>
            </div>
            <button className='btn_style py-2 px-4 font-normal '>
                Add To Cart
            </button>
        </section>
    )
}

export default HeroSecBtn
