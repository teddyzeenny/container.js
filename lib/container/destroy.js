var destroy = function(obj) {
  if (typeof obj.destroy === 'function') {
    obj.destroy.call(obj);
  }
};

export = destroy;
