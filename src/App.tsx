import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import ContactUs from './page/ContactUs'
const App = () => {
    return (
        <>
            <main className='overflow-x-hidden relative'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<ContactUs />} />
                </Routes>
                <Footer />
            </main>
        </>
    )
}
export default App
