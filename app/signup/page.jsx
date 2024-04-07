"use client";
import { InputGroup } from "../ui/home/createProfile/formGroups/Groups";
import { IoLogoGoogle } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import DividerWithText from "../ui/signin/DividerWithText";
import { useState } from "react";

const PageSignup = () => {
  const [isOTPSend, setIsOTPSend] = useState(false);
  const handleSendOTP = (e) => {
    e.preventDefault();
    setIsOTPSend(true);
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-5 gap-5">
      <h1 className="w-1/2 text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
        Signup, apply, get hired
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

          <div className="input-group w-2/3 mx-auto text-center">
            <label htmlFor="otp">Verify OTP</label>

            <input
              id="otp"
              type="text"
              className={`input-field text-center`}
              placeholder="OTP"
              style={{ letterSpacing: ".7rem" }}
            />
          </div>

          <div className="flex flex-col items-center">
            {!isOTPSend ? (
              <button
                type="submit"
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            ) : (
              <button
                type="submit"
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold"
              >
                Signup
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageSignup;
