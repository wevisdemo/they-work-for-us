import jsConvert from 'js-convert-case'
import { NocoDB } from '../nocodb'
import { guardStringToEmpty } from '../parsing-utils'
import { getLatestPartyHistory } from '../people/people-party-history'
import { splitPeopleName } from '../people/split-people-name'

export async function parsePeopleVotes(nocoClient: NocoDB, peopleViewId: string) {
  const peopleVotes = await nocoClient.getAllRow(peopleViewId, {
    'fields': 'Id,Title,Name,IsMp,IsSenator,IsCabinet,IsActive,PeopleVotes,PeoplePartyHistory',
    'nested[PeopleVotes][fields]': 'Status,Votelog',
    // TODO: What is the best number for this limit?
    'nested[PeopleVotes][limit]': '10000',
    'nested[PeoplePartyHistory][fields]': 'EstablishedDate,Party',
	})
  return peopleVotes.map(mapPeopleVote)
}

function mapPeopleVote(peopleVote: object) {
  const converted = jsConvert.snakeKeys(peopleVote, { recursive: true, recursiveInArray: true })

  // Number
  converted['id'] = guardStringToEmpty(converted['id'])

  // Special cases
  // Last name
  const { name, last_name } = splitPeopleName(converted['name'])
  converted['name'] = name
  converted['lastname'] = last_name
  // Party
  const partyHistory = getLatestPartyHistory(converted['people_party_history'])
  converted['party'] = partyHistory?.party?.name ?? ''
  delete converted['people_party_history']
  // Votelog
  converted['votelog'] = parsePeopleVoteRecords(converted['people_votes'])
  delete converted['people_votes']

  return converted
}

function parsePeopleVoteRecords(records: PeopleVote[]) {
  return records.map(record => ({
    key: guardStringToEmpty(record.votelog.id),
    value: mapPeopleVoteStatusToNumberBased(record.status), // Deprecated; Use status instead.
    status: record.status,
  }))
}

// Deprecated. Intented for backward compatible only. Please use "status" instead.
function mapPeopleVoteStatusToNumberBased(status: PeopleVoteStatus): string {
  switch (status) {
    case 'เห็นด้วย': return '1'
    case 'ไม่เห็นด้วย': return '2'
    case 'งดออกเสียง': return '3'
    case 'ไม่ลงคะแนนเสียง': return '4'
    case 'ไม่เข้าร่วมประชุม': return ''
    default: return '-'
  }
}

type PeopleVoteStatus = 'เห็นด้วย' | 'ไม่เห็นด้วย' | 'งดออกเสียง' | 'ไม่ลงคะแนนเสียง' | 'ไม่เข้าร่วมประชุม'

type PeopleVote = {
  status: PeopleVoteStatus,
  votelog: { id: number, title: string }
}