// src/app/details/[id]/page.jsx
import Link from 'next/link';
import Image from 'next/image';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

async function getCourse(id) {
  try {
    const client = await clientPromise;
    const db = client.db('ocean-academy');
    const course = await db.collection('courses').findOne({ 
      _id: new ObjectId(id) 
    });
    return course;
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
}

export default async function DetailsPage({ params }) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-[#0c324a] mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link 
            href="/courses"
            className="bg-[#0c324a] text-white px-6 py-3 rounded-lg hover:bg-[#1a4a6a] transition-colors"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link 
            href="/courses"
            className="flex items-center text-[#0c324a] hover:text-[#1a4a6a] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Banner Section - Modified */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-[#0c324a] mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.shortDescription}</p>
              
              {/* Course Image - Contained within white space */}
         <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
  {course.imageUrl ? (
    <div className="h-80 w-full">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
    <div className="h-80 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-[#0c324a] rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-xl font-bold">OA</span>
        </div>
        <span className="text-gray-500">Course Image</span>
      </div>
    </div>
  )}
</div>
            </div>

            {/* Right Column - Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#0c324a] mb-2">${course.price || '0'}</div>
                  <div className="text-gray-600">One-time payment</div>
                </div>
                
                <button className="w-full bg-[#0c324a] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#1a4a6a] transition-colors mb-6">
                  Enroll Now
                </button>

                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Instructor</span>
                    <span className="font-semibold text-[#0c324a]">{course.instructor || 'Instructor'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-[#0c324a]">{course.duration || 'Self-paced'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold text-[#0c324a]">{course.level || 'All Levels'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Category</span>
                    <span className="font-semibold text-[#0c324a]">{course.category || 'General'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Description Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-[#0c324a] mb-6">Course Description</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {course.fullDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}