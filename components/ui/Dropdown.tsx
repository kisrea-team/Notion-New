/*
 * @Author: vhko
 * @Date: 2024-03-13 15:09:54
 * @LastEditors: vhko
 * @LastEditTime: 2024-07-14 09:21:57
 * @FilePath: \NoDrogen\components\ui\Dropdown.tsx
 */
// import { useState, useRef, useEffect } from "react";

import style from "./ui.module.css";
import { FaAngleDown } from "react-icons/fa6";
import Archive from "../../app/(archive)/achieve/page"
export default async function Dropdown(props) {
   const aaa = () => {
      if (document.getElementById("menu").classList.contains("aaa")) {
         document.getElementById("menu").classList.remove("aaa");
      }
      else {
         document.getElementById("menu").classList.add("aaa");
      }
   };
   let typelist;
   if (props.type == undefined) {
      console.log(null);
      typelist = ["null"];
   } else {
      typelist = props.type.map((type: string) => (
         <div>
            <a
               href={"/type/" + type + "/1"}
               className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
               role="menuitem"
            >
               {type}
            </a>
         </div>
      ));
   }
   return (
      <div className={`${style.menu} relative`}>
         <div>
            <a href="/achieve">
               <button onClick={aaa} className={style.type_btn}>
                  <p>归档</p>
                  {/* <FaAngleDown /> */}
               </button>
            </a>
            <div
               id="menu"
               className={`${style.type_menu} hidden absolute end-0 z-10 w-auto rounded-md border border-gray-100 bg-white shadow-lg`}
               role="menu"
            >
               <div className="p-2">{typelist}</div>
            </div>
         </div>

         <div>
            <button onClick={aaa} className={style.type_btn}>
               <p>分类1</p>
               <FaAngleDown />
            </button>
            <div
               id="menu"
               className={`${style.type_menu} hidden absolute end-0 z-10 w-auto rounded-md border border-gray-100 bg-white shadow-lg`}
               role="menu"
            >
               <div className="p-2">{typelist}</div>
            </div>
         </div>
      </div>
   );
}
