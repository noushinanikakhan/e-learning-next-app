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

      {/* Rest of your component remains the same */}
      <div className="relative h-96 w-full">
       {course.imageUrl && (
  <Image
    src={course.imageUrl}
    alt={course.title}
    fill
    className="object-cover"
  />
)}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-[#0c324a] mb-6">{course.title}</h1>
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {course.fullDescription}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-[#0c324a] mb-2">${course.price}</div>
                <div className="text-gray-600">One-time payment</div>
              </div>
              
              <button className="w-full bg-[#0c324a] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#1a4a6a] transition-colors mb-6">
                Enroll Now
              </button>

              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Instructor</span>
                  <span className="font-semibold text-[#0c324a]">{course.instructor}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-[#0c324a]">{course.duration}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Level</span>
                  <span className="font-semibold text-[#0c324a]">{course.level}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold text-[#0c324a]">{course.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}