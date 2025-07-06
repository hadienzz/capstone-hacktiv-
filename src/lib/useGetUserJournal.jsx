import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const useGetUserJournal = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const queryClient = useQueryClient()
    if (!token) {
        navigate('/signin')
    }

    const fetchJournal = async () => {
        try {
            const response = await axios.get('http://localhost:3000', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (!response) {
                throw new Error('Failed to get data')
            }
            queryClient.invalidateQueries(['journal'])
            return response.data
        } catch (err) {
            throw err
        }

    }

    const { isLoading: journalLoading, data: journalData } = useQuery({
        queryFn: fetchJournal,
        queryKey: ['journal'],
    })

    return {
        journalLoading,
        journalData
    }

}

export default useGetUserJournal