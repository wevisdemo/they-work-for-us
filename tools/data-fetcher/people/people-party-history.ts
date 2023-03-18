export function getLatestPartyHistory(histories: PeoplePartyHistory[]): PeoplePartyHistory {
  histories.sort(
    (h1: PeoplePartyHistory, h2: PeoplePartyHistory) => {
      if (h1.established_date < h2.established_date) {
        return -1
      }
      if (h1.established_date > h2.established_date) {
        return 1
      }
      return 0
    }
  )

  return histories[histories.length - 1]
}

export type PeoplePartyHistory = {
  established_date: string
  party: {
    id: number,
    name: string,
    party_group: 'ร่วมรัฐบาล' | 'ฝ่ายค้าน' | null,
  } | null
}
