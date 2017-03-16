module.exports = {
	plugins: [ "jsx-a11y" ],
	extends: ['standard'],
	//extends: ['plugin:jsx-a11y/recommended'] to turn on all accessibiliy eslint rules
	rules: {
		// Enforce anchor elements to have content
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
		'jsx-a11y/anchor-has-content': [ 2, {
				'components': ['AnchorLink']
			}
		],
		// Enforce an anchor element's href prop value is not just #
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
		'jsx-a11y/href-no-hash': [ 2, {
            "components": [ "Link" ],
            "specialLink": [ "hrefLeft", "hrefRight" ]
          }],
	}
};
