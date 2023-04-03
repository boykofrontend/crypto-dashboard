import { FC } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const sidebarItems = [
  { name: "home", link: "/" },
  { name: "news", link: "/news" },
  { name: "carts", link: "/carts" },
  { name: "search", link: "/search" },
];

const Sidebar: FC<SidebarProps> = ({ mobileOpen, handleDrawerToggle }) => {
  const a = "";
  return (
    <div>
      {sidebarItems.map((item) => (
        <Link key={item.name} to={item.link}>
          {item.name}
        </Link>
      ))}
      <p>sidebar</p>
    </div>
  );
};

export default Sidebar;
