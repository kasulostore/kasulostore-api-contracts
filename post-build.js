const fs = require('fs');
const path = require('path');

// remove src/index.ts
fs.unlinkSync(path.join(__dirname, 'src/index.ts'));