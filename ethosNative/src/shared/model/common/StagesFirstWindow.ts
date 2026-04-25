import type { ReactNode } from 'react';

export type TStagesFirstWindow =
  | 'FirstWindow'
  | 'SecondWindow'
  | 'FirstIntro'
  | 'FirstOnboarding'
  | 'FirstGroupIntro'
  | 'SecondGroupIntro'
  | 'FirstSecondGroupOnboarding'
  | 'ThirdGroupIntro'
  | 'ThirdGroupFirstOnboarding'
  | 'ThirdGroupSecondOnboarding'
  | 'FirstStory'
  | 'SecondStory'
  | 'ThirdStory'
  | 'FourStory';

export interface IStageQuestion {
  code: string;
  stage: TStagesFirstWindow;
  label: string | ReactNode;
}

export interface IStageStories {
  id: number;
  image: string;
  stage?: TStagesFirstWindow;
  description: string | ReactNode;
  imageLabel?: string | ReactNode;
  btnText: string | ReactNode;
  navigate?: string;
  isRead: boolean;
  isSelect: boolean;
}
