import useGetUserJournal from "@/lib/useGetUserJournal"
import JournalEntriesList from "../custom/JournalEntriesList"
import Navbar from "../custom/Navbar"
import useSelectJournal from "@/lib/useSelectJournal"
import JournalEntryModal from "../custom/JournalEntryModal"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import useDeleteJournal from "@/lib/useDeleteJournal"


const JournalUser = () => {
  const { journalData, journalLoading } = useGetUserJournal()
  const { handleSelect, selectedJournal, isOpen, setIsOpen, journalPending } = useSelectJournal()
  const { } = useDeleteJournal()
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Navbar />

      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Journal Entries</h1>
          <p className="text-gray-600">
            Explore your mental wellness journey through your personal reflections and thoughts.
          </p>
        </div>

        {journalLoading && <p>We're still loading, hold on for a second</p>}

        {!journalLoading && journalData.length !== 0 && (
          <JournalEntriesList handleSelect={handleSelect} entries={journalData} />
        )}

        {!journalLoading && journalData.length === 0 && (
          <div className="h-72 bg-neutral-200 ring-1 ring-neutral-400 rounded-md shadow-lg text-center pt-12 ">
            <h1 className="text-gray-600 text-2xl ">Your journal is empty!</h1>
            <Link to={'/'}>
              <Button className={'bg-neutral-800 mt-12 bg-gradient-to-tr from-purple-500 to-purple-700'}>Start add journal</Button>
            </Link>
          </div>
        )}

        {selectedJournal && !journalPending && <JournalEntryModal entry={selectedJournal.data} isOpen={isOpen} setIsOpen={setIsOpen} />}
      </main>
    </div>
  )
}

export default JournalUser