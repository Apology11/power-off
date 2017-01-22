'use strict';
var isLinux = require('is-linux'),
	isOsx = require('is-osx'),
	isWindows = require('is-windows'),
	cp = require('child_process');

module.exports.shutdown = function (cb) {
	var cmd = '';

	if(isLinux() || isOsx()) {
		cmd = 'sudo shutdown -h -t 1';
	} else if(isWindows()) {
		cmd = 'shutdown -s -t 1';
	} else {
		throw new Error('Unknown OS!');
	}

	cp.exec(cmd, function (err, stdout, stderr) {
		cb(err, stout, stderr);
	});
};

module.exports.reboot = function (cb) {
	var cmd = '';
	
	if(isLinux() || isOsx()) {
		cmd = 'sudo shutdown -r -t 1';
	} else if(isWindows()) {
		cmd = 'shutdown -r -t 1';
	} else {
		throw new Error('Unknown OS!');
	}

	cp.exec(cmd, function (err, stdout, stderr) {
		cb(err, stout, stderr);
	});

};
