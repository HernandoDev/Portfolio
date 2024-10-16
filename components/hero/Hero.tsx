import { useTranslations } from "next-intl";
import Link from "next/link";
import { StandardButton } from "@/components/hero/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { Socials } from "@/components/nav/Socials";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className={`section-wrapper ${styles.hero}`} id="hero">
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              {t("title")}
              <span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              <span>{t("tagline")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              {t("p1")}
              <br className={styles.breakline} /> {t("p2")}
              <br className={styles.breakline} /> {t("p3")}
            </p>
          </Reveal>
          <div className={styles.buttonsContainer}>
            <Reveal>
              <div className={styles.headingButtons}>
                <motion.span
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}>
                  <a href="/CV-Hernando-Pina.pdf" download="CV - Hernando Pina Henao.pdf" title="CV - Hernando Pina Henao">
                    <button className={styles.outlineButton}>
                      CV
                      <AiOutlineDownload size="2.4rem" />
                    </button>
                  </a>
                </motion.span>
              </div>
            </Reveal>

            <Socials />

            {/* <Reveal>
            <StandardButton>
            <Link href="https://www.linkedin.com/in/hernando-pina-henao" target="_blank">Linkedin</Link>
            </StandardButton>
          </Reveal> */}
          </div>
        </div>
      </div>
      <DotGrid />
    </section>
  );
};
