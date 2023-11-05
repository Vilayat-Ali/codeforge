// icons
import {MdMenu, MdMenuOpen} from "react-icons/md"

const Navbar = () => {
  return (
    <nav className="flex flex-row w-[100vw] p-2 bg-black justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl">Logo</h1>
        {/* Logo */}

        {/* Desktop */}
        <div className="hidden md:flex w-[20vw] flex-row items-center justify-around">
            <div className="text-gray-200 hover:text-white cursor-pointer my-2">Option 1</div>
            <div className="text-gray-200 hover:text-white cursor-pointer my-2">Option 1</div>
            <div className="text-gray-200 hover:text-white cursor-pointer my-2">Option 1</div>
        </div>
        {/* Desktop */}

        {/* Hamburger */}
        <div className={"block md:hidden"}>
            <MdMenu className="text-xl text-white" />
        </div>
        {/* Hamburger */}

    </nav>
  )
}

export default Navbar