import Container from "@/components/container/container";
import Hero from "@/components/home/hero/hero";
import getItemBySlug from "@/utils/cms/getHome";
import { ItemSlug } from "@/utils/types/itemSlug";
import style from "./post.module.scss";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { objects }: ItemSlug = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors",
        description:
          "Escolha o serviço completo para seu carro. Escolha DevMotors!",
      };
    });
    const data = objects[0];

    return {
      title: `DevMotors - ${data.title}`,
      description:
        "Escolha o serviço completo para seu carro. Escolha DevMotors!",
      openGraph: {
        title: `DevMotors - ${data.title}`,
        images: [data.metadata.banner.url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DevMotors",
      description:
        "Escolha o serviço completo para seu carro. Escolha DevMotors!",
    };
  }
}

export default async function PageSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { objects }: ItemSlug = await getItemBySlug(slug);
  const data = objects[0]?.metadata;
  return (
    <>
      <Hero
        buttomTitle={data.button.title}
        heading={data.heading}
        linkButtom={data.button.link}
        linkImage={data.banner.url}
      />
      <Container>
        <div className={style.contentDescricao}>
          <div className={style.descricao}>
            <div className={style.containerDescricao}>
              <h1>{data.info.title}</h1>
              <p>{data.info.descricao}</p>
            </div>
          </div>
          <div className={style.contentBanner}>
            <Image
              src={data.info.image.url}
              alt={data.info.title}
              priority={true}
              fill={true}
              quality={100}
              className={style.banner}
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
