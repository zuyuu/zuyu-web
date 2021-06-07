import Head from "next/head";
import LogoAnimated from "../components/LogoAnimated";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zuyu</title>
      </Head>
      <div className="center">
        <LogoAnimated width={150} height={150} fill="hsla(0,0%,100%,.9)" />
      </div>
    </div>
  );
}
