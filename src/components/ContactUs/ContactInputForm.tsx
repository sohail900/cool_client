import { Formik } from 'formik'
import { contactusSchema } from '../../schema/validationSchema'
const initialValues = {
    fullname: '',
    email: '',
    message: '',
}
const ContactInputForm = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={() => console.log('hello')}
                validationSchema={contactusSchema}
            >
                {(props) => {
                    return (
                        <>
                            <form method='post' className='flex flex-col gap-3'>
                                <input
                                    type='text'
                                    name='fullname'
                                    onChange={props.handleChange}
                                    value={props.values.fullname}
                                    placeholder='John Wick'
                                    className='input_field'
                                    required
                                />
                                {props.errors.fullname && (
                                    <p className='-mt-2 text-red-700/70 text-[0.9rem] font-semibold'>
                                        {props.errors.fullname}
                                    </p>
                                )}
                                <input
                                    type='email'
                                    name='email'
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                    placeholder='example@gmail.com'
                                    className='input_field'
                                    required
                                />
                                {props.errors.email && (
                                    <p className='-mt-2 text-red-700/70 text-[0.9rem] font-semibold'>
                                        {props.errors.email}
                                    </p>
                                )}
                                <textarea
                                    rows={4}
                                    name='message'
                                    onChange={props.handleChange}
                                    value={props.values.message}
                                    placeholder='Enter Your Message'
                                    className='input_field'
                                    required
                                ></textarea>
                                {props.errors.message && (
                                    <p className='-mt-2 text-red-700/70 text-[0.9rem] font-semibold'>
                                        {props.errors.message}
                                    </p>
                                )}
                                <button
                                    type='submit'
                                    className='btn_style px-3 py-3 font-semibold'
                                    disabled={!!props.errors.message}
                                >
                                    Send Message
                                </button>
                            </form>
                        </>
                    )
                }}
            </Formik>
        </>
    )
}

export default ContactInputForm
