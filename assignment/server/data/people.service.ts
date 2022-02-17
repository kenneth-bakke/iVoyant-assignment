// server/data/people.service.ts

/**
 * Data Model Interfaces
 */
import { BasePerson, Person } from './person.interface';
import { People } from './people.interface';

/**
 * In-Memory Store
 */
let peopleJSON: People = {
  'person': [
    {
      id: 10,
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      id: 5,
      firstName: 'Jack',
      lastName: 'Doe'
    },
    {
      id: 7,
      firstName: 'James',
      lastName: 'Doe'
    }
  ]
}

let peopleXML: People = {
  'person': [
    {
      id: 3,
      firstName: 'Jen',
      lastName: 'Doe'
    },
    {
      id: 6,
      firstName: 'Stephanie',
      lastName: 'Joe'
    },
    {
      id: 1,
      firstName: 'Victoria',
      lastName: 'Doe'
    }
  ]
}

/**
 * Service Methods
 */
export const findPeople = async (type: String): Promise<Person[]> => {
  return type === 'json'
    ? peopleJSON.person
    : peopleXML.person;
}

export const findPerson = async (id: number, type: String): Promise<Person[]> => {
  return type === 'json'
    ? peopleJSON.person.filter(person => person.id === id)
    : peopleXML.person.filter(person => person.id === id);
}