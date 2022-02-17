import React, { useState, useEffect } from 'react';
import { baseURL } from './api/people';
import { Person } from './data/people.interface';
import xml2js from 'xml2js';
const processors = xml2js.processors;
const xmlParser = new xml2js.Parser({
  tagNameProcessors: [processors.stripPrefix]
})

export const App = () => {
  const [people, setPeople] = useState<Array<Person>>([]);

  useEffect(() => {
    getPeople();
    sortPeople();
  }, [])

  useEffect(() => {
    let clearId = setTimeout(() => {
      sortPeople();
    })

    return () => clearTimeout(clearId);
  }, [people]);

  const getPeople = () => {
    getJson();
    getXML();
  }

  const getJson = () => {
    fetch(`${baseURL}json`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(persons => setPeople(persons))
      .catch(e => console.error(e.message));
  }

  const getXML = () => {
    fetch(`${baseURL}xml`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/xml',
      },
    })
      .then(res => res.text())
      .then(text => {
        let clean = text.replace("&", " ");
        xmlParser.parseString(clean, (e: any, r: any) => {
          if (e) console.error(e.message);

          let data = r.root;
          let formatted = transformXML(data);
          setPeople(prev => [...prev, formatted].flat());
        })
      })
      .catch(e => console.error(e.message));
  }

  const transformXML = (data: any) => {
    let persons = [];
    let attr = Object.keys(data);
    let arr = Object.values(data);
    let row: any = arr[0]

    for (let i = 0; i < row.length; i++) {
      let newPerson: any = {id: Number, firstName: String, lastName: String};

      for (let j = 0; j < arr.length; j++) {
        let col: any = arr[j]
        let val: any = col[i];
        newPerson[attr[j]] = val;
      }
      persons.push(newPerson);
    }

    return persons;
  }

  const sortPeople = () => {
    setPeople((unsorted) => [...unsorted.sort((a:any, b:any) => a.id - b.id)])
  }

  return (
    <div className="ui container">
      <div className="ui vertically divided grid">
        {people.map(person =>
          <div className="row" key={person.id}><h1>{person.lastName}, {person.firstName}</h1></div>
        )}
      </div>
    </div>
  )
};
