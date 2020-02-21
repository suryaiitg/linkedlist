const NodeElement = require('./NodeElement.js');

/** @class LinkedList */
function LinkedList() {
  this.head = null;
  this.activeNodeId = null;
  this.length = 0;
}

/**
 Returns the element with a given id

 @param {Number} id Id of the element
 @return {NodeElement | null} Node Element with given id or null if not found
 @memberOf LinkedList
 */
LinkedList.prototype.getById = function (id) {
  let node = this.head;
  while (node) {
    if (node.id === id) {
      return node;
    }
    node = node.next;
  }
  return null;
};

/**
 Returns the element with at given index

 @param {Number} index index of the element
 @return {NodeElement | null} Node Element at given index or null if not found
 @memberOf LinkedList
 */
LinkedList.prototype.getAt = function (index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};

/**
 Returns array representation of the list

 @return {Array}
 @memberOf LinkedList
 */
LinkedList.prototype.getArray = function () {
  let array = [];
  let node = this.head;
  while (node) {
    array.push(node.getData());
    node = node.next;
  }
  return array;
};

/**
 Append the elements of an Array to list

 @param {Array} array array to be appended
 @memberOf LinkedList
 */
LinkedList.prototype.setArray = function (array) {
  let self = this;
  array.forEach(function (data) {
    self.insertAtEnd(data);
  });
};

/**
 Insert a node at the beginning of the list

 @param {String | Number | Object} data data for the new Node
 @param {String | Number} newNodeElementId id for the new Node
 @return {NodeElement} return the newly created node
 @memberOf LinkedList
 */
LinkedList.prototype.insertAtBeginning = function (data = '', newNodeElementId) {
  let newNode = new NodeElement(newNodeElementId, data);
  if (this.length == 0) {
    this.activeNodeId = newNode.id;
  }
  newNode.previous = null;
  newNode.next = this.head;

  this.head = newNode;
  this.length++;
  return newNode;
};

/**
 Insert a node after a given element by id

 @param {String | Number} id of the node after which new node will be inserted
 @param {String | Number | Object} data data for the new Node
 @param {String | Number} newNodeElementId id for the new Node
 @return {NodeElement} return the newly created node
 @memberOf LinkedList
 */
LinkedList.prototype.insertAfterId = function (id, data = '', newNodeElementId) {
  if (!id) {
    return this.insertAtEnd(data);
  }

  let node = this.getById(id);

  if (!node) {
    return this.insertAtEnd(data);
  }

  this.length++;

  const previous = node;
  let newNode = new NodeElement(newNodeElementId, data);
  newNode.previous = previous;
  newNode.next = previous.next;
  previous.next = newNode;

  return newNode
};

/**
 Insert a node at a given index

 @param {Number} index at which node will be inserted
 @param {String | Number | Object} data data for the new Node
 @param {String | Number} newNodeElementId id for the new Node
 @return {NodeElement} return the newly created node
 @memberOf LinkedList
 */
LinkedList.prototype.insertAt = function (index, data = '', newNodeElementId) {
  if (index == 0) {
    return this.insertAtBeginning(data, newNodeElementId);
  }

  this.length++;
  if (!this.head) {
    this.head = new NodeElement(newNodeElementId, data);
    return this.head;
  }

  const previous = this.getAt(index - 1);
  let newNode = new NodeElement(newNodeElementId, data);
  newNode.previous = previous;
  newNode.next = previous.next;
  previous.next = newNode;

  return newNode
};

/**
 Insert a node at the last location

 @param {String | Number | Object} data data for the new Node
 @param {String | Number} newNodeElementId id for the new Node
 @return {NodeElement} return the newly created node
 @memberOf LinkedList
 */
LinkedList.prototype.insertAtEnd = function (data = '', newNodeElementId) {
  this.length++;
  let newNode = new NodeElement(newNodeElementId, data);
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  newNode.previous = tail;
  tail.next = newNode;
  return newNode;
};

/**
 Delete the first node

 @return {NodeElement} return the deleted node
 @memberOf LinkedList
 */
LinkedList.prototype.deleteFirstNode = function () {
  let deletedNode = null;
  if (!this.head) {
    return deletedNode;
  }

  deletedNode = this.head;
  this.head = this.head.next;
  if (this.head.next.previous) {
    this.head.next.previous = null;
  }
  this.length--;
  return deletedNode;
};

/**
 Delete the node by id

 @param {String | Number} id of the node to be deleted
 @return {NodeElement | null} return the deleted node or null if not found
 @memberOf LinkedList
 */
LinkedList.prototype.deleteById = function (id) {
  let deletedNode = null;
  if (!this.head) {
    return deletedNode;
  }

  let node = this.getById(id);

  if (this.head == node) {
    deletedNode = this.head;
    this.head = this.head.next;
    this.head.previous = null;

    this.length--;
    return deletedNode;
  }

  const previous = node.previous;

  if (!previous || !previous.next) {
    return deletedNode;
  }

  deletedNode = previous.next;
  if (deletedNode.next) {
    deletedNode.next.previous = previous;
  }
  previous.next = deletedNode.next;
  this.length--;
  return deletedNode;
};

/**
 Delete the node by index

 @param {Number} index of the node to be deleted
 @return {NodeElement | null} return the deleted node or null if not found
 @memberOf LinkedList
 */
LinkedList.prototype.deleteAt = function (index) {
  let deletedNode = null;
  if (!this.head) {
    return deletedNode;
  }

  if (index === 0) {
    deletedNode = this.head;
    this.head = this.head.next;
    if (this.head.next) {
      this.head.next.previous = null;
    }
    this.length--;
    return deletedNode;
  }

  const previous = this.getAt(index - 1);

  if (!previous || !previous.next) {
    return deletedNode;
  }

  deletedNode = previous.next;
  if (deletedNode.next) {
    deletedNode.next.previous = previous;
  }
  previous.next = deletedNode.next;
  this.length--;
  return deletedNode;
};

/**
 Delete the last node

 @return {NodeElement | null} return the deleted node or null if not found
 @memberOf LinkedList
 */
LinkedList.prototype.deleteLastNode = function () {
  let deletedNode = null;
  if (!this.head) {
    return deletedNode;
  }
  if (!this.head.next) {
    deletedNode = this.head;
    this.head = null;
    this.length--;
    return deletedNode;
  }

  let previous = this.head;
  let tail = this.head.next;

  while (tail.next !== null) {
    previous = tail;
    tail = tail.next;
  }

  deletedNode = previous.next;
  previous.next = null;
  this.length--;
  return deletedNode;
};

/**
 Delete the list

 @memberOf LinkedList
 */
LinkedList.prototype.deleteList = function () {
  this.length = 0;
  this.head = null;
  this.activeNodeId = null;
};

module.exports = LinkedList;
