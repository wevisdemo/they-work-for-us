import jsConvert from 'js-convert-case'
import { NocoDB } from '../nocodb'
import { guardStringToEmpty, parseImages, parseNumber } from '../parsing-utils'

export async function parseParties(nocoClient: NocoDB, viewId: string) {
  const parties = await nocoClient.getAllRow(viewId)

  return parties.map(mapParty)
}

function mapParty(party: object) {
  const converted = jsConvert.snakeKeys(party)

  // Strings
  converted['id'] = guardStringToEmpty(converted['id'])
  converted['color'] = guardStringToEmpty(converted['color'])
  converted['party_type'] = guardStringToEmpty(converted['party_type'])
  converted['party_group'] = guardStringToEmpty(converted['party_group'])
  converted['dissolved_date'] = guardStringToEmpty(converted['dissolved_date'])
  converted['speaker'] = guardStringToEmpty(converted['speaker'])
  converted['first_deputy_speaker'] = guardStringToEmpty(converted['first_deputy_speaker'])
  converted['second_deputy_speaker'] = guardStringToEmpty(converted['second_deputy_speaker'])
  converted['whip'] = guardStringToEmpty(converted['whip'])
  converted['opposition_leader'] = guardStringToEmpty(converted['opposition_leader'])
  converted['party_leader'] = guardStringToEmpty(converted['party_leader'])
  converted['party_secretary'] = guardStringToEmpty(converted['party_secretary'])
  converted['website'] = guardStringToEmpty(converted['website'])
  converted['facebook'] = guardStringToEmpty(converted['facebook'])
  converted['twitter'] = guardStringToEmpty(converted['twitter'])

  // Numbers
  converted['party_ordinal'] = parseNumber(converted['party_ordinal'])

  // Images
  converted['images'] = parseImages(converted['images'])

  // Spacial cases
  // EnName
  converted['en'] = {
    name: converted['en_name']
  }
  delete converted['en_name']
  
  return converted
}
