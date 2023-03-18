import jsConvert from 'js-convert-case'
import { NocoDB } from '../nocodb'
import { deleteArrayKeys, guardStringToEmpty, parseArray } from '../parsing-utils'

export async function parseVotelogs(nocoClient: NocoDB, viewId: string) {
  const votelogs = await nocoClient.getAllRow(viewId, {
    'nested[PeopleVotes][fields]': 'Status',
    'nested[PeopleVotes][limit]': '1000',
  })
  return votelogs.map(mapVotelog)
}

function mapVotelog(log: object) {
  const converted = jsConvert.snakeKeys(log)

  // Strings
  converted['id'] = guardStringToEmpty(converted['id'])

  // Arrays
  converted['document'] = parseArray('document', converted)
  deleteArrayKeys('document', converted)

  // Special cases
  // Passed
  converted['passed'] = converted['is_passed']
  delete converted['is_passed']

  // Counts
  // Approve
  converted['approve'] = countPeopleVotes(converted['people_votes'], 'เห็นด้วย')
  // Disapprove
  converted['disprove'] = countPeopleVotes(converted['people_votes'], 'ไม่เห็นด้วย')
  // Abstained
  converted['abstained'] = countPeopleVotes(converted['people_votes'], 'งดออกเสียง')
  // Absent
  converted['absent'] = countPeopleVotes(converted['people_votes'], 'ไม่ลงคะแนนเสียง')
  // TotalVoter
  converted['total_voter'] = converted['approve'] + converted['disprove'] + converted['abstained'] + converted['absent']
  // Special
  converted['special'] = countPeopleVotes(converted['people_votes'], 'ไม่เข้าร่วมประชุม')
  // TotalPeople
  converted['total_people'] = converted['total_voter'] + converted['special']
  delete converted['people_votes']

  return converted
}

function countPeopleVotes(peopleVotes: { Status: string }[], value: string) {
  return peopleVotes.filter(v => v.Status === value).length
}