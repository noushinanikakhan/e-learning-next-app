// components/WhyChooseUs.jsx
import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v6l9-5m-9 5l-9-5m9 5v-6" />
        </svg>
      ),
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience and teaching expertise."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to course materials and learn from anywhere."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Certificates",
      description: "Get recognized with industry-valued certificates upon completion of your courses."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Get your doubts resolved anytime with our dedicated support team and student community."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c324a] mb-4">
            Why Choose Ocean Academy?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best learning experience with features designed for your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-[#0c324a] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0c324a] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#0c324a]">10,000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0c324a]">500+</div>
            <div className="text-gray-600">Courses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0c324a]">50+</div>
            <div className="text-gray-600">Expert Instructors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0c324a]">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;