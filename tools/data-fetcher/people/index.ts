import jsConvert from 'js-convert-case'
import { NocoDB } from '../nocodb'
import { deleteArrayKeys, guardStringToEmpty, parseArray, parseNumber } from '../parsing-utils'
import { splitPeopleName } from './split-people-name'
import { getLatestPartyHistory } from './people-party-history'

export async function parsePeople(nocoClient: NocoDB, viewId: string) {
  const people = await nocoClient.getAllRow(viewId, {
		'nested[PeoplePartyHistory][fields]': 'Party,EstablishedDate',
    'nested[PeoplePartyHistory][nested][Party][fields]': 'Id,Name,PartyGroup',
	})
  return people.map(mapPerson)
}

function mapPerson(person: object) {
  const converted = jsConvert.snakeKeys(person, { recursive: true, recursiveInArray: true })

  // Strings
  converted['id'] = guardStringToEmpty(converted['id'])
  converted['mp_type'] = guardStringToEmpty(converted['mp_type'])
  converted['mp_province'] = guardStringToEmpty(converted['mp_province'])
  converted['mp_zone'] = guardStringToEmpty(converted['mp_zone'])
  converted['mp_list'] = guardStringToEmpty(converted['mp_list'])
  converted['senator_method'] = guardStringToEmpty(converted['senator_method'])
  converted['degree'] = guardStringToEmpty(converted['degree'])
  converted['bio'] = guardStringToEmpty(converted['bio'])

  // Numbers
  converted['asset'] = parseNumber(converted['asset'])
  converted['debt'] = parseNumber(converted['debt'])
  converted['vote'] = parseNumber(converted['vote'])

  // Arrays
  converted['cabinet_position'] = parseArray<string>('cabinet_position', converted)
  converted['ex_occupation'] = parseArray<string>('ex_occupation', converted)
  deleteArrayKeys('cabinet_position', converted)
  deleteArrayKeys('ex_occupation', converted)

  // Spacial cases
  // Last name
  const { name, last_name } = splitPeopleName(converted['name'])
  converted['name'] = name
  converted['lastname'] = last_name
  // Party
  const partyHistory = getLatestPartyHistory(converted['people_party_history'])
  converted['party'] = partyHistory?.party?.name ?? ''
  converted['party_group'] = partyHistory?.party?.party_group ?? ''
  // PeopleVotes
  delete converted['people_votes']
  
  return converted
}
