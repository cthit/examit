import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navroot}>
      <div className={styles.navcontainer}>
        <h1 className={styles.navtitle}>examIT</h1>

        <ul className={styles.navlinks}>
          <li>
            <Link href="/">Hem</Link>
          </li>
          <li>
            <Link href="/courses">Alla Kurser</Link>
          </li>
          <li>
            <Link href="/about">Om examIT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
