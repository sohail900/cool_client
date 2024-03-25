import { UserCircle2, ShoppingBagIcon, MenuIcon } from 'lucide-react'
import { IMENU } from '../types/types'
export const NavChildren = ({ menu }: IMENU) => {
    const showMenu = () => {
        menu((pre) => !pre)
    }
    return (
        <>
            <div className=' ml-6 flex gap-4'>
                <span
                    className='p-1 bg-[#DADEDD] rounded-full lg:hidden'
                    onClick={showMenu}
                >
                    <MenuIcon
                        name='icon'
                        size={18}
                        cursor={'pointer'}
                        color='#000000b9'
                    />
                </span>
                <span className='p-1 bg-[#DADEDD] rounded-full'>
                    <UserCircle2
                        name='icon'
                        size={18}
                        cursor={'pointer'}
                        color='#000000b9'
                    />
                </span>
                <span className='p-1 bg-[#DADEDD] rounded-full'>
                    <ShoppingBagIcon
                        name='icon'
                        size={18}
                        cursor={'pointer'}
                        color='#000000b9'
                    />
                </span>
            </div>
        </>
    )
}
