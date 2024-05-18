import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const links = [
    { title: "All articles", link: "#" },
    { title: "Our crew", link: "#" },
    { title: "About us", link: "#" },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.logoDiv}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.menu}>
        {links &&
          links.map((link) => (
            <div key={link.title}>
              <a className={styles.menuItems} href={link.link}>
                {link.title}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
