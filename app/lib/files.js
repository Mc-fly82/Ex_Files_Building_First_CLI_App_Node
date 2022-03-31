const fs = require('fs');
const path = require('path');

module.exports = {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd())
    },

    directoryExists: (filePath) => {
        try {
            return fs.statSync(filePath).isDirectory()
        } catch (e) {
            return false
        }
    },
    isGitRepository: () => {
        if(files.directoryExists('.git')) {
            console.log(chalk.red("Sorry! Can\it create a git repository because this directory is already inside a git repository"));
            process.exit()
        }
    },
}