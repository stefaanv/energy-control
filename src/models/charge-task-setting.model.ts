export type ChargeMode = 'charge' | 'discharge'
export type Percentage = number

export interface ChargeTaskSetting {
  mode: ChargeMode
  from: Date
  till: Date
  power: number
  target?: number
  holdOff?: Percentage
}
