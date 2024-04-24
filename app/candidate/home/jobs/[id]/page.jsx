import Image from "next/image";
import { MdMyLocation } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { TbCoinRupee } from "react-icons/tb";
import { fetchJobById } from "@/app/lib/action/candidate";

const Page = async ({ params }) => {
  const job = await fetchJobById(params.id);

  function createList(list) {
    return list
      .replace("/eop", "")
      .split("#")
      .map((data, index) => {
        return <li key={index}>{data}</li>;
      });
  }

  var jobDetailsList;
  if (job.job_details.startsWith("/ul")) {
    let jobDetails = job.job_details.replace("/ul", "").replace("ul/", "");
    jobDetailsList = <ul className="list-disc">{await createList(jobDetails)}</ul>;
  } else {
    let jobDetails = job.job_details.replace("/ol", "").replace("ol/", "");
    jobDetailsList = <ol className="list-decimal">{await createList(jobDetails)}</ol>;
  }

  var otherReqList;
  if (job.other_req.startsWith("/ul")) {
    let otherReq = job.other_req.replace("/ul", "").replace("ul/", "");
    otherReqList = <ul className="list-disc">{await createList(otherReq)}</ul>;
  } else {
    let otherReq = job.other_req.replace("/ol", "").replace("ol/", "");
    otherReqList = <ol className="list-decimal">{await createList(otherReq)}</ol>;
  }

  return (
    <div className="w-10/12 mx-auto p-2">
      <div className="flex justify-between pb-2 border-b border-sky-950">
        <div className="space-y-1">
          <h2 className="text-3xl _textGold">{job.jobrole}</h2>
          <div className="flex items-center gap-2">
            <RiBuilding2Line />
            <span className="text-lg">{"Demo"}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdMyLocation />
            <span className="text-lg">{job.job_loc}</span>
          </div>
        </div>
        <div>
          <Image
            className="border rounded-full border-sky-950"
            src={"/avatar.png"}
            height={100}
            width={100}
            alt="company_image"
          />
        </div>
      </div>
      <div className="container py-2 space-y-7">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xs _bgClassicSoft p-1 px-2 rounded-full">
            <MdOutlineAccessTime />
            <span>Posted on : {job.createdAt.toString().slice(0, 15)}</span>
          </div>
          <div className="flex items-center gap-2 text-xs _bgClassicSoft p-1 px-2 rounded-full">
            <TbCoinRupee className="text-yellow-500" />
            <span>50</span>
          </div>
        </div>
        {/* Skills section */}
        <div>
          <div className="space-y-3">
            <div className="_bgClassicSoft flex items-center gap-2 px-2 py-1 rounded-full justify-center">
              <GiBrain />
              <h2>Skills required</h2>
            </div>
            <div className="flex justify-center gap-5 text-xs">
              {job.skills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    className="_bgGold px-3 py-1 rounded-full text-zinc-800 font-bold"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills section ends && About the job section start*/}

        <div className="space-y-3">
          <div className="_bgClassicSoft flex px-2 py-1 rounded-full justify-center">
            <h2>Job details</h2>
          </div>
          <div className="px-2 md:px-16">{jobDetailsList}</div>
        </div>

        {/* About the job section ends here && experience section starts*/}

        <div className="_bgClassicSoft px-2 py-1 rounded-full">
          Experience : {job.experience}
        </div>

        {/*  Experience section ends && job type starts */}

        <div className="_bgClassicSoft px-2 py-1 rounded-full">
          Job type : {job.job_type}
        </div>

        {/* job type section ends && other requirements section starts */}

        <div className="space-y-3">
          <div className="_bgClassicSoft flex px-2 py-1 rounded-full justify-center">
            <h2>Other requirements</h2>
          </div>
          <div className="px-2 md:px-16">{otherReqList}</div>
        </div>
        {/* other requirements section ends && accomodation starts*/}
        <div className="_bgClassicSoft px-2 py-1 rounded-full">
          Accomodation : {job.accomodation}
        </div>
        {/* accomodation section ends here */}

        {/* Apply Button */}
        <div className="text-center">
          <button className="_bgGold text-zinc-900 px-10 py-2 rounded-full font-semibold">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
