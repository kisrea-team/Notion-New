/*
 * @Author: zitons
 * @Date: 2024-03-16 14:39:59
 * @LastEditors: 
 * @LastEditTime: 2024-03-16 14:40:43
 * @Description: 简介
 */
import { Notion } from "../../../lib/notion/getCoreData";

export async function GET(request: Request) {
  var obj = await new Notion();
  await obj.disp();
  const wiki = await obj.getWiki();

  return Response.json({ wiki });
}
