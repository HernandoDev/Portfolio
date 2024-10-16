import { useTranslations } from "next-intl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ShowcaseItem } from "./ShowcaseItem";
import { TransitionLink } from "../utils/TransitionLink";
import styles from "./showcase.module.scss";

export const Showcase = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "Mencargo",
      img: "/gallery/mencargo.png",
      code: "",
      link: "https://www.mencargo.net/",
      tech: [ "JavaScript", "Angular", "TypeScript", "PrimeNG", "RxJs", "Karma", "Ionic", "Firebase", "Capacitor", "Cordova", "Xcode", "Android Studio", "Python", "FastAPI", "Pandas", "Pytest", "MySQL","Google Cloud Platform","Flask"],
      desc: t("desc1"),
      modal: <>{t("modal1")}</>,
    },
    {
      title: "Cash Mencargo",
      img: "/gallery/cash.png",
      code: "https://github.com/basedhound/event-platform_app_next",
      link: "https://cash.mencargo.net/",
      tech: [ "JavaScript", "Angular", "TypeScript", "PrimeNG", "RxJs", "Karma", "Python", "FastAPI", "Pandas", "Pytest", "MySQL","Google Cloud Platform","Flask"],
      desc: t("desc2"),
      modal: <>{t("modal2")}</>,
    },
    {
      title: "Ventu",
      img: "/gallery/ventu.png",
      code: "",
      link: "https://ventu.vip/",
      tech: [ "JavaScript", "Angular", "TypeScript", "PrimeNG", "RxJs", "Karma", "Ionic", "Firebase", "Capacitor", "Cordova", "Xcode", "Android Studio", "Python", "FastAPI", "Pandas", "Pytest", "MySQL"],
      desc: t("desc8"),
      modal: <>{t("modal8")}</>,
    },
    {
      title: "Bot Whatsapp",
      img: "/gallery/bot.png",
      code: "",
      link: "",
      tech: [ "Express", "Sequilize", "TypeScript", "MySQL", "Docker","Puppeteer"],
      desc: t("desc9"),
      modal: <>{t("modal9")}</>,
    },
    {
      title: "BackOffice JAB",
      img: "/gallery/JAB.png",
      code: "",
      link: "https://tarjetajab.comunidadarabebolivia.com/",
      tech: ["HTML", "CSS", "Express", "JavaScript", "TypeScript", "MySQL", "Figma ", "Boostrap", "AngularJS"],
      desc: t("desc3"),
      modal: <>{t("modal3")}</>,
    },
    {
      title: "3D Viewer",
      img: "/gallery/MMC.png",
      code: "",
      link: "https://map.3ddigitalvenue.com/liverpool",
      tech: ["SASS", "Typescript", "PrimeNG", "JavaScript", "Angular", "Karma", "AWS", "RxJs"],
      desc: t("desc4"),
      modal: <>{t("modal4")}</>,
    },
    {
      title: "SAE",
      img: "/gallery/SAE.png",
      code: "https://github.com/basedhound/sushi-restaurant-2_ui",
      link: "https://www.saebolivia.com",
      tech: ["HTML", "CSS", "PHP", "JavaScript", "JQuery", "Figma", "MySQL", "Express", "Boostrap", "AngularJS", "Laravel", "Pytest", "RxJs"],
      desc: t("desc5"),
      modal: <>{t("modal5")}</>,
    },
    {
      title: "SAE Dropbox",
      img: "/gallery/SAE-backoffice.png",
      code: "",
      link: "https://www.saebolivia.com",
      tech: ["HTML", "CSS", "Jquery", "JavaScript", "Figma", "MySQL", "Python", "Flask", "Boostrap", "Pytest"],
      desc: t("desc6"),
      modal: <>{t("modal6")}</>,
    },
    {
      title: "Validador de ficheros excel",
      img: "/gallery/validador de ficheros.png",
      code: "",
      link: "https://www.mobilemediacontent.com/",
      tech: ["HTML", "CSS", "Sass", "JavaScript", "AdonisJS", "Vue", "TailwindCSS"],
      desc: t("desc7"),
      modal: <>{t("modal7")}</>,
    }
  ];

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={t("section")} dir="l" />

      {/* <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div> */}

      <div className={styles.projects}>
        {projects.map((project) => {
          return <ShowcaseItem key={project.title} {...project} />;
        })}
      </div>

      {/* <div className={styles.linkToGallery}>
        <TransitionLink href="/gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div> */}
    </section>
  );
};
