wp.models.OrdLine = function() {
  var self = this;

  self.id = ko.observable('');
  self.orderNum = ko.observable('');
  self.prodNum = ko.observable('');
  self.price = ko.observable('');
  self.options = ko.observable('');

};
wp.models.OrdLine.prototype = new wp.models.Model();
