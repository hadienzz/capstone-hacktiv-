import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Trash2, Search, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "../ui/button"


const JournalEntriesList = ({ entries }) => {
  // const [searchTerm, setSearchTerm] = useState("")
  // const [moodFilter, setMoodFilter] = useState("all")
  // const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  // const [entryToDelete, setEntryToDelete] = useState(null)

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-gray-800 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Filter & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by title, content, or tags..."
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/80 border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="w-full sm:w-48">
              {/* </div>value={moodFilter} onValueChange={setMoodFilter} */}
              <Select>
                <SelectTrigger className="bg-white/80 border-purple-200">
                  <SelectValue placeholder="Filter by mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Moods</SelectItem>
                  <SelectItem value="Happy">😊 Happy</SelectItem>
                  <SelectItem value="Neutral">😐 Neutral</SelectItem>
                  <SelectItem value="Sad">😢 Sad</SelectItem>
                  <SelectItem value="Angry">😠 Angry</SelectItem>
                  <SelectItem value="Lonely">😔 Lonely</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent >
      </Card >

      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing FILTERED ENTRIES LENGTH of LENGTH entries
        </p>
        <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">
          Total: {entries.length} entries
        </Badge>
      </div>

      {/* Journal Entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <Card
            key={entry._id}
            className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <CardHeader className="">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-gray-800 mb-2 line-clamp-1">{entry.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {entry.createdAt}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {entry.time}
                    </div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="ml-2"
                >
                  {entry.mood}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="">
              <p className="text-gray-600 text-base line-clamp-3 ">{entry.user}</p>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  // onClick={() => onViewEntry(entry)}
                  className="flex-1 bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  // onClick={() => handleDeleteClick(entry)}
                  className="bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* {
        filteredEntries.length === 0 && (
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No entries found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or mood filter to find what you're looking for.
              </p>
            </CardContent>
          </Card>
        )
      } */}

      {/* <DeleteConfirmationDialog
        isOpen={deleteDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        entryTitle={entryToDelete?.title}
      /> */}
    </div >
  )
}


export default JournalEntriesList