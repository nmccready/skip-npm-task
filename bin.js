#!/usr/bin/env node
const { execSync } = require('child_process')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const { skipTask } = require('./index')

const {
  $0,
  _: commands,
  ...options
} = yargs(hideBin(process.argv))
  .scriptName('skip-npm-task')
  .option('exitCode', {
    alias: 'e',
    type: 'number',
    description: 'exit code to return if skipped',
  })
  .option('taskName', {
    alias: 't',
    type: 'string',
    description: 'task name to describe',
    default: 'postinstall',
  })
  .option('skipLocal', {
    alias: 's',
    type: 'boolean',
    description: 'flag to skip the command if the command is local to the project',
  })
  .parse()

skipTask(options)

for (let command of commands) {
  execSync(command, { stdio: 'inherit' })
}
