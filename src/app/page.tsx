import Container from "@/components/container/container";
import Footer from "@/components/home/footer/footer";
import Hero from "@/components/home/hero/hero";
import SubMenu from "@/components/home/menu/submenu";
import SubServices from "@/components/home/subservices/subservices";
import { getHome, getSubmenu } from "@/utils/cms/getHome";
import { HomeCms } from "@/utils/types/cms";
import { MenuCms } from "@/utils/types/menu";

export default async function Home() {
  const { object }: HomeCms = await getHome();
  const data: MenuCms = await getSubmenu();
  if (!object) {
    return;
  }
  return (
    <>
      <main>
        <SubMenu objects={data.objects} />
        <Hero
          buttomTitle={object.metadata.button.title}
          heading={object.metadata.heading}
          linkButtom={object.metadata.button.link}
          linkImage={object.metadata.banner.url}
        />
        <Container>
          <SubServices object={object} />
          <Footer object={object} />
        </Container>
      </main>
    </>
  );
}
