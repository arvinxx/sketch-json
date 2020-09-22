const name =
  'Sketch Plugin Template' + process.env.NODE_ENV === 'development'
    ? ' DEV'
    : '';
module.exports = {
  compatibleVersion: 3,
  bundleVersion: 1,
  name,
  homepage:
    'https://github.com/arvinxx/sketch-plugin-skpm-umi-typescript-example',
  identifier:
    process.env.NODE_ENV === 'development'
      ? 'sketch-plugin-template.dev'
      : 'sketch-plugin-template',

  icon: 'icons/logo.png',
  commands: [
    {
      name: 'Plugin Info',
      identifier: 'sketch-plugin-template.system-info',
      script: './app.ts',
      handler: 'systemInfo',
    },
  ],
  menu: {
    title: name,
    items: ['-', 'sketch-plugin-template.system-info'],
  },
};
