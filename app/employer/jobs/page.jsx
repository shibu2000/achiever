import { fetchJobs } from "@/app/lib/action/candidate";
import LoadMore from "@/app/ui/candidate/loadMore/LoadMore";
import JobPostCard from "@/app/ui/employer/jobs/JobPostCard";
import AddNewDropdown from "@/app/ui/employer/jobs/addNewDropdown/AddNewDropdown";
import { RiFilter2Fill } from "react-icons/ri";

const Post = async () => {
  const jobs = await fetchJobs();
  return (
    <div className="p-2">
      <div className="flex items-center justify-around p-1 _bgClassicBetween">
        <button className="px-2 py-1 _bgGold _textClassic hover:_bgGoldSoft rounded flex items-center gap-1">
          <RiFilter2Fill />
          Filter
        </button>
        <AddNewDropdown />
      </div>
      {jobs.length > 0 ? (
        <div className="container mx-auto p-10">
          <div className="flex flex-wrap">
            {jobs.map((job, index) => {
              return <JobPostCard key={index} job={job} />;
            })}
          </div>
          <LoadMore />
        </div>
      ) : (
        <div className="text-center p-24 text-xl uppercase">
          No data found!! Post a new job
        </div>
      )}
    </div>
  );
};

export default Post;
