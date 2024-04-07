"use client";
import { InputGroup } from "@/app/ui/home/createProfile/formGroups/Groups";
import { useState } from "react";

const Signup = () => {
  const [isOTPSend, setIsOTPSend] = useState(false);
  const handleSendOTP = (e) => {
    e.preventDefault();
    setIsOTPSend(true);
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-5 gap-5">
      <h1 className="w-1/2 text-center py-3 _textGold text-4xl font-kalam-regular">
        Easy-peasy
      </h1>
      <h1 className="w-1/2 text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
        Signup, post, hire
      </h1>
      <div className="w-1/3 space-y-5 border px-4 py-5 _borderClassicBetween rounded-xl shadow shadow-slate-800">
        <h2 className="p-1 rounded text-center _bgGold _textClassic font-mono font-semibold">
          All fields are mandatory
        </h2>
        <form className="w-full space-y-3">
          <div className="flex gap-2">
            <InputGroup id="firstName" text="First Name" placeholder="Shibu" />
            <InputGroup id="lastName" text="Last Name" placeholder="Dhara" />
          </div>

          <InputGroup
            id="designation"
            text="Designation"
            placeholder="HR /  manager / team lead"
            autocomplete="off"
          />

          <div className="space-y-2">
            <InputGroup
              id="email"
              text="Email id"
              placeholder="shibudhara147@gmail.com"
              autocomplete="off"
            />

            <div className="input-group w-2/4 mx-auto text-center">
              <input
                id="otp"
                type="text"
                className={`input-field text-center letter-spacing-05`}
                placeholder="OTP"
                disabled={true}
              />
            </div>
            <p className="text-xs text-center font-mono _textGoldSoft">
              OTP send on shibudhara147@gmail.com
            </p>
          </div>

          <div className="space-y-2">
            <InputGroup
              id="mobile"
              text="Mobile"
              placeholder="0987654321"
              autocomplete="off"
            />

            <div className="input-group w-2/4 mx-auto text-center">
              <input
                id="otp"
                type="text"
                className={`input-field text-center letter-spacing-05`}
                placeholder="OTP"
                disabled={true}
              />
            </div>
            <p className="text-xs text-center font-mono _textGoldSoft">
              OTP send on 0987654321
            </p>
          </div>

          <div className="flex flex-col items-center pt-3">
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
                Signup
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
