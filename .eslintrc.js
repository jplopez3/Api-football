module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'commonjs': true,
		'es6': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	globals: {},
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	rules: {
		indent: [ 'error', 'tab' ],
		
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'space-in-parens': [ 'error', 'always' ]
	}
};
