wp.models.Rate = function() {
    var self = this;

    self.id = ko.observable('');
    self.salesTax = ko.observable('');
    self.donation = ko.observable('');

    self.editing = ko.observable(false);

    self.editItem = function() {
        self.editing(true);
    };

    self.stopEditing = function() {
        self.editing(false);
    };
};
wp.models.Rate.prototype = new wp.models.Model();
