import * as colors from 'colorette'
import { LogTypes } from 'consola'
import type { LogType } from './constants'
import { TYPE_ICONS } from './constants'
import type { ConsxInstance } from './types'

const date = `[${new Date().toLocaleTimeString()}]`
const coloredDate = date && colors.gray(date)

export class Consx {
  // log: (message: any, ...args: any[]) => void
  constructor() {
    const types = LogTypes
    for (const type in types)
      (this as unknown as ConsxInstance)[type as LogType] = this.log
  }

  log(message: any, ...args: any[]) {
    // eslint-disable-next-line no-console
    console.log(coloredDate, message, ...args)
  }

  start(message: any, ...args: any[]) {
    // eslint-disable-next-line no-console
    console.log(coloredDate, colors.magenta(TYPE_ICONS.start || ''), message, ...args)
  }
}

export const consx = new Consx()

export default consx
