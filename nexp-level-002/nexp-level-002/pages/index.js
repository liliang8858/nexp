import Head from "next/head";
import Leftm from "../components/leftm";
import Body from "../components/body";
import IndexStyle from "../components/index.module.css"

export default function Home() {
  return (
    <>
      <div className={IndexStyle.main}>
        <Leftm />
        <Body />
      </div>
    </>
  );
}
