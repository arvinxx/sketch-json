const source = [
  // menu,
  // layout,
  // menu,
  // settingDrawer,
  // pwa,
  // user,
  // component,
  // errors,
  // login,
  // header,
  // register,
  // user,
  // component,
  // order,
];

const locales = {
  // 'app.miscellaneous.agree': '我已阅读并同意',
  // 'app.miscellaneous.privacy': '隐私政策',
  // 'app.miscellaneous.services': '服务协议',
  // 'app.miscellaneous.and': '和',
};

source.forEach((i) => Object.assign(locales, i));
export default locales;
