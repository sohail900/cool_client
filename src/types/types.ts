import { Dispatch, SetStateAction } from 'react'
import Slider from 'react-slick'
export type TNAVBAR = {
    itemId: number
    itemName: string
    link: string
}
export interface IHERO {
    itemId: number
    title: string
    price: number
    image: string
}
export type TCOLLECTION = {
    id: number
    title: string
    price: number
    image: string
}
export interface IMENU {
    menu: Dispatch<SetStateAction<boolean>>
}

export interface ICOLLECTION {
    elem: {
        id: number
        title: string
        price: number
        image: string
    }
    idx: number
}
//....
export type IPRODUCT = {
    index: number
    elem: IHERO
}
//..
export type TSlider = React.RefObject<Slider>
