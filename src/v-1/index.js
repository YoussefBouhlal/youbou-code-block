import { registerBlockType } from '@wordpress/blocks';
import { Icon } from '@wordpress/components';

import './style.scss';

import iconSvg from './components/icon-svg';
import edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
    icon: <Icon icon={iconSvg} />,
	edit,
	save,
});
