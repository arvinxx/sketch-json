import lessToJs from 'less-vars-to-js';
import path from 'path';
import fs from 'fs';

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './theme.less'), 'utf8')
);

export default themeVariables;
