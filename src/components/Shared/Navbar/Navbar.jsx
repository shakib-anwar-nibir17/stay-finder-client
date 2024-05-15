import Container from "../Container";
import MenuDropdown from "./MenuDropdown";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <NavLogo />
            {/* NavMenus */}
            <NavMenu />
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
