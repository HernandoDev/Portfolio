import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  const t = useTranslations("Experience");

  const experiences = [
    {
      title: t("exp1"),
      title2: t("exp2"),
      title3: t("exp3"),
      title4: t("exp4"),
      role: t("role1"),
      role2: t("role2"),
      role3: t("role3"),
      role4: t("role4"),
      date: t("date1"),
      date2: t("date2"),
      date3: t("date3"),
      date4: t("date4"),
      location: t("loca1"),
      location2: t("loca2"),
      location3: t("loca3"),
      location4: t("loca4"),
      description: t("desc1"),
      description2: t("desc2"),
      description3: t("desc3"),
      description4: t("desc4"),
      tech: [
        "Python", 
        "Angular", 
        "AdonisJS", 
        "AWS", 
        "Jira", 
        "Angular Material", 
        "PrimeNG",
        "RxJs", 
        "Javascript(POO)", 
        "Bitbucket", 
        "SASS", 
        "Karma"
      ],
      tech2: [
        "SQLAlchemist", 
        "Selenium", 
        "Vue", 
        "Angular", 
        "Flask", 
        "FastAPI", 
        "Ionic",
        "Bootstrap",
        "Google Cloud Platform", 
        "Docker", 
        "Bitbucket", 
        "Pandas", 
        "Python", 
        "Jira",
        "primeNG",
        "Jira",
        "Javascript(POO)", 
        "JQuery", 
        "MySQL", 
        "SASS", 
        "Karma", 
        "RxJs"
      ],
      tech3: [
        "Angular", 
        "Azure", 
        "MySQL",
        "Vue", 
        "PHP",
        "Laravel",
        "Bootstrap",
        "mongoDB",
        "AngularJS",
        "JQuery", 
        "Angular Material", 
        "Ionic",
        "Docker", 
        "PrimeNG",
        "RxJs", 
        "SASS", 
        "Karma",
        "NextJS",
        "ExpressJS",
      ],
      tech4: [
        "HTML", 
        "Bootstrap", 
        "JavaScript", 
        "PHP", 
        "MySQL", 
        "JQuery"
      ],
    },
  ];

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("section")} dir="r" />
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};
