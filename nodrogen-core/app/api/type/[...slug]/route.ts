/*
 * @Author: zitons
 * @Date: 2024-03-16 19:59:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-16 20:18:26
 * @Description: 简介
 */
// import { Notion } from "../../../../lib/notion/getCoreData";

// export async function GET({ params }: { params: { slug: string[] } }) {
//   const type = params.slug[0];
//   const slug = params.slug[1];
//   // var obj = await new Notion();
//   // await obj.disp();
//   // const wiki = await obj.getWiki();
//   // const posts = await obj.getPosts(slug, type);
//   // const page_number = obj.getPage();
//   // const main_user = obj.mainUser;
//   // const tags = obj.tagObj;
//   // return Response.json({ main_user, wiki, page_number, tags, posts });

// }

import { Notion } from "../../../../lib/notion/getCoreData";

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const type = await params.slug[0]; // 'a', 'b', or 'c'
  const slug = await params.slug[1]; // 'a', 'b', or 'c'

  var obj = await new Notion();
  await obj.disp();
  const wiki = obj.getWiki();
  const posts = await obj.getPosts(slug, type);
  const page_number = obj.getPage();
  const main_user = obj.mainUser;
  const tags = obj.tagObj;
  return Response.json({ main_user, wiki, page_number, tags, posts });
}
