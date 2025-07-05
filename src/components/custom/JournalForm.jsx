import { Calendar, Save, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, } from "../ui/card"
import { Badge } from "../ui/badge"
import { Textarea } from "../ui/textarea"
import MoodSelector from "./MoodSelector"
import { Button } from "../ui/button"
import useGetInsight from "@/lib/useGetInsight"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const JournalForm = () => {
    const { formik, pendingAddJournal } = useGetInsight()

    return (
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                        <Sparkles className="w-6 h-6 mr-3 text-purple-500" />
                        Daily Journal Entry
                    </CardTitle>
                    <Badge className="bg-blue-50 text-blue-600 border-blue-200">
                        <Calendar className="w-3 h-3 mr-1" />
                        Today
                    </Badge>
                </div>
                <p className="text-gray-600 mt-2">
                    Share your thoughts and feelings. Our AI will provide gentle insights to support your mental wellness journey.
                </p>
            </CardHeader>

            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <h1 className="pb-4 text-gray-700">How are you feeling today?</h1>
                        <div className="grid gap-4">
                            <div>
                                <Label className={'text-xl'}>Title</Label>
                                <Input
                                    placeholder="Write ur journal title here"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    name={'title'} />
                            </div>
                            <div>
                                <Label className={'text-xl'}>Description</Label>
                                <Textarea
                                    placeholder="Write your thoughts and feelings here... Take your time, there's no rush. Every feeling is valid and worth exploring."
                                    value={formik.values.journal}
                                    name="journal"
                                    onChange={formik.handleChange}
                                    className={'text-gray-600 h-48'}
                                />
                            </div>
                        </div>
                    </div>
                    <MoodSelector
                        formik={formik}
                    />
                    <Button disabled={pendingAddJournal} className="w-full h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                        type={'submit'}>
                        <Save />
                        <h1>Save</h1>
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default JournalForm