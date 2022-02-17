
export interface Person {
  id: number; firstName: string; lastName: string;
}

export interface People extends Array<Person>{}
