<?php
/**
 * Handle Gutenberg blocks registration.
 *
 * @package YoubouCodeBlock
 * @since 1.0.0
 */

namespace YoubouCodeBlock;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block main class
 */
final class Block {

    /**
	 * Initialize hooks
	 *
	 * @return void
	 */
	public function hooks() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

}
