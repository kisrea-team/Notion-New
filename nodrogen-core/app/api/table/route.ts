/*
 * @Author: zitons
 * @Date: 2024-08-01 09:57:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-08-01 10:31:42
 * @Description: 简
 */

import { NotionAPI } from "notion-client";
import { idToUuid, getTextContent, getDateValue } from "notion-utils";

async function getPageProperties(id: any, block: any, schema: any) {
  const { NOTION_ACCESS_TOKEN } = process.env;

  const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });

  const rawProperties = Object.entries(block?.[id]?.value?.properties || []);
  const excludeProperties = ["date", "select", "multi_select", "person"];
  const properties = {};
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val]: any = rawProperties[i];
    properties["id"] = id;
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val);
    } else {
      switch (schema[key]?.type) {
        case "date": {
          const dateProperty = getDateValue(val);
          delete dateProperty.type;
          properties[schema[key].name] = dateProperty;
          break;
        }
        case "select":
        case "multi_select": {
          const selects = getTextContent(val);
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(",");
          }
          break;
        }
        case "person": {
          const rawUsers = val.flat();
          const users = [];
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0];
              const res = await client.getUsers(userId);
              const resValue =
                res?.["recordMapWithRoles"]?.notion_user?.[userId[1]]?.value;
              const user = {
                id: resValue?.id,
                name: resValue?.name,
                first_name: resValue?.given_name,
                last_name: resValue?.family_name,
                profile_photo: resValue?.profile_photo,
              };
              users.push(user);
            }
          }
          properties[schema[key].name] = users;
          break;
        }
        default:
          break;
      }
    }
  }

  return properties;
}

export async function GET() {
  const { NOTION_ACCESS_TOKEN } = process.env;

  let client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });
  // const id = idToUuid("98f7af9c0c8f403cab2e918b4aa630c0");
  const id = idToUuid("8833c76cac824472af327eeb83f4e349");
  //视图号
  try {
    let response = await client.getPage(id);

    //获取所有pageid
    const views = Object.values(response.collection_query)[0] as any;
    //表格次序
    // console.log(response);
    let pageIds = [];
    let postsT: any[] = [];
    let postsF: any[] = [];
    const pageSet = new Set();
    const posts = new Set();
    Object.values(views).forEach((view: any) => {
      view["collection_group_results"]?.["blockIds"]?.forEach((id: any) => {
        pageSet.add(id), posts.add(response.block[id]);
      });
    });
    pageIds = [...pageSet];

    // console.log(pageIds);
    let data = [];

    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i];
      const properties =
        (await getPageProperties(
          id,
          response.block,
          Object.values(response.collection)[0]?.["value"].schema
        )) || null;
      data.push(properties);
    }
    console.log(data)
    // 处理结果
  } catch (error) {
    // 处理错误
    console.log(error);
  }

  return Response.json({});
}
