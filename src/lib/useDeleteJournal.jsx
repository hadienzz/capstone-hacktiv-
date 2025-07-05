import { useMutation } from "@tanstack/react-query"

const useDeleteJournal = () => {
    const deleteJournal = () => {

    }

    const { mutate: handleDelete, isPending, error } = useMutation({

    })

    return {
        handleDelete
    }
}

export default useDeleteJournal