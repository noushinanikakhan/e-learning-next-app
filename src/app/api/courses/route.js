import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

// GET /api/courses - Get all courses
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('ocean-academy');
    const courses = await db.collection('courses').find({}).toArray();
    
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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