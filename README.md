# Solc-js Webworker Example

## Build the bundle
`npx browserify ./worker.js > ./dist/bundle.js -t babelify`

## Run
`chromium --allow-file-access-from-files index.html`

## Alternative fetch

If you want to fetch the `solcjson.js` without using the [importScripts](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts) method, you can apply the [eval.patch](eval.patch) in the example to see a possible alternative.

To apply the patch do:
`git am eval.patch`


**WARNING**: Please be aware of the [consequences when using eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!).
