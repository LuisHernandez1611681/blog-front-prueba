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
  article: Article;
}

export interface HeaderArticlesProps {
  typeSearch: string;
  setType: (campo: string) => void;
  setFilter: (criterio: string) => void;
}