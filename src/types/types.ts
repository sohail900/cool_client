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
        type: string
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
///props type
export interface IInputProps<T> {
    value: string
    onChange: (e: T) => void
    name: string
    type?: string
    passtype?: string
    placeholder: string
    checkpassword?: boolean
    errors: string | undefined
}
////###PRODUCT DETAIL CONTENT.
export type TProductDetail = {
    title: string
    type: string
    price: number
}
export interface ICart {
    title: string
    price: number
    image: string
    type: string
    size: number[]
    quantity: number[]
}
