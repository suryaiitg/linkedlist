# About

linkedlist : A (doubly) linked list implementation in javascript

## Installation

linkedlist does not have any dependencies

npm i @surya.iitg/linkedlist --save

## Usage

```javascript
  const LinkedList = require('./index.js');
  
  (() => {
    let ll = new LinkedList();
  
    const exampleArray = [1, 2, 3, 4, 5];
  
    ll.setArray(exampleArray);
  
    console.log('Array representation: ',  ll.getArray());
  
    ll.insertAtBeginning(0);
  
    console.log('\nArray representation 1 : ',  ll.getArray());
  
    ll.insertAtEnd(6);
  
    console.log('\nArray representation 2 : ',  ll.getArray());
  })();

/*
Array representation:  [ { id: 'ad429afd-a0e4-46d2-55ca-916c9227d3d3', data: 1 },
  { id: 'bda43028-74f8-e65f-bda1-e96ec5978a7d', data: 2 },
  { id: 'cc66f555-9d4f-deef-a841-652d36680aea', data: 3 },
  { id: '3bff7da8-712e-898a-37ab-ce7a5aa2b90d', data: 4 },
  { id: '8ffb7572-c2ca-9ede-037a-45bc3114f2f8', data: 5 } ]

Array representation 1 :  [ { id: '41b85570-67c6-7bb6-eed0-d39f30f09f68', data: 0 },
  { id: 'ad429afd-a0e4-46d2-55ca-916c9227d3d3', data: 1 },
  { id: 'bda43028-74f8-e65f-bda1-e96ec5978a7d', data: 2 },
  { id: 'cc66f555-9d4f-deef-a841-652d36680aea', data: 3 },
  { id: '3bff7da8-712e-898a-37ab-ce7a5aa2b90d', data: 4 },
  { id: '8ffb7572-c2ca-9ede-037a-45bc3114f2f8', data: 5 } ]

Array representation 2 :  [ { id: '41b85570-67c6-7bb6-eed0-d39f30f09f68', data: 0 },
  { id: 'ad429afd-a0e4-46d2-55ca-916c9227d3d3', data: 1 },
  { id: 'bda43028-74f8-e65f-bda1-e96ec5978a7d', data: 2 },
  { id: 'cc66f555-9d4f-deef-a841-652d36680aea', data: 3 },
  { id: '3bff7da8-712e-898a-37ab-ce7a5aa2b90d', data: 4 },
  { id: '8ffb7572-c2ca-9ede-037a-45bc3114f2f8', data: 5 },
  { id: '350fa9a6-259b-9e83-29a7-9c537c748526', data: 6 } ]
*/
```
