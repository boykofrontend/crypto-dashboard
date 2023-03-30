import { FC } from "react";

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const sidebarItems = ["news", "carts", "search"];

const Sidebar: FC<SidebarProps> = ({ mobileOpen, handleDrawerToggle }) => (
  <div>sidebar</div>
);

export default Sidebar;
