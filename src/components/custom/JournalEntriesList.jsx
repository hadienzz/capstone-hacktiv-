import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Trash2, Search, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "../ui/button"
import DeleteModal from "./DeleteModal"


const JournalEntriesList = ({ entries, handleSelect, handleDelete, onClose, openDeleteModal, onConfirm }) => {

  const moodColors = {
    Happy: "#00b894",
    Neutral: "#74b9ff",
    Sad: "#fdcb6e",
    Angry: "#e17055",
    Lonely: "#a29bfe",
  }

  const moodEmojis = {
    Happy: "😊",
    Neutral: "😐",
    Sad: "😢",
    Angry: "😠",
    Lonely: "😔",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {entries.length} of {entries.length} entries
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
                  style={{
                    backgroundColor: `${moodColors[entry.mood]}20`,
                    borderColor: moodColors[entry.mood],
                    color: moodColors[entry.mood],
                  }}
                >
                  {moodEmojis[entry.mood]} {entry.mood}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="">
              <p className="text-gray-600 text-base line-clamp-3 truncate">{entry.user}</p>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 mt-4">
                <h4 className="text-sm font-medium text-blue-800 mb-2">Mood Reflection</h4>
                <p className="text-sm text-blue-700">
                  {entry.bot.saran}
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(entry._id)}
                  className="bg-red-50 border-red-200 text-red-600 hover:bg-red-100 flex-1"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {<DeleteModal isOpen={openDeleteModal} onConfirm={onConfirm} onClose={onClose} />}
    </div >
  )
}


export default JournalEntriesList