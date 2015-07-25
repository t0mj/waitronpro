wp.models.OptionByTag = function() {
    var self = this;

    self.tag = ko.observable('');
    self.optionsArray = ko.observableArray([]);
};
wp.models.OptionByTag.prototype = new wp.models.Model();
