'use client';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <nav className="bg-[#0c324a] p-4">
      <div className="w-full flex items-center justify-between px-4">
        {/* LEFT: dropdown (mobile) + logo - YOUR ORIGINAL DESIGN */}
        <div className="flex items-center gap-3">
          {/* Mobile dropdown - LEFT SIDE */}
          <details className="dropdown md:hidden">
            <summary className="btn btn-ghost text-white appearance-none p-1">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <ul className="menu dropdown-content mt-2 p-2 shadow bg-[#0c324a] rounded-box w-16 z-[1]">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white hover:bg-[#1a4a6a]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white hover:bg-[#1a4a6a]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-white hover:bg-[#1a4a6a]"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-gray-300 hover:text-white hover:bg-[#1a4a6a]"
                >
                  Join Us
                </Link>
              </li>
              {session && (
                <>
                  <li>
                    <Link
                      href="/add"
                      className="text-gray-300 hover:text-white hover:bg-[#1a4a6a]"
                    >
                      Add Course
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/manage"
                      className="text-gray-300 hover:text-white hover:bg-[#1a4a6a]"
                    >
                      Manage Course
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </details>

          {/* Logo + Brand - YOUR ORIGINAL */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              width={60}
              height={60}
              alt="Ocean Academy Logo"
            />
            <span className="text-white text-xl font-bold">
              Ocean Academy
            </span>
          </Link>
        </div>

        {/* CENTER: desktop menu - YOUR ORIGINAL */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="text-gray-300 hover:text-white text-lg"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/join"
                className="text-gray-300 hover:text-white text-lg"
              >
                Join Us
              </Link>
            </li>
            {session && (
              <>
                <li>
                  <Link
                    href="/add"
                    className="text-gray-300 hover:text-white text-lg"
                  >
                    Add Course
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manage"
                    className="text-gray-300 hover:text-white text-lg"
                  >
                    Manage Course
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* RIGHT: User dropdown or Login button - UPDATED FOR SESSION */}
        <div className="relative" ref={dropdownRef}>
          {status === "loading" ? (
            // Loading state - minimal design
            <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
          ) : session ? (
            // User is logged in - Show dropdown
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-white hover:bg-[#1a4a6a] px-3 py-2 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-[#b3d9ff] rounded-full flex items-center justify-center">
                  <span className="text-[#0c324a] font-bold text-sm">
                    {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="hidden md:block">
                  {session.user?.name || session.user?.email?.split('@')[0]}
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">{session.user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                  </div>
                  
                  <Link
                    href="/add"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Add Course
                  </Link>
                  
                  <Link
                    href="/manage"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Manage Courses
                  </Link>
                  
                  <div className="border-t border-gray-100 mt-1">
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // User is not logged in - Show your original login button
            <Link href="/login">
              <button className="rounded-2xl px-2 py-2 lg:px-5 lg:py-2 font-bold bg-[#b3d9ff] text-[#0c324a] hover:bg-[#9ecbff] transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;