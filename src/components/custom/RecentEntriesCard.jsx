import { RECENT_ENTRIES } from "../../../store/data"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

const RecentEntriesCard = () => {
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
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-800">Recent Entries (3 latest)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {RECENT_ENTRIES.map((entry, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white/80 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">{entry.date}</span>
                            <Badge
                                variant="outline"
                                style={{
                                    backgroundColor: `${moodColors[entry.mood]}20`,
                                    borderColor: moodColors[entry.mood],
                                    color: moodColors[entry.mood],
                                }}
                            >
                                {moodEmojis[entry.mood]} {entry.mood}
                            </Badge>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{entry.preview}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

    )
}

export default RecentEntriesCard