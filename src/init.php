<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package china-video-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register block styles for both frontend + backend.
 */
function china_video_block_cvb_block_assets() {
	// Register block editor script for backend.
	wp_register_script(
		'china-video-block',
		plugins_url( 'build/block.js', __DIR__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-block-editor' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'build/block.js' ),
		true
	);

	$options = get_option( 'cvb_options' );
	wp_localize_script(
		'china-video-block',
		'cvbPHPVars',
		array(
			'cvbIPInfoToken' => $options['cvb_ipinfo_token'] ?? '',
			'settingsURL'    => get_site_url() . '/wp-admin/options-general.php?page=cvb',
		)
	);

	// Register the block using block.json.
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'china_video_block_cvb_block_assets' );

/**
 * Enqueue Gutenberg block assets for frontend and backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function china_video_block_enqueue_assets() {
	if ( has_block( 'cvb/block-china-video-block' ) && ! is_admin() ) {
		wp_enqueue_script(
			'china-video-block-front',
			plugins_url( 'build/front.js', __DIR__ ),
			array( 'jquery' ),
			filemtime( plugin_dir_path( __DIR__ ) . 'build/front.js' ),
			true
		);
	}
}
add_action( 'enqueue_block_assets', 'china_video_block_enqueue_assets' );
