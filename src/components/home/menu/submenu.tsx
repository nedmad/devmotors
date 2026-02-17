"use client";
import { Menu, X } from "lucide-react";
import style from "./submenu.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuCms } from "@/utils/types/menu";

export default function SubMenu({ objects }: MenuCms) {
  const [toggleMenu, setToggleMenu] = useState(false);
  if (!objects) {
    return;
  }
  useEffect(() => {
    const sizeVerify = () => {
      if (window.innerWidth > 750) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", sizeVerify);
    return () => window.removeEventListener("resize", sizeVerify);
  }, []);
  function toggleSize() {
    setToggleMenu(!toggleMenu);
  }
  return (
    <>
      <section className={style.submenu}>
        <div className={style.menu} onClick={toggleSize}>
          <Menu size={32} />
          <span>Menu</span>
        </div>
        <ul className={`${style.ul} ${toggleMenu ? style.open : ""}`}>
          {toggleMenu && (
            <li>
              <X
                size={30}
                onClick={toggleSize}
                className={style.fecharToggle}
              />
            </li>
          )}
          {objects?.map((e) => (
            <li key={e.slug}>
              <Link href={`/post/${e.slug}`}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
