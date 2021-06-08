import { Menu, BrowserWindow, MenuItemConstructorOptions } from 'electron';

import buildAboutSubMenu from './buildAboutSubMenu';
import buildEditSubMenu from './buildEditSubMenu';
import buildViewSubMenu from './buildViewSubMenu';
import buildWindowSubMenu from './buildWindowSubMenu';
import buildHelpSubMenu from './buildHelpSubMenu';
import buildFileSubMenu from './buldFileSubMenu';

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  locale: string;

  constructor(locale: string, mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
    this.locale = locale;
  }

  buildMenu(): Menu {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment();
    }

    const template =
      process.platform === 'darwin'
        ? this.buildDarwinTemplate()
        : this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment(): void {
    this.mainWindow.webContents.on('context-menu', (_, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click: () => {
            this.mainWindow.webContents.inspectElement(x, y);
          },
        },
      ]).popup({ window: this.mainWindow });
    });
  }

  buildDarwinTemplate(): MenuItemConstructorOptions[] {
    return [
      buildAboutSubMenu(this.locale),
      buildEditSubMenu(this.locale),
      buildViewSubMenu(this.locale, this.mainWindow),
      buildWindowSubMenu(this.locale),
      buildHelpSubMenu(this.locale),
    ];
  }

  buildDefaultTemplate(): MenuItemConstructorOptions[] {
    return [
      buildFileSubMenu(this.locale, this.mainWindow),
      buildViewSubMenu(this.locale, this.mainWindow),
      buildHelpSubMenu(this.locale),
    ];
  }
}
