export interface Option {
  id: string;
  icon?: string;
  text?: string;
  options?: Option[]
}

export interface MenuConfig {
  id: string;
  icon: string;
  options: Option[]
}