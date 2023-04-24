import isUnicodeSupported from 'is-unicode-supported'
import type { LogObject } from './types'

const unicode = isUnicodeSupported()
const s = (c: string, fallback: string) => (unicode ? c : fallback)

// export type LogLevel = 0 | 1 | 2 | 3 | 4 | 5 | (number & {});

export const LogLevels: Record<LogType, number> = {
  silent: Number.NEGATIVE_INFINITY,
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  debug: 4,
  trace: 5,
  verbose: Number.POSITIVE_INFINITY,
}

export const LogTypes: Record<LogType, Partial<LogObject>> = {
  silent: {
    level: -1,
  },
  // Level 0
  fatal: {
    level: LogLevels.fatal,
  },
  error: {
    level: LogLevels.error,
  },

  // Level 1
  warn: {
    level: LogLevels.warn,
  },

  // Level 2
  log: {
    level: LogLevels.log,
  },

  // Level 3
  info: {
    level: LogLevels.info,
  },
  success: {
    level: LogLevels.success,
  },
  fail: {
    level: LogLevels.fail,
  },
  ready: {
    level: LogLevels.info,
  },
  start: {
    level: LogLevels.info,
  },

  // Level 4
  debug: {
    level: LogLevels.debug,
  },

  // Level 5
  trace: {
    level: LogLevels.trace,
  },

  // Verbose
  verbose: {
    level: LogLevels.verbose,
  },
}

export type LogType =
  // 0
  | 'silent'
  | 'fatal'
  | 'error'
  // 1
  | 'warn'
  // 2
  | 'log'
  // 3
  | 'info'
  | 'success'
  | 'fail'
  | 'ready'
  | 'start'
  // verbose
  | 'debug'
  | 'trace'
  | 'verbose'

export const TYPE_ICONS: { [k in LogType]?: string } = {
  error: s('✖', '×'),
  fatal: s('✖', '×'),
  ready: s('✔', '√'),
  warn: s('⚠', '‼'),
  info: s('ℹ', 'i'),
  success: s('✔', '√'),
  debug: s('⚙', 'D'),
  trace: s('→', '→'),
  fail: s('✖', '×'),
  start: s('◐', 'o'),
  log: '',
}
