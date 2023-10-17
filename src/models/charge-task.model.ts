export type ChargeMode = 'charge' | 'discharge'
export type Percentage = number

export interface ChargeTask {
  id: number
  mode: ChargeMode
  dateRelative?: number
  date: Date
  from: number
  till: number
  power: number
  target?: number
  holdOff?: Percentage
}
