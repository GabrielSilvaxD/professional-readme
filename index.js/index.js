import inquirer from 'inquirer';
import fs from 'fs/promises';
import colors from 'colors';
import { generateMarkdown } from './generateMarkdown.js';

const questions = [
  { type: 'input', name: 'title', message: 'Enter project title: '.magenta },
  { type: 'input', name: 'description', message: 'Enter project description: '.magenta },
  { type: 'input', name: 'installation', message: 'Installation instructions: '.magenta },
  { type: 'input', name: 'usage', message: 'Usage instructions: '.magenta },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
  { type: 'input', name: 'contributing', message: 'Contribution guidelines: '.magenta },
  { type: 'input', name: 'tests', message: 'Test instructions: '.magenta },
  { type: 'input', name: 'github', message: 'Enter your GitHub username: '.magenta },
  { type: 'input', name: 'email', message: 'Enter your email address: '.magenta },
];

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    await fs.writeFile('README.md', markdown);
    console.log('README.md has been generated successfully!');
  } catch (error) {
    console.error('Error creating README:', error);
  }
};

init();