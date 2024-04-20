import { ISHOEPRO, TSlider } from '../types/types'
import { allProducts } from '../constants'
const handlePre = (sliderRef: TSlider) => {
    if (sliderRef?.current !== null) sliderRef?.current?.slickPrev()
}
const handleNext = (sliderRef: TSlider) => {
    if (sliderRef?.current !== null) sliderRef?.current?.slickNext()
}
export const matchedProduct = (productType: string) => {
    const newData: ISHOEPRO[] = []
    allProducts.map((elem) => {
        if (elem.type === productType) {
            newData.push(elem)
        } else if (productType === 'All') {
            newData.push(elem)
        }
    })
    return newData
}
export { handleNext, handlePre }
