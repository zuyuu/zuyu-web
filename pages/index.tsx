import { NextSeo } from "next-seo";
import LogoAnimated from "../components/LogoAnimated";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Zuyu"
        description="We do things with AI."
        openGraph={{
          title: "Zuyu",
          description: "We do things with AI.",
          images: [
            {
              url: "/zuyu_og_image.png",
              alt: "Zuyu logo"
            },
          ],
          site_name: "Zuyu",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <div className="center">
        <LogoAnimated width={150} height={150} fill="hsla(0,0%,100%,.9)" />
      </div>
    </div>
  );
}
