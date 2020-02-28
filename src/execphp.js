class ExecPHP {

	parseFile(fileName, callback) {

		const realFileName = './pages/' + fileName;

		const exec = require('child_process').exec;
		const cmd = 'php ' + realFileName;
		
		exec(cmd, (error, stdout, stderr) => {
			callback(stdout);
		});
	}
}

module.exports = function() {
	return new ExecPHP();
};