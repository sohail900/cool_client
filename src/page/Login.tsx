import { Formik } from 'formik'
import FieldInput from '../components/FieldInput'
const initialValues = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const Login = () => {
    return (
        <>
            <section>
                <h1>Register</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => console.log('hello')}
                >
                    {(props) => {
                        return (
                            <>
                                <form method='post'>
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
                                    <button>Login</button>
                                </form>
                            </>
                        )
                    }}
                </Formik>
            </section>
        </>
    )
}

export default Login
