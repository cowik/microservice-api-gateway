module.exports = {
	apps: [{
		name: 'api-gateway-development',
		script: 'src/app.js',
		env: {
			NODE_ENV: 'development'
		},
		combine_logs: false,
		log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
	}],
};
