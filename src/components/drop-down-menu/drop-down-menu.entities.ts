import { MatMenu } from '@angular/material/menu';

export interface treeOptions {
  main: string[];
  [key: string]: string[]
};

export interface Option {
  icon?: string;
  text?: string;
  event?: string;
}

export interface MenuConfig {
  icon: string;
  tree: treeOptions;
  options: { [key:string]: Option }
}

export interface MenuInstance {
  option: Option,
  subMenu?: MatMenu
}