/**
 * Front-end JavaScript
 */

jQuery( document ).ready( function( $ ) {
	const youku = $( '.wp-block-cvb-block-china-video-block iframe' );
	const path = 'path=/;';
	const expiryDate = new Date();
	expiryDate.setTime( expiryDate.getTime() + ( 7 * 24 * 60 * 60 * 1000 ) );
	const expires = `expires=${ expiryDate.toUTCString() }`;

	function getCookie( name ) {
		const value = `; ${ document.cookie }`;
		const parts = value.split( `; ${ name }=` );
		if ( parts.length === 2 ) {
			return parts.pop().split( ';' ).shift();
		}
		return '';
	}

	if ( getCookie( 'is_not_china' ) === '' ) {
		const ipinfourl = `https://ipinfo.io?token=${ window.cvbPHPVars?.cvbIPInfoToken || '' }`;
		$.ajax( {
			url: ipinfourl,
			dataType: 'jsonp',
			success( response ) {
				if ( response.country === 'CN' ) {
					document.cookie = `is_not_china=false;${ path }${ expires }`;
				} else {
					const worldvid = youku.data( 'worldvid' );
					youku.attr( 'src', worldvid );
					document.cookie = `is_not_china=true;${ path }${ expires }`;
				}
			},
			timeout: 3000,
		} );
	} else if ( getCookie( 'is_not_china' ) === 'true' ) {
		const worldvid = youku.data( 'worldvid' );
		youku.attr( 'src', worldvid );
	}
} );
