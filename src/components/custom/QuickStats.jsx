import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const QuickStatsCard = () => {
    return (
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-800">This Week</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-green-700">7</div>
                        <div className="text-xs text-green-600">Entries</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-green-700">😊</div>
                        <div className="text-xs text-green-600">Top Mood</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default QuickStatsCard