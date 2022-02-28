const skipTask = ({ exitCode = 0, skipLocal = false, taskName = 'postinstall' } = {}) => {
  const { INIT_CWD, PWD } = process.env
  const isLocal = !INIT_CWD || INIT_CWD === PWD

  if (isLocal && skipLocal) {
    console.info(`Skipping '${taskName}' on local install`)
    process.exit(exitCode)
  }
  // skip if were non-local IE npm link from consumer or npm install from consumer
  // simple way to abort npm prepare
  if (!isLocal && !skipLocal) {
    console.info(`Skipping '${taskName}' on non-local install`)
    process.exit(exitCode)
  }
}

module.exports = {
  skipTask,
}
