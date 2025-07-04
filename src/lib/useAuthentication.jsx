import supabaseClient from "@/config/supabaseClient"
import { useFormik } from "formik"

const useAuthentication = () => {
    const supabase = supabaseClient()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values)
        }
    })

    const handleSignIn = async () => {

        await supabase.auth.signInWithPassword({


        })
    }

    const handleSignUp = async () => {
        await supabase.auth.signUp({

        })
    }
}

export default useAuthentication