import { fetchJobs } from "@/app/lib/action/candidate";
import JobCard from "@/app/ui/candidate/jobcard/JobCard";
import LoadMore from "@/app/ui/candidate/loadMore/LoadMore";

const Jobs = async () => {
  const jobs = await fetchJobs();
  return (
    <div>
      <div className="container space-y-4 flex flex-col items-center">
        {jobs.map((job, index) => {
          return <JobCard key={index} job={job} />;
        })}
      </div>
      <LoadMore />
    </div>
  );
};

export default Jobs;
