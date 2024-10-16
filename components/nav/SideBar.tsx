import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";
import { Link } from "@/i18n/navigation";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  const t = useTranslations("Sidebar");


  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
    const options = {
      threshold: 0.3,
    };
    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}>
        <Link href="/" className={styles.logo}>
          HP<span>.</span>
        </Link>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ padding: '10px' }}
        >
          <Link

            className={`${styles.sideBarLink} ${selected === "about" ? styles.selected : ""
              }`}
            href="#about"
            onClick={() => {
              setSelected("about");
            }}>
            {/* {t("about")} */}
            Conóceme
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Link
            className={`${styles.sideBarLink} ${selected === "projects" ? styles.selected : ""
              }`}
            href="#projects"
            onClick={() => setSelected("projects")}>
            {/* {t("projects")} */}
            Proyectos
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <Link
            className={`${styles.sideBarLink} ${selected === "experience" ? styles.selected : ""
              }`}
            href="#experience"
            onClick={() => setSelected("experience")}>
            Exp.
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Link
            className={`${styles.sideBarLink} ${selected === "certification" ? styles.selected : ""
              }`}
            href="#certification"
            onClick={() => setSelected("certification")}>
            Estudios
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <Link
            className={`${styles.sideBarLink} ${selected === "contact" ? styles.selected : ""
              }`}
            href="#contact"
            onClick={() => setSelected("contact")}>
            Contacto
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
};
