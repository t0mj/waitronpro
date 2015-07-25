wp.models.Product = function() {
  var self = this;

  self.id = ko.observable('');
  self.prodNum = ko.observable('');
  self.type = ko.observable('');
  self.name = ko.observable('');
  self.description = ko.observable('');
  self.active = ko.observable(true);
  self.dateAdded = ko.observable('');
  self.price = ko.observable('');
  self.subOptions = ko.observable('');
  self.editing = ko.observable();
};
wp.models.Product.prototype = new wp.models.Model();
