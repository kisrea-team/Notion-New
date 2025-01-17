/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: vhko
 * @LastEditTime: 2024-07-20 21:03:31
 * @LastEditors: vhko
 * @LastEditTime: 2024-05-12 14:33:56
 * @Description: 简介
 */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./Head.module.css";
import style from "./ui.module.css";
import ThemeSwitcher from "./ThemeSwitch";
import Dropdown from "./Dropdown";
// import Timeline from "./ui/timeline";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Head(props) {
   const btn = () => {
      if (document.getElementById("land").classList.contains("menu")) {
         document.getElementById("land").classList.remove("menu");
      } else {
         document.getElementById("land").classList.add("menu");
      }
   };

   const hello = "hello"
   return (
      <header className={styles.header} id="scrolled">
         {/* <Skeleton /> */}

         {/* <div className={styles.land} id="land">
            <p>sadasd</p>
         </div> */}



         {/* {props.title || <Skeleton count={10} height={11} />} */}
         {/* {<Skeleton />} */}
         {/* {hello} */}
         <div className={styles.title} style={{ width: 100, color: "pink" }}>{props.title || <Skeleton />}</div>


         <div className={styles.grow}></div>
         {/* <div id="acc">
               <Dropdown title={props.title} type={props.type} />
            </div> */}
         <div className={`${style.menu} relative`}>
            <div>
               <a href="/achieve">
                  <button className={style.type_btn}>
                     <p>归档</p>
                     {/* <FaAngleDown /> */}
                  </button>
               </a>
            </div>

            <div>
               <button className={style.type_btn}>
                  <p>分类1</p>
               </button>
            </div>
         </div>
         <div className={styles.grow}></div>
         <div className={styles.right}>
            <ThemeSwitcher />
         </div>
         <div className={styles.btn_menu} onClick={btn}>
         </div>
      </header>
   );
}



