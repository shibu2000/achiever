"use client";
import { IoLogoGoogle } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { useRef, useState } from "react";
import DividerWithText from "@/app/ui/signin/DividerWithText";
import Link from "next/link";
import { InputGroup } from "@/app/ui/formFields/InputFields";
import OTPInputField from "@/app/ui/formFields/OTPInputField";
import { ToastContainer, toast } from "react-toastify";
import { candidateLogin } from "@/app/lib/action/candidate";
import { useRouter } from "next/navigation";

const CandidateSignin = () => {
  const router = useRouter();
  const [isOTPSend, setIsOTPSend] = useState(false);
  const form = useRef();

  //Regex for email validation
  const EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    let isEmail = false;

    const email = form.current
      .querySelector('input[name="email"]')
      .value.trim();

    EMAIL_REGEX.test(email)
      ? (isEmail = true)
      : toast.error("Enter valid email");

    if (isEmail) {
      const res = await fetch("/api/authenticate/candidate/signin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });
      const response = await res.json();
      if (res.ok) {
        toast.success(response.message);
        setIsOTPSend(true);
      } else {
        toast.error(response.message);
      }
    }
  };

  async function handleLogin(formData) {
    const response = await candidateLogin(formData);
    if (response.ok) {
      toast.success(response.message);
      setTimeout(() => {
        router.push("/candidate/home/jobs");
      }, 5000);
    } else {
      toast.error(response.message);
    }
  }
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-5 gap-5">
      <h1 className="md:w-1/2 text-center py-3 _textGold text-4xl font-kalam-regular border-b _borderClassicBetween">
        Candidate sign in
      </h1>
      <div className="lg:w-1/3 md:w-3/5 w-5/6 space-y-5 border px-4 py-10 _borderClassicBetween rounded-xl shadow shadow-slate-800">
        <div className="space-y-3 text-center">
          {/* Area for implementing NextAuth */}
          <button className="w-full _bgGold _textClassic p-2 rounded flex items-center justify-center gap-2">
            Sign in with Google <IoLogoGoogle />
          </button>
          <button className="w-full _bgGold _textClassic p-2 rounded flex items-center justify-center gap-2">
            Sign in with LinkedIn <LiaLinkedinIn />
          </button>
        </div>
        <DividerWithText text="or" />
        <form ref={form} action={handleLogin} className="w-full space-y-5">
          <InputGroup
            id="email"
            text="Email id"
            placeholder="passiontocode.contact@gmail.com"
            autocomplete="off"
            name="email"
          />

          {isOTPSend && (
            <OTPInputField
              id="emailotp"
              disable={true}
              name="otp"
              receiver={form.current
                .querySelector('input[name="email"]')
                .value.trim()}
            />
          )}

          <div className="flex flex-col items-center pt-3 space-y-1">
            {!isOTPSend ? (
              <button
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            ) : (
              <button
                type="submit"
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold text-center"
              >
                Sign in
              </button>
            )}
            <Link
              href="/authentication/candidate/signup"
              className="hover:underline"
            >
              Not registerd? create account
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default CandidateSignin;
