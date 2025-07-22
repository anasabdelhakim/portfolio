import Header, {
  AvatarToolTip,
  Avtar,
  ButtonToggle,
  Logo,
  MobNavlinks,
  Navlinks,
} from "./Header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <div className="flex items-center gap-5">
          <Logo />
          <Navlinks />
        </div>

        <div className="flex items-center gap-2">
          <Avtar>
            <AvatarToolTip />
          </Avtar>
          <ButtonToggle />
        </div>
      </Header>
      <main className="flex-1">
        <Outlet />
        <MobNavlinks />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
