import { Formik } from 'formik'
import FieldInput from '../components/FieldInput'
const initialValues = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const Register = () => {
    return (
        <>
            <section className='w-full h-full fixed top-0 right-0 bg-black/30  backdrop-blur-md z-50 grid place-items-center'>
                <div className='w-2/5 bg-white py-10 px-10 rounded-lg'>
                    <h1 className='text-center text-3xl font-semibold mb-3'>
                        REGISTER
                    </h1>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={() => console.log('hello')}
                    >
                        {(props) => {
                            return (
                                <>
                                    <form
                                        method='post'
                                        className='flex flex-col gap-3'
                                    >
                                        <FieldInput
                                            value={props.values.fullname}
                                            onChange={props.handleChange}
                                            name={'fullname'}
                                            type={'text'}
                                            placeholder={'Fullname'}
                                        />
                                        <FieldInput
                                            value={props.values.email}
                                            onChange={props.handleChange}
                                            name={'email'}
                                            type={'email'}
                                            placeholder={'Email'}
                                        />
                                        <FieldInput
                                            value={props.values.password}
                                            onChange={props.handleChange}
                                            name={'password'}
                                            type={'password'}
                                            placeholder={'Password'}
                                        />
                                        <FieldInput
                                            value={props.values.confirmPassword}
                                            onChange={props.handleChange}
                                            name={'confirmPassword'}
                                            type={'password'}
                                            placeholder={'Confirm Password'}
                                        />
                                        <button className='text-xl py-2 px-4 w-full bg-gray-200 font-semibold rounded-xl text-gray-500 transition delay-150  hover:bg-black hover:text-gray-100'>
                                            Register
                                        </button>
                                    </form>
                                </>
                            )
                        }}
                    </Formik>
                </div>
            </section>
        </>
    )
}

export default Register
