import Image from "next/image";
import style from "./hero.module.scss";
interface HeroProp {
  linkImage: string;
  heading: string;
  buttomTitle: string;
  linkButtom: string;
}
export default function Hero({
  heading,
  buttomTitle,
  linkButtom,
  linkImage,
}: HeroProp) {
  return (
    <>
      <section className={style.heroContain}>
        <div className={style.contain}>
          <div className={style.heroHeader}>
            <h1 className={style.title}>{heading}</h1>
            <a href={linkButtom} target="_blank" className={style.link}>
              {buttomTitle}
            </a>
          </div>
          <div className={style.heroBanner}>
            <Image
              src={linkImage}
              alt={heading}
              fill={true}
              priority={true}
              quality={100}
              className={style.imageBanner}
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
