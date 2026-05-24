import image10 from "../assets/experiences/image_10.jpg";
import image11 from "../assets/experiences/image_11.jpg";
import image12 from "../assets/experiences/image_12.jpg";
import image13 from "../assets/experiences/image_13.jpg";
import image14 from "../assets/experiences/image_14.jpg";

import image20 from "../assets/experiences/image_20.jpg";
import image21 from "../assets/experiences/image_21.jpg";
import image22 from "../assets/experiences/image_22.jpg";
import image23 from "../assets/experiences/image_23.jpg";
import image24 from "../assets/experiences/image_24.jpg";
import image25 from "../assets/experiences/image_25.jpg";
import image26 from "../assets/experiences/image_26.jpg";
import image27 from "../assets/experiences/image_27.jpg";

// import image30 from "../assets/experiences/image_30.jpg";
// import image31 from "../assets/experiences/image_31.jpg";
// import image32 from "../assets/experiences/image_32.jpg";

// import image40 from "../assets/experiences/image_40.jpg";
// import image41 from "../assets/experiences/image_41.jpg";

export type ExperienceItem = {
  id: string;
  categoryKey: string;
  titleKey: string;
  locationKey: string;
  periodKey: string;
  shortSummaryKey: string;
  descriptionKey: string;
  noteKey: string;
  highlights: string[];
  coverImage: string;
  images: string[];
};

export const experiencesData: ExperienceItem[] = [
  
  {
    id: "china2025",
    categoryKey: "experiences.items.china2025.category",
    titleKey: "experiences.items.china2025.title",
    locationKey: "experiences.items.china2025.location",
    periodKey: "experiences.items.china2025.period",
    shortSummaryKey: "experiences.items.china2025.shortSummary",
    descriptionKey: "experiences.items.china2025.description",
    noteKey: "experiences.items.china2025.note",
    highlights: [
      "experiences.items.china2025.highlights.0",
      "experiences.items.china2025.highlights.1",
      "experiences.items.china2025.highlights.2"
    ],
    coverImage: image20,
    images: [image20, image21, image22,image23, image24,image25, image26,image27],
  },
  {
    id: "saopaolo-concreteshow",
    categoryKey: "experiences.items.concreteshow.category",
    titleKey: "experiences.items.concreteshow.title",
    locationKey: "experiences.items.concreteshow.location",
    periodKey: "experiences.items.concreteshow.period",
    shortSummaryKey: "experiences.items.concreteshow.shortSummary",
    descriptionKey: "experiences.items.concreteshow.description",
    noteKey: "experiences.items.concreteshow.note",
    highlights: [
      "experiences.items.concreteshow.highlights.0",
      "experiences.items.concreteshow.highlights.1",
      "experiences.items.concreteshow.highlights.2"
    ],
    coverImage: image10,
    images: [image10, image11, image12, image13, image14],
  },




  // {
  //   id: "exp-canton-fair-business-exploration",
  //   categoryKey: "experiences.items.cantonFair.category",
  //   titleKey: "experiences.items.cantonFair.title",
  //   locationKey: "experiences.items.cantonFair.location",
  //   periodKey: "experiences.items.cantonFair.period",
  //   shortSummaryKey: "experiences.items.cantonFair.shortSummary",
  //   descriptionKey: "experiences.items.cantonFair.description",
  //   noteKey: "experiences.items.cantonFair.note",
  //   highlights: [
  //     "experiences.items.cantonFair.highlights.0",
  //     "experiences.items.cantonFair.highlights.1",
  //     "experiences.items.cantonFair.highlights.2"
  //   ],
  //   coverImage: image30,
  //   images: [image30, image31, image32],
  // },

  // {
  //   id: "exp-civil-engineering-field-support",
  //   categoryKey: "experiences.items.civilSupport.category",
  //   titleKey: "experiences.items.civilSupport.title",
  //   locationKey: "experiences.items.civilSupport.location",
  //   periodKey: "experiences.items.civilSupport.period",
  //   shortSummaryKey: "experiences.items.civilSupport.shortSummary",
  //   descriptionKey: "experiences.items.civilSupport.description",
  //   noteKey: "experiences.items.civilSupport.note",
  //   highlights: [
  //     "experiences.items.civilSupport.highlights.0",
  //     "experiences.items.civilSupport.highlights.1",
  //     "experiences.items.civilSupport.highlights.2"
  //   ],
  //   coverImage: image40,
  //   images: [image40, image41],
  // },
  // {
  //   id: "exp-civil-engineering-field-support",
  //   categoryKey: "experiences.items.civilSupport.category",
  //   titleKey: "experiences.items.civilSupport.title",
  //   locationKey: "experiences.items.civilSupport.location",
  //   periodKey: "experiences.items.civilSupport.period",
  //   shortSummaryKey: "experiences.items.civilSupport.shortSummary",
  //   descriptionKey: "experiences.items.civilSupport.description",
  //   noteKey: "experiences.items.civilSupport.note",
  //   highlights: [
  //     "experiences.items.civilSupport.highlights.0",
  //     "experiences.items.civilSupport.highlights.1",
  //     "experiences.items.civilSupport.highlights.2"
  //   ],
  //   coverImage: image40,
  //   images: [image40, image41],
  // },
  // {
  //   id: "exp-civil-engineering-field-support",
  //   categoryKey: "experiences.items.civilSupport.category",
  //   titleKey: "experiences.items.civilSupport.title",
  //   locationKey: "experiences.items.civilSupport.location",
  //   periodKey: "experiences.items.civilSupport.period",
  //   shortSummaryKey: "experiences.items.civilSupport.shortSummary",
  //   descriptionKey: "experiences.items.civilSupport.description",
  //   noteKey: "experiences.items.civilSupport.note",
  //   highlights: [
  //     "experiences.items.civilSupport.highlights.0",
  //     "experiences.items.civilSupport.highlights.1",
  //     "experiences.items.civilSupport.highlights.2"
  //   ],
  //   coverImage: image40,
  //   images: [image40, image41],
  // },
];