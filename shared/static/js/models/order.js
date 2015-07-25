wp.models.Order = function() {
  var self = this;

  self.id = ko.observable('');
  self.orderNum = ko.observable('');
  self.total = ko.observable('');
  self.tax = ko.observable('');
  self.date = ko.observable('');
  self.dateComplete = ko.observable('');
  self.complete = ko.observable('');

  self.orderTotal = ko.pureComputed(function() {
     return self.total() + self.tax();
  });

  self.fmtDate = ko.pureComputed(function() {
     return moment(self.date()).format("D MMM YYYY h:mm a")
  });
};
wp.models.Order.prototype = new wp.models.Model();
