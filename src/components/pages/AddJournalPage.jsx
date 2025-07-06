import AiInsight from "../custom/AiInsight"
import JournalForm from "../custom/JournalForm"
import Navbar from "../custom/Navbar"
import QuickStatsCard from "../custom/QuickStats"
import RecentEntriesCard from "../custom/RecentEntriesCard"

const AddJournalPage = () => {
    return (
        <>
            <Navbar />
            <main className="sm:px-4 md:px-6 lg:px-8 py-4 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-2 ">
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 pt-8">
                    <div className="lg:col-span-2">
                        <JournalForm />
                    </div>
                    <div className="space-y-6">
                        <RecentEntriesCard />
                        <QuickStatsCard />
                    </div>
                </div>
            </main>
        </>
    )
}

export default AddJournalPage