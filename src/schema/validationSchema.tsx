import * as yup from 'yup'
const getCharacterValidationError = (error: string) => {
    return `Password must contain at least 1 ${error}.`
}
export const registerSchema = yup.object().shape({
    fullname: yup
        .string()
        .min(4, 'Too Short')
        .max(60, 'Too Long')
        .required('Required*'),
    email: yup.string().email('Invalid email address').required('Required*'),
    password: yup
        .string()
        .required('Required*')
        .min(8, 'Your password must be longer than 5 characters.')
        .matches(/[a-z]/, getCharacterValidationError('lowercase'))
        .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
        .matches(/[0-9]/, getCharacterValidationError('number')),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Required*'),
})
export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Required*'),
    password: yup.string().required('Required*'),
})

export const contactusSchema = yup.object().shape({
    fullname: yup.string().required('Required*'),
    email: yup.string().email('Invalid email address').required('Required*'),
    message: yup.string().max(300, 'Too Long!!').required('Required*'),
})
