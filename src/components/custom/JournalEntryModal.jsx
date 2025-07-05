"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import useSelectJournal from "@/lib/useSelectJournal"
import { Calendar, Clock, Tag, X } from "lucide-react"

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

const JournalEntryModal = ({ entry, isOpen, setIsOpen }) => {
    if (!entry) {
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>

            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur-lg">
                <DialogDescription>Journal Kamu</DialogDescription>
                <DialogHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                        <DialogTitle className="text-2xl font-bold text-gray-800 pr-8">{entry.title}</DialogTitle>
                    </div>
                    {/* Entry Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {entry.date}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {entry.time}
                        </div>
                        <Badge
                            variant="outline"
                            className="text-sm"
                            style={{
                                backgroundColor: `${moodColors[entry.mood]}20`,
                                borderColor: moodColors[entry.mood],
                                color: moodColors[entry.mood],
                            }}
                        >
                            {moodEmojis[entry.mood]} {entry.mood}
                        </Badge>
                    </div>
                </DialogHeader>

                {/* Entry Content */}
                <div className="">
                    <div className="prose prose-gray max-w-none">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg  border border-purple-100">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{entry.user}</p>
                        </div>
                    </div>


                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 mt-4">
                        <h4 className="text-sm font-medium text-blue-800 mb-2">Mood Reflection</h4>
                        <p className="text-sm text-blue-700">
                            You were feeling <strong>{entry.mood.toLowerCase()}</strong> when you wrote this entry.
                            {entry.mood === "Happy" && " It's wonderful to capture these positive moments!"}
                            {entry.mood === "Sad" &&
                                " Remember that it's okay to feel sad sometimes. These feelings are valid and temporary."}
                            {entry.mood === "Angry" &&
                                " Anger can be a signal that something needs attention. Consider what triggered this feeling."}
                            {entry.mood === "Lonely" &&
                                " Loneliness is a common human experience. Consider reaching out to someone you trust."}
                            {entry.mood === "Neutral" &&
                                " Sometimes neutral days are exactly what we need for balance and reflection."}
                        </p>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}


export default JournalEntryModal