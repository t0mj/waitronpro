wp.ordersView = (function() {
    var self = {};

    self.products = ko.observableArray();
    self.productsByType = ko.observableArray();
    self.productTypes = ko.observableArray();
    self.options = ko.observableArray();
    self.tagOptions = ko.observableArray();
    self.productTagOptions = ko.observableArray();
    self.subOptionTags = ko.observableArray();

    self.retrieveActiveOptions = function() {
        $.getJSON("api/retrieveActiveOptions", function(data) {
            $.each(data, function(key, val) {
                self.options.push(new wp.models.Option().mapDict(val));
            });
            self.retrieveActiveProducts();
        });
    };

    self.retrieveActiveProducts = function() {
        $.getJSON("api/retrieveActiveProducts", function(data) {
            $.each(data, function(key, val) {
                self.products.push(new wp.models.Product().mapDict(val));
            });
            self.retrieveSubOptions();
        });
    };

    self.retrieveProductTypes = function() {
        $.getJSON("api/retrieveProductTypes", function(data) {
            $.each(data, function(key, val) {
                self.productTypes.push(new wp.models.Type().mapDict(val));
            });
            viewModel.retrieveActiveOptions();
        });
    };

    self.getProducts = function(typeModel) {
        self.productsByType.removeAll();
        ko.utils.arrayForEach(self.products(), function(product) {
            if (product.type() === typeModel.type()) {
                self.productsByType.push(product);
            }
        });
    };

    self.tempArray = ko.observableArray([]);

    self.getOptions = function(productModel) {
        // Get all options based on the product chosen
        var tagOptions = self.tagOptions();
        var subOptions = $.map(productModel.subOptions().split(","), $.trim);
        for (var i=0; i < tagOptions.length; i++) {
            var optionTag = tagOptions[i].tag();
            if (subOptions.indexOf(optionTag) !== -1) {
                self.productTagOptions.push(tagOptions[i]);
            }
        }
    };

    self.retrieveSubOptions = function() {
        var products = self.products();
        var options = self.options();
        var tags = self.subOptionTags();

        // sort through products for suboption tags
        for (var y=0; y < products.length; y++) {
            if (products[y].subOptions()) {
                tempTags = products[y].subOptions().split(",");
                for (var tag of tempTags) {
                    tag = $.trim(tag);
                    if (tags.indexOf(tag) === -1) {
                        tags.push(tag);
                    }
                }
            }
        }

        /*
        sort through suboptiontags for matching options
        create model for tag and an array of the options
        */
        if (tags.length > 0) {
            for (var i=0; i < tags.length; i++) {
                var tempArray = [];
                for (var n=0; n < options.length; n++) {
                    if (options[n].tag() === tags[i]) {
                        tempArray.push(options[n]);
                    }
                }
                if (tempArray.length > 0) {
                    var model = new wp.models.OptionByTag();
                    model.tag(tags[i]);
                    model.optionsArray(tempArray);
                    self.tagOptions.push(model);
                }
            }
        }
    };

    self.addItem = function(productModel) {
        self.productTagOptions.removeAll();
        if (productModel.subOptions()) {
            self.getOptions(productModel);
            $('#suboption-modal').modal('show');
        }
    };

    self.poop = function(newValue) {
        console.log(newValue);
        console.log('something');
    };

    return self;
});
var viewModel = new wp.ordersView;
ko.applyBindings(viewModel, $('#page-content')[0]);
viewModel.retrieveProductTypes();
