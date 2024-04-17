import EmployerNavbar from "../ui/employer/navbar/EmployerNavbar";

const layout = ({ children }) => {
  return (
    <>
      <EmployerNavbar />
      {children}
    </>
  );
};

export default layout;
