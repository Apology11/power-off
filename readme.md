# power-off

> Cross OS power-off.
> With support for shutdown and reboot


## Install

```
$ npm install --save power-off
```


## Usage

```js
var powerOff = require('power-off');

powerOff.shutdown( function (err, stderr, stdout) {
	if(!err && !stderr) {
		console.log(stdout);
	}
});

powerOff.reboot( function (err, stderr, stdout) {
	if(!err && !stderr) {
		console.log(stdout);
	}
});
```

## CLI

```
$ npm install --global power-off
```

```
$ power-off 
```



## License

MIT © [Hemanth.HM](http://h3manth.com)
