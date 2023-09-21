import Themes from "./Themes";
import SidebarFunctionality from "./SidebarFunctionality";
const NavBar = () => {
  return (
    <div className="fixed top-0 text-skin-base bg-skin-main-color bg-opacity-95 py-3 lg:py-0 lg:pt-3 w-full px-4 font-medium flex justify-between lg:bg-opacity-30 lg:justify-end ">
      <SidebarFunctionality />
      <h1 className="text-xl lg:hidden">Ayush Patel ⚡️</h1>
      <Themes />
    </div>
  );
};

export default NavBar;
