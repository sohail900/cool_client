import Hero from '../components/Hero'
import NewCollection from '../components/CollectionContainer'
import BestSelling from '../components/BestSelling'
//import TextScroll from '../components/textScroll'
export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <section className='px-16 md:px-24'>
                    <NewCollection />
                    <BestSelling />
                </section>
            </main>
        </>
    )
}
