const name = 'Sketch JSON';

module.exports = {
  compatibleVersion: 3,
  bundleVersion: 1,
  name,
  homepage: 'https://github.com/arvinxx/sketch-json',
  identifier: 'sketch-json',
  icon: 'icons/logo.png',
  commands: [
    {
      name: 'Paste Sketch JSON',
      identifier: 'sketch-json.paste-as-json',
      script: './app.ts',
      shortcut: 'ctrl alt v',
      handler: 'pasteSketchJSON',
    },
  ],
  menu: {
    title: name,
    items: ['-', 'sketch-json.paste-as-json'],
  },
};
