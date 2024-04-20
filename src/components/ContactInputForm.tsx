import { Formik } from 'formik'

const initialValues = {
    fullname: ' ',
    email: ' ',
    message: ' ',
}
const ContactInputForm = () => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={() => console.log('hello')}
            >
                {(props) => {
                    return (
                        <>
                            <form method='post' className='flex flex-col gap-5'>
                                <input
                                    type='text'
                                    name='fullname'
                                    onChange={props.handleChange}
                                    value={props.values.fullname}
                                    placeholder='John Wick'
                                    className='input_field'
                                    autoFocus
                                />

                                <input
                                    type='email'
                                    name='email'
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                    placeholder='example@gmail.com'
                                    className='input_field'
                                />

                                <textarea
                                    name='message'
                                    onChange={props.handleChange}
                                    value={props.values.message}
                                    placeholder='Enter Your Message'
                                    className='input_field'
                                    rows={4}
                                ></textarea>

                                <button className='text-xl py-2 px-4 w-full bg-gray-200 font-semibold rounded-xl text-gray-500'>
                                    Submit
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
