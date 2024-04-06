import JobCard from "@/app/ui/home/jobcard/JobCard";
import LoadMore from "@/app/ui/home/loadMore/LoadMore";

const Jobs = () => {
  return (
    <div>
      <div className="container space-y-4 flex flex-col items-center">
        <JobCard />
        <JobCard />
      </div>
      <LoadMore />
    </div>
  );
};

export default Jobs;
