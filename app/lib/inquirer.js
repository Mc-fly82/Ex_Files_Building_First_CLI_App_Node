const inquirer = require('inquirer');
const minimist = require('minimist');
const files = require('./files');

module.exports = {
    askGitHubCredentials: () => {
        const questions = [
            {
                name: "username",
                type:"input",
                message: "Enter your github username or e-mail address:",
                validate: function (value) {
                    if(value.length) {
                        return true
                    } else {
                        return "Please enter your GitHub username or e-mail address:";

                    }
                },
            }
        ]
        return inquirer.prompts(questions)
    },
}