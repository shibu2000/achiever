import { fetchJobs, fetchInternships } from "@/app/lib/action/candidate";
import LoadMore from "@/app/ui/candidate/loadMore/LoadMore";
import PostCard from "@/app/ui/employer/posts/PostCard";
import AddNewDropdown from "@/app/ui/employer/posts/AddNewDropdown";
import Filter from "@/app/ui/employer/posts/Filter";

const Posts = async () => {
  const jobs = await fetchJobs();
  const internships = await fetchInternships();
  return (
    <div className="p-2">
      <div className="flex items-center justify-around p-1 _bgClassicBetween">
        <Filter />
        <AddNewDropdown />
      </div>
      {jobs.length > 0 ? (
        <div className="container mx-auto p-10">
          <div className="flex flex-wrap">
            {jobs.map((job, index) => {
              return <PostCard key={index} job={job} />;
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

export default Posts;
