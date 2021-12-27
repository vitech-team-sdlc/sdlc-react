export type TIndexedObject<T = any> = {
  [key: string]: T;
};
export type TNullableField<T> = T | null;

export interface IExampleInterface {
  a: string;
  b: number;
}
