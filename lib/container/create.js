var create = function(Klass, props) {
  var obj = new Klass();
  setProperties(obj, props);
  return obj;
};

function setProperties(object, properties) {
  properties = properties || {};
  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      object[key] = properties[key];
    }
  }
}

export = create;
