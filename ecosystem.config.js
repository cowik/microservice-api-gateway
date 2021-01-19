const buildApps = (name, instances, watch, env) => ({
	name,
	script: 'src/app.js',
	args: '--trace-warnings ',
	exec_mode: 'cluster',
	instances,
	instance_var: 'INSTANCE_ID',
	watch,
	env: {
	  NODE_ENV: env,
	},
  });
  
  module.exports = {
	apps: [
	  buildApps('api-gateway-production', 1, false, 'production'),
	  buildApps('api-gateway-development', 1, false, 'development'),
	],
  };
  