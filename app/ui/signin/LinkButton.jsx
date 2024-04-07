"use client";
import Link from "next/link";
const LinkButton = ({ path = "", text }) => {
  return (
    <Link href={path}>
      <button className="px-2 py-1 rounded-md _bgClassicBetween hover:_bgClassicSoft">
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
