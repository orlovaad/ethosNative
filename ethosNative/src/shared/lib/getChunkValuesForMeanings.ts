export interface ITableElement {
  column: number;
  counts: number;
}

export const getChunkValuesForMeanings = (width: number, height: number): ITableElement => {
  let column = 4;
  let stroke = 7;

  if (width > 400) {
    column = 4;
  }

  if (height < 980) {
    stroke = 6;
  }

  if (height < 880) {
    stroke = 5;
  }

  if (height < 780) {
    stroke = 4;
  }

  if (height < 680) {
    stroke = 3;
  }

  if (height < 580) {
    stroke = 2;
  }

  return {
    column,
    counts: column * stroke,
  };
};
