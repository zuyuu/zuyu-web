import { NextSeo } from "next-seo";
import PhotoCover from "../components/cover/PhotoCover/PhotoCover";
import HomeComponent from "../components/home/HomeComponent";
import LogoAnimated from "../components/LogoAnimated";
import Menu from "../components/menu/Menu/Menu";

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
      <PhotoCover
        src="/izone.webp"
        alt="Picture of Korean pop group IZ*ONE"
        imageOpacity={0.7}
      >
        <LogoAnimated height={150} width={150} fill="var(--white)" />
      </PhotoCover>
      <HomeComponent />
    </div>
  );
}
