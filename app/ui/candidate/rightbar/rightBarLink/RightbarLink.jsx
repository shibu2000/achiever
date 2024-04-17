"use client"
import Link from "next/link";
import { MdBusinessCenter } from "react-icons/md";

const RightbarLink = () => {
  return (
    <div className="flex items-center py-1 gap-2">
      <MdBusinessCenter />
      <Link href="/">Lorem ipsum dolor sit amet consectetur</Link>
    </div>
  );
};

export default RightbarLink;
