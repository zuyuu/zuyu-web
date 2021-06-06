import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zuyu</title>
      </Head>
      <div className="center">
        <img src="/zuyu_logo.png" width={150} />
      </div>
    </div>
  );
}
