import Container from "@/components/container/container";
import style from "./subservices.module.scss";
import Image from "next/image";
import { HomeCms } from "@/utils/types/cms";
export default function SubServices({ object }: HomeCms) {
  return (
    <>
      <section className={style.subserVice} id="servicos">
        <article className={style.infoService}>
          <h1 className={style.title}>{object.metadata.info.title}</h1>
          <p className={style.descicao}>{object.metadata.info.descricao}</p>
        </article>
        <div className={style.banner}>
          <Image
            alt={object.metadata.info.title}
            src={object.metadata.info.image.url}
            priority={true}
            quality={100}
            fill={true}
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
      </section>
      <h1 className={style.titleService}>Conheça os nossos serviços</h1>

      <article className={style.articleService}>
        {object.metadata.servicos.map((service) => (
          <div className={style.containService} key={service.descricao}>
            <div className={style.innerService}>
              <Image
                src={service.image.url}
                alt={service.descricao}
                className={style.imageService}
                fill={true}
                priority={true}
                quality={100}
                unoptimized
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            <p>{service.descricao}</p>
          </div>
        ))}
      </article>
    </>
  );
}
