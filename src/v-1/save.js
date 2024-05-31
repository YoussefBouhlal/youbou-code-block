import { RichText, useBlockProps } from '@wordpress/block-editor';

import { sanitizeCodeblock } from './components/utils';

export default function save( { attributes } ) {
	const { code } = attributes;
	const langType = attributes.langType || 'plain';
	const preClass = `line-numbers lang-${ langType }`;

	const blockProps = useBlockProps.save( {
		className: 'youbou-block',
	} );

	return (
		<div { ...blockProps }>
			<pre className={ preClass }>
				<RichText.Content
					tagName="code"
					value={ sanitizeCodeblock( code ) }
				/>
			</pre>
		</div>
	);
}
