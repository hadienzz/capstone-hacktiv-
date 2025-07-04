import { useFormik } from 'formik'
import * as Yup from 'yup'

const useSignUp = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, 'Minimum 6 Characters').required('Password is Required')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return {
        formik
    }
}

export default useSignUp