import Image from "next/image";
import Link from "next/link";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdIosShare } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import { TbCoinRupee } from "react-icons/tb";

const JobCard = async ({ job }) => {
  const isSufficientCoin = false;

  function createList(list) {
    const newList = list.replace("/eop", "").split("#");
    const jobDetList = [];
    for (let i = 0; i < 3; i++) {
      jobDetList.push(<li key={i}>{newList[i]}</li>);
    }
    return jobDetList;
  }

  var jobDetailsList;
  if (job.job_details.startsWith("/ul")) {
    let jobDetails = job.job_details.replace("/ul", "").replace("ul/", "");
    jobDetailsList = (
      <ul className="list-disc list-inside text-sm">
        {createList(jobDetails)}
      </ul>
    );
  } else {
    let jobDetails = job.job_details.replace("/ol", "").replace("ol/", "");
    jobDetailsList = (
      <ol className="list-disc list-inside text-sm">
        {createList(jobDetails)}
      </ol>
    );
  }
  return (
    <div className="border border-sky-950 p-4 space-y-2 rounded-lg md:w-2/3 relative">
      <div className="absolute text-lg flex items-center gap-2 bg-sky-950 px-2 py-1 rounded-lg right-4 top-4">
        <TbCoinRupee className="text-yellow-500" />
        <span>50</span>
      </div>
      <p className="text-3xl _textGold">{job.jobrole}</p>
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
      <p className="font-mono">Location: {job.job_loc}</p>
      <p>CTC: {job.salary}</p>
      <div>
        <h3>Experience Required: {job.experience}</h3>
        {jobDetailsList}
      </div>
      <div className="px-2 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Link
            href={`/candidate/home/jobs/${job.id}`}
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
      <h6 className="text-xs text-slate-400">
        Posted on: {job.createdAt.toString().slice(0, 15)}
      </h6>
    </div>
  );
};

export default JobCard;
