const musette = require('commander');

const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear')
const files = require('./lib/files');

musette
	.command('init')
	.description('Draw app header')
	.action(() => {
		clear();
		console.info(chalk.magenta(figlet.textSync("musette",{horizontalLayout: "full"})))
	})


musette.parse(process.argv);
if(!musette.args.length) {
	musette.help();
}

