import { Person } from './person.interface';

export interface People {
  [key: string]: Array<Person>;
}