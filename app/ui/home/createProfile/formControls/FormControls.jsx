"use client";
import {
  MdOutlineArrowBackIos,
  MdOutlineNavigateNext,
  MdSaveAs,
} from "react-icons/md";
import Link from "next/link";

export const BackBtn = ({ path }) => {
  return (
    <Link href={path}>
      <button className="flex gap-2 items-center _bgGold rounded-full p-2 px-5">
        <MdOutlineArrowBackIos />
        Back
      </button>
    </Link>
  );
};

export const NextBtn = ({ path }) => {
  return (
    <Link href={path}>
      <button className="flex gap-2 items-center _bgGold rounded-full py-2 px-5">
        Next
        <MdOutlineNavigateNext />
      </button>
    </Link>
  );
};

export const SaveBtn = () => {
  return (
    <button
      className="flex gap-2 items-center _bgGold rounded-full py-2 px-5"
      type="submit"
    >
      Save
      <MdSaveAs />
    </button>
  );
};
