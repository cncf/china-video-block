/**
 * Main block registration file
 *
 * @package
 */

import './editor.css';
import './style.css';

import { registerBlockType } from '@wordpress/blocks';
import { PlainText, useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

const deprecated = [
	{
		attributes: {
			chinavid: {
				type: 'string',
			},
			worldvid: {
				type: 'string',
			},
		},
		save: ( { attributes } ) => {
			const { chinavid, worldvid } = attributes;
			return (
				<div className="wp-block-cvb-block-china-video-block">
					<script type="text/javascript">
						{ `var worldvid = '${ worldvid }'; var cvbIPInfoToken = window.cvbPHPVars?.cvbIPInfoToken || ''` }
					</script>
					<iframe
						width="560"
						height="315"
						src={ chinavid }
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						title="China Video"
					/>
				</div>
			);
		},
		migrate: ( attributes ) => attributes,
		supports: {
			align: [ 'wide', 'full' ],
		},
	},
];

registerBlockType( metadata.name, {
	deprecated,
	edit( props ) {
		const {
			setAttributes,
			attributes: { chinavid, worldvid },
		} = props;

		const blockProps = useBlockProps( {
			className: 'wp-block-cvb-block-china-video-block',
		} );

		return (
			<div { ...blockProps }>
				<p>
					This block will show the Chinese video to users in China and
					the World video to everyone else. You must have a valid
					IPInfo.io token in{ ' ' }
					<a href={ window.cvbPHPVars?.settingsURL }>the settings</a> for this
					to work.
				</p>
				<p>
					Chinese video (iframe &quot;src&quot; attribute):
					<PlainText
						value={ chinavid }
						onChange={ ( value ) =>
							setAttributes( { chinavid: value } )
						}
						placeholder="https://v.qq.com/iframe/player.html?vid=f0718z01vwl&tiny=0&auto=0"
					/>
				</p>
				<p>
					World video (iframe &quot;src&quot; attribute):
					<PlainText
						value={ worldvid }
						onChange={ ( value ) =>
							setAttributes( { worldvid: value } )
						}
						placeholder="https://www.youtube.com/embed/1JAXMGqzMxs"
					/>
				</p>
			</div>
		);
	},
	save( props ) {
		const {
			attributes: { chinavid, worldvid },
		} = props;

		const blockProps = useBlockProps.save( {
			className: 'wp-block-cvb-block-china-video-block',
		} );

		return (
			<div { ...blockProps }>
				<iframe
					width="560"
					height="315"
					src={ chinavid }
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						data-worldvid={ worldvid }
						title="China Video"
				/>
			</div>
		);
	},
} );
