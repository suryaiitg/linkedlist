/** @class NodeElement */
function NodeElement(id, data) {
  this.id = id || guidGenerator();
  this.next = null;
  this.previous = null;

  this.data = (data === undefined || data === null) ? '' : data;
}

/**
 Returns an object with data and id

 @return {{data: (Number|String|Object), id: (*|number)}} data and id of the NodeElement
 @memberOf NodeElement
 */
NodeElement.prototype.getData = function () {
  let self = this;
  return {
    id: self.id,
    data: self.data
  };
};

/**
 Set tha data of the NodeElement

 @param {Number | String | Object} data data for the node
 @memberOf NodeElement
 */
NodeElement.prototype.setData = function (data) {
  let self = this;
  self.data = data;
};

function guidGenerator() {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

module.exports = NodeElement;
