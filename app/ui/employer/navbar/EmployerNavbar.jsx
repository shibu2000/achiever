"use client";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EmployerNavbar = () => {
  const pathname = usePathname();
  const homeType = pathname.split("/").pop();

  return (
    <nav className="p-1 _bgClassicSoft sticky top-0 z-50 shadow shadow-slate-500">
      <div className="container flex mx-auto items-center justify-around">
        <div className="text-center">
          <Link
            href="/employer"
            className="_textGold text-3xl font-kalam-regular"
          >
            Achiever-Employer
          </Link>
          <div className="text-xs text-right font-kalam-light">
            search the talent
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link
            href="/employer/posts"
            className={`_tabLinks ${
              homeType === "posts" ? "_tab-selected" : ""
            }`}
          >
            Posts
          </Link>
          <Link
            href="/employer/applications"
            className={`_tabLinks ${
              homeType === "applications" ? "_tab-selected" : ""
            }`}
          >
            Applications
          </Link>
          <Link
            href="/employer/sortlist"
            className={`_tabLinks ${
              homeType === "sortlist" ? "_tab-selected" : ""
            }`}
          >
            Sortlist
          </Link>
          <Link
            href="/employer/new-assessment"
            className={`_tabLinks ${
              homeType === "new-assessment" ? "_tab-selected" : ""
            }`}
          >
            New Assessment
          </Link>
        </div>
        <div className="flex gap-8 text-2xl items-center">
          <Link
            href="/employer/message"
            className={`p-2 rounded-full ${
              homeType === "message" ? "bg-slate-800" : ""
            }`}
          >
            <RiMessage3Fill className="cursor-pointer" />
          </Link>
          <Link
            href="/employer/notification"
            className={`p-2 rounded-full ${
              homeType === "notification" ? "bg-slate-800" : ""
            }`}
          >
            <IoMdNotifications className="cursor-pointer" />
          </Link>
          <Link
            href="/employer/profile"
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

export default EmployerNavbar;
