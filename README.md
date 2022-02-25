# skip-npm-task

Skips (successfully exits current process) when whatever task is called if the task is **not** local by default.

If you want it to skip the task if it is local then pass `-s` or `--skip-local`.

If the task is allowed and all commands following are executed serially in order.

```js
// package.json
// how prepare should work
"scripts": {
 "prepare": "skip-npm-task -t prepare sort-package-json 'echo hi' 'echo do something else'",
}
```

Requires [`process.env.INIT_CWD`](https://github.com/npm/cli/issues/2033) variable available in all stable npm releases. Credits to Már Örlygsson for suggesting this implementaiton on [Stackoverflow](https://stackoverflow.com/a/53239387/3185545s).
