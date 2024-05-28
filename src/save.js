import { RichText, useBlockProps } from '@wordpress/block-editor';

import { sanitizeCodeblock } from './components/utils';

export default function save( { attributes } ) {

	const { code, fileName, langName } = attributes;
	const langType = attributes.langType || 'plain';
	const preClass = `prism line-numbers lang-${ langType }`;

	const blockProps = useBlockProps.save( {
		className: 'youbou-block',
	} );

	return (
		<div { ...blockProps }>
			<pre
				className={ preClass }
				data-file={ fileName || null }
				data-lang={ langName || null }
			>
				<RichText.Content tagName='code' value={ sanitizeCodeblock( code ) } />
			</pre>
		</div>
	);
}
