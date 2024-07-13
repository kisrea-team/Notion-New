/*
 * @Author: zitons
 * @Date: 2024-03-12 21:48:14
 * @LastEditors: vhko
 * @LastEditTime: 2024-07-13 22:37:49
 * @Description: 简介
 */

import { Suspense } from "react";
import "../../globals.css";
import dynamic from "next/dynamic";
import style from "./page.module.css";
export default async function Page() {

   const test = [{
      id: 0,
      name: '七月',
      dee: '这是个文章？',
   }, {
      id: 1,
      name: '六月',
      dee: '这是个文章！',
   }, {
      id: 2,
      name: '五月',
      dee: '这是个文章!!',
   }, {
      id: 3,
      name: '四月',
      dee: '这是个文章？',
   }, {
      id: 4,
      name: '三月',
      dee: '这是个文章？!',
   }];
   const ListItems = test.map(list => (
      <div className={style.list}>
         <p>{list.name}</p>
         <p>{list.dee}</p>
      </div>
   ));
   return (
      <main>
         <div className={style.archive}>
            <p className={style.text}>归档</p>
            <div className={style.timeline}>
               <p className={style.t_ime}>2024</p>
               <div>{ListItems}</div>
            </div>

         </div>
      </main>
   );
}
