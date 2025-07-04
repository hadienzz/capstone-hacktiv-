import { Button } from "../ui/button"
import { MOODS_CONTENT } from "../../../store/data"
import useGetInsight from "@/lib/useGetInsight"

const MoodSelector = ({ formik }) => {
    //backgroundColor: item.mood === selectedMood ? item.color : '' 
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Select your mood:</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {MOODS_CONTENT.map((item, idx) => (
                    <Button
                        onClick={() => formik.setFieldValue('mood', item.mood)}
                        key={item.mood}
                        type="button"
                        variant={formik.values.mood === item.mood ? "default" : "outline"}
                        className={`h-16 flex-col space-y-1 transition-all duration-200 hover:scale-102 hover:shadow-md bg-transparent`}
                        style={{ borderColor: item.color, borderWidth: 2, backgroundColor: item.mood === formik.values.mood ? item.color : '' }}
                    >
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-xs font-medium">{item.mood}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default MoodSelector