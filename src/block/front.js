/**
 * Does the IP test in the user's browser to choose the right vid to serve.
 *
 * @package CGB
 */

jQuery(document).ready(function( $ ) {
		var youku = $( '.wp-block-cvb-block-china-video-block iframe' ),
		path = "path=/;"
		d = new Date();
		d.setTime( d.getTime() + (7 * 24 * 60 * 60 * 1000) ),
		expires = "expires=" + d.toUTCString();

		function getCookie(name) {
			var value = "; " + document.cookie;
			var parts = value.split( "; " + name + "=" );
			if (parts.length == 2) {
				return parts.pop().split( ";" ).shift();
			} else {
				return "";
			}
		}

		if (getCookie( "is_not_china" ) === "") {
			var ipinfourl = "https://ipinfo.io?token=" + cvbIPInfoToken
			$.ajax(
				{
					url: ipinfourl,
					dataType: "jsonp",
					success: function (response) {
						if (response.country == 'CN') {
							document.cookie = "is_not_china=false;" + path + expires;
						} else {
							youku.attr( 'src', worldvid )
							document.cookie = "is_not_china=true;" + path + expires;
						}
					},
					timeout: 3000
				}
			);
		} else if (getCookie( "is_not_china" ) === "true") {
			youku.attr( 'src', worldvid )
		}
});
