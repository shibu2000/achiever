"use client";
import { useState } from "react";
import Link from "next/link";
import OTPInputField from "@/app/ui/formFields/OTPInputField";
import { InputGroup } from "@/app/ui/formFields/InputFields";

const Signin = () => {
  const [isOTPSend, setIsOTPSend] = useState(false);
  const handleSendOTP = (e) => {
    e.preventDefault();
    setIsOTPSend(true);
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-5 gap-5">
      <h1 className="w-1/2 text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
        employer sign in
      </h1>
      <div className="w-1/3 space-y-5 border px-4 py-10 _borderClassicBetween rounded-xl shadow shadow-slate-800">
        <form className="w-full space-y-5">
          <div className="space-y-2">
            <InputGroup
              id="email"
              text="Email id"
              placeholder="shibudhara147@gmail.com"
              autocomplete="off"
            />

            {isOTPSend && (
              <OTPInputField
                id="emailotp"
                disable={true}
                receiver="shibudhara147@gmail.com"
              />
            )}
          </div>

          <div className="space-y-2">
            <InputGroup
              id="mobile"
              text="Mobile"
              placeholder="0987654321"
              autocomplete="off"
            />

            {isOTPSend && (
              <OTPInputField
                id="mobileid"
                disable={true}
                receiver="0987654321"
              />
            )}
          </div>

          <div className="flex flex-col items-center pt-3 space-y-1">
            {!isOTPSend ? (
              <button
                type="submit"
                className="w-2/3 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            ) : (
              <button
                type="submit"
                className="w-2/3 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold"
              >
                Sign in
              </button>
            )}
            <Link href="/welcome" className="hover:underline">
              Not registerd? create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
