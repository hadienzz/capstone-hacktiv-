import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"

const useGetInsight = () => {
    const token = localStorage.getItem('token')

    const { mutate: addJournal, isPending: pendingAddJournal } = useMutation({
        mutationFn: async (body) => {

            if (body.journal.trim() === '' || body.mood.trim() === '' || body.title.trim() === '') {
                alert('Gagal mengirim journal')
                return
            }

            const response = await axios.post('http://localhost:3000', body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = JSON.parse(response.data)
            const journal = {
                userJournal: body,
                aiInsight: data
            }

            console.log(body)
        },
        mutationKey: ['journal']
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            journal: '',
            mood: ''
        },
        onSubmit: (values) => {
            addJournal(values)
            formik.resetForm()
        },
    })


    return {
        formik,
        pendingAddJournal
    }
}

export default useGetInsight
