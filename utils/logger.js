const chalk = require('chalk')

module.exports.logError = (err) => {
  let str = ''
  if (err instanceof Error) str = err.stack
  else str = err
  
  console.error(chalk.red(str))

  return err;
}
