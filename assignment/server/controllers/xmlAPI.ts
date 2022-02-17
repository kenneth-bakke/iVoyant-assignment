import { People } from '../data/people.interface';
import { Person } from '../data/person.interface';
import { findPeople, findPerson } from '../data/people.service';
import xmls2js from 'xml2js';


interface options {
  compact: boolean,
  ignoreComment: boolean,
  spaces: number
}

export const xmlAPI = {
  getPeopleXML: async function(req: Request, res: Response) {
    try {
      let people: Person[] = await findPeople('xml');
      const builder = new xmls2js.Builder();
      let peopleXML = builder.buildObject(people);

      setTimeout(() => {
        res.status(200).send(peopleXML);
      }, 0); // 10000
    } catch(e) {
      res.status(500).send(e.message);
    }
  },
  getPersonXML: async function(req: Request, res: Response) {
    let {id} = req.params;
    try {
      let person: Object = await findPerson(id);
      person = convert.js2xml(person);
      res.status(200).send(person);
    } catch(e) {
      res.status(500).send(e.message);
    }
  }
}