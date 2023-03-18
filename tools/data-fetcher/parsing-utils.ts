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

  /**
   * Parse array members in format of {prefix}{number}[internal-key] e.g. document0title, cabinet_position0
   * @param {string} prefix Prefix of the array members. e.g. document, cabinet_position
   * @param {string} obj Targeted object.
   * @returns {array} Can be an array of objects or primitives. e.g. [{ title: 'doc title' }], ['some position']
   */
export function parseArray<T>(prefix: string, obj: object): T[] {
  const arrayKeys = Object
    .keys(obj)
    .filter(k => k.startsWith(prefix))

  // Match prefix + numbers
  const re = new RegExp(`^${prefix}[0-9]*`, 'g')
  const objectMaps = new Map()

  arrayKeys.forEach((key) => {
    if (obj[key] === null) {
      return
    }

    const index = key.match(re)[0].replace(prefix, '')

    // Possible an object member (first depth... for now)
    const internalKey = key.replace(prefix + index, '')

    if (objectMaps.has(index)) {
      objectMaps.get(index)[internalKey] = obj[key]
    } else {
      if (internalKey === '') {
        objectMaps.set(index, obj[key])
      } else {
        const newObject = {}
        newObject[internalKey] = obj[key]
        objectMaps.set(index, newObject)
      }
    }
  })

  return [...objectMaps.values()]
}

export function deleteArrayKeys(prefix: string, obj: object) {
  Object
    .keys(obj)
    .filter(k => k.startsWith(prefix) && k !== prefix)
    .forEach(k => delete obj[k])
}
