/*
 * @Author: zitons
 * @Date: 2024-02-22 21:10:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-23 11:14:42
 * @Description: 简介
 */
export async function getData(to) {

  console.log(`run ${process.env.NEXT_PUBLIC_PROTOCOL + process.env.NEXT_PUBLIC_BLOG + "/" + to + "/"}`)

  const data = await await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL + process.env.NEXT_PUBLIC_BLOG + "/" + to + "/"}`)
  const posts = await data.json()
  return posts;
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  // return res.json()
}