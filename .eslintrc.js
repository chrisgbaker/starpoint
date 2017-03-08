module.exports = {
	extends: 'standard',
	rules: {
		// Enforce anchor elements to have content
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
		'jsx-a11y/anchor-has-content': [
			2,
			'AnchorLink'
		],
		// Enforce an anchor element's href prop value is not just #
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
		'jsx-a11y/href-no-hash': [
			2,
			'AnchorLink'
		],
	}
};
