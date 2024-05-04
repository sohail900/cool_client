import { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'
import { navBarItems } from '../constants'
type TSetMenu = { setMenu: Dispatch<SetStateAction<boolean>> }
export const ResponsiveNav = ({ setMenu }: TSetMenu) => {
    return (
        <>
            <ul className='flex flex-col absolute top-12 right-24  bg-[#DADEDD]  gap-2 py-4 rounded-md shadow-2xl transition-all z-50'>
                {navBarItems.map((elem, index) => {
                    const { itemName, link } = elem
                    return (
                        <>
                            <li key={index} className='navbar_items'>
                                <NavLink
                                    to={`${link}`}
                                    onClick={() => setMenu((pre) => !pre)}
                                >
                                    {itemName}
                                </NavLink>
                            </li>
                        </>
                    )
                })}
                <NavLink to='./login' className='navbar_items'>
                    Sign In
                </NavLink>
                <NavLink to='./register' className='navbar_items'>
                    Register
                </NavLink>
            </ul>
        </>
    )
}
