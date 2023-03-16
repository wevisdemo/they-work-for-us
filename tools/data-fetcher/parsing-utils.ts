export function guardStringToEmpty(input: string | any): string {
  if (!input) {
    return ''
  }
  return String(input)
}

export function parseNumber(input: string | any): number | null {
  if (typeof input !== 'string') {
    return null
  }
  return Number(input.trim())
}

export function parseArray<T>(prefix: string, obj: object): T[] {
  return Object
    .keys(obj)
    .filter(k => k.startsWith(prefix))
    .sort()
    .map(key => obj[key])
}

export function deleteArrayKeys(prefix: string, obj: object) {
  Object
    .keys(obj)
    .filter(k => k.startsWith(prefix) && k !== prefix)
    .forEach(k => delete obj[k])
}