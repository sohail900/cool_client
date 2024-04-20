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
                <section className='px-10 md:px-24'>
                    <NewCollection />
                    <BestSelling />
                    <AllProduct />
                </section>
            </main>
        </>
    )
}
