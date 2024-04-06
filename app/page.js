import JobCard from "./ui/home/jobcard/JobCard";

export default function Home() {
  return (
    <main className="container mx-auto p-20 space-y-20">
      <div className="text-center font-kalam-regular space-y-5">
        <h2 className="_textGold text-5xl">Welcome to Acheiver</h2>
        <h3 className="text-xl border-t border-b _borderClassicBetween py-2 font-kalam-light">
          Achieve you dreams with us
        </h3>
        <h1 className="_textGold text-6xl">Apply, get hired, be happy</h1>
      </div>
      <div className="_textGold text-4xl flex justify-center gap-3 border-t border-b _borderClassicBetween py-5 font-kalam-light">
        <span>Do you</span>
        <button className="px-2 py-1 rounded-md _bgClassicBetween hover:_bgClassicSoft">
          want to hire
        </button>
        <span>or</span>
        <button className="px-2 py-1 rounded-md _bgClassicBetween hover:_bgClassicSoft">
          <span>want to be hired</span>
        </button>
        ?
      </div>
      <div className="space-y-5">
        <h2 className="font-anton-regular text-center text-3xl py-3  border-t border-b _borderClassicBetween">
          Latest posted jobs
        </h2>
        <div className="flex flex-col items-center space-y-5">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className="text-center">
          <button className="_bgGold hover:bgGoldSoft text-slate-950 font-anton-regular rounded px-5 py-2 text-xl">
            Let's start
          </button>
        </div>
      </div>
      <div>
        <h2 className="font-anton-regular text-center text-3xl py-3  border-t border-b _borderClassicBetween">
          Contact us
        </h2>
        <div className="text-center p-2">
          Pending
        </div>
      </div>
    </main>
  );
}
