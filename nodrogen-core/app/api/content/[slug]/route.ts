/*
 * @Author: zitons
 * @Date: 2024-03-16 15:05:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-08-01 10:13:46
 * @Description: 简介
 */
import { Notion } from "../../../../lib/notion/getCoreData";
import { NotionAPI } from "notion-client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'a', 'b', or 'c'
  var obj = await new Notion();
  await obj.disp();
  const wiki = obj.getWiki();
  const data = await obj.getPost(slug);
  // const notion = new NotionAPI();
  const record_map = await obj.getContent(slug);



  return Response.json({ wiki, data, record_map });
}
