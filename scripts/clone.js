const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const baseDir = path.resolve(__dirname, '..');
const sources = [
  '.gitignore',
  'package.json',
  'README.md',
  'public',
  'src',
];
const destDir = 'clone';

if (!fs.existsSync(destDir)) shell.mkdir(destDir);

shell.cd(baseDir);
sources.forEach(f => shell.cp('-R', f, destDir));

process.exit();
