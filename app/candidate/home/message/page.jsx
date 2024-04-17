import LoadMore from "@/app/ui/candidate/loadMore/LoadMore";
import MessageCard from "@/app/ui/candidate/message/MessageCard";

const Message = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-5 p-1">
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
      <LoadMore />
    </div>
  );
};

export default Message;
