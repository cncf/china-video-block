/**
 * BLOCK: china-video-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * @package CGB
 */

// Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n.
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks.
const { PlainText } = wp.blockEditor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cvb/block-china-video-block', {
	title: __( 'China Video Block' ),
	icon: 'welcome-view-site',
	category: 'common',
	keywords: [
		__( 'china video block' ),
	],
	attributes: {
		chinavid: {
			type: 'string',
		},
		worldvid: {
			type: 'string',
		},
	},
	edit: function( props ) {
		const { setAttributes, attributes: { chinavid, worldvid } } = props;

		return (
			<div className={ props.className }>
				<p>This block will show the Chinese video to users in China and the World video to everyone else. You must have a valid IPInfo.io token in <a href={ cvbPHPVars.settingsURL }>the settings</a> for this to work.</p>
				<p>Chinese video (iframe "src" attribute):
					<PlainText
						value={ chinavid }
						onChange={ ( value ) => setAttributes( { chinavid: value } ) }
						placeholder="https://v.qq.com/iframe/player.html?vid=f0718z01vwl&tiny=0&auto=0"
					/>
				</p>
				<p>World video (iframe "src" attribute):
					<PlainText
						value={ worldvid }
						onChange={ ( value ) => setAttributes( { worldvid: value } ) }
						placeholder="https://www.youtube.com/embed/1JAXMGqzMxs"
					/>
				</p>
			</div>
		);
	},
	save: function( props ) {
		const { attributes: { chinavid, worldvid } } = props;
		return (
			<div>
				<script type="text/javascript">
					var worldvid = '{ worldvid }';
					var cvbIPInfoToken = '{ cvbPHPVars.cvbIPInfoToken }';
				</script>
				<iframe width="560" height="315" src={ chinavid } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		);
	},
} );
