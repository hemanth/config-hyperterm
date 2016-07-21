'use strict';
const camelCase = require('camelcase');

const shortHandMap = {
  'bg-color': 'backgroundColor',
  'fg-color': 'foregroundColor',
  'term-css': 'term-CSS'
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
    get: (prop) => {
      let camelizedProp = camelCase(prop);
      return hyperTermconfig[shortHandMap[prop]] || 
             hyperTermconfig.config[shortHandMap[prop]] ||
             hyperTermconfig[camelizedProp] || 
             hyperTermconfig.config[camelizedProp] ||
             `Undefined property: ${prop}`
    },
    set: (prop, val) => {
      //TODO
    }
  }
}
