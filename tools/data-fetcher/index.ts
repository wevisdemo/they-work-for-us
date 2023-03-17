import fs from "fs"
import yaml from "js-yaml"
import jsConvert from "js-convert-case"
import { NocoDB } from './nocodb'
import { parsePeople } from './people'
import { parseParties } from './parties'

const OUT_DIR = "src/contents"
const NOCODB_BASE_URL = "https://sheets.wevis.info"
const NOCODB_TABLE_PARTIES = "40065196-c978-4d7a-b3fb-fb84694383a7"
const NOCODB_TABLE_PEOPLE = "572c5e5c-a3d8-440f-9a70-3c4c773543ec"

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
}

main()
