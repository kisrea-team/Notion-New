/*
 * @Author: zitons
 * @Date: 2024-02-07 17:58:50
 * @LastEditors:
 * @LastEditTime: 2024-02-08 12:16:32
 * @Description: 简介
 */
"use client"
import { useEffect } from "react";
import mermaid from "mermaid";
import { getTextContent } from "notion-utils";
import "../../app/globals.css";

export default function Mermaid(props) {
  const source = getTextContent(props["block"]["block"]["properties"]["title"]);
  // const container = useRef(null)
  // const [svg, setSVG] = useState('')

  // useEffect(() => mermaid.contentLoaded(), []);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose",
      htmlLabels: true,
    });
    mermaid.run({
      querySelector: ".someOtherClass",
    });
  });

  // useEffect(() => {
  //   document.getElementById({`mermaid-${props['block']['block']['id']}`})?.removeAttribute("data-processed");
  //   mermaid.contentLoaded();
  // }, [chart, props['block']['block']['id']);

  // useEffect(() => {
  //  // document.getElementById(`mermaid-${props['block']['block']['id']}`)?.removeAttribute("data-processed");
  //   mermaid.contentLoaded();

  // }, [props['block']['block'], source])

  return (
    <>
      <div
        className="mermaid w-full leading-normal justify-center someOtherClass"
        id={`mermaid-${props["block"]["block"]["id"]}`}
      >
        {source}
      </div>
    </>
    // <div
    //   ref={container}
    //   className="w-full leading-normal flex justify-center"
    //   dangerouslySetInnerHTML={{ __html: svg }}
    // />)
  );
}
