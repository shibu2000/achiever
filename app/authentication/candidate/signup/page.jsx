"use client";
import { IoLogoGoogle } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { useRef, useState } from "react";
import DividerWithText from "@/app/ui/signin/DividerWithText";
import Link from "next/link";
import OTPInputField from "@/app/ui/formFields/OTPInputField";
import { InputGroup } from "@/app/ui/formFields/InputFields";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generateOTP } from "@eternaljs/otp-generator";

const PageSignup = () => {
  const [isOTPSend, setIsOTPSend] = useState(false);
  const [otp, setOtp] = useState("");

  const form = useRef();
  //Regex for email validation
  const EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);

  const handleSendOTP = async (e) => {
    e.preventDefault(e);

    let isFirstname = false;
    let isEmail = false;

    const firstname = form.current
      .querySelector('input[name="firstname"]')
      .value.trim();
    const email = form.current
      .querySelector('input[name="user_email"]')
      .value.trim();

    firstname.length === 0
      ? toast.error("First name can't be empty")
      : (isFirstname = true);
    EMAIL_REGEX.test(email)
      ? (isEmail = true)
      : toast.error("Enter valid email");

    console.log(email);

    setOtp(() => generateOTP(6));

    const data = {
      service_id: "YOUR_SERVICE_ID",
      template_id: "YOUR_TEMPLATE_ID",
      user_id: "YOUR_PUBLIC_KEY",
      template_params: {
        firstname,
        email,
        otp,
      },
    };
    isEmail &&
      isFirstname &&
      (await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: data,
      }).then(
        (res) => {
          console.log("hello");
          console.log(res);
        },
        (error) => {}
      ));

    // isEmail &&
    //   isFirstname &&
    //   emailjs
    //     .sendForm(
    //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    //       form.current,
    //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    //     )
    //     .then(
    //       (res) => {
    //         console.log(res);
    //         toast.success("OTP send successful");
    //         setIsOTPSend(true);
    //       },
    //       (error) => {
    //         toast.error(`Try again...${error.text}`);
    //       }
    //     );
  };

  const handleSubmit = (formData) => {
    // console.log(formData);
    // const submit = fetch("/api/authenticate/candidate/signup", {
    //   method: "POST",
    // });
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
        <form ref={form} className="w-full space-y-5" onSubmit={handleSubmit}>
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
          <input type="hidden" name="otp" defaultValue={otp} />
          {isOTPSend && (
            <OTPInputField
              id="emailid"
              disable={true}
              receiver="xyz@email.com"
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
              <Link
                href={"/authentication/candidate/signin"}
                className="w-1/2 py-2 _bgGold hover:_bgGoldSoft _textClassic rounded-lg font-bold text-center"
              >
                <button type="submit">Sign up</button>
              </Link>
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
