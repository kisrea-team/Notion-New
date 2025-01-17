/*
 * @Author: zitons
 * @Date: 2024-02-11 14:16:42
 * @LastEditors: vhko
 * @LastEditTime: 2024-04-03 20:55:58
 * @Description: 简介
 */
/* _  __  _
 *| |/ / (_)  ___   _ __    ___    __ _
 *| ' /  | | / __| | '__|  / _ \  / _` |
 *| . \  | | \__ \ | |    |  __/ | (_| |
 *|_|\_\ |_| |___/ |_|     \___|  \__,_|
 */
//  "use client";
import { Suspense } from "react";
import "../globals.css";
import Head from "../../components/ui/Head";
import Main from "../../components/Main";
import { getData } from "../../components/base/Node";
import SenderMain from "../../components/base/Sender";
import styles from "../../components/Home.module.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default async function Page({ params }) {
  const { slug } = await params;
  // const Main = dynamic(() => import("../../components/Main"));


  return (
    <main>
      <Suspense
        fallback={
          <><Head type={"文章"} /><div className="container mx-auto">
            <Main>

              <div className={styles.land} id="">
                <p>aaabbb
                </p>
              </div>
              <div className={`${styles.container}`}>
                <div className={styles.bar}>
                  <p className={styles.bar_text}>{<Skeleton />}</p>
                </div>
                <div className={styles.layout}>
                  <div className={styles.list_items}>


                    <a className={styles.posts_item} target="_blank">
                      <div className={styles.posts_heart}>

                      </div>
                      <div className={styles.posts_cover}>
                        <Skeleton count={10} className="h-full" />
                        {/* <div className={styles.time_down}>
          <p>test</p>
        </div> */}
                      </div>
                      <div className={styles.posts_info}>
                        <div className={styles.posts_secondary}>
                          <p className={styles.posts_title}>

                            <Skeleton />
                          </p>
                          <div className={styles.posts_wrapper}>
                            <p className={styles.date} style={{ width: 200 }}>
                              <Skeleton />
                            </p>
                            {/* <p className={styles.date}>{list.start_date}</p> */}
                            {/* <p>{list.type}</p> */}
                            <p><Skeleton /></p>
                            <div className={styles.post_tags}>
                              <Skeleton /> <Skeleton />


                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* {ListItems} */}

                  </div>
                  <aside className={styles.sticky}>
                    <div className={styles.auther_card}>


                      <div className={styles.auther_info}>

                        <div className={styles.auther_name}>
                          <p><Skeleton /></p>
                        </div>
                        <div className={styles.auther_avatar}>



                          <Skeleton circle={true} style={{ width: 100, height: 100 }} />

                        </div>
                        <p><Skeleton /></p>
                      </div>
                    </div>
                    <div className={styles.tags_card}>
                      <h1 className={styles.title}>标 签</h1>
                      <a href="./Timeline">abc</a>
                      <Skeleton />

                      <div className={styles.tags_item}><Skeleton count={3} /></div>
                    </div>
                  </aside>
                </div>
              </div>
              {/* <Footer name={<Skeleton />} /> */}
            </Main>
          </div></>
        }
      >

        {/* <p>{<Skeleton />}</p> */}
        < SenderMain slug={slug} />

      </Suspense >
    </main >
  );
}


