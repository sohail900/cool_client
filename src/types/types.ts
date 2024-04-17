import { Dispatch, SetStateAction } from 'react'
import Slider from 'react-slick'
export type TNAVBAR = {
    itemId: number
    itemName: string
    link: string
}
export interface ISHOEPRO {
    itemId: number
    title: string
    type: string
    price: number
    image: string
}
export interface IMENU {
    menu: Dispatch<SetStateAction<boolean>>
}

export interface ICOLLECTION {
    elem: {
        itemId: number
        title: string
        price: number
        image: string
    }
    idx: number
}
//....
export type IPRODUCT = {
    index: number
    elem: ISHOEPRO
}
//..
export type TSlider = React.RefObject<Slider>
