// components/Navbar.jsx
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#0c324a] p-4">
      <div className="w-full flex items-center justify-between px-4">
        {/* LEFT: dropdown (mobile) + logo */}
        <div className="flex items-center gap-3">
          {/* Mobile dropdown - LEFT SIDE */}
          <details className="dropdown md:hidden">
            <summary className="btn btn-ghost text-white appearance-none p-1">
              <svg
                // xmlns="http://www.w3.org/2000/svg"
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
                href="/details"
                className="text-gray-300 hover:text-white text-lg"
              >
                Course Details
              </Link>
            </li>
            </ul>
          </details>

          {/* Logo + Brand */}
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

        {/* CENTER: desktop menu */}
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
                href="/details"
                className="text-gray-300 hover:text-white text-lg"
              >
                Course Details
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT: login (outside dropdown, always in navbar) */}
        <div>
          <Link  href="/login">
            <button className="rounded-2xl px-2 py-2 lg:px-5 lg:py-2  font-bold bg-[#b3d9ff] text-[#0c324a] hover:bg-[#9ecbff] transition">
            Login
          </button>
          </Link>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
