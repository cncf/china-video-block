![WordPress Plugin: Required WP Version](https://img.shields.io/wordpress/plugin/wp-version/china-video-block)

# China Video Block
This is a WordPress plugin which contains a Gutenberg block.  The block allows for embedding a video in a WordPress post or page.  If the user who views the page is in China, a different video will show from users in the rest of the world.  This is to appropriately deal with China's Internet wall which blocks YouTube and other video platforms.

# Plugin Development Environment

This repo ships with its own wp-env ready to fire up a local development environment.

Make sure you have node installed. Go to command line and check your version to confirm.

```
node -v
```

Install wp-env package as a global node package.

```
npm -g i @wordpress/env
```

The -g flag means global so you can then run wp-env commands from anywhere on your system.

After installation, at your command line check your version to confirm.

```
wp-env --version
```

Go to your working directory where the plugin code lives. Then start the env:

```
wp-env start
```

If changing the wp-env.json file or encountering problems, run:

```
wp-env start --update
```

You can also run the start command again for the environment to reload:

```
wp-env start
```

If you want to get more details about what the wp-env command is doing, add `--debug` after the command, i.e.

```
wp-env start --debug
```

## NPM

To install npm packages:

```
npm install
```

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block). To start development:

```
npm start
```

Use to compile and run the block in development mode. Watches for any changes and reports back any errors in your code.

To build your code:

```
npm run build
```

Use to build production code for your block inside `dist` folder. Runs once and reports back the gzip file sizes of the produced code.

## Composer

To install composer packages:

```
wp-env run cli --env-cwd=wp-content/plugins/china-video-block composer install
```

Once installed, you can then mulitple commands.

To run sniffs:

```
wp-env run cli --env-cwd=wp-content/plugins/china-video-block composer run-script sniff
```

To fix sniffs:

```
wp-env run cli --env-cwd=wp-content/plugins/china-video-block composer run-script fix
```

To check PHP Compatability:

```
wp-env run cli --env-cwd=wp-content/plugins/china-video-block composer run-script version-checks
```

## WP CLI Commands

You can run WP-CLI commands by prefixing the wp command like so:

```
wp-env run cli wp
```

## Logging in to the WordPress ENV

To login to the WordPress, use:

```
localhost:8828/wp-admin
```

Username: admin
Password: password

Dont upgrade plugins and WordPress core inside WordPress, make any updates in the `.wp-env.json` file and then run `wp env start` or `wp-env start --update`. This will download and install the updates.
