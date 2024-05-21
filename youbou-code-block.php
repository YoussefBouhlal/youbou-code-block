<?php
/**
 * Plugin Name:       Youbou Code Block
 * Plugin URI:        https://github.com/YoussefBouhlal/youbou-code-block
 * Description:       Code block with syntax highlighting for gutenberg editor.
 * Version:           1.0.0
 * Requires at least: 6.1
 * Requires PHP:      7.2
 * Author:            Youssef Bouhlal
 * Author URI:        https://youssefbouhlal.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       youboucodeblock
 * Domain Path:       /languages
 *
 * @package           YoubouCodeBlock
 */

namespace YoubouCodeBlock;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const VERSION     = '1.0.0';
const PLUGIN_FILE = __FILE__;

require __DIR__ . '/vendor/autoload.php';

$main = new Main();
$main->init();


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
// add_action( 'init', function() {
// 	register_block_type( __DIR__ . '/build' );
// });

// /**
//  * Enqueue scripts and styles.
//  */
// add_action( 'wp_enqueue_scripts', function(){

// 	if ( is_singular('post') ) {
// 		wp_enqueue_script( 'youbou-code-block-prism', plugins_url( 'assets/prism.js', __FILE__ ), array(), '1.0.0', true );
// 	}

// });

