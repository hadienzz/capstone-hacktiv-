import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

const useGetUserJournal = () => {
    const token = localStorage.getItem('token')

    const fetchJournal = async () => {
        const response = await axios.get('http://localhost:3000', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (!response) {
            throw new Error('Failed to get data')
        }

        return response.data

    }

    const { isLoading: journalLoading, data: journalData } = useQuery({
        queryFn: fetchJournal,
        queryKey: ['journal']
    })

    console.log(journalData)

    return {
        journalLoading,
        journalData
    }

}

export default useGetUserJournal