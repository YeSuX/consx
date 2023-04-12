import { LogTypes } from 'consola'
import { defu } from 'defu'
import type { ConsxOptions } from './types'

export class Consx {
  options: ConsxOptions

  constructor(options: Partial<ConsxOptions> = {}) {
    // options
    // const types = LogTypes
    this.options = defu(
      <ConsxOptions>{ ...options },
      <ConsxOptions>{ types: LogTypes },
    )
  }

  log(...args: any[]) {
    console.log(args)
  }
}

export function createConsx(options: Partial<ConsxOptions>) {
  return new Consx(options)
}
