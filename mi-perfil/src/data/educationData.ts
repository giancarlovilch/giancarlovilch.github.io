import civilBachelorCert from "../assets/education/civil-bachelor.pdf";
import softwareBachelorCert from "../assets/education/software-bachelor.pdf";
import hsk4Cert from "../assets/education/hsk4.pdf";
import scut from "../assets/education/scut.pdf";
import bnu from "../assets/education/bnu.pdf";

export type LearningItem = {
  id: string;
  titleKey: string;
  issuerKey: string;
  level: number;
  file?: string;
};

export type EducationPillar = {
  id: string;
  titleKey: string;
  summaryKey: string;
  level: number;
  corePath: LearningItem[];
  complementaryTraining: LearningItem[];
  specialization?: string[];
};

export const educationData: EducationPillar[] = [
  {
    id: "pillar1",
    titleKey: "education.pillars.civil.title",
    summaryKey: "education.pillars.civil.summary",
    level: 5,

    corePath: [
      {
        id: "civil-bachelor",
        titleKey: "education.items.civil.bachelor.title",
        issuerKey: "education.items.civil.bachelor.issuer",
        level: 5,
        file: civilBachelorCert,
      },
      {
        id: "civil-title",
        titleKey: "education.items.civil.professional.title",
        issuerKey: "education.items.civil.professional.issuer",
        level: 2,
      }
      // ,
      // {
      //   id: "civil-master",
      //   titleKey: "education.items.civil.master.title",
      //   issuerKey: "education.items.civil.master.issuer",
      //   level: 1,
      // }
    ],

    complementaryTraining: [
      // {
      //   id: "autocad",
      //   titleKey: "education.items.civil.autocad.title",
      //   issuerKey: "education.items.civil.autocad.issuer",
      //   level: 4,
      // },
      // {
      //   id: "sap2000",
      //   titleKey: "education.items.civil.sap2000.title",
      //   issuerKey: "education.items.civil.sap2000.issuer",
      //   level: 1,
      // },
      // {
      //   id: "etabs",
      //   titleKey: "education.items.civil.etabs.title",
      //   issuerKey: "education.items.civil.etabs.issuer",
      //   level: 1,
      // },
      // {
      //   id: "sketchup",
      //   titleKey: "education.items.civil.sketchup.title",
      //   issuerKey: "education.items.civil.sketchup.issuer",
      //   level: 5,
      // },
      // {
      //   id: "msproject",
      //   titleKey: "education.items.civil.msproject.title",
      //   issuerKey: "education.items.civil.msproject.issuer",
      //   level: 2,
      // },
      {
        id: "bim",
        titleKey: "education.items.civil.bim.title",
        issuerKey: "education.items.civil.bim.issuer",
        level: 2,
      }
    ]
  },

  {
    id: "pillar2",
    titleKey: "education.pillars.software.title",
    summaryKey: "education.pillars.software.summary",
    level: 5,
    specialization: ["Django (Python)", "Next.js (React)", "PHP (OOP/MVC)", "SQL", "NoSQL", "Git", "IT Infrastructure & Networking"],

    corePath: [
      {
        id: "software-bachelor",
        titleKey: "education.items.software.bachelor.title",
        issuerKey: "education.items.software.bachelor.issuer",
        level: 5,
        file: softwareBachelorCert,        
      },
      {
        id: "software-title",
        titleKey: "education.items.software.professional.title",
        issuerKey: "education.items.software.professional.issuer",
        level: 2,
      }
    ],

    complementaryTraining: [
      // {
      //   id: "python",
      //   titleKey: "education.items.software.python.title",
      //   issuerKey: "education.items.software.python.issuer",
      //   level: 2,
      // },
      // {
      //   id: "react",
      //   titleKey: "education.items.software.react.title",
      //   issuerKey: "education.items.software.react.issuer",
      //   level: 2,
      // },
      {
        id: "fullstack",
        titleKey: "education.items.software.fullstack.title",
        issuerKey: "education.items.software.fullstack.issuer",
        level: 2,
      },
      // {
      //   id: "mysql",
      //   titleKey: "education.items.software.mysql.title",
      //   issuerKey: "education.items.software.mysql.issuer",
      //   level: 3,
      // },
      // {
      //   id: "cisco",
      //   titleKey: "education.items.software.cisco.title",
      //   issuerKey: "education.items.software.cisco.issuer",
      //   level: 3,
      // },
      // {
      //   id: "hardware",
      //   titleKey: "education.items.software.hardware.title",
      //   issuerKey: "education.items.software.hardware.issuer",
      //   level: 4,
      // }
    ]
  },

  {
    id: "pillar3",
    titleKey: "education.pillars.languages.title",
    summaryKey: "education.pillars.languages.summary",
    level: 5,
    specialization: ["Spanish (Native)","Chinese (HSK4 - B2)", "English (B2)",  "Portuguese (A2)"],


    corePath: [
      {
        id: "languages-degree",
        titleKey: "education.items.languages.degree.title",
        issuerKey: "education.items.languages.degree.issuer",
        level: 5,
        file: scut,
      }
    ],

    complementaryTraining: [
      {
        id: "hsk4",
        titleKey: "education.items.languages.hsk4.title",
        issuerKey: "education.items.languages.hsk4.issuer",
        level: 5,
        file: hsk4Cert,
      },
      {
        id: "bnu",
        titleKey: "education.items.languages.bnu.title",
        issuerKey: "education.items.languages.bnu.issuer",
        level: 5,
        file: bnu,
      },
      {
        id: "ielts",
        titleKey: "education.items.languages.ielts.title",
        issuerKey: "education.items.languages.ielts.issuer",
        level: 4,
      },
      {
        id: "portuguese",
        titleKey: "education.items.languages.portuguese.title",
        issuerKey: "education.items.languages.portuguese.issuer",
        level: 3,
      }
    ]
  },

  {
    id: "pillar4",
    titleKey: "education.pillars.business.title",
    summaryKey: "education.pillars.business.summary",
    level: 5,

    corePath: [],

    complementaryTraining: [
      {
        id: "export-import",
        titleKey: "education.items.business.exportImport.title",
        issuerKey: "education.items.business.exportImport.issuer",
        level: 2,
      }
    ]
  }
];