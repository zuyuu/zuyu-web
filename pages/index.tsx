import Head from "next/head";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zuyu</title>
      </Head>
      <div className="center">
        <Logo width={150} height={150} fill="hsla(0,0%,100%,.9)" />
      </div>
    </div>
  );
}
