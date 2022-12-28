export interface IDeleteById {
  deleteById(id: string): Promise<boolean>;
}
