import { HomeCms } from "@/utils/types/cms";
import style from "./footer.module.scss";
import { Mail, Map, Phone, Clock } from "lucide-react";
export default function Footer({ object }: HomeCms) {
  return (
    <>
      <section className={style.footer} id="contatos">
        <strong className={style.titleContatos}>Contatos</strong>
        <div className={style.contatos}>
          <div className={style.contato}>
            <Mail size={27} />
            <div>
              <strong>Email</strong>
              <p>{object.metadata.contato.email}</p>
            </div>
          </div>
          <div className={style.contato}>
            <Phone size={27} />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contato.phone}</p>
            </div>
          </div>
          <div className={style.contato}>
            <Map size={27} />
            <div>
              <strong>Local</strong>
              <p>{object.metadata.contato.addres}</p>
            </div>
          </div>
          <div className={style.contato}>
            <Clock size={27} />
            <div>
              <strong>Horários</strong>
              <p>{object.metadata.contato.horario}</p>
            </div>
          </div>
        </div>
      </section>
      <p className={style.direitos}>
        Todos os direitos reservados ao DevMotors @{new Date().getFullYear()}
      </p>
    </>
  );
}
