import { NextResponse } from 'next/server';
import { getQuestions, addQuestion } from '@/lib/db';

export async function GET() {
  try {
    const questions = await getQuestions();
    return NextResponse.json({ success: true, data: questions });
  } catch (error) {
    console.error("API GET questions error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, question } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }
    if (!question || typeof question !== 'string' || question.trim() === '') {
      return NextResponse.json(
        { success: false, error: "Question is required" },
        { status: 400 }
      );
    }

    const saved = await addQuestion(name.trim(), email?.trim() || '', question.trim());
    return NextResponse.json({ success: true, data: saved });
  } catch (error) {
    console.error("API POST questions error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save question" },
      { status: 500 }
    );
  }
}
