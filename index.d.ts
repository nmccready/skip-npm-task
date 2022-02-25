export interface SkipTaskOpts {
  exitCode?: number
  skipLocal?: boolean
  taskName?: string
}

export declare const skipTask: (options: ?SkipTaskOpts) => void
