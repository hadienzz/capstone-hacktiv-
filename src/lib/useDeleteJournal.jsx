import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

const useDeleteJournal = () => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [selectDeleteModal, setSelectDeleteModal] = useState('')
    const token = localStorage.getItem('token')
    const queryClient = useQueryClient()

    const handleDelete = (id) => {
        setOpenDeleteModal(true)
        setSelectDeleteModal(id)
    }

    const handleConfirm = () => {
        mutate(selectDeleteModal)
    }

    const { mutate, isPending, error } = useMutation({
        mutationFn: async (id) => {
            const response = await axios.delete(`http://localhost:3000/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (!response) {
                throw new Error('Failed to delete journal')
            }

            return response.data
        },
        mutationKey: ['journal'],
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['journal'] })
        }
    })

    return {
        handleDelete,
        openDeleteModal,
        setOpenDeleteModal,
        selectDeleteModal,
        handleConfirm
    }
}

export default useDeleteJournal