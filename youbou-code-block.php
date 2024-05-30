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
