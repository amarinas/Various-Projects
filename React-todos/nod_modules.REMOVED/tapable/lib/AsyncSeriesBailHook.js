/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");
const HookCodeFactory = require("./HookCodeFactory");

class AsyncSeriesBailHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, onDone }) {
		return this.callTapsSeries({
			onError: (i, err, next, doneBreak) => onError(err) + doneBreak(true),
			onResult: (i, result, next) => `if(${result} !== undefined) {\n${onResult(result)};\n} else {\n${next()}}\n`,
			onDone
		});
	}
}

const factory = new AsyncSeriesBailHookCodeFactory();

class AsyncSeriesBailHook extends Hook {
	constructor(args) {
		super(args);
		this.call = this._call = undefined;
	}


	compile(options) {
		factory.setup(this, options);
		return factory.create(options);
	}
}

module.exports = AsyncSeriesBailHook;
