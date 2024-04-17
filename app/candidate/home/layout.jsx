import CompleteProfileMsg from "@/app/ui/candidate/completeProfileMsg/CompleteProfileMsg";
import Navbar from "@/app/ui/candidate/navbar/Navbar";
import Rightbar from "@/app/ui/candidate/rightbar/Rightbar";

const layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <CompleteProfileMsg />
      <section className="container mx-auto px-2 py-5 flex gap-1">
        <section className="" style={{ flex: 2 }}>
          {children}
        </section>
        <section className=" hidden md:block" style={{ flex: 1 }}>
          <Rightbar />
        </section>
      </section>
    </main>
  );
};

export default layout;
