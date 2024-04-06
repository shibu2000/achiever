import CompleteProfileMsg from "../ui/home/completeProfileMsg/CompleteProfileMsg";
import Rightbar from "../ui/home/rightbar/Rightbar";

const layout = ({ children }) => {
  return (
    <main>
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
