/**
 * This is the interface to load a build kernel
 */
console.log('in build');
const path = require('path');

 // use the current directory name as the app name
const app = path.basename(__dirname);
const environment = 'development';
const args = {};
const options = {};

// boot up the kernel
require('@conga/framework').boot('build', app, environment, {}, (kernel) => {

	// run the command
	kernel.build(args, options, () => {
		process.exit();
	});
});
