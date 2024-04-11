import NavbarRoutes from "@/components/NavbarRoutes";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className=" p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSideBar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
