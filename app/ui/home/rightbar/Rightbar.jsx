import Link from "next/link";
import RightbarLink from "./rightBarLink/RightbarLink";
import style from "./rightbar.module.css";

const Rightbar = () => {
  return (
    <div className="border border-sky-950 rounded-md px-2 py-5 static md:sticky md:top-20">
      <div className="py-3">
        <form action="" className="flex flex-col items-center gap-5">
          <input
            type="text"
            name="search"
            placeholder="Enter job/company name to search"
            className="w-10/12 rounded-full p-2 _bgClassicSoft"
          />
          <button type="submit" className="bg-sky-950 w-2/5 p-2 rounded-md">
            SEARCH
          </button>
        </form>
      </div>
      <h3 className="text-center border-t border-b border-sky-950 p-3 text-2xl">
        Quick Links
      </h3>
      <div
        className={`${style.quickLinks} flex flex-wrap justify-center p-3 py-4 gap-3`}
      >
        <span>
          <Link href="">Applied Jobs</Link>
        </span>
        <span>
          <Link href="">Councelling</Link>
        </span>
        <span>
          <Link href="">Hero Course</Link>
        </span>
        <span>
          <Link href="">Hero Course</Link>
        </span>
        <span>
          <Link href="">Applied Jobs</Link>
        </span>
      </div>
      <div className="space-y-5 flex flex-col">
        <h3 className="border-t border-b border-sky-950 text-2xl text-center py-3">
          Trending Jobs
        </h3>
        <div className="px-5">
          <ul>
            <li>
              <RightbarLink />
            </li>
            <li>
              <RightbarLink />
            </li>
            <li>
              <RightbarLink />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
