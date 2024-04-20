import { NavLink } from 'react-router-dom'
import { navBarItems } from '../constants'
export const ResponsiveNav = () => {
    return (
        <>
            <ul className='flex flex-col absolute top-12 right-24  bg-[#DADEDD]  gap-2 py-4 rounded-md shadow-2xl transition-all'>
                {navBarItems.map((elem, index) => {
                    const { itemName, link } = elem
                    return (
                        <>
                            <li key={index} className='navbar_items'>
                                <NavLink to={`${link}`}>{itemName}</NavLink>
                            </li>
                        </>
                    )
                })}
                <NavLink to='login' className='navbar_items'>
                    SIGN IN
                </NavLink>
                <NavLink to='login' className='navbar_items'>
                    SIGN UP
                </NavLink>
            </ul>
        </>
    )
}
