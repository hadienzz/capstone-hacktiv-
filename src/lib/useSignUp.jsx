import supabaseClient from '@/config/supabaseClient'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const useSignUp = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, 'Minimum 6 Characters').required('Password is Required')
        }),
        onSubmit: async (values) => {
            const supabase = supabaseClient()
            const { data, error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password
            })
            
            if (error) {
                throw error
            }

            formik.resetForm()
            alert('Account Created')
            
        },
        
    })

    return {
        formik
    }
}

export default useSignUp