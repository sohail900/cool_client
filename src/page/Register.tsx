import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { XCircle } from 'lucide-react'
import { useHandleClick } from '../utility/utility'
import FormikRegForm from '../components/InputForm/FormikRegForm'
const Register = () => {
    const ref = useRef<HTMLDivElement>(null)
    useHandleClick(ref)
    return (
        <>
            <section className='w-full h-full fixed top-0 right-0 bg-black/40  z-50 grid place-items-center '>
                <div
                    className='w-auto bg-white py-4 px-10 rounded-lg shadow-lg shadow-blue-600/10 relative'
                    ref={ref}
                >
                    <h1 className='text-center text-3xl font-bold mb-7'>
                        Sign Up
                    </h1>
                    <Link className='absolute top-4 right-3' to='../'>
                        <XCircle />
                    </Link>
                    <FormikRegForm />
                </div>
            </section>
        </>
    )
}

export default Register
