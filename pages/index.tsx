import { NextSeo } from "next-seo";
import PhotoCover from "../components/cover/PhotoCover";
import SampleText from "../components/home/sampleText";
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
      <PhotoCover src="/izone.webp" imageOpacity={0.7}>
        <LogoAnimated height={150} width={150} fill="var(--white)" />
      </PhotoCover>
      <div className="globalContainer">
        <SampleText />
      </div>
    </div>
  );
}
