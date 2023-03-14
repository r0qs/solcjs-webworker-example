importScripts('https://binaries.soliditylang.org/bin/soljson-v0.8.19+commit.7dd6d404.js')
import wrapper from 'solc/wrapper';

self.addEventListener('message', (e) => {
	const contractCode = e.data.contractCode
	const sourceCode = {
		language: 'Solidity',
		sources: {
			contract: {
				content: contractCode,
			}
		},
		settings: {
			outputSelection: {
				'*': {
					'*': ['*']
				}
			}
		}
	};

	const compiler = wrapper(self.Module)
    console.log(`Solc version: ${compiler.version()}`)

	self.postMessage({
		output: JSON.parse(compiler.compile(JSON.stringify(sourceCode)))
	})
}, false)
