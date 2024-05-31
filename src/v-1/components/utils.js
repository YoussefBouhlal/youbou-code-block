/**
 * Suppoted languages
 */
export const supportedLangs = {
	html: 'HTML',
	css: 'CSS',
	scss: 'SCSS',
	js: 'JavaScript',
	ts: 'TypeScript',
	php: 'PHP',
	ruby: 'Ruby',
	python: 'Python',
	swift: 'Swift',
	c: 'C',
	csharp: 'C#',
	cpp: 'C++',
	objectivec: 'Objective-C',
	sql: 'SQL',
	json: 'JSON',
	bash: 'Bash',
	git: 'Git',
};

/**
 * List of languages
 */
export const listLangs = [
	{
		value: '',
		label: '- Lang Select -',
	},
];
for ( const langValue in supportedLangs ) {
	const langLabel = supportedLangs[ langValue ];
	listLangs.push( {
		value: langValue,
		label: langLabel,
	} );
}

/**
 * Function for setting code block height
 * @param {HTMLElement} elem
 */
export function setHeightCodeBlocks( elem ) {
	const num = elem.value.match( /\r\n|\n/g );
	let line;
	if ( null !== num ) {
		line = num.length + 1;
	} else {
		line = 1;
	}
	elem.style.height = line * 1.8 + 1.6 + 2 + 'em';
}

/**
 * Sanitize function
 * @param {string} str
 */
export function sanitizeCodeblock( str ) {
	if ( str ) {
		return str
			.replace( /</g, '&lt;' )
			.replace( />/g, '&gt;' )
			.replace( /"/g, '&quot;' )
			.replace( /'/g, '&#39;' );
	}
	return str;
}
