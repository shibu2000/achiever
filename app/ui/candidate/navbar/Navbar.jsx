"use client";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GiTwoCoins } from "react-icons/gi";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const homeType = pathname.split("/").pop();

  return (
    <nav className="p-1 _bgClassicSoft sticky top-0 z-50">
      <div className="container flex mx-auto items-center justify-center">
        <div className="text-center">
          <Link
            href="/candidate/home"
            className="_textGold text-3xl font-kalam-regular"
          >
            Achiever
          </Link>
          <div className="text-xs text-right font-kalam-light">
            achieve your dream
          </div>
        </div>

        <div className="flex-1 flex justify-center gap-3 text-xl cursor-pointer">
          <Link
            href="/candidate/home/internships"
            className={`p-2 ${
              homeType === "internships" ? "border-b" : ""
            } border-sky-200`}
          >
            Internships
          </Link>
          <Link
            href="/candidate/home/jobs"
            className={`p-2 ${
              homeType === "jobs" ? "border-b" : ""
            } border-sky-200`}
          >
            Jobs
          </Link>
          <Link
            href="/candidate/home/courses"
            className={`p-2 ${
              homeType === "courses" ? "border-b" : ""
            } border-sky-200`}
          >
            Courses
          </Link>
        </div>

        <div className="flex gap-8 text-2xl items-center">
          <div className="flex gap-3 items-center text-amber-400">
            <GiTwoCoins /> <span className="text-lg">150</span>
          </div>

          <Link
            href="/candidate/home/message"
            className={`p-2 rounded-full ${
              homeType === "message" ? "bg-slate-800" : ""
            }`}
          >
            <RiMessage3Fill className="cursor-pointer" />
          </Link>
          <Link
            href="/candidate/home/notification"
            className={`p-2 rounded-full ${
              homeType === "notification" ? "bg-slate-800" : ""
            }`}
          >
            <IoMdNotifications className="cursor-pointer" />
          </Link>
          <Link
            href="/candidate/profile"
            className={`p-2 rounded-full ${
              homeType === "profile" ? "bg-slate-800" : ""
            }`}
          >
            <CgProfile className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
