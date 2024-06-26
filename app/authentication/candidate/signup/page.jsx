"use client";
import { IoLogoGoogle } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { useRef, useState } from "react";
import DividerWithText from "@/app/ui/signin/DividerWithText";
import Link from "next/link";
import OTPInputField from "@/app/ui/formFields/OTPInputField";
import { InputGroup } from "@/app/ui/formFields/InputFields";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { candidateRegistraton } from "@/app/lib/action/candidate";
import { useRouter } from "next/navigation";

const PageSignup = () => {
  const router = useRouter();
  const [isOTPSend, setIsOTPSend] = useState(false);

  const form = useRef();

  //Regex for email validation
  const EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);

  const handleSendOTP = async (e) => {
    e.preventDefault(e);

    const firstname = form.current
      .querySelector('input[name="firstname"]')
      .value.trim();
    const lastname = form.current
      .querySelector('input[name="lastname"]')
      .value.trim();
    const email = form.current
      .querySelector('input[name="user_email"]')
      .value.trim();

    let isFirstname = false;
    let isEmail = false;

    firstname.length === 0
      ? toast.error("First name can't be empty")
      : (isFirstname = true);
    EMAIL_REGEX.test(email)
      ? (isEmail = true)
      : toast.error("Enter valid email");

    if (isEmail && isFirstname) {
      const res = await fetch("/api/authenticate/candidate/signup", {
        method: "POST",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
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

  const handleSubmit = async (formData) => {
    const response = await candidateRegistraton(formData);
    if (response.ok) {
      toast.success(`${response.message}. redirecting to sign in page.`);
      setTimeout(() => {
        router.push("/authentication/candidate/signin");
      }, 5000);
    } else {
      toast.error(response.message);
    }
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-5 gap-5">
      <h1 className="md:w-1/2 text-center py-3 _textGold md:text-4xl text-2xl font-kalam-regular border-b _borderClassicBetween">
        candidate sign up, apply, get hired
      </h1>
      <div className="lg:w-1/3 space-y-5 border px-4 py-10 _borderClassicBetween rounded-xl shadow shadow-slate-800">
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
        <form ref={form} action={handleSubmit} className="w-full space-y-5">
          <div className="flex gap-2">
            <InputGroup
              id="firstName"
              text="First Name"
              placeholder="Shibu"
              name="firstname"
            />
            <InputGroup
              id="lastName"
              text="Last Name"
              placeholder="Dhara"
              name="lastname"
            />
          </div>
          <InputGroup
            id="email"
            text="Email id"
            placeholder="passiontocode.contact@gmail.com"
            autocomplete="off"
            name="user_email"
          />
          {isOTPSend && (
            <OTPInputField
              id="emailid"
              receiver={form.current
                .querySelector('input[name="user_email"]')
                .value.trim()}
              name="otp"
            />
          )}

          <div className="flex flex-col items-center pt-3 space-y-1">
            {!isOTPSend ? (
              <button
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold disabled:cursor-not-allowed"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            ) : (
              <button
                href={"/authentication/candidate/signin"}
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold text-center"
                type="submit"
              >
                Sign up
              </button>
            )}
            <Link
              href="/authentication/candidate/signin"
              className="hover:underline"
            >
              Already registerd? sign in
            </Link>
          </div>
        </form>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default PageSignup;
