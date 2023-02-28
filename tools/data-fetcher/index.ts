import { Api } from "nocodb-sdk"

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
  console.log(await getAllRow(NOCODB_TABLE_PARTIES))
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
