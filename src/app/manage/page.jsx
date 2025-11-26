'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ManageCoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  // Fetch courses
  useEffect(() => {
    if (status === 'authenticated') {
      fetchCourses();
    }
  }, [status]);

  const fetchCourses = async () => {
    try {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };
const handleDelete = async (courseId) => {
  if (!confirm('Are you sure you want to delete this course?')) {
    return;
  }

  try {
    const res = await fetch(`/api/courses?id=${courseId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setCourses(courses.filter(course => course._id !== courseId));
      alert('Course deleted successfully');
    } else {
      throw new Error('Failed to delete course');
    }
  } catch (error) {
    console.error('Error deleting course:', error);
    alert('Error deleting course. Please try again.');
  }
};

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="w-11/12 mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c324a] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading courses...</p>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null; // Will redirect due to useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-11/12 mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0c324a] mb-2">Manage Courses</h1>
          <p className="text-gray-600">View and manage all your courses</p>
        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {courses.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Get started by creating your first course</p>
              <Link 
                href="/add"
                className="bg-[#0c324a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a4a6a] transition-colors"
              >
                Add New Course
              </Link>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {courses.map((course) => (
                      <tr key={course._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-[#0c324a] rounded-lg flex items-center justify-center mr-4">
                              <span className="text-white text-sm font-bold">
                                {course.title?.charAt(0) || 'C'}
                              </span>
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-900 line-clamp-1">
                                {course.title}
                              </div>
                              <div className="text-sm text-gray-500 line-clamp-1">
                                {course.shortDescription}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{course.instructor}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {course.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${course.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {course.level}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <Link
                              href={`/details/${course._id}`}
                              className="text-[#0c324a] hover:text-[#1a4a6a] px-3 py-1 rounded-md border border-[#0c324a] hover:bg-[#0c324a] hover:text-white transition-colors"
                            >
                              View
                            </Link>
                            <button
                              onClick={() => handleDelete(course._id)}
                              className="text-red-600 hover:text-red-800 px-3 py-1 rounded-md border border-red-600 hover:bg-red-600 hover:text-white transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4 p-4">
                {courses.map((course) => (
                  <div key={course._id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-[#0c324a] rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">
                            {course.title?.charAt(0) || 'C'}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                            {course.title}
                          </h3>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {course.instructor}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {course.category}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
                      <div>Price: <span className="font-semibold">${course.price}</span></div>
                      <div>Level: <span className="font-semibold">{course.level}</span></div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {course.shortDescription}
                    </p>

                    <div className="flex space-x-2">
                      <Link
                        href={`/details/${course._id}`}
                        className="flex-1 text-center text-[#0c324a] hover:text-[#1a4a6a] px-3 py-2 rounded-md border border-[#0c324a] hover:bg-[#0c324a] hover:text-white transition-colors text-sm"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(course._id)}
                        className="flex-1 text-center text-red-600 hover:text-red-800 px-3 py-2 rounded-md border border-red-600 hover:bg-red-600 hover:text-white transition-colors text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}