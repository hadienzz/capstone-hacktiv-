import supabaseClient from "@/config/supabaseClient"
import { useFormik } from "formik"


const useSignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values)
            const supabase = supabaseClient()
            const { data, error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password
            })
            if (error) {
                console.error(error)
            }
            
            const token = data.session.access_token
            localStorage.setItem('token', token)
            console.log(token)
            return data
        }
    })


    return {
        formik
    }
}

export default useSignIn