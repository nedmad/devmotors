"use client";
import Link from "next/link";
import style from "./error.module.scss";
export default function Error() {
  return (
    <>
      <div className={style.erro}>
        <h1>Pagina não encontrada!</h1>
        <Link href="/">Retornar para página inicial</Link>
      </div>
    </>
  );
}
