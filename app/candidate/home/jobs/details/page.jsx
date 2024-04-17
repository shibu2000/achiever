import Image from "next/image";
import { MdMyLocation } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { TbCoinRupee } from "react-icons/tb";

const Page = () => {
  return (
    <div className="w-10/12 mx-auto p-2">
      <div className="flex justify-between pb-2 border-b border-sky-950">
        <div className="space-y-1">
          <h2 className="text-3xl _textGold">Jr. Software Developer</h2>
          <div className="flex items-center gap-2">
            <RiBuilding2Line />
            <span className="text-lg">Tuespot pvt. ltd.</span>
          </div>
          <div className="flex items-center gap-2">
            <MdMyLocation />
            <span className="text-lg">Mohali, Panjub</span>
          </div>
        </div>
        <div>
          <Image
            className="border rounded-full border-sky-950"
            src={"/avatar.png"}
            height={100}
            width={100}
          />
        </div>
      </div>
      <div className="container py-2 space-y-7">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xs _bgClassicSoft p-1 px-2 rounded-full">
            <MdOutlineAccessTime />
            <span>Posted on : 1 day ago</span>
          </div>
          <div className="flex items-center gap-2 text-xs _bgClassicSoft p-1 px-2 rounded-full">
            <TbCoinRupee className="text-yellow-500" />
            <span>50</span>
          </div>
        </div>
        {/* Skills section */}
        <div>
          <div className="space-y-3">
            <div className="_bgClassicSoft flex items-center gap-2 px-2 py-1 rounded-full justify-center">
              <GiBrain />
              <h2>Skills required</h2>
            </div>
            <div className="flex justify-center gap-5 text-xs">
              <span className="_bgGold px-3 py-1 rounded-full text-zinc-800 font-bold">
                demo
              </span>
              <span className="_bgGold px-3 py-1 rounded-full text-zinc-800 font-bold">
                demo
              </span>
              <span className="_bgGold px-3 py-1 rounded-full text-zinc-800 font-bold">
                demo
              </span>
              <span className="_bgGold px-3 py-1 rounded-full text-zinc-800 font-bold">
                demo
              </span>
              <span className="_bgGold px-3 py-1 rounded-full text-zinc-800 font-bold">
                demo
              </span>
            </div>
          </div>
        </div>

        {/* Skills section ends && About the job section start*/}

        <div className="space-y-3">
          <div className="_bgClassicSoft flex px-2 py-1 rounded-full justify-center">
            <h2>Job details</h2>
          </div>
          <div className="px-2 md:px-16">
            <ul>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                suscipit omnis neque error autem nostrum aperiam laborum
                commodi, modi dicta doloremque nobis nisi saepe, corrupti iusto
                quo exercitationem! Non, inventore.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                suscipit omnis neque error autem nostrum aperiam laborum
                commodi, modi dicta doloremque nobis nisi saepe, corrupti iusto
                quo exercitationem! Non, inventore.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                suscipit omnis neque error autem nostrum aperiam laborum
                commodi, modi dicta doloremque nobis nisi saepe, corrupti iusto
                quo exercitationem! Non, inventore.
              </li>
            </ul>
          </div>
        </div>

        {/* About the job section ends here && experience section starts*/}

        <div className="_bgClassicSoft px-2 py-1 rounded-full">
          Experience : {"fresher"}
        </div>

        {/*  Experience section ends && job type starts */}

        <div className="_bgClassicSoft px-2 py-1 rounded-full">
          Job type : {"full time"}
        </div>

        {/* job type section ends && other requirements section starts */}

        <div className="space-y-3">
          <div className="_bgClassicSoft flex px-2 py-1 rounded-full justify-center">
            <h2>Other requirements</h2>
          </div>
          <div className="px-2 md:px-16">
            <ul>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                suscipit omnis neque error autem nostrum aperiam laborum
                commodi, modi dicta doloremque nobis nisi saepe, corrupti iusto
                quo exercitationem! Non, inventore.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                suscipit omnis neque error autem nostrum aperiam laborum
                commodi, modi dicta doloremque nobis nisi saepe, corrupti iusto
                quo exercitationem! Non, inventore.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                suscipit omnis neque error autem nostrum aperiam laborum
                commodi, modi dicta doloremque nobis nisi saepe, corrupti iusto
                quo exercitationem! Non, inventore.
              </li>
            </ul>
          </div>
        </div>
        {/* other requirements section ends && accomodation starts*/}
        <div className="_bgClassicSoft px-2 py-1 rounded-full">
          Accomodation : {"no"}
        </div>
        {/* accomodation section ends here */}

        {/* Apply Button */}
        <div className="text-center">
          <button className="_bgGold text-zinc-900 px-10 py-2 rounded-full font-semibold">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
