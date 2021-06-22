import { NextSeo } from "next-seo";
import PhotoCover from "../components/cover/PhotoCover";
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
      <PhotoCover />
      <div className="globalContainer">
        <h1>We do things with AI.</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.{" "}
          </p>

          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Curabitur sodales ligula in libero. Sed
            dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.{" "}
            <b>Fusce nec tellus sed augue semper porta</b>. Aenean quam.{" "}
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. In
            scelerisque sem at dolor. Maecenas mattis.{" "}
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Sed
            convallis tristique sem. <b>Vestibulum lacinia arcu eget nulla</b>.
            Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus,
            iaculis vel, suscipit quis, luctus non, massa.{" "}
          </p>

          <p>
            <b>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos
            </b>
            . Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla
            metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
            Quisque volutpat condimentum velit.{" "}
            <b>Sed dignissim lacinia nunc</b>. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
            ante. Sed lacinia, urna non tincidunt mattis, tortor neque
            adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
            fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
            imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{" "}
          </p>

          <p>
            Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
            euismod lacus luctus magna. Quisque cursus, metus vitae pharetra
            auctor, sem massa mattis sem, at interdum magna augue eget diam.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
            dolor. Sed non quam. In vel mi sit amet augue congue elementum.
            Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
            viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
            malesuada tellus. Ut ultrices ultrices enim.{" "}
          </p>

          <p>
            Curabitur sit amet mauris. Morbi in dui quis est pulvinar
            ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa.
            Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.
            Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit
            amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean
            laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies
            eu, pede.{" "}
          </p>

          <p>
            Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo.
            Sed pretium blandit orci. Ut eu diam at pede suscipit sodales.
            Aenean lectus elit, fermentum non, convallis id, sagittis at, neque.
            Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
            Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
            lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.{" "}
            <b>Ut eu diam at pede suscipit sodales</b>. Integer nec odio.
            Praesent libero. <b>Ut eu diam at pede suscipit sodales</b>. Sed
            cursus ante dapibus diam. Sed nisi.{" "}
          </p>

          <p>
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta.{" "}
            <b>
              Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula
            </b>
            . Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. <b>Sed cursus ante dapibus diam</b>. Curabitur sodales
            ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
            Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
            Maecenas mattis.{" "}
          </p>

          <p>
            Sed convallis tristique sem. Proin ut ligula vel nunc egestas
            porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus
            non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
            ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod
            in, nibh. Quisque volutpat condimentum velit. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis,
            tortor neque adipiscing diam, a cursus ipsum ante quis turpis.{" "}
            <b>Fusce ac turpis quis ligula lacinia aliquet</b>. Nulla facilisi.{" "}
          </p>

          <p>
            Ut fringilla.{" "}
            <b>
              Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa
            </b>
            . Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
            Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo
            eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus
            magna. <b>Nam nec ante</b>. Quisque cursus, metus vitae pharetra
            auctor, sem massa mattis sem, at interdum magna augue eget diam.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit
            dolor. Sed non quam. <i>Nulla facilisi</i>. In vel mi sit amet augue
            congue elementum.{" "}
          </p>

          <p>
            Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
            viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt
            malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
            mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.{" "}
            <i>Nam nec ante</i>. Integer lacinia sollicitudin massa.{" "}
            <b>Praesent blandit dolor</b>. Cras metus. Sed aliquet risus a
            tortor. Integer id quam.{" "}
          </p>

          <p>
            Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in,
            ultrices sit amet, augue. Proin sodales libero eget ante. Nulla
            quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis
            ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus
            quis, aliquet eget, justo. Sed pretium blandit orci.{" "}
            <b>Cras metus</b>. Ut eu diam at pede suscipit sodales. Aenean
            lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam
            mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut
            felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus.{" "}
          </p>

          <p>
            Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer nec odio.{" "}
            <b>
              Aenean lectus elit, fermentum non, convallis id, sagittis at,
              neque
            </b>
            . Praesent libero. Sed cursus ante dapibus diam. Sed nisi.{" "}
            <b>
              Ut orci risus, accumsan porttitor, cursus quis, aliquet eget,
              justo
            </b>
            . Nulla quis sem at nibh elementum imperdiet.{" "}
            <b>Maecenas aliquet mollis lectus</b>. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.{" "}
          </p>

          <p>
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
            Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
            convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
            Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
            Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla
            metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
            Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.{" "}
          </p>

          <p>
            Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque
            adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut
            fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat
            imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
            Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
            euismod lacus luctus magna.{" "}
          </p>

          <p>
            Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
            at interdum magna augue eget diam. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
            lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
            mi sit amet augue congue elementum. <i>Suspendisse potenti</i>.
            Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
            viverra nec, blandit vel, egestas et, augue.{" "}
            <b>Integer euismod lacus luctus magna</b>. Vestibulum tincidunt
            malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
            mauris. Morbi in dui quis est pulvinar ullamcorper.{" "}
          </p>

          <p>
            Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed
            aliquet risus a tortor. <b>Sed non quam</b>. Integer id quam. Morbi
            mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices
            sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean
            laoreet. <b>Integer lacinia sollicitudin massa</b>. Vestibulum nisi
            lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus,
            accumsan porttitor, cursus quis, aliquet eget, justo.{" "}
            <i>Sed non quam</i>. Sed pretium blandit orci.{" "}
          </p>

          <p>
            Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum
            non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet
            et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus
            aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus
            consectetuer risus et tortor.{" "}
            <i>Vestibulum tincidunt malesuada tellus</i>. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.{" "}
          </p>

          <p>
            Fusce nec tellus sed augue semper porta.{" "}
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
            Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur sodales ligula in libero.{" "}
            <i>Sed pretium blandit orci</i>. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam.{" "}
            <i>Sed cursus ante dapibus diam</i>. In scelerisque sem at dolor.
            Maecenas mattis.{" "}
          </p>

          <p>
            Sed convallis tristique sem. Proin ut ligula vel nunc egestas
            porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus
            non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
            ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod
            in, nibh. Quisque volutpat condimentum velit. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. <i>Curabitur tortor</i>. Nam nec ante. Sed lacinia, urna
            non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum
            ante quis turpis. Nulla facilisi.{" "}
          </p>

          <p>
            Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus
            consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
            Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
            euismod lacus luctus magna. Quisque cursus, metus vitae pharetra
            auctor, sem massa mattis sem, at interdum magna augue eget diam.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Morbi lacinia molestie dui.{" "}
            <b>Vestibulum sapien</b>. Praesent blandit dolor. Sed non quam.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
