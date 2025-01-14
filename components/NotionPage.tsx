"use client"
import * as React from "react";
import dynamic from "next/dynamic";
// import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getTextContent } from "notion-utils";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import TweetEmbed from "react-tweet-embed";
import Image from 'next/image' // or import Image from 'next/legacy/image' if you use legacy Image

import "react-notion-x/src/styles.css";
import "../components/notion.css";
import "../app/globals.css";
import 'prismjs/themes/prism-tomorrow.css'
// import styles from "../components/ui/styles.module.css";
import 'katex/dist/katex.min.css'

import PageMain from "./PageMain";
import PageHead from "./ui/PageHead";
import Pageinfo from "./ui/Pageinfo";
// import Footer from "../components/ui/Footer";
import { Loading } from "../components/Loading";
// import { Suspense } from "react";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: <Loading />,
  };
}
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
// const Equation = dynamic(() =>
//    import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
// )
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
// const Pdf = dynamic(
//   () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
//   {
//     ssr: false
//   }
// )
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal)
);

const Tweet = ({ id }: { id: string }) => {
  return <TweetEmbed tweetId={id} />;
};

const Twikoo = dynamic(() =>
  import("../components/Twikoo").then((m) => m.Twikoo)
);

export const NotionPage = ({
  recordMap,
  rootPageId,
  rootDomain,
  title,
  type,
  data,
  // icon,
}: {
  recordMap: ExtendedRecordMap;
  previewImagesEnabled?: boolean;
  rootPageId?: string;
  rootDomain?: string;
  title: string;
  type: Object;
  data: Object;
  // icon: string;
}) => {
  //   const footer = React.useMemo(() => <Footer />, []);
  if (!recordMap) {
    return null;
  }
  // if (typeof window !== "undefined") {
  //   const keys = Object.keys(recordMap?.block || {});
  //   const block = recordMap?.block?.[keys[0]]?.value;
  //   const g = window as any;
  //   g.recordMap = recordMap;
  //   g.block = block;
  // }
  return (
    <>
      {/* <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      > */}
      <PageMain>
        <PageHead type={type} />
        <Pageinfo title={title} data={data} />
        <NotionRenderer
          recordMap={recordMap}
          fullPage={true}
          // darkMode={true}
          rootDomain={rootDomain}
          rootPageId={rootPageId}
          previewImages={true}
          components={{
            nextImage: Image, // or nextLegacyImage: LegacyImage,
            nextLink: Link,
            Code,
            Collection,
            Equation,
            // Pdf,
            Modal,
            Tweet,
          }}
        />
        <div className="twikoos">
          <Twikoo />
        </div>
        {/* <Footer name={"name"} /> */}
      </PageMain>
      {/* </Suspense > */}
    </>
  );
};
