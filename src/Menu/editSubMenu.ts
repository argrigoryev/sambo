import { IDarwinMenuItemConstructorOptions } from './interfaces';
import { MenuStrings } from '../Strings/strings';

const editSubMenu: IDarwinMenuItemConstructorOptions = {
  label: MenuStrings.edit_command,
  submenu: [
    {
      label: MenuStrings.undo_command,
      accelerator: 'Command+Z',
      selector: 'undo:',
    },
    {
      label: MenuStrings.redo_command,
      accelerator: 'Shift+Command+Z',
      selector: 'redo:',
    },
    { type: 'separator' },
    {
      label: MenuStrings.cut_command,
      accelerator: 'Command+X',
      selector: 'cut:',
    },
    {
      label: MenuStrings.copy_command,
      accelerator: 'Command+C',
      selector: 'copy:',
    },
    {
      label: MenuStrings.paste_command,
      accelerator: 'Command+V',
      selector: 'paste:',
    },
    {
      label: MenuStrings.select_all_command,
      accelerator: 'Command+A',
      selector: 'selectAll:',
    },
  ],
};

export default editSubMenu;
