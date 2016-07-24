#!/usr/bin/env node
'use strict';

var meow = require('meow');
var configHyperterm = require('./')();


const getField = (input, field) => input.map(o => o[field]);

var cli = meow([
	'Usage',
	'  $ config-hyperterm',
	'',
	'Options',
	'  --plugins List of plugins that are already present.',
	'  --local-plugins  List of plugins that are already present.',
	'  plugin [name] The plugin name to add.',
	'  local-plugin [name] The plugin name to add.',
	'  font-size [value] Get or set the font-size.',
	'  font-family [value] Get or set the font-family.',
	'  cursor-color [value] Get or set the cursor-color.',
	'  fg-color [value] Get or set the foregroundColor.',
	'  bg-color [value] Get or set the backgroundColor',
	'  css [value] Get or set the CSS.',
	'  term-css [value] Get or set the termCSS.',
	'  colors [value] Get or set the colors.',
	'',
	'Examples',
	'$ config-hyperterm --plugins',
	"[ 'hyperterm-snazzy', 'hypercwd', 'hypertheme' ]",
	'$ config-hyperterm --local-plugins',
	'[]'
]);


if (!(Object.keys(cli.flags).length) && cli.input.length < 1) { 
	cli.showHelp();
	process.exit(1);
} 

if (cli.input.length === 1) {
  console.log(configHyperterm.get(cli.input[0]));
}

if (cli.input.length === 2) {
  configHyperterm.set(cli.input[0], cli.input[1]);
}

if (Object.keys(cli.flags).length > 0) {
  if (cli.flags.plugins) {
    console.log(configHyperterm.get('plugins'));
  }
  else if (cli.flags.localPlugins) {
    console.log(configHyperterm.get('localPlugins'));
  } else {
  	console.log(`No such flag ${Object.keys(cli.flags).join(' ')}`);
  }
} 


