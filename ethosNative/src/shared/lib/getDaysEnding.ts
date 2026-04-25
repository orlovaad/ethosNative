export const getDaysEnding = (days: number, t: (key: string) => string): string => {
  if (days % 10 === 1 && days % 100 !== 11) {
    return t('statisticAccount.day');
  } else if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 12 || days % 100 > 14)) {
    return t('statisticAccount.days');
  } else {
    return t('statisticAccount.daysPlural');
  }
};
