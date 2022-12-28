export interface IListAll<T> {
  listAll(): Promise<T[]>;
}
