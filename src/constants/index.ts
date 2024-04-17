import {
    bestSelling1,
    bestSelling2,
    bestSelling3,
    bestSelling4,
    bestSelling5,
    bestSelling6,
    bestSelling7,
    bestSelling8,
    jordan1,
    jordan4,
    jordan5,
    nike1,
    nike2,
    nike3,
    nike4,
    nike5,
    nike6,
    nike7,
} from '../assets/index'
import { TNAVBAR } from '../types/types'
import { ISHOEPRO } from '../types/types'
export const navBarItems: TNAVBAR[] = [
    {
        itemId: 1,
        itemName: 'HOME',
        link: '/home',
    },
    {
        itemId: 2,
        itemName: 'CONTACT US',
        link: '/contact',
    },
    {
        itemId: 3,
        itemName: 'ABOUT US',
        link: '/about',
    },
]
//# constants Data for hero section
export const heroContents: ISHOEPRO[] = [
    {
        itemId: 1,
        title: 'Jumpman MVP',
        type: "Men's Shoes",
        price: 107.97,
        image: jordan1,
    },
    {
        itemId: 2,
        title: 'Air Jordan 3 Retro Craft "Ivory"',
        type: "Men's Shoes",
        price: 210,
        image: jordan4,
    },
    {
        itemId: 3,
        title: 'Air Jordan 6 Retro "Yellow Ochre"',
        type: "Men's Shoes",
        price: 200,
        image: jordan5,
    },
]
//# Constants Data for New Collection
export const newProducts: ISHOEPRO[] = [
    {
        itemId: 1,
        title: 'Nike Air Max 270',
        type: "Women's Shoes",
        price: 250,
        image: nike1,
    },
    {
        itemId: 2,
        title: 'Nike Dunk Low',
        type: "Men's Shoes",
        price: 230,
        image: nike2,
    },
    {
        itemId: 3,
        title: 'Nike Air Force 107',
        type: "Men's Shoes",
        price: 250,
        image: nike3,
    },
    {
        itemId: 4,
        title: 'Nike Air Force',
        type: "Men's Shoes",
        price: 250,
        image: nike4,
    },
    {
        itemId: 5,
        title: 'Nike Dunk Low',
        type: "Men's Shoes",
        price: 130,
        image: nike5,
    },
    {
        itemId: 6,
        title: 'Nike Dunk Low Retro',
        type: "Men's Shoes",
        price: 160,
        image: nike6,
    },
    {
        itemId: 7,
        title: 'Nike Air Max 90 GORE-TEX',
        type: "Men's Shoes",
        price: 120,
        image: nike7,
    },
]
//# Constants Data for Best Selling
export const bestProducts: ISHOEPRO[] = [
    {
        itemId: 1,
        title: 'Air Jordan 4 Retro',
        type: "Men's Shoes",
        price: 210,
        image: bestSelling1,
    },
    {
        itemId: 2,
        title: 'Nike Air Pegasus 89 G NRG',
        type: 'Golf Shoes',
        price: 140,
        image: bestSelling2,
    },
    {
        itemId: 3,
        title: 'Nike Air Max 1',
        type: "Men's Shoes",
        price: 160,
        image: bestSelling3,
    },
    {
        itemId: 4,
        title: 'Nike Air Zoom Infinity Tour NRG',
        type: 'Golf Shoes',
        price: 190,
        image: bestSelling4,
    },
    {
        itemId: 5,
        title: 'Nike G.T. Cut 3',
        type: 'Basketball Shoe',
        price: 190,
        image: bestSelling5,
    },
    {
        itemId: 6,
        title: 'Ja 1 "Vacation"',
        type: 'Basketball Shoe',
        price: 120,
        image: bestSelling6,
    },
    {
        itemId: 7,
        title: 'Sabrina 1 "Exclamat!on"',
        type: 'Basketball Shoe',
        price: 130,
        image: bestSelling7,
    },
    {
        itemId: 8,
        title: 'Nike Zoom Vomero 5',
        type: "Women's Shoes",
        price: 160,
        image: bestSelling8,
    },
]
export const allProducts = [...heroContents, ...newProducts, ...bestProducts]
