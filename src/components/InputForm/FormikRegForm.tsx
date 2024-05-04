import { Formik } from 'formik'
import { registerSchema } from '../../schema/validationSchema'
import FieldInput from './FieldInput'
import { Link } from 'react-router-dom'
const initialValues = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const FormikRegForm = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={() => console.log('hello')}
                validationSchema={registerSchema}
            >
                {(props) => {
                    return (
                        <>
                            <form
                                method='post'
                                className='flex flex-col  gap-3 relative'
                            >
                                <FieldInput
                                    value={props.values.fullname}
                                    onChange={props.handleChange}
                                    name={'fullname'}
                                    type={'text'}
                                    placeholder={'Fullname'}
                                    errors={props.errors.fullname}
                                />
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
                                <FieldInput
                                    value={props.values.confirmPassword}
                                    onChange={props.handleChange}
                                    name={'confirmPassword'}
                                    passtype={'password'}
                                    placeholder={'Confirm Password'}
                                    checkpassword
                                    errors={props.errors.confirmPassword}
                                />
                                <button
                                    className='btn_style text-xl py-[0.6rem] px-4 font-semibold transition delay-150  disabled:bg-gray-200 disabled:text-black/40'
                                    disabled={
                                        !!props.errors.fullname ||
                                        !!props.errors.email ||
                                        !!props.errors.password ||
                                        !!props.errors.confirmPassword ||
                                        !props.values.fullname
                                    }
                                >
                                    Register
                                </button>
                            </form>
                        </>
                    )
                }}
            </Formik>
            <p className='text-black/80 mt-1'>
                Already have an account?{' '}
                <Link to='../login' className='underline text-blue-800'>
                    Login
                </Link>
            </p>
        </>
    )
}

export default FormikRegForm
