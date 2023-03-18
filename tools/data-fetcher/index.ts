import fs from "fs"
import yaml from "js-yaml"
import { NocoDB } from './nocodb'
import { parsePeople } from './people'
import { parseParties } from './parties'
import { parseVotelogs } from './votelogs'
import { parsePeopleVotes } from './people-votes'

const OUT_DIR = "src/contents"
const NOCODB_BASE_URL = "https://sheets.wevis.info"
const NOCODB_TABLE_PARTIES = "40065196-c978-4d7a-b3fb-fb84694383a7"
const NOCODB_TABLE_PEOPLE = "572c5e5c-a3d8-440f-9a70-3c4c773543ec"
const NOCODB_TABLE_VOTELOGS = "e06d1465-2786-4799-9c0f-a20f4cf71ec4"
const nocoClient = new NocoDB(NOCODB_BASE_URL)

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR)
  }

  console.log("Fetching parties...")
  fs.writeFileSync(
    `${OUT_DIR}/party.yaml`,
    yaml.dump(await parseParties(nocoClient, NOCODB_TABLE_PARTIES)),
  )
  
  console.log("Fetching people...")
  fs.writeFileSync(
    `${OUT_DIR}/people.yaml`,
    yaml.dump(await parsePeople(nocoClient, NOCODB_TABLE_PEOPLE))
  )

  console.log("Fetching votelogs...")
  fs.writeFileSync(
    `${OUT_DIR}/votelog.yaml`,
    yaml.dump(await parseVotelogs(nocoClient, NOCODB_TABLE_VOTELOGS))
  )

  console.log("Fetching people-votes...")
  fs.writeFileSync(
    `${OUT_DIR}/people_vote.yaml`,
    yaml.dump(await parsePeopleVotes(nocoClient, NOCODB_TABLE_PEOPLE))
  )
}

main()
