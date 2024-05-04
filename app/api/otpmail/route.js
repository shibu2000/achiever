import { connectToDB } from "@/app/lib/dbConnection";
import { Candidate } from "@/app/lib/model/cadidate";
import { generateOTP } from "@eternaljs/otp-generator";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

connectToDB();

export async function POST(req) {
  const data = await req.json();

  const { username, user_email } = data;

  
 


  return NextResponse.json({ success: true }, { status: 200 });

  // const otp = generateOTP(6);

  // const { GMAIL_USERNAME, GMAIL_PASSWORD } = process.env;
  // const transport = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: GMAIL_USERNAME,
  //     pass: GMAIL_PASSWORD,
  //   },
  // });

  // try {
  //   const res = await transport.sendMail({
  //     from: GMAIL_USERNAME,
  //     to: user_email,
  //     subject: "Achiever registration otp",
  //     html: `
  //     <div style="background-color:rgb(5, 22, 34); padding:1rem; width:75%;margin:0 auto; color:rgb(185, 216, 215)">
  //         <h1>Hi ${username}</h1>
  //         <h2 style="text-align:center; border:1px solid rgb(211, 177, 140); padding:0.5rem">Your registration OTP is ${otp}</h2>
  //         <h2>Valid for only 5 minutes.</h2>
  //         <p>Thank you</p>
  //         <p>Achiever team</p>
  //     </div>
  //     `,
  //   });
  //   const newCandidate = new Candidate({
  //     firstname: username,
  //     otp: otp,
  //     email: user_email,
  //   });
  //   await newCandidate.save();
  //   return NextResponse.json({ success: true }, { status: 200 });
  // } catch (e) {
  //   return NextResponse.json({ success: false }, { status: 500 });
  // }
}
