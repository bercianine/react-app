import { HiMiniUser, HiMiniPlay } from "react-icons/hi2";
import { MdColorLens } from "react-icons/md";
import { HiCommandLine } from "react-icons/hi2";
import NavbarItem from "./NavbarItem";
import displayLogo from "../assets/display-logo.png";
import lines from "../assets/lines.png";

const Navbar = () => {
  const menu = [
    { name:'All content', icon:HiMiniPlay },
    { name:'Design related', icon:MdColorLens },
    { name:'Development related', icon:HiCommandLine },
    { name:'Login', icon:HiMiniUser }
  ]

  return (
    <div className='navbar'>
      <div className='navbar-menu'>
        {menu.map((item) => (
          <NavbarItem name={item.name} Icon={item.icon}/>
        ))}
      </div>
      <img src={displayLogo} alt="Display" />
      <img src={lines} alt="Gradient" />
    </div>
  )
}

export default Navbar
