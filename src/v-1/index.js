import { registerBlockType } from '@wordpress/blocks';
import { Icon } from '@wordpress/components';

import './style.scss';

import { ReactComponent as logo } from '../../assets/svg/icon-svg.svg';
import edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: <Icon icon={ logo } />,
	edit,
	save,
} );
