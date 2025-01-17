"use client"
import * as React from "react";
import dynamic from "next/dynamic";
// import Image from 'next/image'
import Link from "next/link";
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
import { createElement as h } from "react";

import PageMain from "./PageMain";
import PageHead from "./ui/PageHead";
import Pageinfo from "./ui/Pageinfo";
// import Footer from "../components/ui/Footer";
// import { Loading } from "../components/Loading";
// import { Suspense } from "react";
const Code = dynamic(async () => {
  return function CodeSwitch(props) {
    switch (getTextContent(props["block"]["properties"]["language"])) {

      default:
        return h(
          dynamic(() => {
            return import('react-notion-x/build/third-party/code').then(async module => {
              // Additional prismjs syntax
              await Promise.all([
                import('prismjs/components/prism-markup-templating'),
                import('prismjs/components/prism-markup'),
                import('prismjs/components/prism-bash'),
                import('prismjs/components/prism-c'),
                import('prismjs/components/prism-cpp'),
                import('prismjs/components/prism-csharp'),
                import('prismjs/components/prism-docker'),
                import('prismjs/components/prism-java'),
                import('prismjs/components/prism-js-templates'),
                import('prismjs/components/prism-coffeescript'),
                import('prismjs/components/prism-diff'),
                import('prismjs/components/prism-git'),
                import('prismjs/components/prism-go'),
                import('prismjs/components/prism-graphql'),
                import('prismjs/components/prism-handlebars'),
                import('prismjs/components/prism-less'),
                import('prismjs/components/prism-makefile'),
                import('prismjs/components/prism-markdown'),
                import('prismjs/components/prism-objectivec'),
                import('prismjs/components/prism-ocaml'),
                import('prismjs/components/prism-python'),
                import('prismjs/components/prism-reason'),
                import('prismjs/components/prism-rust'),
                import('prismjs/components/prism-sass'),
                import('prismjs/components/prism-scss'),
                import('prismjs/components/prism-solidity'),
                import('prismjs/components/prism-sql'),
                import('prismjs/components/prism-stylus'),
                import('prismjs/components/prism-swift'),
                import('prismjs/components/prism-wasm'),
                import('prismjs/components/prism-yaml')
              ])
              return module.Code
            })
          }),
          props
        )
    }
  }
})
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
