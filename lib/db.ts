import { neon } from '@neondatabase/serverless';

// Retrieve the database URL from environment variables
const connectionString = process.env.DATABASE_URL;

// Simple interface for saved questions
export interface Question {
  id: number;
  name: string;
  email?: string;
  question: string;
  created_at: string;
}

// In-memory fallback database for development/builds/no-env-variable states
let inMemoryQuestions: Question[] = [
  {
    id: 1,
    name: "Alex",
    question: "How long does the Iron Ore Train trip take?",
    created_at: new Date(Date.now() - 3600000 * 2).toISOString() // 2 hours ago
  },
  {
    id: 2,
    name: "Sarah",
    question: "What is the best time of year to visit Chinguetti in Mauritania?",
    created_at: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
  }
];

// Helper to query database
export async function getQuestions(): Promise<Question[]> {
  if (!connectionString) {
    console.warn("Neon Database URL not found. Using local in-memory store.");
    return [...inMemoryQuestions].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  try {
    const sql = neon(connectionString);
    
    // Ensure table exists
    await sql`
      CREATE TABLE IF NOT EXISTS mauritania_questions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100),
        question TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const result = await sql`
      SELECT id, name, email, question, created_at::text 
      FROM mauritania_questions 
      ORDER BY created_at DESC 
      LIMIT 10
    `;

    return result as unknown as Question[];
  } catch (error) {
    console.error("Failed to fetch questions from Neon. Falling back to local store. Error:", error);
    return [...inMemoryQuestions].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }
}

export async function addQuestion(name: string, email: string, question: string): Promise<Question> {
  const newQuestion: Question = {
    id: Date.now(),
    name,
    email,
    question,
    created_at: new Date().toISOString()
  };

  if (!connectionString) {
    console.warn("Neon Database URL not found. Saving to local in-memory store.");
    inMemoryQuestions.unshift(newQuestion);
    return newQuestion;
  }

  try {
    const sql = neon(connectionString);
    
    // Ensure table exists
    await sql`
      CREATE TABLE IF NOT EXISTS mauritania_questions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100),
        question TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const result = await sql`
      INSERT INTO mauritania_questions (name, email, question) 
      VALUES (${name}, ${email || null}, ${question}) 
      RETURNING id, name, email, question, created_at::text
    `;

    return (result as unknown as Question[])[0];
  } catch (error) {
    console.error("Failed to save question to Neon. Falling back to local store. Error:", error);
    inMemoryQuestions.unshift(newQuestion);
    return newQuestion;
  }
}
