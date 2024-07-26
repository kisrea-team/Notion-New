/*
 * @Author: zitons
 * @Date: 2024-03-12 21:48:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-26 19:56:38
 * @Description: 简介
 */

import { Suspense } from "react";
import { getData } from "../../../../components/base/Node";

import "../../../globals.css";
import dynamic from "next/dynamic";
import style from "./page.module.css";
import ReactDOM from "react-dom";
import Pagination from "../../../../components/ui/Pagination";

export default async function Page({ params }) {
  const { slug } = params;
  const d = await getData("api/type/1/" + slug);

  const years = d.posts["2077"];
  console.log(years);

  let data = [1, 2, 3];
  const toList = (list) => {
    let ret = [];
    list.forEach((element) => {
      ret.push(<li>{element}</li>);
    });
    return ret;
  };

  let el = <ul>{toList(data)}</ul>;

  let ListItems;
  let yearsList: any = [];
  let i = 0;
  for (let key in years) {
    yearsList[i] = key;
    i++;
    // console.log(key, years[key]);
    // ListItems = d.posts[key].map((list) => (
    //   <ul className={style.list}>
    //     <h2 className={style.ul_t}>{list.title}</h2>
    //     <div>
    //       <a href="#">
    //         <li>{list.date.start_date}</li>
    //       </a>
    //       <a href="#">
    //         <li>{list.dee}</li>
    //       </a>
    //     </div>
    //   </ul>
    // ));
  }
  console.log(yearsList);
  const test = [
    {
      id: 0,
      name: "七月",
      dee: "这是个文章？",
    },
    {
      id: 1,
      name: "六月",
      dee: "这是个文章！",
    },
    {
      id: 2,
      name: "五月",
      dee: "这是个文章!!",
    },
    {
      id: 3,
      name: "四月",
      dee: "这是个文章？",
    },
    {
      id: 4,
      name: "三月",
      dee: "这是个文章？!",
    },
  ];

  return (
    <main>
      <div>
        <p className={style.text}>归档</p>
        <div className={style.timeline}>
          <div>
            {yearsList.map((year) => (
              <div>
                <p className={style.t_ime}>{year}</p>
                <ul>
                  {
                    (ListItems = d.posts[year].map((list) => (
                      <ul className={style.list}>
                        <h2 className={style.ul_t}>{list.title}</h2>
                        <div>
                          <a href="#">
                            <li>{list.date.start_date}</li>
                          </a>
                          <a href="#">
                            <li>{list.dee}</li>
                          </a>
                        </div>
                      </ul>
                    )))
                  }
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex w-full justify-center">
                     <Pagination
                        pageNumber={2} // 100
                        currentPage={slug} // 1
                        pageSize={10} // 10
                        onPageChange={1}
                        api=""
                     />
        </div>
      </div>
    </main>
  );
}
