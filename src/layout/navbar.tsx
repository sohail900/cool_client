import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavChildren } from './navchildren'
import { navBarItems } from '../constants'
import { ResponsiveNav } from './responsiveNav'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <nav
                className='w-[100vw] h-auto fixed top-0 flex items-center justify-between  py-4 *:px-[1rem] text-[#000000fd] backdrop-blur-lg  md:px-[2rem] 
			xl:px-[3.5rem]  z-20'
            >
                <h3 className='typography_h2'>COOL KICKS</h3>
                <ul className='hidden items-center gap-8 pt-1 lg:flex'>
                    {navBarItems.map((elem, index) => {
                        const { itemName, link } = elem
                        return (
                            <>
                                <li
                                    key={index}
                                    className='text-[0.75rem] font-semibold text-[#000000b9] '
                                >
                                    <NavLink to={`/${link}`}>
                                        {itemName}
                                    </NavLink>
                                </li>
                            </>
                        )
                    })}
                </ul>
                <div className='flex items-center gap-4'>
                    <button className=' text-sm hidden lg:block'>
                        Sign Up
                    </button>
                    <button className='buttons py-[0.20rem]  border-[#000] hidden lg:block'>
                        Sign In
                    </button>
                    <NavChildren menu={setMenu} />
                </div>
                {menu && <ResponsiveNav />}
            </nav>
        </>
    )
}
export default Navbar
