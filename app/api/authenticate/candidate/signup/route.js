import { connectToDB } from "@/app/lib/dbConnection";
import sendMail from "@/app/lib/emailConfig";
import { Candidate } from "@/app/lib/model/cadidate";
import { generateOTP } from "@eternaljs/otp-generator";
import { NextResponse } from "next/server";

connectToDB();

// A POST method for generating OTP during candidate registreation
export async function POST(req) {
  const formData = await req.json();

  const { firstname, lastname, email } = formData;

  const data = await Candidate.findOne({ email: email });
  if (data) {
    return NextResponse.json(
      {
        message: "Email already registered! Try with new email",
      },
      { status: 409 }
    );
  }

  const otp = generateOTP(6);
  try {
    await sendMail({
      firstname: firstname,
      otp: otp,
      type: "registration",
    });
    const newCandidate = new Candidate({
      firstname: firstname,
      lastname: lastname,
      email: email,
      otp: otp,
    });
    await newCandidate.save();
    return NextResponse.json(
      { message: "OTP send successfully" },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "OTP send failed! Try again" },
      { status: 500 }
    );
  }
}
