import Link from "next/link";

const MessageCard = () => {
  const str =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis praesentium voluptate non quae, eveniet suscipit fuga similique quaerat qui ut at nihil quisquam blanditiis distinctio. Quaerat aliquid impedit eos.";
  return (
    <Link
      href="/candidate/conversation/test"
      className="w-2/3 border p-2 rounded-xl border-sky-950"
    >
      <h2 className="text-2xl _textGold border-b border-sky-950 py-1">
        Tuespot
      </h2>
      <p className="py-1">
        {str.length > 130 ? str.slice(0, 130) + "..." : str}
      </p>
    </Link>
  );
};

export default MessageCard;
