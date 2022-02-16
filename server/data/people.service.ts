// server/data/people.service.ts

/**
 * Data Model Interfaces
 */
import { BasePerson, Person } from './person.interface';
import { People } from './people.interface';

/**
 * In-Memory Store
 */

let people: People = {
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

/**
 * Service Methods
 */

export const findPeople = async (): Promise<Person[]> => people.person;

export const findPerson = async (id: number): Promise<Person[]> => people.person.filter(person => person.id === id);