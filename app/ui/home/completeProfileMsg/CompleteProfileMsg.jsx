"use client";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const CompleteProfileMsg = () => {
  const [closeMsg, setCloseMsg] = useState(true);
  if (closeMsg) {
    return (
      <div className="_bgGold p-1 text-slate-800 font-mono font-semibold text-center flex items-center sticky z-50 top-[3.8rem]">
        <div className="flex-1">
          Complete your peofile to earn coins. {"(5 % completed)"}
        </div>
        <button onClick={() => setCloseMsg(false)}>
          <MdClose />
        </button>
      </div>
    );
  }
};

export default CompleteProfileMsg;
