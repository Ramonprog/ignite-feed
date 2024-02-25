import styles from "./SideBar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Capa escolhida pelo usuário"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/104854577?v=4"
          alt="foto de perfil do usuário"
        />
        <strong>Alisson Ramon</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#" role="button">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
