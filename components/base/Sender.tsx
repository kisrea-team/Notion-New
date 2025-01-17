/*
 * @Author: zitons
 * @Date: 2024-02-20 10:39:14
 * @LastEditors: vhko
 * @LastEditTime: 2024-07-20 21:01:27
 * @Description: 简介
 */
import Home from "../../components/Home";
import Head from "../../components/ui/Head";
import Main from "../../components/Main";
import { getData } from "../../components/base/Node";

export default async function SenderMain(props) {
    const d = await getData("api/post/" + props.slug);
    return (
        <><Head title={d.wiki["name"]} type={d.wiki["type"]} /><div className="container mx-auto">
            <Main>
                <Home currentPage={props.slug || 1} data={d} api={""} />
            </Main>
        </div></>
    );
}


