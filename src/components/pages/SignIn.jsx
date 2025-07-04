

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Mail, Lock, Eye, EyeOff, ArrowRight, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const SignInPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600">
                        Continue your mental wellness journey with AI-powered insights and personalized support.
                    </p>
                </div>

                <Card className="bg-white/70 backdrop-blur-md border-0 shadow-xl">
                    <CardHeader className="text-center pb-4">
                        <CardTitle className="text-2xl font-bold text-gray-800">Sign In</CardTitle>
                        <p className="text-gray-600 text-sm">Enter your credentials to access your journal</p>
                    </CardHeader>

                    <CardContent>
                        <form className="space-y-6">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value
                                        onChange
                                        className={`pl-10 bg-white/80 border-purple-200 focus:border-purple-400 focus:ring-purple-400`}
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type='password' // ||TEXT
                                        placeholder="Enter your password"
                                        value
                                        onChange
                                        className={`pl-10 pr-10 bg-white/80 border-purple-200 focus:border-purple-400 focus:ring-purple-400`}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {/* {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />} */}
                                    </button>
                                </div>
                            </div>


                            {/* Sign In Button */}
                            <Button
                                type="submit"
                                // disabled={isLoading}
                                className="w-full h-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                            >
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
                                Don't have an account?{" "}
                                <Link href="/signup" className="text-purple-600 hover:text-purple-700 font-medium hover:underline">
                                    Sign up for free
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Mental Health Message */}
                <div className="text-center mt-6">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        Your mental wellness journey matters to us
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage