import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';

import {
	supportedLangs,
	listLangs,
	setHeightCodeBlocks,
} from './components/utils';
import './editor.scss';

export default function Edit( { attributes, setAttributes, clientId } ) {
	const ref = useRef();
	const { code, langName } = attributes;

	const textAreaChange = ( e ) => {
		setAttributes( { code: e.target.value } );
		setHeightCodeBlocks( e.target );
	};

	const langTypeChange = ( langKey ) => {
		if ( '' === langKey ) {
			setAttributes( {
				langType: '',
				langName: '',
			} );
		} else {
			setAttributes( {
				langType: langKey,
				langName: supportedLangs[ langKey ],
			} );
		}
	};

	useEffect( () => {
		const { ownerDocument } = ref.current;

		if ( ownerDocument ) {
			const hcbTextarea = ownerDocument.querySelector(
				`#block-${ clientId } .youboucodeblock__textarea`
			);
			setHeightCodeBlocks( hcbTextarea );
		}
	}, [ clientId, code ] );

	const blockProps = useBlockProps( {
		ref,
		className: 'youboucodeblock',
		'data-lang': langName || null,
	} );

	return (
		<>
			<div { ...blockProps }>
				<div className="youboucodeblock__container">
					<div className="youboucodeblock__linenum"></div>
					<textarea
						className="youboucodeblock__textarea"
						placeholder={ __( 'Your Code…', 'youboucodeblock' ) }
						value={ code }
						onChange={ textAreaChange }
					></textarea>
				</div>
				<div className="youboucodeblock__controls">
					<SelectControl
						value={ attributes.langType }
						options={ listLangs }
						onChange={ langTypeChange }
					/>
				</div>
			</div>
		</>
	);
}
