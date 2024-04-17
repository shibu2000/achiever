const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-2 py-4 flex flex-col items-center gap-4 space-y-5">
      <div className="w-1/2 space-y-5">{children}</div>
    </div>
  );
};

export default Layout;
