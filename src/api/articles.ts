import { AxiosResponse } from 'axios'
import request from 'src/utils/request'
import { IArticleInfo } from 'src/types/articles'

export const getArticles = (): Promise<AxiosResponse<IArticleInfo[]>> => {
  const url = '/posts'
  return request.get(url)
}
