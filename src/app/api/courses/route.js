import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

// GET /api/courses - Get all courses (IMPROVED VERSION)
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('ocean-academy');
    const courses = await db.collection('courses').find({}).toArray();
    
    // Ensure all courses have required fields
    const sanitizedCourses = courses.map(course => ({
      _id: course._id,
      title: course.title || 'Untitled Course',
      shortDescription: course.shortDescription || 'No description available',
      price: course.price || 0,
      instructor: course.instructor || 'Instructor',
      category: course.category || 'General',
      level: course.level || 'Beginner',
      duration: course.duration || 'Self-paced',
      imageUrl: course.imageUrl || null,
      fullDescription: course.fullDescription || 'No detailed description available.'
    }));
    
    return NextResponse.json(sanitizedCourses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json([], { status: 200 }); // Return empty array instead of error
  }
}

// POST /api/courses - Create new course
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('ocean-academy');
    const courseData = await request.json();
    
    // Add timestamps
    courseData.createdAt = new Date();
    courseData.updatedAt = new Date();
    
    const result = await db.collection('courses').insertOne(courseData);
    
    return NextResponse.json({ 
      success: true, 
      courseId: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    console.log('🗑️ Deleting course ID:', id);
    
    if (!id) {
      return NextResponse.json({ error: 'Course ID is required' }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db('ocean-academy');
    
    const result = await db.collection('courses').deleteOne({ 
      _id: new ObjectId(id) 
    });
    
    console.log('🗑️ Delete result:', result);
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Delete error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}