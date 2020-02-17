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