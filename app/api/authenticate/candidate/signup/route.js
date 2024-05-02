import { connectToDB } from "@/app/lib/dbConnection";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(request) {
  try {
    const data = await request.json();
    return NextResponse.json({data})
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
