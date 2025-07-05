import useGetUserJournal from "@/lib/useGetUserJournal"
import JournalEntriesList from "../custom/JournalEntriesList"
import Navbar from "../custom/Navbar"


const JournalUser = () => {
  const { journalData, journalLoading } = useGetUserJournal()
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
        {!journalLoading && (
          <>
            <JournalEntriesList entries={journalData}  />

            {/* <JournalEntryModal entry={selectedEntry} isOpen={isModalOpen} onClose={handleCloseModal} /> */}
          </>
        )}
      </main>
    </div>

  )
}

export default JournalUser