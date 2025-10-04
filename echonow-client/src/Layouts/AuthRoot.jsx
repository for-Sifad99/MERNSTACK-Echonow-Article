import React from 'react';
import { Link, Outlet } from "react-router-dom";
import SocialLogin from '../pages/Authentication/Social/SocialLogin';
import authPic from "../assets/auth-pic.png";
import logo from '/logo.png';

const AuthRoot = () => {
    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Image as Background */}
            <div
                className="hidden md:flex items-center justify-center bg-cover bg-center  font-oxygen"
                style={{ backgroundImage: `url(${authPic})` }}
            >
                <div className="flex flex-col items-center justify-center text-[var(--white)] text-center px-6">
                    {/* Logo */}
                    <Link to='/' className="w-24 h-24 p-2 flex items-center justify-center bg-[var(--white)] dark:text-[var(--dark)]  rounded-full">
                        <img src={logo} className="w-full" alt="website logo image" />
                    </Link>

                    {/* Body text */}
                    <h2 className="text-[40px] font-bold">Welcome to</h2>
                    <p className="text-xl">Bangladesh EchoNow Library System</p>
                    <p className="mt-2 text-sm">Sign in to Continue Access</p>

                    {/* Divider and Social login */}
                    <div className="w-9/11 relative flex items-center mt-0.5 mb-2">
                        <div className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-sm text-[var(--white)]">or</span>
                        <div className="flex-grow border-t border-gray-300" />
                    </div>
                    <SocialLogin />
                </div>
            </div>

            {/* Right Side - Form Area */}
            <div className="flex items-center justify-center py-10 px-4 sm:px-6 md:px-10 bg-[var(--white)] dark:bg-[var(--dark2-bg)] text-[var(--dark)] dark:text-[var(--white)]">
                <div className="w-full max-w-[344px] sm:max-w-md">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default AuthRoot;
