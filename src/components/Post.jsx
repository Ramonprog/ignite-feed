import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/104854577?v=4"
            alt="foto de perfil do usuário"
          />
          <div className={styles.authorInfo}>
            <strong>Alisson Ramon</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
        </p>
        <p>
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀
        </p>
        <p>
          🫳🏼 <a href="#">Jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoProjeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketSeat</a>
        </p>
      </div>
    </article>
  );
}
