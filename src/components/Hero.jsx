// components/Hero.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-white text-[#0c324a] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text Content - Left Side */}
          <div className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Dive Into
              <span className="block text-[#0c324a]">Quality Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#0c324a] max-w-3xl leading-relaxed">
              Join thousands of students mastering new skills with our interactive courses. 
              Start your learning journey today and unlock your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
              <Link 
                href="/courses" 
                className="bg-[#b3d9ff] text-[#0c324a] px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Courses
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-[#0c324a] text-[#0c324a] px-8 py-4 rounded-2xl text-lg font-bold hover:bg-[#b3d9ff] hover:text-[#0c324a] transition-all transform hover:scale-105 duration-300"
              >
                Free Demo
              </Link>
            </div>
          </div>

          {/* Hero Image - Right Side */}
          <div className="flex-1 order-1 lg:order-2">
            <div className="relative w-full h-64 md:h-80 lg:h-96 ">
           <Image
    src="/assets/hero-bg1.jpg"
    alt="Students learning at Ocean Academy"
    width={600}
    height={400}
    className="w-full max-w-md md:max-w-lg h-auto rounded-xl object-cover"
    priority
  />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;