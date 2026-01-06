"use client";
import Link from "next/link";
import style from "./header.module.scss";
import { useEffect, useState } from "react";
export default function Header() {
  const [opacity, setOpacity] = useState(false);
  function schrollOpacity() {
    window.scrollY > 10 ? setOpacity(true) : setOpacity(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", schrollOpacity);
    return () => window.removeEventListener("scroll", schrollOpacity);
  }, [opacity]);
  return (
    <>
      <header
        className={`${style.header} ${
          opacity ? style.fixed : style.background
        }`}
      >
        <div className={style.container}>
          <div className={style.logo}>
            <Link href={"/"}>
              <h2>Dev Motors</h2>
            </Link>
          </div>
          <nav className={style.nav}>
            <Link className={style.navLink} href={"/"}>
              HOME
            </Link>
            <Link className={style.navLink} href={"/#servicos"}>
              SERVIÇOES
            </Link>
            <Link className={style.navLink} href={"/#contatos"}>
              CONTATOS
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
