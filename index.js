const isLocal = () => {
  const { INIT_CWD, PWD } = process.env
  return !INIT_CWD || INIT_CWD === PWD || INIT_CWD.indexOf(PWD) === 0
}

const skipTask = ({ exitCode = 0, skipLocal = false, taskName = 'postinstall' } = {}) => {
  if (isLocal() && skipLocal) {
    console.info(`Skipping '${taskName}' on local install`)
    process.exit(exitCode)
  }
  if (!isLocal() && !skipLocal) {
    console.info(`Skipping '${taskName}' on non-local install`)
    process.exit(exitCode)
  }
}

module.exports = {
  isLocal,
  skipTask,
}
