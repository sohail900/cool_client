import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'
import NewCollection from '../components/CollectionContainer'
import BestSelling from '../components/BestSelling'
import AllProduct from '../components/AllProduct'
//import TextScroll from '../components/textScroll'
export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <section
                    className='px-[2rem] md:px-[3.5rem] 
			'
                >
                    <NewCollection />
                    <BestSelling />
                    <AllProduct />
                </section>
            </main>
            <Outlet />
        </>
    )
}
