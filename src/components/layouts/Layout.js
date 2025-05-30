import { useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

import ModalManagement from "../templates/auth";
import { useOpenModalHandler, useStepModalHandler } from "@/contexts/authModal";
import { CloseIcon } from "../icons/Close";
import { useProfile } from "@/hooks/queries";
import { deleteCookie } from "@/utils/cookies";
import Authorization from "@/providers/Authorization";

import styles from "@/styles/Layout.module.css";

function Layout({ children }) {
  const menuRef = useRef(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useOpenModalHandler();
  const [step, setStep] = useStepModalHandler();
  const { data: userData } = useProfile();

  const sidebarOpen = () => {
    menuRef.current.className = styles.menu_open;
  };

  const sidebarClose = () => {
    menuRef.current.className = styles.menu_close;
  };

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
      <Authorization />
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
                  <Link href="/dashboard">
                    <img src="/images/profile (1).png" alt="Profile" />
                    <span>{userData.mobile}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard">
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
