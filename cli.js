#!/usr/bin/env node

const { Command } = require('commander');
const scrape = require('./commands/scrape');
const githubStars = require('./commands/githubStars');
const renameFiles = require('./commands/renameFiles');
const compressImages = require('./commands/compressImages');
const textToSpeech = require('./commands/textToSpeech');
const convertCurrency = require('./commands/currencyConverter');

const program = new Command();

program
  .name('multi-cli')
  .description('CLI application with multiple features')
  .version('1.0.0');

program
  .command('scrape')
  .description('Scrape a webpage by URL and CSS selector')
  .argument('<url>', 'URL to scrape')
  .argument('<selector>', 'CSS selector to match')
  .action((url, selector) => scrape(url, selector));

program
  .command('github-stars')
  .description('List top GitHub projects by stars in a date range')
  .option('--from <date>', 'Start date (YYYY-MM-DD)', '')
  .option('--to <date>', 'End date (YYYY-MM-DD)', '')
  .action((options) => githubStars(options.from, options.to));

program
  .command('rename')
  .description('Bulk rename files in a directory')
  .argument('<directory>', 'Directory path')
  .argument('<prefix>', 'Prefix for renamed files')
  .action((directory, prefix) => renameFiles(directory, prefix));

program
  .command('compress')
  .description('Compress all images in a directory')
  .argument('<directory>', 'Directory containing images')
  .option('--output <directory>', 'Output directory', '')
  .action((directory, options) => {
    const outputDir = options.output || directory;
    compressImages(directory, outputDir);
  });

program
.command('text-to-speech')
.description('Convert text to speech and save as output.mp3')
.argument('<text>', 'Text to convert to speech')
.action((text) => textToSpeech(text));

program
.command('convert-currency')
.description('Convert currency from one type to another')
.argument('<amount>', 'Amount to convert')
.argument('<fromCurrency>', 'From currency (e.g., USD)')
.argument('<toCurrency>', 'To currency (e.g., EUR)')
.action((amount, fromCurrency, toCurrency) => convertCurrency(amount, fromCurrency, toCurrency));

program.parse(process.argv);
