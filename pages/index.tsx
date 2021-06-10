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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut arcu
      libero. Phasellus interdum nulla sed metus aliquet tempor. Nullam ac
      mollis ligula, et congue metus. Vivamus ante magna, aliquet vitae arcu a,
      aliquam mollis justo. Ut efficitur faucibus mauris, id semper tortor
      cursus at. Nullam a bibendum libero. Vivamus aliquam velit fringilla
      laoreet tristique. Nullam dignissim consequat metus, quis facilisis mi
      consectetur in. Fusce et dictum sem. Phasellus augue magna, dictum sit
      amet pulvinar in, convallis nec nisi. Donec viverra metus sit amet nisl
      egestas pellentesque. Nunc blandit mauris sed orci sodales commodo. Ut
      eget lobortis enim. Fusce et risus velit. Praesent vel gravida nunc, a
      commodo mauris. Phasellus sit amet pharetra dolor. Sed vitae erat laoreet,
      aliquet mauris vel, tristique justo. Etiam suscipit egestas dignissim.
      Nullam lacinia faucibus pulvinar. Praesent lacus mi, volutpat imperdiet
      dolor a, vehicula tincidunt nunc. Nam non lacus sodales, consectetur justo
      in, posuere magna. Pellentesque fringilla nisl in dignissim pellentesque.
      Curabitur fringilla efficitur varius. Morbi molestie tellus in orci
      dignissim vulputate. Donec sed lacus sit amet arcu pellentesque
      pellentesque. Nulla tincidunt tincidunt varius. Sed quis ex id purus
      euismod ornare. Nulla facilisi. Maecenas egestas, velit at vulputate
      auctor, sem metus commodo enim, sit amet malesuada lectus erat vel tellus.
      Mauris varius leo lacus, eu maximus diam tincidunt eu. Nunc nec dolor ac
      quam accumsan egestas. Cras sit amet urna eros. Maecenas accumsan pulvinar
      ante. Vestibulum in nunc et felis vehicula viverra id in nunc. Cras
      pulvinar, leo ut hendrerit semper, lorem elit congue purus, in lobortis
      diam lorem vitae urna. Cras viverra mattis dolor, sit amet egestas nisi
      porta mattis. Ut rhoncus odio ac auctor ultricies. Maecenas nec varius
      risus. Pellentesque tincidunt mauris vitae justo vestibulum imperdiet. In
      porta, nulla a tincidunt maximus, ligula tellus gravida purus, eu iaculis
      tortor purus posuere dolor. Proin pretium egestas elit, vitae dignissim
      libero. Praesent maximus eros a ullamcorper aliquam. Morbi sed pulvinar
      ante. Donec sagittis lacus et erat hendrerit accumsan. Aenean placerat
      aliquam nibh, ac pharetra odio ornare a. Fusce malesuada, nulla nec
      ultrices pulvinar, dui tortor maximus ante, sit amet tincidunt diam neque
      vel nulla. Nullam ullamcorper quam non nulla tincidunt fringilla.
      Curabitur at pellentesque nisi, eu tempor leo. Integer pulvinar urna in
      viverra pellentesque. Maecenas a augue non lectus efficitur vestibulum.
      Donec augue nulla, eleifend non aliquet ut, blandit vitae mauris. Sed non
      tortor quis lectus placerat lacinia. Donec vestibulum vehicula neque a
      placerat. Donec pellentesque fringilla ornare. Aliquam a mi vel ipsum
      vehicula tincidunt et eget eros. Nulla sed suscipit ligula. Integer porta
      ultrices aliquam. In quam nulla, placerat at laoreet ac, aliquam id metus.
      Quisque scelerisque purus vitae efficitur sagittis. Nulla malesuada congue
      nunc sit amet efficitur.
    </div>
  );
}
