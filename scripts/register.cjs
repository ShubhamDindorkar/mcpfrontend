// This file enables ts-node to properly handle TypeScript files
const path = require('path');

require('ts-node').register({
  transpileOnly: true,
  project: path.join(__dirname, 'tsconfig.json')
}); 