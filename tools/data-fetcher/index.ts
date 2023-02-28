import fs from "fs"
import yaml from "js-yaml"
import { Api } from "nocodb-sdk"
import jsConvert from "js-convert-case"

const OUT_DIR = "src/contents"
const NOCODB_BASE_URL = "https://sheets.wevis.info"
const NOCODB_TABLE_PARTIES = "40065196-c978-4d7a-b3fb-fb84694383a7"

interface PageInfo {
  totalRows: number
  page: number
  pageSize: number
  isFirstPage: boolean
  isLastPage: boolean
}

interface PublicViewResponse {
  data: {
    list: unknown[]
    pageInfo: PageInfo
  }
}

const api = new Api({
  baseURL: NOCODB_BASE_URL,
})

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR)
  }

  console.log("Fetching parties...")
  fs.writeFileSync(`${OUT_DIR}/party.yaml`, yaml.dump(await parseParties()))
}

async function parseParties() {
  const parties = await getAllRow(NOCODB_TABLE_PARTIES)

  return parties.map(party => jsConvert.snakeKeys(party))
}

async function getAllRow(viewId: string): Promise<unknown[]> {
  let rows = []
  let currentPageInfo: PageInfo

  do {
    try {
      const {
        data: { list, pageInfo },
      }: PublicViewResponse = await api.public.dataList(viewId, {
        limit: "500",
        offset: `${
          currentPageInfo ? currentPageInfo.page * currentPageInfo.pageSize : 0
        }`,
      })

      rows.push(...list)
      currentPageInfo = pageInfo
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  } while (!currentPageInfo?.isLastPage)

  return rows
}

main()
