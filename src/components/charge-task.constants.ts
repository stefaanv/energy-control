import { keys, range, sort } from 'radash'

export const DAY_NAMES: Record<string, string> = {
  '-2': 'eergisteren',
  '-1': 'gisteren',
  '0': 'vandaag',
  '1': 'morgen',
  '2': 'overmorgen',
  '3': 'd+3',
  '4': 'd+4',
  '5': 'd+5',
}
export const NEW_ID = 999999
// select fields content
export const SELECT_HOURS = Array.from(range(0, 23)).map(h => h.toString())
export const SELECT_MINUTES = Array.from(range(0, 11, i => 5 * i)).map(m => m.toString())
export const SELECT_DAY_NAMES = sort(
  keys(DAY_NAMES).map(rd => ({
    key: rd,
    title: DAY_NAMES[rd],
  })),
  kv => parseInt(kv.key),
)
console.log('SELECT_DAY_NAMES', SELECT_DAY_NAMES)
