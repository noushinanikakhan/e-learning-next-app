export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#6398b0]    text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Ocean Academy</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering learners worldwide with quality education and innovative learning experiences
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#0c324a] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To make quality education accessible to everyone, everywhere. We believe that learning 
                should be engaging, practical, and transformative, helping students achieve their 
                personal and professional goals.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#0c324a] mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a world where anyone can learn anything, regardless of their background 
                or location. We envision a future where education breaks down barriers and 
                empowers individuals to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0c324a] mb-8">Our Story</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Founded in 2020, Ocean Academy began with a simple idea: education should be 
              accessible, engaging, and relevant to today's world. What started as a small 
              platform with a handful of courses has grown into a global learning community 
              serving thousands of students worldwide.
            </p>
            <p>
              Our team of educators, industry professionals, and technology experts work 
              tirelessly to create learning experiences that are not just informative, but 
              truly transformative. We combine cutting-edge technology with proven teaching 
              methodologies to deliver results that matter.
            </p>
            <p>
              Today, we're proud to be a trusted learning platform for students, professionals, 
              and organizations looking to upgrade their skills and advance their careers.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0c324a] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#b3d9ff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0c324a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0c324a] mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We believe everyone deserves access to quality education, regardless of their background or location.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#b3d9ff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0c324a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0c324a] mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our teaching methods and technology to provide the best learning experience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#b3d9ff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0c324a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0c324a] mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a supportive learning community where students can grow and succeed together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6398b0]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who are already transforming their careers with Ocean Academy
          </p>
          <button className="bg-[#b3d9ff] text-[#0c324a] px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105">
            Explore Courses
          </button>
        </div>
      </section>
    </div>
  );
}