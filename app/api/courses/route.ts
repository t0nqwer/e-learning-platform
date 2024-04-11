import { connectToDatabase } from "@/lib/databaseconnect";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const user = await currentUser();

    const { title } = await req.json();
    if (!user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
