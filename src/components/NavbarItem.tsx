import { IconType } from "react-icons";

interface Props {
  name: string;
  Icon: IconType;
}

const NavbarItem = ({name, Icon}: Props) => {
  return (
    <div className='navbar-menu-item'>
      <Icon />
      <h5>{name}</h5>
    </div>
  )
}

export default NavbarItem
