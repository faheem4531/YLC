import styles from "./Header.module.css";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderIcon from "../../images/svgs/header-crown-icon.svg";
import { signOut, useSession } from "next-auth/react";
import profileIcon from "../../images/svgs/profile-icon.svg";
import HeaderWhiteIcon from "../../images/svgs/header-crown-white-icon.svg";

const Header = ({ currentPath }: { currentPath: string }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [token, setToken] = useState<string | null>(null);
  const { status } = useSession();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [currentPath]);
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && window.pageYOffset > 100) {
        headerRef.current.classList.add(styles.active);
      } else {
        headerRef.current?.classList.remove(styles.active);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBorder = (path: string) => {
    if (currentPath === path) {
      return styles.borderBottom;
    }
    return "";
  };

  const sidebarRef = useRef<HTMLInputElement>(null);

  const closeSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.checked = false;
    }
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    if (status === "authenticated") {
      signOut();
    }
  };

  return (
    <div className={styles.headerContainer} ref={headerRef}>
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <div className={styles.nav}>
              <input type="checkbox" id={styles.nevCheck} ref={sidebarRef} />
              <Link
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-once="false"
                href="/">
                <Image
                  className={styles.crownIcon}
                  src={HeaderWhiteIcon}
                  alt="London Chauffeur Service"
                />
              </Link>
              <div className={styles.navBtn}>
                <label htmlFor={styles.nevCheck}>
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <div className={styles.navLinks}>
                <Link
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-once="false"
                  onClick={closeSidebar}
                  className={getBorder("/")}
                  href="/">
                  Home
                </Link>
                <Link
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-once="false"
                  onClick={closeSidebar}
                  className={getBorder("/about-us")}
                  href="/about-us">
                  About Us
                </Link>
                <Link
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-once="false"
                  onClick={closeSidebar}
                  className={getBorder("/chauffeur-cars")}
                  href="/chauffeur-cars">
                  Cars
                </Link>
                <Link
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-once="false"
                  onClick={closeSidebar}
                  className={getBorder("/airports-tranfers")}
                  href="/airports-tranfers">
                  Airport Transfers
                </Link>
                <Link
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-once="false"
                  onClick={closeSidebar}
                  className={getBorder("/business-chauffeur")}
                  href="/business-chauffeur">
                  Business
                </Link>
                <Link
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-once="false"
                  onClick={closeSidebar}
                  className={getBorder("/events-chauffeur")}
                  href="/events-chauffeur">
                  Events
                </Link>
                <Link
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-once="false"
                  onClick={closeSidebar}
                  className={getBorder("/book-chauffeur-now")}
                  href="/book-chauffeur-now">
                  Book Now
                </Link>
                {token ? (
                  <Link
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-once="false"
                    className={getBorder("/profile")}
                    href="/profile">
                    <Image
                      className={styles.profileIcon}
                      src={profileIcon}
                      alt="icon"
                    />
                  </Link>
                ) : (
                  <Link
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-once="false"
                    onClick={closeSidebar}
                    className={getBorder("/sign-in")}
                    href="/sign-in">
                    Login
                  </Link>
                )}
                {token ? (
                  <Link
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-once="false"
                    onClick={() => {
                      closeSidebar();
                      logout();
                    }}
                    className={getBorder("")}
                    href="/">
                    Logout
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
