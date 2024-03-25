import {
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
import { IHERO, TCOLLECTION } from '../types/types'
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
export const heroContents: IHERO[] = [
    {
        itemId: 1,
        title: 'Jumpman MVP',
        price: 107.97,
        image: jordan1,
    },
    {
        itemId: 2,
        title: 'Air Jordan 3 Retro Craft "Ivory"',
        price: 210,
        image: jordan4,
    },
    {
        itemId: 3,
        title: 'Air Jordan 6 Retro "Yellow Ochre"',
        price: 200,
        image: jordan5,
    },
]
//# Constants Data for New Collection
export const newCollectionData: TCOLLECTION[] = [
    {
        id: 1,
        title: 'Nike Air Max 270',
        price: 250,
        image: nike1,
    },
    {
        id: 2,
        title: 'Nike Dunk Low',
        price: 230,
        image: nike2,
    },
    {
        id: 3,
        title: 'Nike Air Force 107',
        price: 250,
        image: nike3,
    },
    {
        id: 4,
        title: 'Nike Air Force',
        price: 250,
        image: nike4,
    },
    {
        id: 5,
        title: 'Nike Dunk Low',
        price: 130,
        image: nike5,
    },
    {
        id: 6,
        title: 'Nike Dunk Low Retro',
        price: 160,
        image: nike6,
    },
    {
        id: 7,
        title: 'Nike Air Max 90 GORE-TEX',
        price: 120,
        image: nike7,
    },
]
