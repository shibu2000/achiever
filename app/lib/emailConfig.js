import nodemailer from "nodemailer";

const sendMail = async ({ firstname, email, otp, type }) => {
  const { GMAIL_USERNAME, GMAIL_PASSWORD } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USERNAME,
      pass: GMAIL_PASSWORD,
    },
  });
  try {
    const res = await transport.sendMail({
      from: `"Achiever" <${GMAIL_USERNAME}>`,
      to: email,
      subject: "Achiever registration OTP",
      html: `
      <div style="background-color:rgb(5, 22, 34); padding:1rem; width:75%;margin:0 auto; color:rgb(185, 216, 215)">
          <h1>Hi ${firstname}</h1>
          <h2 style="text-align:center; border:1px solid rgb(211, 177, 140); padding:0.5rem">Your ${type} OTP is ${otp}</h2>
          <h2>Valid for only 5 minutes.</h2>
          <p>Thank you</p>
          <p>Achiever team</p>
      </div>
      `,
    });
  } catch (e) {
    console.log(e);
  }
};

export default sendMail;
