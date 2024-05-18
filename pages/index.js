import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import LandingPage from "@/components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <LandingPage />
    </div>
  );
}
