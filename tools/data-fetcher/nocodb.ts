import { Api, RequestParams } from "nocodb-sdk"

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

// Reference: https://docs.nocodb.com/developer-resources/rest-apis#query-params
export type QueryParams = {
	limit?: number;
	offset?: number;
	where?: string;
	sort?: string;
	fields?: string;
	shuffle?: 1 | 0;
} & {
	[key: string]: string | number;
};

export class NocoDB {
  api: Api<unknown>

  constructor(baseUrl: string) {
    this.api = new Api({
      baseURL: baseUrl,
    })
  }

  async getAllRow<T>(viewId: string, query?: QueryParams): Promise<T[]> {
    let rows: T[] = []
    let currentPageInfo: PageInfo | undefined
  
    do {
      try {
        const {
          data: { list, pageInfo },
        }: PublicViewResponse<T> = await this.api.public.dataList(viewId, {
          ...query,
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
