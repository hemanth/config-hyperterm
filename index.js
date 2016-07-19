'use strict';

const shortHandMap = {
  'bg-color': 'backgroundColor',
  'fg-color': 'foregroundColor'
}

module.exports = (hyperTermconfigPath) => {
  let hyperTermconfig;
  const configPath = require('expand-tilde')(hyperTermconfigPath || '~/.hyperterm.js');
  try {
  hyperTermconfig = require(configPath);
  } catch(e) {
    console.error('Could not find `~/.hyperterm.js`, please make sure you have installed hyperterm!');
    process.exit(-1);
  }
  return {
    get: (prop) => hyperTermconfig[shortHandMap[prop] || prop],
    set: (prop, val) => {
      //TODO
    }
  }
}
