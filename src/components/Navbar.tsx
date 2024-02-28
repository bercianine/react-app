import { HiMiniUser, HiBookmark } from "react-icons/hi2";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const menu = [
    { name:'My Lists', icon:HiBookmark },
    { name:'Login', icon:HiMiniUser }
  ]

  return (
    <div className='navbar'>
      <h1>🍿 Get Popin'</h1>
      <div className='navbar-menu'>
        {menu.map((item) => (
          <NavbarItem name={item.name} Icon={item.icon}/>
        ))}
      </div>
    </div>
  )
}

export default Navbar
