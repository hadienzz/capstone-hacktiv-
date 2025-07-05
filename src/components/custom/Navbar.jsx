import { NAVIGATION } from "../../../store/data"
import { Brain, User } from "lucide-react"
import { Button } from "../ui/button"
import { Link, NavLink, useNavigate } from "react-router-dom"
import useSignOut from "@/lib/useSignOut"

const Navbar = () => {
    const token = localStorage.getItem('token')
    //bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg
    const navigate = useNavigate()
    const { handleSignOut } = useSignOut()
    return (
        <header className="px-2 sm:px-4 md:px-6 lg:px-8 py-4 text-[#f8f9fa] flex justify-between items-center">

            <Link className="flex items-center gap-4" to={'/'}>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        AI Journal Tracker
                    </h1>
                    <p className="text-gray-500">Your mental wellness companion</p>
                </div>
            </Link>

            <nav className="inline-flex gap-4">
                {NAVIGATION.map((item, idx) => (
                    <NavLink
                        key={idx}
                        to={item.link}
                        className={({ isActive }) =>
                            isActive
                                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg rounded-md'
                                : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50 bg-transparent'
                        }
                    >
                        <Button asChild className="hover:bg-transparent bg-transparent text-gray  ">
                            <div className="flex items-center gap-2">
                                {item.icon}
                                <h1>{item.label}</h1>
                            </div>
                        </Button>
                    </NavLink>
                ))}
            </nav>

            <div>
                <Button variant="outline" onClick={token ? handleSignOut : () => navigate('/signin')} type="button" className="bg-white/50 border-purple-200 hover:bg-purple-50 text-black">
                    <User className="w-4 h-4 mr-2" />
                    {token ? 'Sign Out' : 'Sign In'}
                </Button>
            </div>
        </header>
    )
}

export default Navbar