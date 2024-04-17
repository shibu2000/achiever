"use client";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const AddNewDropdown = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="relative">
      <button
        className="px-2 py-1 _bgGold _textClassic hover:_bgGoldSoft rounded flex items-center justify-center gap-1"
        onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}
      >
        <IoMdAddCircleOutline />
        New post
      </button>
      {isClicked && (
        <button
          className="inset-0 fixed w-full h-full cursor-default"
          onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}
        ></button>
      )}
      {isClicked && (
        <Fade direction="up" duration={700}>
          <div className="absolute w-full mt-2 right-0 _bgClassicSoft rounded flex flex-col shadow-sm shadow-slate-800">
            <Link
              href="/employer/jobs/add-job"
              className="px-2 py-1 rounded hover:_bgClassicBetween"
            >
              Job
            </Link>
            <Link
              href="/employer/jobs/add-internship"
              className="px-2 py-1 rounded hover:_bgClassicBetween"
            >
              Internship
            </Link>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default AddNewDropdown;
