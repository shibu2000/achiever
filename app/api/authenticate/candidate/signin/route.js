import sendMail from "@/app/lib/emailConfig";
import { Candidate } from "@/app/lib/model/cadidate";
import { NextResponse } from "next/server";
import { generateOTP } from "@eternaljs/otp-generator";

// A POST method for generate OTP during candidate login
export async function POST(req) {
  const data = await req.json();

  const otp = generateOTP(6);
  try {
    const candidate = await Candidate.findOne({ email: data.email });
    if (!candidate) {
      return NextResponse.json(
        { message: "Email id not registered" },
        { status: 404 }
      );
    }
    await sendMail({
      firstname: candidate.firstname,
      email: data.email,
      otp: otp,
      type: "login",
    });
    await Candidate.findByIdAndUpdate(candidate.id, {
      otp: otp,
    });
    return NextResponse.json(
      { message: "OTP send, check inbox" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messaage: "Server error!" }, { status: 500 });
  }
}
