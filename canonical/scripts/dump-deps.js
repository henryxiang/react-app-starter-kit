const fs = require('fs');
const path = require('path');

const json = fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8');
const pkg = JSON.parse(json);

const dependencies = Object.keys(pkg.dependencies).sort();
const devDependencies = Object.keys(pkg.devDependencies).sort();

if (dependencies.length > 0)
  console.log(`npm install --save \\\n  ${dependencies.join(' \\\n  ')}\n`);

if (devDependencies.length > 0)
console.log(`npm install --save-dev \\\n  ${devDependencies.join(' \\\n  ')}\n`);
