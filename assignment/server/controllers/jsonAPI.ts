import { People } from '../data/people.interface';
import { Person } from '../data/person.interface';
import { findPeople, findPerson } from '../data/people.service';

export const jsonAPI = {
  getPeopleJSON: async function(req: Request, res: Response) {
    try {
      let people: Person[] = await findPeople('json');
      setTimeout(() => {
        res.status(200).send(people);
      }, 0); //5000
    } catch(e) {
      res.status(500).send(e.message);
    }
  },
  getPersonJSON: async function(req: Request, res: Response) {
    let {id} = req.params;
    try {
      const person: Object = await findPerson(id);
      res.status(200).send(person);
    } catch(e) {
      res.status(500).send(e.message);
    }
  }
}