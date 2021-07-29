=== China Video Block ===
Contributors: cjyabraham, bonkerz
Tags: China, video, block
Requires at least: 5.0
Tested up to: 5.8.0
Stable tag: trunk
Requires PHP: 5.6.20
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

🇨🇳 🎬 🧱 Gutenberg block to serve China-based video to Chinese audience and YouTube video to everyone else.

== Description ==

🇨🇳 🎬 🧱 This Gutenberg block allows for embedding a video in a WordPress post or page.  If the user who views the page is in China, a different video will show from users in the rest of the world.  This is to appropriately deal with China's Internet wall which blocks YouTube and other video platforms.

For more information on how to develop this block, please see the [github repo](https://github.com/cncf/china-video-block).

The plugin has been developed for [CNCF](https://www.cncf.io/) and [The Linux Foundation](https://www.linuxfoundation.org/).

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/china-video-block` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress
1. Use the Settings->China Video Block screen to set the IPInfo.io token
1. Insert the block into a post or page.

== Screenshots ==

1. China Video block inserted into a post.

== Changelog ==

= 0.2.5 =
Fixes PHP Notice "Trying to access array offset on value of type bool"
WordPress 5.8 compatibility

= 0.2.4 =
* loads the front-end script using wp_enqueue_script() only when the block is present on the page

= 0.2.3 =
* fixed the ver number on the script so that the block doesn't keep breaking

= 0.2.2 =
* added a browser-busting version querystring for the front.js file so that browsers download the new file when it updates

= 0.2.1 =
* added compiled build file

= 0.2.0 =
* rewrite of the code to favor the China video; the problem was that, when favoring the non-China video, it would produce a failed request for users in China since it was loaded on page load before being changed to the China video
* when the ipinfo call produces and error, no cookie value is now set so that the call can be tried again during a subsequent page load

= 0.1.0 =
* First release
