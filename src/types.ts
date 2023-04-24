import type { LogLevel } from 'consola'
import type { LogType } from './constants'

export interface LogObject {
  level: LogLevel
}

export interface LogFn {
  (message: any, ...args: any[]): void
}

export type ConsxInstance = Record<LogType, LogFn>
