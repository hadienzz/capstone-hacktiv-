import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

const useSelectJournal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const token = localStorage.getItem('token')

    const fetchJournal = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (!response) {
                throw new Error('Failed to get selected journal')
            }


            setIsOpen(true)
            return response.data
        } catch (err) {
            throw new Error(err)
        }
    }

    const { mutate: handleSelect, data: selectedJournal, isPending: journalPending } = useMutation({
        mutationFn: async (id) => fetchJournal(id),
        mutationKey: ['selectJournal'],

    })


    return {
        handleSelect,
        journalPending,
        selectedJournal,
        isOpen,
        setIsOpen
    }
}

export default useSelectJournal