let nextChunkId = 1;

export interface IEntryListDouble<T> {
  id: number;
  values: T[];
}

export function createChunkedArray<T>(arr: T[], chunkSize: number): IEntryListDouble<T>[] {
  const chunkedArray: IEntryListDouble<T>[] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push({
      id: nextChunkId++,
      values: arr.slice(i, i + chunkSize),
    });
  }

  return chunkedArray;
}
