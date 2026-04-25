export interface IStringFilterArgs {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: Date;
  lte?: string;
  gt?: Date;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: string;
}
