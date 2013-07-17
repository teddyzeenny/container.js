var extend = function(Klass, props) {
  var Child = function() {
    Klass.apply(this, arguments);
  };

  Child.prototype = new Klass();
  Child.prototype.constructor = Child;

  setProperties(Child.prototype, props);

  copyClassProperties(Klass, Child);

  return Child;
};

function setProperties(object, properties) {
  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      object[key] = properties[key];
    }
  }
}

function copyClassProperties(Klass, Child) {
  for (var i in Klass) {
    if (Klass.hasOwnProperty(i)) {
      Child[i] = Klass[i];
    }
  }
}

export = extend;
