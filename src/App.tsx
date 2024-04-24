import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/navbar'
import Footer from './layout/footer'
import Loading from './components/Loading'
const Home = lazy(() => import('./page/Home'))
const ContactUs = lazy(() => import('./page/ContactUs'))
const About = lazy(() => import('./page/About'))
const NotFound = lazy(() => import('./page/NotFound'))
const Register = lazy(() => import('./page/Register'))
const Login = lazy(() => import('./page/Login'))
const App = () => {
    return (
        <>
            <main className='overflow-x-hidden relative'>
                <Navbar />
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<Home />}>
                            <Route
                                path='/register'
                                element={<Register />}
                                children
                            />
                            <Route path='/login' element={<Login />} children />
                        </Route>
                        <Route path='/contact' element={<ContactUs />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </main>
        </>
    )
}
export default App
