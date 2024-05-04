"use client";
import { Fade } from "react-awesome-reveal";

const OTPInputField = ({ id, receiver = "", name = "" }) => {
  return (
    <div className="space-y-1">
      <Fade cascade damping={0.5} triggerOnce>
        <div className="input-group w-2/4 mx-auto text-center">
          <input
            id={id}
            type="text"
            className={`input-field text-center letter-spacing-05`}
            placeholder="OTP"
            name={name}
          />
        </div>
        {receiver && (
          <p className="text-xs text-center font-mono _textGold">
            OTP send to {receiver}
          </p>
        )}
      </Fade>
    </div>
  );
};

export default OTPInputField;
