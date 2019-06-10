const program = require('commander')
const pkg = require('../package.json')

const createFiles = require('./createFiles')

const cli = () => {
  program
    .version(pkg.version)
    .command('create-files [name]')
    .alias('cf')
    .description('Create files and folders by arg name')
    .option('-d, --dev', 'Remove folders by base option', false)
    .option('-i, --init', 'Init structure with folders: options.base -> scalar, enum, types, interfaces', false)
    .option('-b, --base [base]', 'path to schema dir', './src/graphql')
    .option('-se, --schemaExtension [schemaName]', 'extension of graphql files: .gql, .graphql, etc...', 'gql')
    .option('-re, --resolverExtension [resolverName]', 'extension of resolvers files: .js, .graphql, etc...', 'js')
    .action(createFiles)

  program.parse(process.argv)
}

module.exports = cli
