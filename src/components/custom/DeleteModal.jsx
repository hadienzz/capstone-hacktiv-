import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../ui/alert-dialog"

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="bg-white/95 backdrop-blur-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-red-600">Delete Journal Entry</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-600">
                        Are you sure you want to delete this journal? This action cannot be undone and your journal entry will be
                        permanently removed.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-700">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 hover:bg-red-600 text-white" onClick={onConfirm}>
                        Delete Entry
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteModal