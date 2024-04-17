"use client";
import { IoLogoGoogle } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { useState } from "react";
import {
  InputGroup,
  OtpInputGroup,
} from "@/app/ui/candidate/createProfile/formGroups/Groups";
import DividerWithText from "@/app/ui/signin/DividerWithText";
import Link from "next/link";

const PageSignup = () => {
  const [isOTPSend, setIsOTPSend] = useState(false);
  const handleSendOTP = (e) => {
    e.preventDefault();
    setIsOTPSend(true);
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-5 gap-5">
      <h1 className="w-1/2 text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
        candidate sign up, apply, get hired
      </h1>
      <div className="w-1/3 space-y-5 border px-4 py-10 _borderClassicBetween rounded-xl shadow shadow-slate-800">
        <div className="space-y-3 text-center">
          {/* Area for implementing NextAuth */}
          <button className="w-full _bgGold _textClassic p-2 rounded flex items-center justify-center gap-2">
            Signup with Google <IoLogoGoogle />
          </button>
          <button className="w-full _bgGold _textClassic p-2 rounded flex items-center justify-center gap-2">
            Signup with LinkedIn <LiaLinkedinIn />
          </button>
        </div>
        <DividerWithText text="or" />
        <form className="w-full space-y-5">
          <div className="flex gap-2">
            <InputGroup id="firstName" text="First Name" placeholder="Shibu" />
            <InputGroup id="lastName" text="Last Name" placeholder="Dhara" />
          </div>
          <InputGroup
            id="email"
            text="Email id"
            placeholder="passiontocode.contact@gmail.com"
            autocomplete="off"
          />

          {isOTPSend && (
            <OtpInputGroup
              id="emailid"
              disable={true}
              receiver="xyz@email.com"
            />
          )}

          <div className="flex flex-col items-center pt-3 space-y-1">
            {!isOTPSend ? (
              <button
                type="submit"
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            ) : (
              <Link
                href={"/authentication/candidate/signin"}
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold text-center"
              >
                <button type="submit">Sign up</button>
              </Link>
            )}
            <Link href='/authentication/candidate/signin' className="hover:underline">Already registerd? sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageSignup;
