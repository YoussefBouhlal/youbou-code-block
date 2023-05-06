import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';

import { setHeightCodeBlocks } from './utils';

import './editor.scss';

let ybLangs = {
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
}

const langList = [
	{
		value: '',
		label: '- Lang Select -',
	},
];

Object.keys( ybLangs ).forEach( ( key ) => {
	langList.push( {
		value: key,
		label: ybLangs[ key ],
	} );
} );

export default function Edit( { attributes, setAttributes, clientId } ) {

	const ref = useRef();

    const {
		code,
		fileName,
		langName
	} = attributes;

	useEffect( () => {
		const { ownerDocument } = ref.current;

		if ( ownerDocument ) {
			const hcbTextarea = ownerDocument.querySelector( `#block-${ clientId } .youbou-block__code__textarea` );
			setHeightCodeBlocks( hcbTextarea );
		}
	}, [ clientId, code ] );

	const blockProps = useBlockProps( {
		ref,
		className: 'youbou-block',
		'data-file': fileName || null,
		'data-lang': langName || null
	} );

	return (
		<>
			<div { ...blockProps } >
                <div className='youbou-block__code'>
					<div className='youbou-block__code__linenum'></div>
					<textarea
						className='youbou-block__code__textarea'
						placeholder={ __( 'Your Code...', 'youbou-blocks' ) }
						value={ code }
						onChange={ ( e ) => {
							setAttributes( { code: e.target.value } );
							setHeightCodeBlocks( e.target );
						} }
					></textarea>
				</div>
                <div className='youbou-block__controls'>
					<SelectControl
						value={ attributes.langType }
						options={ langList }
						onChange={ ( langKey ) => {
							if ( '' === langKey ) {
								setAttributes( {
									langType: '',
									langName: '',
								} );
							} else {
								setAttributes( {
									langType: langKey,
									langName: ybLangs[ langKey ],
								} );
							}
						} }
					/>
					<input
						type='text'
						className='youbou-block__controls__filename'
						value={ fileName }
						placeholder={ __( 'file name', 'youbou-blocks' ) }
						onChange={ ( e ) => {
							setAttributes( { fileName: e.target.value } );
						} }
					/>
				</div>
            </div>
		</>
	);
}
