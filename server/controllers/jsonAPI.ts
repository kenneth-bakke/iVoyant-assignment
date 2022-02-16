import { findPeople, findPerson } from '../data/people.service';

export const jsonAPI = {
  getPeopleJSON: async function(req: Request, res: Response) {
    try {
      const people: People[] = await findPeople();
      res.status(200).send(people);
    } catch(e) {
      res.status(500).send(e.message);
    }
    console.log('get People Json API');

  },
  getPersonJSON: async function(req: Request, res: Response) {
    let {id} = req.params;
    try {
      const person: Object = await findPerson(id);
      res.status(200).send(person);
      console.log('get Person Json API');
    } catch(e) {
      res.status(500).send(e.message);
    }
  }
}