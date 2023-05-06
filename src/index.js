import { registerBlockType } from '@wordpress/blocks';
import { Icon } from '@wordpress/components';

import './style.scss';

import IconSvg from './icon-svg';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
    icon: <Icon icon={IconSvg} />,
	edit: Edit,
	save,
} );
