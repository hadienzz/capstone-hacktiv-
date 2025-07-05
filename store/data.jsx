import { Home, BookOpen, BarChart3 } from "lucide-react"

export const NAVIGATION = [
    { id: "home", label: "Home", icon: <Home />, link: '/' },
    { id: "entries", label: "Journal Entries", icon: <BookOpen />, link: '/journal' },
    { id: "statistics", label: "Statistics", icon: <BarChart3 />, link: '/nanti ajah' },
]

export const MOODS_CONTENT = [
    { emoji: '😊', mood: 'Happy', color: '#00b894' },
    { emoji: '😐', mood: 'Neutral', color: '#74b9ff' },
    { emoji: '😢', mood: 'Sad', color: '#fdcb6e' },
    { emoji: '😠', mood: 'Angry', color: '#e17055' },
    { emoji: '😔', mood: 'Lonely', color: '#a29bfe' },
];

export const RECENT_ENTRIES = [
    {
        date: "June 25, 2025",
        mood: "Happy",
        preview: "Had a great day at work...",
    },
    {
        date: "June 24, 2025",
        mood: "Neutral",
        preview: "Regular day, nothing special...",
    },
    {
        date: "June 23, 2025",
        mood: "Sad",
        preview: "Feeling down today...",
    },

]