import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { CertificationItem } from "./CertificationItem";

export const Certification = () => {

  const t = useTranslations("Certification");

  const certification = [
    {
      title: t("certif1"),
      school: t("school1"),
      date: t("date1"),
      link: "docs/openclassrooms.pdf",
      description:t("desc1"),
      tech: [
        "JavaScript",
        "Node.js",
        "MongoDB",
        "CSS",
        "HTML",
        "Bootstrap",
        "Git",
        "Laravel",
        "PHP",
        "Angular",
        "MySQL",
        "PostgreSQL",
        "Linux",
        "Docker",
        "Cordova",
        "Python",
        "C++",
        "Java",
        'XML',
        'JSON',
        "SOAP",
        "REST",
      ],
    },
    {
      title: t("certif2"),
      school: t("school2"),
      date: t("date2"),
      link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
      description:t("desc2"),
      tech: [
        "HTML",
        "CSS",
        "Responsive",
        "Accessibility",
        "JQuery",
        "PHP",
        "MySQL",
        "JavaScript",
      ],
    },
    {
      title: t("certif3"),
      school: t("school3"),
      date: t("date3"),
      link: "https://github.com/basedhound/freeCodeCamp_javascript-algorithms-and-data-structures",
      description:t("desc3"),
      tech: [
      ],
    },
  ];
  
  return (
    <section className="section-wrapper" id="certification">
      <SectionHeader title={t("section")} dir="r" />
      {certification.map((item) => (
        <CertificationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

