"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const IntroNavbar = () => {
  const pathname = usePathname();
  const isEmployer = pathname.includes("/employer");
  return (
    <nav className="p-1 _bgClassicSoft sticky top-0 z-50 flex items-center justify-around">
      <div className="select-none">
        <h2 className="_textGold text-3xl font-kalam-regular">
          {isEmployer ? "Achiever-Empoyer" : "Achiever"}
        </h2>
        <div className="text-xs font-kalam-light text-right">
          {isEmployer ? "search the talent" : "achieve your dream"}
        </div>
      </div>
      <div className="space-x-5 font-anton-regular">
        <Link href="/authentication/candidate/signin">
          <button className="_bgGoldBtn">Candidate login</button>
        </Link>
        <Link href="/authentication/employer/signin">
          <button className="_bgGoldBtn">Employer login</button>
        </Link>
      </div>
    </nav>
  );
};

export default IntroNavbar;
