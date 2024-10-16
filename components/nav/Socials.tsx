import styles from "./socials.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone,
  // AiFillInstagram,
  // AiFillFacebook,

} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const Socials = () => {
  return (
    <div className={styles.links}>
      {/* LINKEDIN */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <Link
          href="https://linkedin.com/in/hernando-pina-henao"
          target="_blank"
          rel="nofollow"
          title="LinkedIn">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>
      {/* GITHUB */}
      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <Link
          href="https://github.com/basedhound"
          target="_blank"
          rel="nofollow"
          title="GitHub">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span> */}

      {/* WHATSAPP */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <Link
          href="https://api.whatsapp.com/send?phone=34671668242"
          target="_blank"
          rel="nofollow"
          title="WhatsApp">
          <AiOutlineWhatsApp size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <Link
          href="mailto:hernandopina1@gmail.com"
          target="_blank"
          rel="nofollow"
          title="Email">
          <AiOutlineMail size="2.4rem" />
        </Link>
      </motion.span>
      <div
        className={styles.responsivePhone}
        >
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles.noPointer}
      >
        <Link
          href=""
          rel="nofollow"
          title="Telf"
          className={styles.noPointer}
        >
          <div className={styles.centerFlex}>
            <AiOutlinePhone size="2.4rem" />
            <span className={styles.spanNumber}>+34 671 66 82 42</span>

          </div>
        </Link>
      </motion.span>
      </div>
      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
       <div className={styles.centerFlex}>
        <AiOutlinePhone size="2.4rem" />
        +34 671 66 82 42
        </div>
      </motion.span> */}

      {/* FACEBOOK */}
      {/*       <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <Link href="https://m.me/fvukelic" target="_blank" rel="nofollow">
          <AiFillFacebook size="2.4rem" />
        </Link>
      </motion.span> */}

      {/* INSTAGRAM */}
      {/*       <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <Link href="https://ig.me/m/frank.vkh" target="_blank" rel="nofollow">
          <AiFillInstagram size="2.4rem" />
        </Link>
      </motion.span> */}
    </div>
  );
};
