/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

export function Post({ publishedAt, content, author }) {
  const commentRef = useRef(null);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const comments = [1, 2, 3];

  function handleCreateNewComment(e) {
    e.preventDefault();
    console.log(commentRef.current.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          ref={commentRef}
          name="comment"
          id="comment"
          cols="30"
          required
          className={styles.input}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button className={styles.submitButton} type="submit">
            Publicar
          </button>
        </footer>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return <Comment key={comment} />;
          })}
        </div>
      </form>
    </article>
  );
}
