
import React from 'react';
import Link from 'next/link';

const FreeTrial = () => {
  return (
    <section className="py-16 bg-[#f0f7ff]
 
    ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c324a] mb-6">
          Achieve your career goals with Ocean Academy
        </h2>

        {/* CTA Button */}
        <Link
          href="/free-trial"
          className="inline-block bg-[#0c324a] text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-[#0c324a] transition-all duration-300 transform hover:scale-105 shadow-lg mb-6"
        >
          Start 7-day Free Trial
        </Link>

        {/* Pricing Text */}
        <div className="text-[#0c324a] text-lg">
          <span className="font-semibold">$24/month.</span>
          <span className="text-gray-800 ml-2">cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;