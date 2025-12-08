import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import logo from '@/assets/logo/logo.png';
import loginMain from '@/assets/login_Images/login-Main.png';
import leftAsset from '@/assets/login_Images/left-Asset.png';
import leftBottomAsset from '@/assets/login_Images/leftBottom-Asset.png';
import rightAsset from '@/assets/login_Images/right-Asset.png';
import loveIcon from '@/assets/login_Images/love-icon.png';
import thumbIcon from '@/assets/login_Images/thumb-icon.png';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', { email, password });
    };

    return (
        <>
            <CustomCursor />
            <div className="w-screen bg-white flex overflow-hidden">
                {/* Left Side - Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                    <div className="w-full max-w-md">
                        {/* Logo */}
                        <div className="mb-8 md:mb-10 lg:mb-12">
                            <img src={logo} alt="Wapsera" className="h-6 md:h-7 lg:h-8 w-auto" />
                        </div>

                        {/* Heading */}
                        <div className="mb-6 md:mb-8 lg:mb-10">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black mb-2 leading-tight">
                                Log in to your personal account
                            </h1>
                            <p className="text-xs sm:text-sm lg:text-base text-black/60 mt-2">
                                Let's get start with your 30 days free trial
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-black mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-black/40">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="info@wapsera.com"
                                        className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-gray-50 border-0 rounded-xl text-xs sm:text-sm lg:text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-black mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-black/40">
                                        <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••••••••••••••"
                                        className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 bg-gray-50 border-0 rounded-xl text-xs sm:text-sm lg:text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <Link
                                    to="/forgot-password"
                                    className="text-xs sm:text-sm text-black/60 hover:text-black transition-colors"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3 sm:py-3.5 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center justify-center gap-2 group mt-4 sm:mt-6"
                            >
                                Login
                                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </span>
                            </button>
                        </form>

                        {/* Social Login */}
                        <div className="mt-5 md:mt-6 lg:mt-8">
                            <p className="text-center text-xs sm:text-sm text-black/60 mb-3 sm:mb-4">Or Log in with</p>
                            <div className="flex justify-center gap-3 sm:gap-4">
                                <button className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                </button>
                                <button className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="#1877F2" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </button>
                                <button className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="#000000" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center text-xs sm:text-sm text-black/60 mt-4 sm:mt-6">
                            Don't have an account yet?{' '}
                            <Link to="/signup" className="text-black font-semibold hover:text-primary transition-colors">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Side - Image Section */}
                <div className="hidden lg:flex relative overflow-hidden items-center justify-center p-4 xl:p-6 2xl:p-8">
                    {/* Content Container */}
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                        {/* Main Image Container with Decorative Assets */}
                        <div className="relative w-full flex items-center justify-center">
                            {/* Main Image */}
                            <img
                                src={loginMain}
                                alt="Woman using phone"
                                className="relative z-10 w-full h-auto max-w-[85%] object-contain"
                            />

                            {/* Decorative Assets - Positioned absolutely around the main image */}

                            {/* Left Asset - Megaphone/Speaker at LEFT BOTTOM */}
                            <div className="absolute bottom-0 left-2 xl:-left-12 2xl:-left-2 w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] 2xl:w-[220px] 2xl:h-[220px] z-20">
                                <img
                                    src={leftAsset}
                                    alt=""
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </div>

                            {/* Left Bottom Asset - Facebook/Instagram Card at LEFT CENTER */}
                            <div className="absolute top-1/3 -translate-y-1/2 -left-2 xl:-left-12 2xl:-left-2 w-[100px] h-[100px] xl:w-[150px] xl:h-[150px] 2xl:w-[210px] 2xl:h-[210px] z-20">
                                <img
                                    src={leftBottomAsset}
                                    alt=""
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </div>

                            {/* Right Asset - Chart/Graph at RIGHT BOTTOM */}
                            <div className="absolute bottom-0 right-2 xl:-right-4 2xl:-right-2 w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] 2xl:w-[220px] 2xl:h-[220px] z-20">
                                <img
                                    src={rightAsset}
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Love Icon - Red Heart BETWEEN leftBottomAsset and leftAsset */}
                            <div className="absolute bottom-[30%] left-2 xl:left-2 2xl:-left-2 w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 z-20">
                                <img
                                    src={loveIcon}
                                    alt=""
                                    className="w-full h-full object-contain drop-shadow-lg animate-bounce"
                                    style={{ animationDuration: '3s' }}
                                />
                            </div>

                            {/* Thumb Icon - Blue Thumbs Up at RIGHT CENTER */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-6 xl:right-2 2xl:right-2 w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 z-20">
                                <img
                                    src={thumbIcon}
                                    alt=""
                                    className="w-full h-full object-contain drop-shadow-lg animate-bounce"
                                    style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
