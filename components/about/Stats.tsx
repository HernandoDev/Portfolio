import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Stack</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">JQuery</span>
            <span className="chip">Angular</span>
            <span className="chip">Karma</span>
            <span className="chip">PrimeNG</span>
            <span className="chip">Angular Material</span>
            <span className="chip">RxJs</span>
            <span className="chip">Ionic</span>
            <span className="chip">Vue</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Tailwind</span>
            <span className="chip">SASS</span>
            <span className="chip">Express</span>
            <span className="chip">PHP</span>
            <span className="chip">Python</span>
            <span className="chip">SQLAlchemist</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Flask</span>
            <span className="chip">AdonisJS</span>
            <span className="chip">MongoDB</span>
            <span className="chip">MySQL</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Firebase</span>
            <span className="chip">AWS</span>
            <span className="chip">Google Cloud Platform</span>
            <span className="chip">NGINX</span>
            <span className="chip">Selenium</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Herramientas</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Git</span>
            <span className="chip">Jira</span>
            <span className="chip">Bitbucket</span>
            <span className="chip">Confluence</span>
            <span className="chip">Postman</span>
            <span className="chip">MacOS</span>
            <span className="chip">Linux</span>
            <span className="chip">Xcode</span>
            <span className="chip">Android Studio</span>
            <span className="chip">Docker</span>
            <span className="chip">Figma</span>
            <span className="chip">Cloudflare</span>
            <span className="chip">Cloudinary</span>
            <span className="chip">Dropbox</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
