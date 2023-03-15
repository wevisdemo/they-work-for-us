import fs from "fs"
import yaml from "js-yaml"
import jsConvert from "js-convert-case"
import { NocoDB } from './nocodb'

const OUT_DIR = "src/contents"
const NOCODB_BASE_URL = "https://sheets.wevis.info"
const NOCODB_TABLE_PARTIES = "40065196-c978-4d7a-b3fb-fb84694383a7"

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR)
  }

  const nocoClient = new NocoDB(NOCODB_BASE_URL)

  console.log("Fetching parties...")
  fs.writeFileSync(`${OUT_DIR}/party.yaml`, yaml.dump(await parseParties(nocoClient)))
}

async function parseParties(nocoClient: NocoDB) {
  const parties = await nocoClient.getAllRow(NOCODB_TABLE_PARTIES)
  return parties.map(party => jsConvert.snakeKeys(party))
}

main()
