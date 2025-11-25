// components/Testimonials.jsx
import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      course: "Web Development Bootcamp",
      rating: 5,
      text: "Ocean Academy transformed my career! The practical projects and mentor support helped me land my first developer job within 3 months.",
      avatar: "/assets/student1.jpg" // Replace with actual image path
    },
    {
      id: 2,
      name: "Mike Chen",
      course: "Data Science Mastery",
      rating: 5,
      text: "The instructors are amazing! Complex concepts made simple. I went from beginner to building ML models in just 6 months.",
      avatar: "/assets/student2.jpg" // Replace with actual image path
    },
    {
      id: 3,
      name: "Priya Sharma",
      course: "Digital Marketing Pro",
      rating: 5,
      text: "Flexible learning schedule and real-world projects helped me balance my job while upgrading my skills. Highly recommended!",
      avatar: "/assets/student3.jpg" // Replace with actual image path
    },
    {
      id: 4,
      name: "David Wilson",
      course: "UI/UX Design Specialization",
      rating: 5,
      text: "The certificate from Ocean Academy was recognized by top companies. I received multiple job offers after completion.",
      avatar: "/assets/student4.jpg" // Replace with actual image path
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c324a] mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students who transformed their careers with Ocean Academy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0c324a]">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 text-center">
          <div className="bg-[#0c324a] text-white py-8 px-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-[#b3d9ff]">85%</div>
                <div className="text-gray-300">Career Advancement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#b3d9ff]">94%</div>
                <div className="text-gray-300">Course Completion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#b3d9ff]">4.9/5</div>
                <div className="text-gray-300">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;