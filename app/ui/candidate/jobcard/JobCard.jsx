import Image from "next/image";
import Link from "next/link";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdIosShare } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";

const JobCard = ({ path = "" }) => {
  const isSufficientCoin = false;
  return (
    <div className="border border-sky-950 p-4 space-y-2 rounded-lg md:w-2/3 relative">
      <div className="absolute text-lg flex items-center gap-2 bg-sky-950 px-2 py-1 rounded-lg right-4 top-4">
        <TbCoinRupee className="text-yellow-500" />
        <span>50</span>
      </div>
      <p className="text-3xl _textGold">Jr. Software Developer</p>
      <div className="font-sans flex gap-3 items-center">
        <Image
          src={"/avatar.png"}
          height={40}
          width={40}
          alt="company_logo"
          className="rounded-full"
        />
        <span className="text-xl">Tuespot</span>
      </div>
      <p className="font-mono">
        Location: 36 sarkar lane, sreemani market, Kolkata, 700007
      </p>
      <p>CTC/Stipend: 10000/month</p>
      <div>
        <h3>Experience Required:</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Good knowledge n SDLC</li>
          <li>Ability to work with the team members</li>
          <li>Manage work decipline and through the best out of knowledge</li>
        </ul>
      </div>
      <div className="px-2 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Link
            href={path}
            className="bg-sky-950 rounded-md p-2 flex items-center justify-center gap-2"
          >
            Apply <FaRegPenToSquare />
          </Link>
          {isSufficientCoin && (
            <p className="text-red-300 font-mono text-sm">
              Insuffieient coin to apply
            </p>
          )}
        </div>
        <div className="flex gap-5 text-2xl">
          <MdOutlineSaveAlt className="cursor-pointer" title="Save" />
          <MdIosShare className="cursor-pointer" title="Share" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;