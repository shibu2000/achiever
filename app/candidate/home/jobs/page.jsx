import JobCard from "@/app/ui/candidate/jobcard/JobCard";
import LoadMore from "@/app/ui/candidate/loadMore/LoadMore";

const Jobs = () => {
  return (
    <div>
      <div className="container space-y-4 flex flex-col items-center">
        <JobCard path="/candidate/home/jobs/details?id=1234567" />
        <JobCard path="/candidate/home/jobs/details?id=1234567" />
      </div>
      <LoadMore />
    </div>
  );
};

export default Jobs;
