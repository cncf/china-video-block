<?php
/**
 * Plugin Name: China Video Block
 * Plugin URI: https://github.com/cncf/china-video-block
 * Description: Gutenberg block that embeds one video for users in China, another for everyone else.  Useful to accomodate video sites that are blocked in China.
 * Author: cjyabraham
 * Version: 0.2.5
 * License: GPLv2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package WordPress
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

require_once plugin_dir_path( __FILE__ ) . 'src/settings.php';
