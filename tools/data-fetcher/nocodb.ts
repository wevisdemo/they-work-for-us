import { Api } from "nocodb-sdk"

interface PageInfo {
  totalRows: number
  page: number
  pageSize: number
  isFirstPage: boolean
  isLastPage: boolean
}

interface PublicViewResponse<T> {
  data: {
    list: T[]
    pageInfo: PageInfo
  }
}

export class NocoDB {
  api: Api<unknown>

  constructor(baseUrl: string) {
    this.api = new Api({
      baseURL: baseUrl,
    })
  }

  async getAllRow<T>(viewId: string): Promise<T[]> {
    let rows: T[] = []
    let currentPageInfo: PageInfo | undefined
  
    do {
      try {
        const {
          data: { list, pageInfo },
        }: PublicViewResponse<T> = await this.api.public.dataList(viewId, {
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
}
