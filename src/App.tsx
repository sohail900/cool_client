import { Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Navbar from './layout/navbar'
const App = () => {
    return (
        <>
            <main className='overflow-x-hidden relative'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
        </>
    )
}
export default App
