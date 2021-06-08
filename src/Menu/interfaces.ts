import { Menu, MenuItemConstructorOptions } from 'electron';

export interface IDarwinMenuItemConstructorOptions
  extends MenuItemConstructorOptions {
  selector?: string;
  submenu?: IDarwinMenuItemConstructorOptions[] | Menu;
}
