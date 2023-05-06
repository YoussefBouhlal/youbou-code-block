<?php
/**
 * Plugin Name:       Youbou Code Block
 * Description:       Code block with syntax highlighting for gutenberg editor.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Youssef Bouhlal
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       youbou-code-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
add_action( 'init', function() {
	register_block_type( __DIR__ . '/build' );
});

/**
 * Enqueue scripts and styles.
 */
add_action( 'wp_enqueue_scripts', function(){

	if ( is_singular('post') ) {
		wp_enqueue_script( 'youbou-code-block-prism', plugins_url( 'assets/prism.js', __FILE__ ), array(), '1.0.0', true );
	}

});

