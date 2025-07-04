import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"

const useGetInsight = () => {

    const { mutate: addJournal, isPending: pendingAddJournal } = useMutation({
        mutationFn: async (body) => {

            if (body.journal.trim() === '' || body.mood.trim() === '') {
                alert('Gagal mengirim journal')
            }

            const response = await axios.post('http://localhost:3000', body)
            const data = JSON.parse(response.data)
            // const 
            const journal = {
                userJournal: body,
                aiInsight: data
            }

            console.log(journal)
        },
        mutationKey: ['journal']
    })

    const formik = useFormik({
        initialValues: {
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
