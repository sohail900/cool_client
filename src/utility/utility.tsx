import { TSlider } from '../types/types'
const handlePre = (sliderRef: TSlider) => {
    if (sliderRef?.current !== null) sliderRef?.current?.slickPrev()
}
const handleNext = (sliderRef: TSlider) => {
    if (sliderRef?.current !== null) sliderRef?.current?.slickNext()
}
export { handleNext, handlePre }
