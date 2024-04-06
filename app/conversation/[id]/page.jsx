import Image from "next/image";
import { MdSend } from "react-icons/md";

const Page = () => {
  return (
    <div
      className="w-2/3 border-s border-e border-b border-sky-950 mx-auto p-1 relative overflow-hidden"
      style={{ height: "90dvh" }}
    >
      <div className="border-b text-2xl border-sky-950 px-2 py-1 _textGold flex items-center gap-2 borde">
        <Image
          src={"/avatar.png"}
          height={50}
          width={50}
          className="rounded-full"
          alt="company_img"
        />
        <h1>Company Name</h1>
      </div>
      <div
        className="px-3 py-4 space-y-2  overflow-auto overflow-x-hidden scroll-smooth"
        style={{ height: "80%", scrollbarWidth: "none" }}
      >
        <div className="flex justify-start">
          <div className="max-w-96 text-justify border border-sky-950 p-2 rounded-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            laborum fuga dolorem recusandae saepe animi illum atque quam esse
            veritatis iusto necessitatibus a molestias, debitis quasi vero dicta
            voluptatum eius?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-96 text-justify border border-sky-950 p-2 rounded-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            laborum fuga dolorem recusandae saepe animi illum atque quam esse
            veritatis iusto necessitatibus a molestias, debitis quasi vero dicta
            voluptatum eius?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-96 text-justify border border-sky-950 p-2 rounded-xl">
            Lorem
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-96 text-justify border border-sky-950 p-2 rounded-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            laborum fuga dolorem recusandae saepe animi illum atque quam esse
            veritatis iusto necessitatibus a molestias, debitis quasi vero dicta
            voluptatum eius?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-96 text-justify border border-sky-950 p-2 rounded-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            laborum fuga dolorem recusandae saepe animi illum atque quam esse
            veritatis iusto necessitatibus a molestias, debitis quasi vero dicta
            voluptatum eius?
          </div>
        </div>
      </div>
      <div
        className="py-3 px-10 absolute bottom-0 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5, 22, 34, 0.3), rgba(5, 22, 34, 0.7), rgba(5, 22, 34, 1))",
        }}
      >
        <form action="" className="flex gap-3">
          <input
            type="text"
            className="flex-1 rounded-full _bgClassicSoft p-2 shadow-md shadow-slate-950 border-0 outline-0"
            placeholder="Enter you message here..."
          />
          <button
            type="submit"
            className="text-3xl border border-sky-950 rounded-full p-2 _textGold shadow-md shadow-slate-950"
          >
            <MdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
