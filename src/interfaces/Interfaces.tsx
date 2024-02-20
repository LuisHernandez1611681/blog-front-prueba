export interface DrawerAppBarProps {
  window?: () => Window;
}

export interface DrawerContentProps {
  navTitle: string;
  navItems: { label: string, path: string }[];
  onDrawerToggle: () => void;
}