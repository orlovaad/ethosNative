import type { IValues, IValuesDto } from '@/shared/api';

export interface IFrequentValues {
  value: string;
  count: number;
}

export const prepareValue = (value: IValuesDto): IValues => ({
  ...value,
});

export const prepareValues = (values: IValuesDto[]): IValues[] => values.map(prepareValue);

export const getTopFrequentValues = (values: IValuesDto[], topN: number): IFrequentValues[] => {
  const frequencyMap: Record<string, number> = {};

  values.forEach((item) => {
    frequencyMap[item.value] = (frequencyMap[item.value] || 0) + 1;
  });

  const sortedValues = Object.entries(frequencyMap)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, topN);

  return sortedValues.map(([value, count]) => ({ value, count }));
};
