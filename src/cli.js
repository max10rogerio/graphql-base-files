const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.verison)
  .command('create', 'Create structure folder and files for this schema')
  .option('src [src]', 'path of generate files', './src/graphql')
  .parse(process.argv)
