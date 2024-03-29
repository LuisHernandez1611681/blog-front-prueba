import { ReactNode } from "react";

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
  created_at: string;
  content: string;
}

export interface ArticleProps {
  article: Article;
}

export interface HeaderArticlesProps {
  typeSearch: string;
  setType: (campo: string) => void;
  setFilter: (criterio: string) => void;
}

export interface NetworkStatusProviderProps {
  children: ReactNode;
}