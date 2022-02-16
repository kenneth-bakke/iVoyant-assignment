export interface BasePerson {
  firstName: string;
  lastName: string;
}

export interface Person extends BasePerson {
  id: number;
}