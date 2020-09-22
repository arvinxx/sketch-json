import BrowserWindow from 'sketch-module-web-view';
import { UI } from 'sketch';
import { getWinURL } from '@/sketch/utils/windows';
import { winIdentifier } from './index';

let browserWindow: BrowserWindow = null;

const systemInfoWindow = () => {
  browserWindow = new BrowserWindow({
    alwaysOnTop: true,
    identifier: winIdentifier.SYSTEM_INFO,
    width: 240,
    height: 300,
    title: '系统信息',
    show: false,
    resizable: false,
    hidesOnDeactivate: false,
  });

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once('ready-to-show', () => {
    browserWindow.show();
  });

  const webContents = browserWindow.webContents;

  // add a handler for a call from web content's javascript
  webContents.on('nativeLog', (s: any) => {
    UI.message(s);
    webContents
      .executeJavaScript(`result(${JSON.stringify(s)})`)
      .catch(console.error);
  });

  browserWindow.loadURL(getWinURL('home'));
  return browserWindow;
};

export default systemInfoWindow;
