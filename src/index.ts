import type { ConsxOptions } from './types'
import { createConsx as _createConsx } from './consx'

export function createConsx(options: Partial<ConsxOptions> = {}) {
  const consx = _createConsx({ ...options })
  return consx
}

export const consx = createConsx()

export default consx
