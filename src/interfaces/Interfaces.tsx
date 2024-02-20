export interface DrawerAppBarProps {
  window?: () => Window;
}

export interface DrawerContentProps {
  navTitle: string;
  navItems: { label: string, path: string }[];
  onDrawerToggle: () => void;
}

export interface Article {
  title: string;
  author: string;
  date: string;
  description: string;
}

export interface ArticleProps {
  articles: Article[]; 
}