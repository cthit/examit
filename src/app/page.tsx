import styles from "./page.module.css"; // Import the CSS module
import Searchbar from "@/components/Searchbar/Searchbar"; // Import your Searchbar component

export default function Home() {
  return (
    <div className={styles.searchcontainer}>
      <h1 className={styles.searchtitle}>Sök efter Kurs</h1>
      <Searchbar />
    </div>
  );
}
