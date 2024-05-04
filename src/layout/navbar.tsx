import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavChildren } from './navchildren'
import { navBarItems } from '../constants'
import { ResponsiveNav } from './responsiveNav'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <nav
                className='w-[100vw] h-auto fixed top-0 flex items-center justify-between   text-[#000000fd] backdrop-blur-lg  py-4  px-[2rem] 
			xl:px-[3.5rem] z-20'
            >
                <h3 className='typography_h2'>COOL KICKS</h3>
                <ul className='hidden items-center gap-8 pt-1 lg:flex'>
                    {navBarItems.map((elem, index) => {
                        const { itemName, link } = elem
                        return (
                            <>
                                <li
                                    key={index}
                                    className='text-xs font-semibold text-[#000000b9] '
                                >
                                    <NavLink to={`${link}`}>{itemName}</NavLink>
                                </li>
                            </>
                        )
                    })}
                </ul>
                <div className='flex items-center gap-4'>
                    <Link
                        className='hidden font-semibold text-[0.8rem]  lg:block'
                        to='./login'
                    >
                        SignIn
                    </Link>
                    <Link
                        className='hidden btn_style text-[0.8rem] py-1 px-4 font-semibold lg:block'
                        to='./register'
                    >
                        SignUp
                    </Link>
                    <NavChildren menu={setMenu} />
                </div>
            </nav>
            {menu && <ResponsiveNav setMenu={setMenu} />}
        </>
    )
}
export default Navbar
