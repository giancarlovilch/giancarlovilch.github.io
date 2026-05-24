export type LearningItem = {
  titleKey: string;
  issuerKey: string;
  level: number;
  fileKey?: string;
  file?: string;
};

export type EducationPillar = {
  id: string;
  titleKey: string;
  summaryKey: string;
  level: number;
  corePath: LearningItem[];
  complementaryTraining: LearningItem[];
};