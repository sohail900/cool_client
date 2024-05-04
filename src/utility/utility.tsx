import { ISHOEPRO, TSlider } from '../types/types'
import { allProducts } from '../constants'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
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
export const useHandleClick = (ref: React.RefObject<HTMLDivElement>) => {
    const location = useNavigate()
    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            if (!ref?.current?.contains(e.target as null)) {
                location('../')
            }
        }
        window.addEventListener('mousedown', handleMouse)
        return () => window.removeEventListener('mousedown', handleMouse)
    })
}
export { handleNext, handlePre }
