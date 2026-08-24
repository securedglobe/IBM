const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

const src = fs.readFileSync(path.join(__dirname, '..', 'README.md'), 'utf8');
if (!src.includes('# IBM')) fail('title');
if (!src.includes('Empty GitHub placeholder')) fail('empty');
if (!src.includes('no application source')) fail('src');
console.log('OK IbmEmptyTests');
