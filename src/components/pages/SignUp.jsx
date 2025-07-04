import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Mail, Lock, Eye, EyeOff, User, ArrowRight, Heart, Shield, Sparkles } from "lucide-react"
import InputForm from "../custom/InputForm"
import useSignUp from "@/lib/useSignUp"

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { formik } = useSignUp()

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Start Your Journey
                    </h1>
                    <p className="text-gray-600">
                        Join thousands who are improving their mental wellness with AI-powered insights and support.
                    </p>
                </div>

                <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
                    <CardHeader className="text-center pb-4">
                        <CardTitle className="text-2xl font-bold text-gray-800">Create Account</CardTitle>
                        <p className="text-gray-600 text-sm">Begin your personalized mental wellness experience</p>
                    </CardHeader>

                    <CardContent>
                        <form className="space-y-4" onSubmit={formik.handleSubmit}>
                            <InputForm
                                icon={<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                label="Email address"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />

                            {/* Password Field */}
                            <div className="space-y-2 relative ">
                                <InputForm
                                    icon={<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />}
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a strong password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    label={'Password'}
                                />


                                <button
                                    type="button"
                                    className="absolute right-3  top-[70%] transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>



                            <Button
                                type="submit"
                                className="w-full h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                            >
                                Sign Up
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">or</span>
                            </div>
                        </div>

                        <div className="text-center mt-6 pt-4 border-t border-gray-100">
                            <p className="text-gray-600 text-sm">
                                Already have an account?{" "}
                                <Link href="/signin" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="text-center mt-6">
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                        <Shield className="w-4 h-4 mr-2 text-blue-400" />
                        Your data is encrypted and secure
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        Join our supportive mental wellness community
                    </div>
                </div>
            </div>
        </div >

    )
}

export default SignUpPage