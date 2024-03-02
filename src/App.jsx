import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

import "./globals.css";
import styles from "./app.module.css";

// author: { avatar_url: "", name: "" role: ""}
//
//publishedAt: Date
//content: String
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/104854577?v=4",
      name: "Alisson Ramon",
      role: "Front-end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-10 20:00:00"),
  },
];
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
