/*
 * @Author: zitons
 * @Date: 2024-03-12 21:48:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-07-17 20:44:47
 * @Description: 简介
 */
import { getData } from "../../../components/base/Node";
import { Suspense } from "react";
import "../../globals.css";
import Home from "../../../components/Home";
import { Loading } from "../../../components/Loading";
import dynamic from "next/dynamic";
import Head from "../../../components/ui/Head";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const type = params.slug[0];
  const slug = params.slug[1];
  const Main = dynamic(() => import("../../../components/Main"), {
    ssr: false,
  });
  const d = await getData("api/type/" + type + "/" + slug);

  return (
    <main>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Head
          title={"筛选：以“" + decodeURI(type) + "”分类。"}
          type={d.wiki["type"]}
        />
        <div className="container mx-auto">
          <Main>
            <Home currentPage={slug || 1} data={d} api={"/type/" + type}/>
          </Main>
        </div>
      </Suspense>
    </main>
  );
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const type = params.slug[0];
  const slug = params.slug[1];
  let icon;
  const d = await getData("api/type/" + type + "/" + slug);
  icon = d.wiki["icon"];
  if (icon.startsWith("http") <= 0) {
    icon =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
      icon +
      "</text></svg>";
  }
  return {
    title: d.wiki["name"],
    icons: icon,
    description: d.wiki["description"],
  };
}
