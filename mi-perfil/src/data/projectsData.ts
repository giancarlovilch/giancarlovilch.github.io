import image10 from "../assets/projects/image_10.jpg";
import image11 from "../assets/projects/image_11.jpg";
import image12 from "../assets/projects/image_12.jpg";
import image13 from "../assets/projects/image_13.jpg";
import image_14 from "../assets/projects/image_14.jpg";

import image20 from "../assets/projects/image_20.jpg";
import image21 from "../assets/projects/image_21.jpg";
import image22 from "../assets/projects/image_22.jpg";
import image23 from "../assets/projects/image_23.jpg";
import image24 from "../assets/projects/image_24.jpg";
import image25 from "../assets/projects/image_25.jpg";

import image30 from "../assets/projects/image_30.jpg";
import image31 from "../assets/projects/image_31.jpg";
import image32 from "../assets/projects/image_32.jpg";
import image33 from "../assets/projects/image_33.jpg";
import image34 from "../assets/projects/image_34.jpg";
import image35 from "../assets/projects/image_35.jpg";
import image36 from "../assets/projects/image_36.jpg";
import image37 from "../assets/projects/image_37.jpg";

import image40 from "../assets/projects/image_40.jpg";
import image41 from "../assets/projects/image_41.jpg";
import image42 from "../assets/projects/image_42.jpg";
import image43 from "../assets/projects/image_43.jpg";
import image44 from "../assets/projects/image_44.jpg";
import image45 from "../assets/projects/image_45.jpg";
import image46 from "../assets/projects/image_46.jpg";

import doc10 from "../assets/projects/doc_10.pdf";
import doc20 from "../assets/projects/doc_20.pdf";
import doc30 from "../assets/projects/doc_30.pdf";
import doc40 from "../assets/projects/doc_40.pdf";

export type ProjectStatus = "successful" | "completed" | "incomplete";

export type ProjectItem = {
  id: string;
  categoryKey: string;
  titleKey: string;
  dateKey: string;
  year: string;
  status: ProjectStatus;
  shortSummaryKey: string;
  descriptionKey: string;
  members: string[];
  highlights: string[];
  coverImage: string;
  images: string[];
  documentFile?: string;
};

export const projectsData: ProjectItem[] = [
  {
    id: "carMixerImport",
    categoryKey: "projects.categories.construction",
    titleKey: "projects.items.carMixerImport.title",
    dateKey: "projects.items.carMixerImport.date",
    year: "2025",
    status: "successful",
    shortSummaryKey: "projects.items.carMixerImport.shortSummary",
    descriptionKey: "projects.items.carMixerImport.description",
    members: [
      "projects.members.gianCarlo",  
    ],
    highlights: [
      "projects.items.carMixerImport.highlights.0",
      "projects.items.carMixerImport.highlights.1",
      "projects.items.carMixerImport.highlights.2",
    ],
    coverImage: image10,
    images: [image10, image11, image12, image13, image_14],
    documentFile: doc10,
  },
  {
    id: "formwork",
    categoryKey: "projects.categories.construction", // O "projects.categories.internationalBusiness"
    titleKey: "projects.items.formwork.title",
    dateKey: "projects.items.formwork.date",
    year: "2025",
    status: "successful", 
    shortSummaryKey: "projects.items.formwork.shortSummary",
    descriptionKey: "projects.items.formwork.description",
    members: [
      "projects.members.gianCarlo"
    ],
    highlights: [
      "projects.items.formwork.highlights.0",
      "projects.items.formwork.highlights.1",
      "projects.items.formwork.highlights.2",
    ],
    coverImage: image20, // La variable de tu imagen
    images: [image20, image21,image22, image23, image24,image25], // Agrega más imágenes si las tienes
    documentFile: doc20, 
  },

  {
    id: "tyresImport",
    categoryKey: "projects.categories.transportation",
    titleKey: "projects.items.tyresImport.title",
    dateKey: "projects.items.tyresImport.date",
    year: "2019",
    status: "successful",
    shortSummaryKey: "projects.items.tyresImport.shortSummary",
    descriptionKey: "projects.items.tyresImport.description",
    members: [
      "projects.members.gianCarlo",
    ],
    highlights: [
      "projects.items.tyresImport.highlights.0",
      "projects.items.tyresImport.highlights.1",
      "projects.items.tyresImport.highlights.2",
    ],
    coverImage: image30,
    images: [image30, image31,image32, image33, image34,image35, image36, image37], // Agrega más imágenes si las tienes
    documentFile: doc30,
  },

  {
    id: "vehicleImport",
    categoryKey: "projects.categories.transportation",
    titleKey: "projects.items.vehicleImport.title",
    dateKey: "projects.items.vehicleImport.date",
    year: "2020",
    status: "successful",
    shortSummaryKey: "projects.items.vehicleImport.shortSummary",
    descriptionKey: "projects.items.vehicleImport.description",
    members: [
      "projects.members.gianCarlo",
      "projects.members.businessContacts",
      "projects.members.suppliers",
    ],
    highlights: [
      "projects.items.vehicleImport.highlights.0",
      "projects.items.vehicleImport.highlights.1",
      "projects.items.vehicleImport.highlights.2",
    ],
    coverImage: image40,
    images: [image40, image41,image42, image43, image44,image45, image46], // Agrega más imágenes si las tienes
    documentFile: doc40,
  },


  // {    
  //   id: "project-pharmacy-construction",
  //   categoryKey: "projects.categories.construction",
  //   titleKey: "projects.items.pharmacyConstruction.title",
  //   dateKey: "projects.items.pharmacyConstruction.date",
  //   year: "2024",
  //   status: "completed",
  //   shortSummaryKey: "projects.items.pharmacyConstruction.shortSummary",
  //   descriptionKey: "projects.items.pharmacyConstruction.description",
  //   members: [
  //     "projects.members.gianCarlo",
  //     "projects.members.contractorTeam",
  //     "projects.members.siteSupport",
  //   ],
  //   highlights: [
  //     "projects.items.pharmacyConstruction.highlights.0",
  //     "projects.items.pharmacyConstruction.highlights.1",
  //     "projects.items.pharmacyConstruction.highlights.2",
  //   ],
  //   coverImage: image10,
  //   images: [image10, image11],
  //   documentFile: doc10,
  // },

  // {
  //   id: "project-china-import-operations",
  //   categoryKey: "projects.categories.internationalBusiness",
  //   titleKey: "projects.items.chinaImportOperations.title",
  //   dateKey: "projects.items.chinaImportOperations.date",
  //   year: "2024",
  //   status: "successful",
  //   shortSummaryKey: "projects.items.chinaImportOperations.shortSummary",
  //   descriptionKey: "projects.items.chinaImportOperations.description",
  //   members: [
  //     "projects.members.gianCarlo",
  //     "projects.members.chineseSuppliers",
  //     "projects.members.logisticsPartners",
  //   ],
  //   highlights: [
  //     "projects.items.chinaImportOperations.highlights.0",
  //     "projects.items.chinaImportOperations.highlights.1",
  //     "projects.items.chinaImportOperations.highlights.2",
  //   ],
  //   coverImage: image20,
  //   images: [image20, image21],
  //   documentFile: doc20,
  // },




];