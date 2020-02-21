# About

linkedlist : A (doubly) linked list implementation in javascript

## Installation

linkedlist does not have any dependencies

npm i @surya.iitg/linkedlist --save

## Usage

```javascript
  const LinkedList = require('@surya.iitg/linkedlist');
  
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

## API 

```javascript

/**
 Returns the element with a given id

 @param {Number} id Id of the element
 @return {NodeElement | null} Node Element with given id or null if not found
 @memberOf LinkedList
 */

getById(id);

/**
 Returns the element with at given index

 @param {Number} index index of the element
 @return {NodeElement | null} Node Element at given index or null if not found
 @memberOf LinkedList
 */
getAt(index);

/**
 Returns array representation of the list

 @return {Array}
 @memberOf LinkedList
 */
getArray();

/**
 Append the elements of an Array to list

 @param {Array} array array to be appended
 @memberOf LinkedList
 */
setArray(array);

/**
 Insert a node at the beginning of the list

 @param {String | Number | Object} data data for the new Node
 @param {String | Number} newNodeElementId id for the new Node
 @return {NodeElement} return the newly created node
 @memberOf LinkedList
 */
insertAtBeginning(data = '', newNodeElementId);

/**
 Insert a node after a given element by id

 @param {String | Number} id of the node after which new node will be inserted
 @param {String | Number | Object} data data for the new Node
 @param {String | Number} newNodeElementId id for the new Node
 @return {NodeElement} return the newly created node
 @memberOf LinkedList
 */
insertAfterId(id, data = '', newNodeElementId);

/**
 Insert a node at a given index

 @param {Number} index at which node will be inserted
 @param {String | Number | Object} data data for the new Node
 @param {String | Number} newNodeElementId id for the new Node
 @return {NodeElement} return the newly created node
 @memberOf LinkedList
 */
insertAt(index, data = '', newNodeElementId);

/**
 Insert a node at the last location

 @param {String | Number | Object} data data for the new Node
 @param {String | Number} newNodeElementId id for the new Node
 @return {NodeElement} return the newly created node
 @memberOf LinkedList
 */
insertAtEnd(data = '', newNodeElementId);

/**
 Delete the first node

 @return {NodeElement} return the deleted node
 @memberOf LinkedList
 */
deleteFirstNode();

/**
 Delete the node by id

 @param {String | Number} id of the node to be deleted
 @return {NodeElement | null} return the deleted node or null if not found
 @memberOf LinkedList
 */
deleteById(id);

/**
 Delete the node by index

 @param {Number} index of the node to be deleted
 @return {NodeElement | null} return the deleted node or null if not found
 @memberOf LinkedList
 */
deleteAt(index);

/**
 Delete the last node

 @return {NodeElement | null} return the deleted node or null if not found
 @memberOf LinkedList
 */
deleteLastNode();

/**
 Delete the list

 @memberOf LinkedList
 */
deleteList();

```