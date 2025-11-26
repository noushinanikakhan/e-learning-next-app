import Link from 'next/link';

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#6398b0] text-[#0c324a] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Teach With Ocean Academy</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Share your expertise, inspire learners worldwide, and build your teaching career with us
          </p>
        </div>
      </section>

      {/* Why Teach With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c324a] mb-4">
              Why Teach With Ocean Academy?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community of expert instructors and make a difference in students' lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#b3d9ff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0c324a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0c324a] mb-3">Earn Competitive Income</h3>
              <p className="text-gray-600">
                Get paid for sharing your knowledge with competitive revenue sharing and timely payments.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#b3d9ff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0c324a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0c324a] mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Teach students from around the world and build your international teaching reputation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#b3d9ff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0c324a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0c324a] mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">
                Create courses on your own time and teach from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0c324a] text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-2 border-[#0c324a]">
                <span className="text-lg font-bold text-[#0c324a]">1</span>
              </div>
              <h3 className="font-semibold text-[#0c324a] mb-2">Apply</h3>
              <p className="text-sm text-gray-600">Submit your application and course proposal</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-2 border-[#0c324a]">
                <span className="text-lg font-bold text-[#0c324a]">2</span>
              </div>
              <h3 className="font-semibold text-[#0c324a] mb-2">Create</h3>
              <p className="text-sm text-gray-600">Develop your course with our support team</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-2 border-[#0c324a]">
                <span className="text-lg font-bold text-[#0c324a]">3</span>
              </div>
              <h3 className="font-semibold text-[#0c324a] mb-2">Publish</h3>
              <p className="text-sm text-gray-600">Launch your course to our global community</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border-2 border-[#0c324a]">
                <span className="text-lg font-bold text-[#0c324a]">4</span>
              </div>
              <h3 className="font-semibold text-[#0c324a] mb-2">Earn</h3>
              <p className="text-sm text-gray-600">Start earning and growing your student base</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0c324a] text-center mb-8">Instructor Requirements</h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Expertise in your subject area with verifiable experience</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Passion for teaching and helping students succeed</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Good video recording equipment and internet connection</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Ability to commit to creating high-quality course content</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Professional communication skills</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6398b0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Teaching?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of instructors who are transforming education and building their teaching careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-[#b3d9ff] text-[#0c324a] px-8 py-4 rounded-xl text-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link 
              href="/courses"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-[#0c324a] transition-all duration-300"
            >
              View Existing Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}