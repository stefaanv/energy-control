export type ChargeMode = 'charge' | 'discharge'
export type Percentage = number

export interface ChargeTaskSetting {
  id: number
  mode: ChargeMode
  dateRelative: number
  from: string
  till: string
  power: number
  target?: number
  holdOff?: Percentage
}
