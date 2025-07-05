import supabaseClient from "@/config/supabaseClient"
import { useNavigate } from "react-router-dom"

const useSignOut = () => {
    const navigate = useNavigate()

    const handleSignOut = async () => {
        const supabase = supabaseClient()
        const { error } = await supabase.auth.signOut()

        if (error) {
            throw new Error(error)
        }

        localStorage.removeItem('token')
        navigate('/signin')
    }

    return {
        handleSignOut
    }
}

export default useSignOut