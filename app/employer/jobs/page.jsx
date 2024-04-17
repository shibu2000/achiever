import LoadMore from "@/app/ui/candidate/loadMore/LoadMore";
import JobPostCard from "@/app/ui/employer/jobs/JobPostCard";
import AddNewDropdown from "@/app/ui/employer/jobs/addNewDropdown/AddNewDropdown";

import { IoMdAddCircleOutline } from "react-icons/io";
import { RiFilter2Fill } from "react-icons/ri";

const Post = () => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-around p-1 _bgClassicBetween">
        <button className="px-2 py-1 _bgGold _textClassic hover:_bgGoldSoft rounded flex items-center gap-1">
          <RiFilter2Fill />
          Filter
        </button>
        <AddNewDropdown />
      </div>
      <div className="container mx-auto p-10 flex flex-wrap">
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
        <JobPostCard />
      </div>
      <LoadMore />
    </div>
  );
};

export default Post;
