import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { loginSchema } from '../../schema/validationSchema'
import FieldInput from './FieldInput'
const initialValues = {
    email: '',
    password: '',
}
const FormikLoginForm = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={() => console.log('hello')}
                validationSchema={loginSchema}
            >
                {(props) => {
                    return (
                        <>
                            <form
                                method='post'
                                className='flex flex-col  gap-3 relative'
                            >
                                <FieldInput
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    name={'email'}
                                    type={'email'}
                                    placeholder={'Email'}
                                    errors={props.errors.email}
                                />
                                <FieldInput
                                    value={props.values.password}
                                    onChange={props.handleChange}
                                    name={'password'}
                                    passtype={'password'}
                                    placeholder={'Password'}
                                    checkpassword
                                    errors={props.errors.password}
                                />

                                <button
                                    className='btn_style text-xl py-[0.6rem] px-4 font-semibold transition delay-150  disabled:bg-gray-200 disabled:text-black/40'
                                    disabled={
                                        !!props.errors.email ||
                                        !!props.errors.password ||
                                        !props.values.email
                                    }
                                >
                                    Login
                                </button>
                            </form>
                        </>
                    )
                }}
            </Formik>
            <p className=' text-black/80 mt-2'>
                Don't have an account?{' '}
                <Link to='../register' className='underline text-blue-800'>
                    Sign Up
                </Link>
            </p>
            <p className=' text-black/80'>
                Forgot Password?{' '}
                <Link to='../login' className='underline text-blue-800'>
                    Recover
                </Link>
            </p>
        </>
    )
}

export default FormikLoginForm
