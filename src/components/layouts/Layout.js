import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ModalManagement from "../templates/auth";
import { openModalHandler, stepModalHandler } from "@/contexts/authModal";
import { CloseIcon } from "../icons/Close";

import styles from "@/styles/Layout.module.css";
import { useProfile } from "@/hooks/queries";
import { deleteCookie } from "@/utils/cookies";
import { getNewToken } from "@/configs/api";
import { Toaster } from "react-hot-toast";

function Layout({ children }) {
  const menuRef = useRef(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = openModalHandler();
  const [step, setStep] = stepModalHandler();
  const { data: userData } = useProfile();
  console.log(userData);

  const sidebarOpen = () => {
    menuRef.current.className = styles.menu_open;
  };

  const sidebarClose = () => {
    menuRef.current.className = styles.menu_close;
  };

  useEffect(() => {
    const pathname = router.pathname;

    if (pathname === "/dashboard" && userData === undefined) {
      router.push("/");
    } else if (router.query.modal === "login" && userData) {
      setIsOpen(false);
      router.push("/");
    } else if (router.query.modal === "verify" && userData) {
      setIsOpen(false);
      router.push("/");
    }
  }, [router.pathname, router.query]);

  useEffect(() => {
    const modalQuery = router.query?.modal;
    if (modalQuery === "login" && !userData) {
      setIsOpen(true);
      setStep(1);
    } else if (modalQuery === "verify" && !userData) {
      setIsOpen(true);
      setStep(2);
    }
  }, [router.query]);

  const loginHandler = () => {
    setStep(1);
    setIsOpen(true);
  };

  const logoutHandler = () => {
    deleteCookie();
    router.reload();
  };
  return (
    <>
      <Toaster />
      <header className={styles.header}>
        <ModalManagement />
        <section className={styles.largeScreen}>
          <div>
            <Link href="/">
              <img src="/images/torino.png" alt="Torino" />
            </Link>
          </div>
          <div>
            <ul className={styles.navlist}>
              <li>
                <Link href="/">صفحه ی اصلی</Link>
              </li>
              <li>
                <Link href="/tours">خدمات گردشگری</Link>
              </li>
              <li>
                <a href="#footer">درباره ما</a>
              </li>
              <li>
                <Link href="#">تماس باما</Link>
              </li>
            </ul>
          </div>
          {userData ? (
            <div className={styles.dropDown}>
              <div>
                <img src="/images/profile.png" alt="Profile" />
                {userData.mobile}
                <img src="/images/arrow-down.png" alt="Arrow" />
              </div>
              <ul>
                <li>
                  <Link href="#">
                    <img src="/images/profile (1).png" alt="Profile" />
                    <span>{userData.mobile}</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="/images/profile (2).png" alt="Profile" />
                    <span>اطلاعات حساب کاربری</span>
                  </Link>
                </li>
                <hr />
                <li>
                  <Link href="/" onClick={logoutHandler}>
                    <img src="/images/logout.png" alt="Logout" />
                    <span>خروج از حساب کاربری</span>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className={styles.login} onClick={loginHandler}>
              <img src="/images/profile.png" alt="Profile" />
              ورود | ثبت نام
            </div>
          )}
        </section>
        <section className={styles.smallScreen}>
          <div>
            <img onClick={sidebarOpen} src="/images/menu.png" alt="Menu" />
          </div>
          <div className={styles.menu_close} ref={menuRef}>
            <CloseIcon onClick={sidebarClose} className={styles.closeBtn} />
            <ul className={styles.navlist_sm}>
              <li>
                <Link href="#">
                  <img src="/images/home.png" alt="Home" />
                  صفحه ی اصلی
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="/images/airplane.png" alt="Airplane" />
                  خدمات گردشگری
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="/images/volume.png" alt="About Us" />
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="/images/call.png" alt="Call Us" />
                  تماس باما
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {userData ? (
              <div className={styles.dropDown}>
                <div>
                  <img src="/images/profile.png" alt="Profile" />
                  {userData.mobile}
                  <img src="/images/arrow-down.png" alt="Arrow" />
                </div>
                <ul>
                  <li>
                    <Link href="#">
                      <img src="/images/profile (1).png" alt="Profile" />
                      <span>{userData.mobile}</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img src="/images/profile (2).png" alt="Profile" />
                      <span>اطلاعات حساب کاربری</span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link href="/" onClick={logoutHandler}>
                      <img src="/images/logout.png" alt="Logout" />
                      <span>خروج از حساب کاربری</span>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <img
                src="/images/signin.png"
                alt="Login"
                onClick={loginHandler}
              />
            )}
          </div>
        </section>
      </header>
      <main className={styles.main}>{children}</main>
      <hr />
      <footer className={styles.footer} id="footer">
        <section>
          <section className={styles.options}>
            <div>
              <img src="/images/Group 16.png" alt="Good Price" />
              <div>
                <h3>بصرفه ترین قیمت</h3>
                <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
              </div>
            </div>
            <div>
              <img src="/images/Group 17.png" alt="Support" />
              <div>
                <h3>پشتیبانی</h3>
                <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
              </div>
            </div>
            <div>
              <img src="/images/Group 18.png" alt="User Satisfaction" />
              <div>
                <h3>رضایت کاربران</h3>
                <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
              </div>
            </div>
          </section>
          <hr />
          <section className={styles.aboutus}>
            <div>
              <ul>
                <h2>تورینو</h2>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>چرا تورینو</li>
                <li>بیمه مسافرتی</li>
              </ul>
              <ul>
                <h2>خدمات مشتریان</h2>
                <li>پشتیبانی آنلاین</li>
                <li>راهنمای خرید</li>
                <li>راهنمای استرداد</li>
                <li>پرسش و پاسخ</li>
              </ul>
            </div>
            <div>
              <div>
                <img src="/images/torino.png" alt="Torino" />
                <p>تلفن پشتیبانی: 8574-021</p>
              </div>
              <div>
                <img src="/images/f1.png" alt="" />
                <img src="/images/f2.png" alt="" />
                <img src="/images/f3.png" alt="" />
                <img src="/images/f4.png" alt="" />
                <img src="/images/f5.png" alt="" />
              </div>
            </div>
          </section>
        </section>
        <hr />
        <p className={styles.footerLastText}>
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </footer>
    </>
  );
}

export default Layout;
