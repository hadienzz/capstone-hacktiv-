import { Input } from "../ui/input"

const InputForm = ({ label, icon, ...props }) => {
    return (
        <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="relative">
                {icon}
                <Input
                    {...props}
                    className={`pl-10 bg-white/80 border-purple-200 focus:border-purple-400 focus:ring-purple-40`}
                />
            </div>
            {/* {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>} */}
        </div>

    )
}

export default InputForm