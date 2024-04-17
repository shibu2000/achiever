import IntroNavbar from "../ui/welcome/intro-navbar/IntroNavbar";

const Layout = ({ children }) => {
  return (
    <main>
      <IntroNavbar />
      {children}
    </main>
  );
};

export default Layout;
