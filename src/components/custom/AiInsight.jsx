import { Brain, Heart, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const AiInsight = () => {
    return (
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg text-blue-800 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    AI Insights
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div className="flex items-center text-sm text-blue-700">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Your mood trend is improving this week
                    </div>
                    <div className="flex items-center text-sm text-blue-700">
                        <Heart className="w-4 h-4 mr-2" />
                        Consider practicing gratitude today
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export default AiInsight