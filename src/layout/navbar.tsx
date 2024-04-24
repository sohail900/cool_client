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
                                    <NavLink to={`${link}`} className=''>
                                        {itemName}
                                    </NavLink>
                                </li>
                            </>
                        )
                    })}
                </ul>
                <div className='flex items-center gap-4'>
                    <button className='hidden font-semibold text-xs lg:block'>
                        LOGIN
                    </button>
                    <button className='buttons py-[0.24rem] font-semibold text-xs  border-[#000] hidden lg:block'>
                        REGISTER
                    </button>
                    <NavChildren menu={setMenu} />
                </div>
            </nav>
            {menu && <ResponsiveNav setMenu={setMenu} />}
        </>
    )
}
export default Navbar
