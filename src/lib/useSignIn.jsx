import supabaseClient from "@/config/supabaseClient"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"


const useSignIn = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            const supabase = supabaseClient()
            const { data, error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password
            })
            if (error) {
                alert('Wrong email or password')
            }

            const token = data.session.access_token
            localStorage.setItem('token', token)
            navigate('/')
            return data
        }
    })


    return {
        formik
    }
}

export default useSignIn