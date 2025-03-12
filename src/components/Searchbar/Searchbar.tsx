import style from "./Searchbar.module.css";

function Searchbar() {
  return <input className={style.searchbar} type="text" placeholder="Sök" />;
}

export default Searchbar;
