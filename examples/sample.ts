import consola from 'consola'
import consx from '../src/index'

async function main() {
  consola.log('This a consola log.')
  consx.log('This a consola log.')

  // consola.error(new Error('This is an example error. Everything is fine!'))
  // consola.info('Using consola 3.0.0')
  // consola.start('Building project...')
  // consola.success('Project built!')
  // await consola.prompt('Deploy to the production?', {
  //   type: 'confirm',
  // })
}

main()
