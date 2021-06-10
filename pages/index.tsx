import { NextSeo } from "next-seo";
import VideoCover from "../components/cover/VideoCover";
import LogoAnimated from "../components/LogoAnimated";
import Menu from "../components/menu/Menu";

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
              alt: "Zuyu logo",
            },
          ],
          site_name: "Zuyu",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <Menu />
      <VideoCover />
    </div>
  );
}
