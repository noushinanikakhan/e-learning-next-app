import Link from 'next/link';
import Image from 'next/image';

async function getFeaturedCourses() {
  try {
  //   const res = await fetch('http://localhost:3000/api/courses', {
  //     next: { revalidate: 3600 } // Revalidate every hour
  //   });
    const res = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/courses`, {
      cache: 'no-store' // Or keep revalidate if you prefer
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch courses');
    }
    
    const allCourses = await res.json();
    // Get first 6 courses
    return allCourses.slice(0, 6);
  } catch (error) {
    console.error('Error fetching featured courses:', error);
    return [];
  }
}

export default async function FeaturedCourses() {
  const featuredCourses = await getFeaturedCourses();

  if (featuredCourses.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">No courses available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c324a] mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular courses and start your learning journey today
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div 
              key={course._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[520px]" // ← FIXED HEIGHT + flex-col
            >
              {/* Course Image with Padding */}
              <div className="p-4 flex-shrink-0"> {/* ← Added flex-shrink-0 */}
          // With this:
<div className="relative h-48 w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
  {course.imageUrl ? (
    <img
      src={course.imageUrl}
      alt={course.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="text-center">
      <div className="w-12 h-12 bg-[#0c324a] rounded-full flex items-center justify-center mx-auto mb-2">
        <span className="text-white font-bold">OA</span>
      </div>
      <span className="text-gray-500 text-sm">Course Image</span>
    </div>
  )}

                  <div className="absolute top-3 right-3">
                    <span className="bg-[#b3d9ff] text-[#0c324a] px-3 py-1 rounded-full text-sm font-semibold">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Course Content - flex-grow for equal spacing */}
              <div className="px-6 pb-6 flex flex-col flex-grow"> {/* ← Added flex classes */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#0c324a] bg-blue-50 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0c324a] mb-3 line-clamp-2 flex-shrink-0">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow"> {/* ← Changed to line-clamp-3 and flex-grow */}
                  {course.shortDescription}
                </p>

                <div className="flex items-center justify-between mb-4 flex-shrink-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#0c324a] rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">
                        {course.instructor?.charAt(0) || 'I'}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{course.instructor}</span>
                  </div>
                  <span className="text-2xl font-bold text-[#0c324a]">
                    ${course.price}
                  </span>
                </div>

                <Link 
                  href={`/details/${course._id}`}
                  className="block w-full bg-[#0c324a] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#1a4a6a] transition-colors duration-300 flex-shrink-0"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/courses"
            className="inline-flex items-center bg-[#b3d9ff] text-[#0c324a] px-8 py-3 rounded-xl font-semibold hover:bg-[#99ccff] transition-all duration-300 transform hover:scale-105"
          >
            View All Courses
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}