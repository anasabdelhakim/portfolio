import Header, { ButtonToggle, Logo, Navlinks } from "./Header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <div className="flex items-center gap-10">
          <Logo />
          <Navlinks />
        </div>

        <ButtonToggle />
      </Header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default layout;
