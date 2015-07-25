wp.models.Option = function() {
  var self = this;

  self.id = ko.observable('');
  self.tag = ko.observable('');
  self.name = ko.observable('');
  self.active = ko.observable(true);
  self.price = ko.observable('');
  self.note = ko.observable('');
  self.editing = ko.observable();
};
wp.models.Option.prototype = new wp.models.Model();
