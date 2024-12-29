<?php
/**
 * China Video Block
 *
 * @package         china-video-block
 * @license         GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:             China Video Block
 * Description:             Automatically displays one video for users in China, and a YouTube video for everyone else.  Useful to accomodate video sites that are blocked in China.
 * Author:                  CNCF (Part of Linux Foundation)
 * Contributors:            cjyabraham, bonkerz
 * Author URI:              https://github.com/cncf/china-video-block
 * Text Domain:             china-video-block
 * Version:                 0.2.6
 * Requires PHP:            7.4
 * Requires at least:       5.0
 * Tested up to:            6.7.1
 * License:                 GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Initialize.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . 'src/settings.php';
