import { NotionAPI } from 'notion-client'

import {
  type ExtendedRecordMap,
  type SearchParams,
  type SearchResults
} from 'notion-types'

import { getPreviewImageMap } from './preview-images'

const notion = new NotionAPI()


export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)


  const previewImageMap = await getPreviewImageMap(recordMap)
    ; (recordMap as any).preview_images = previewImageMap


  return recordMap
}

export async function search(params: SearchParams): Promise<SearchResults> {
  if ('search' in notion) {
    return notion.search(params)
  } else {
    throw new Error('Notion API does not support search')
  }
}
