import React from "react";
import style from "./container.module.scss";
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={style.conatiner}>{children}</div>
    </>
  );
}
