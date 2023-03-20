# Solc-js web worker example

This repository contains a simple example of how to use the solidity compiler with a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

## Install the dependencies

```
npm install
```

## Build the bundle
```
mkdir dist
npx browserify -t babelify ./worker.js > ./dist/bundle.js
```

## Test

You need to serve the `bundle.js` and `index.html` files.
You can do it by starting a simple python webserver at `127.0.0.1` on port `8000` with the command below:

```
python -m http.server --bind 127.0.0.1
```

Then run the command below to open your browser in the designed host and port. We are using chromium in this example:
```
chromium 127.0.0.1:8000
```

Open your [browser's developer tools window](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools). You should see the following output under the `console` tab:

```
Solc version: 0.8.19+commit.7dd6d404.Emscripten.clang
Bytecode of contract C: 6080604052348015600f57600080fd5b50606d80601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806326121ff014602d575b600080fd5b60336035565b005b56fea26469706673582212204dee7eda7c96abadf53d8ad34d2f816b418a1638ece1b2547012769873bb852964736f6c63430008130033
```

## Alternative fetch

If you want to fetch the `solcjson.js` without using the [importScripts](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts) method, you can apply the [eval.patch](eval.patch) in the example to see a possible alternative.

To apply the patch do:
`git am eval.patch`


**WARNING**: Please be aware of the [consequences when using eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!).
