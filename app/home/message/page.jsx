import LoadMore from "@/app/ui/home/loadMore/LoadMore";
import MessageCard from "@/app/ui/home/message/MessageCard";

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
