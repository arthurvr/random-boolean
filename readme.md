# random-boolean [![Build Status](https://travis-ci.org/arthurvr/random-boolean.svg?branch=master)](https://travis-ci.org/arthurvr/random-boolean)

> Get a random boolean


## Install

```
$ npm install --save random-boolean
```


## Usage

```js
const randomBoolean = require('random-boolean');

randomBoolean();
//=> true

randomBoolean();
//=> false

randomBoolean({bias: 0.25});
//=> false

randomBoolean({bias: 0.25});
//=> false

randomBoolean({bias: 0.25});
//=> true

randomBoolean({bias: 0.25});
//=> false
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
