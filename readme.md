# config-hyperterm [![Build Status](https://travis-ci.org/hemanth/config-hyperterm.svg?branch=master)](https://travis-ci.org/hemanth/config-hyperterm)

> Easily set/get `hyperterm` config.


## Install

```
$ npm install --save config-hyperterm
```


## Usage

```js
const configHyperterm = require('./')('~/.hyperterm.js');

configHyperterm.get('plugins'); //[ 'hyperterm-snazzy', 'hypercwd', 'hypertheme' ]

configHyperterm.set('plugins', 'hypercwd'); //WIP
```


## API

### configHyperterm(path)

#### path

Type: `Object`

HyperTerm Configuration path, defaults to `~/.hyperterm.js`

## CLI

```
$ npm install --global config-hyperterm
```

```
$ config-hyperterm 

  Easily set/get `hyperterm` config.

  Usage
    $ config-hyperterm

  Options
    --plugins List of plugins that are already present.
    --local-plugins  List of plugins that are already present.
    plugin [name] The plugin name to add.
    local-plugin [name] The plugin name to add.
    font-size [value] Get or set the font-size.
    font-family [value] Get or set the font-family.
    cursor-color [value] Get or set the cursor-color.
    fg-color [value] Get or set the foregroundColor.
    bg-color [value] Get or set the backgroundColor
    css [value] Get or set the CSS.
    term-css [value] Get or set the termCSS.
    colors [value] Get or set the colors.

  Examples
  $ config-hyperterm --plugins
  [ 'hyperterm-snazzy', 'hypercwd', 'hypertheme' ]
  $ config-hyperterm --local-plugins
  []

```

__GIF FTW:__

![config-hyperterm](./config-hyperterm.gif)


## License

MIT © [Hemanth.HM](https://h3manth.com)
