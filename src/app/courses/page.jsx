'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Fetch courses on component mount
  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch('/api/courses');
        const data = await res.json();
        setCourses(data);
        setFilteredCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  // Filter courses based on search and category
  useEffect(() => {
    let results = courses;

    // Search filter
    if (searchTerm) {
      results = results.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      results = results.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(results);
  }, [searchTerm, selectedCategory, courses]);

  // Get unique categories for filter
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c324a] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading courses...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0c324a] mb-4">
            Explore All Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive collection of courses designed to help you learn new skills and advance your career
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="flex-1 w-full md:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0c324a] focus:border-transparent transition-all"
                />
                <svg className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0c324a] focus:border-transparent transition-all"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[480px]"
              >
                {/* Course Image */}
                <div className="p-4 flex-shrink-0">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
               {course.imageUrl ? (
  <img
    src={course.imageUrl}
    alt={course.title}
    className="object-cover w-full h-full"
  />
) : (
  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
    No Image
  </div>
)}

                    <div className="absolute top-3 right-3">
                      <span className="bg-[#b3d9ff] text-[#0c324a] px-3 py-1 rounded-full text-sm font-semibold">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[#0c324a] bg-blue-50 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0c324a] mb-3 line-clamp-2 flex-shrink-0">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
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
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}