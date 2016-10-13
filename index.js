'use strict';
const camelCase = require('camelcase');
const R = require('ramda');
const writeFileSync = require('fs').writeFileSync;
const shortHandMap = {
  'bg-color': 'backgroundColor',
  'fg-color': 'foregroundColor',
  'term-css': 'term-CSS'
}

let hyperTermconfig, configPath;

const requireConfig = hyperTermconfigPath => {
  configPath = require('expand-tilde')(hyperTermconfigPath || '~/.hyper.js');
  try {
    hyperTermconfig = require(configPath);
  } catch(e) {
    console.error('Could not find `~/.hyper.js`, please make sure you have installed hyperterm!');
    process.exit(-1);
  }
}

const getConfigAtttr = prop => {
  var confLens = R.lensProp(shortHandMap[prop] || camelCase(prop));
  return R.view(confLens, hyperTermconfig.config) ||
         R.view(confLens, hyperTermconfig) ||
         unknownProp(prop);
}

const setConfigAttr = (prop,val) => {
  var confLens = R.lensProp(shortHandMap[prop] || camelCase(prop));
  if( R.view(confLens, hyperTermconfig.config)){
    hyperTermconfig.config = R.set(confLens, val, hyperTermconfig.config);
  } else if (R.view(confLens, hyperTermconfig)){
    hyperTermconfig = R.set(confLens, val, hyperTermconfig);
  } else {
    console.log(unknownProp(prop));
  }
  writeFileSync(configPath,`module.exports=${JSON.stringify(hyperTermconfig, null, 2)}`, {encoding:'utf-8'});
}

const unknownProp = prop => `Undefined property: ${prop} check --help`;

const getVal = (prop) => getConfigAtttr(prop);

const setVal = (prop, val) => setConfigAttr(prop, val);


module.exports = hyperTermconfigPath => {
  requireConfig(hyperTermconfigPath);
  return {
    get: (prop) => {
      return getVal(prop);
    },
    set: (prop, val) => {
      return setVal(prop, val);
    }
  }
}
