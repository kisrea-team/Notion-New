/*
 * @Author: zitons
 * @Date: 2024-03-16 14:27:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-16 19:40:30
 * @Description: 简介
 */
import { Notion } from "../../../../lib/notion/getCoreData";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'a', 'b', or 'c'
  var obj = await new Notion();
  await obj.disp();
  const wiki = await obj.getWiki();
  const posts = await obj.getPosts(slug);
  const page_number = obj.getPage();
  const main_user = obj.mainUser;
  const tags = obj.tagObj;
  return Response.json({ main_user, wiki, page_number, tags, posts });
}
