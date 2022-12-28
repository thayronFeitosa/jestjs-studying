export interface IUpdateById<T> {
  updateById(_id: string, data: T): Promise<T>;
}
