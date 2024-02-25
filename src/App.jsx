import { Header } from "./components/Header";
import "./globals.css";
import styles from "./app.module.css";
import { SideBar } from "./components/SideBar";
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          veniam maxime error fuga voluptate, illum ex commodi fugit magni
          quibusdam, nemo veritatis vel ea architecto iure. Magnam, voluptas.
          Nobis, aperiam.
        </main>
      </div>
    </>
  );
}

export default App;
