wp.models.Type = function() {
  var self = this;

  self.type = ko.observable('');
};
wp.models.Type.prototype = new wp.models.Model();
