import supabaseClient from "@/config/supabaseClient"
import { useFormik } from "formik"
import * as Yup from 'yup'


const useSignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values)
        }
    })

    const handleSignIn = async (email, password) => {
        const supabase = supabaseClient()
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
            console.error(error)
        }

        const token = data.session.access_token
        console.log(token)

    }

    return {
        formik
    }
}

export default useSignIn