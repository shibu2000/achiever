import { CiEdit } from "react-icons/ci";
import Link from "next/link";

const JobPostCard = ({ job }) => {
  return (
    <div className="px-4 py-4 w-1/4">
      <Link href="">
        <div className="border _borderClassicBetween shadow-sm shadow-slate-500 space-y-3 p-2">
          <h1 className="_textGold text-2xl">{job.jobrole}</h1>
          <h2>Posted: {job.createdAt.toString().slice(0, 15)}</h2>
          <h2>No. of application: 200</h2>
        </div>
      </Link>
    </div>
  );
};

export default JobPostCard;
