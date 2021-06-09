import { IDarwinMenuItemConstructorOptions } from './interfaces';
import Strings from '../Strings/strings';

function buildEditSubMenu(locale: string): IDarwinMenuItemConstructorOptions {
  return {
    label: Strings.getMenuStrings(locale).edit_command,
    submenu: [
      {
        label: Strings.getMenuStrings(locale).undo_command,
        accelerator: 'Command+Z',
        selector: 'undo:',
      },
      {
        label: Strings.getMenuStrings(locale).redo_command,
        accelerator: 'Shift+Command+Z',
        selector: 'redo:',
      },
      { type: 'separator' },
      {
        label: Strings.getMenuStrings(locale).cut_command,
        accelerator: 'Command+X',
        selector: 'cut:',
      },
      {
        label: Strings.getMenuStrings(locale).copy_command,
        accelerator: 'Command+C',
        selector: 'copy:',
      },
      {
        label: Strings.getMenuStrings(locale).paste_command,
        accelerator: 'Command+V',
        selector: 'paste:',
      },
      {
        label: Strings.getMenuStrings(locale).select_all_command,
        accelerator: 'Command+A',
        selector: 'selectAll:',
      },
    ],
  };
}

export default buildEditSubMenu;
