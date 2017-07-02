/**
 * This is the interface to connect the current application
 * into the conga cli
 */
module.exports = {

	run: function(program, app, environment, command, args, options){

		// boot up the kernel
		require('@conga/framework').boot('cli', app, environment, {}, (kernel) => {

			// run the command
			kernel.runCommand(program, command, args, options, () => {
				process.exit();
			});
		});
	}
}
