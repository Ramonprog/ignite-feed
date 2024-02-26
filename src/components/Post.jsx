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

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button className={styles.submitButton} type="submit">
            Publicar
          </button>
        </footer>
        <div className={styles.commentList}>
          <div className={styles.comment}>
            <img
              src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              alt="Foto de perfil do usuário"
            />
            <div className={styles.commentBox}>
              <p>
                <span>Alisson Ramon</span>
                Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa.
                É um projeto que fiz no NLW Return, evento da Rocketseat. O nome
                do projeto é DoctorCare 🚀
              </p>
              <button type="button">
                <img src="./assets/trash.svg" alt="Remover comentário" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </article>
  );
}
