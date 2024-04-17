import JobCard from "@/app/ui/candidate/jobcard/JobCard";
import LoadMore from "@/app/ui/candidate/loadMore/LoadMore";

const Internships = () => {
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

export default Internships;
