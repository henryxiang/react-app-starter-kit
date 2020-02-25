const fs = require('fs');
const path = require('path');

const pkgFile = 'package.json';
const backupFile = `${pkgFile}.orig`;
const json = fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8');
const origPkg = JSON.parse(json);

const pkg = { ...origPkg };
delete pkg.dependencies;
delete pkg.devDependencies;

console.log(`${pkgFile} -> ${backupFile}`);
fs.writeFileSync(
  path.resolve(__dirname, '..', backupFile),
  JSON.stringify(origPkg, null, 2)
);
fs.writeFileSync(
  path.resolve(__dirname, '..', pkgFile),
  JSON.stringify(pkg, null, 2)
);
