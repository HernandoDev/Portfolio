import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";

interface Props {
  title: string;
  title2: string;
  title3: string;
  title4: string;

  role: string;
  role2: string;
  role3: string;
  role4: string;

  date: string;
  date2: string;
  date3: string;
  date4: string;

  location: string;
  location2: string;
  location3: string;
  location4: string;

  description: string;
  description2: string;
  description3: string;
  description4: string;

  tech: string[];
  tech2: string[];
  tech3: string[];
  tech4: string[];
}

export const ExperienceItem = ({
  title,
  title2,
  title3,
  title4,


  role,
  role2,
  role3,
  role4,

  date,
  date2,
  date3,
  date4,

  location,
  location2,
  location3,
  location4,

  description,
  description2,
  description3,
  description4,
  tech,
  tech2,
  tech3,
  tech4,

}: Props) => {
  return (
    <div className={styles.experience}>
      <div className={styles.card}>
        <div className={styles.heading}>
          <Reveal>
            <span className={styles.title}>{title}</span>
          </Reveal>
          <Reveal>
            <span>{date}</span>
          </Reveal>
        </div>

        <div className={styles.heading}>
          <Reveal>
            <span className={styles.position}>{role}</span>
          </Reveal>
          <Reveal>
            <span>{location}</span>
          </Reveal>
        </div>
        <Reveal>
          <p className={styles.description}>{description}</p>
        </Reveal>
        <Reveal>
          <div className={styles.tech}>
            {tech.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      {/* ------------------- */}
      <div className={styles.card}>
        <div className={styles.heading}>
          <Reveal>
            <span className={styles.title}>{title2}</span>
          </Reveal>
          <Reveal>
            <span>{date2}</span>
          </Reveal>
        </div>

        <div className={styles.heading}>
          <Reveal>
            <span className={styles.position}>{role2}</span>
          </Reveal>
          <Reveal>
            <span>{location}</span>
          </Reveal>
        </div>
        <Reveal>
          <p className={styles.description}>{description2}</p>
        </Reveal>
        <Reveal>
          <div className={styles.tech}>
            {tech2.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      {/* ------------------- */}
      <div className={styles.card}>
        <div className={styles.heading}>
          <Reveal>
            <span className={styles.title}>{title3}</span>
          </Reveal>
          <Reveal>
            <span>{date3}</span>
          </Reveal>
        </div>

        <div className={styles.heading}>
          <Reveal>
            <span className={styles.position}>{role3}</span>
          </Reveal>
          <Reveal>
            <span>{location3}</span>
          </Reveal>
        </div>
        <Reveal>
          <p className={styles.description}>{description3}</p>
        </Reveal>
        <Reveal>
          <div className={styles.tech}>
            {tech3.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      {/* ------------------- */}
      {/* ------------------- */}
      <div className={styles.card}>
        <div className={styles.heading}>
          <Reveal>
            <span className={styles.title}>{title4}</span>
          </Reveal>
          <Reveal>
            <span>{date4}</span>
          </Reveal>
        </div>

        <div className={styles.heading}>
          <Reveal>
            <span className={styles.position}>{role4}</span>
          </Reveal>
          <Reveal>
            <span>{location4}</span>
          </Reveal>
        </div>
        <Reveal>
          <p className={styles.description}>{description4}</p>
        </Reveal>
        <Reveal>
          <div className={styles.tech}>
            {tech4.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      {/* ------------------- */}
    </div>
  );
};
