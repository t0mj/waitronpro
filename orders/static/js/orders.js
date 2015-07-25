wp.ordersView = (function() {
    var self = {};

    self.match = ko.observable();
    self.products = ko.observableArray();
    self.productsByType = ko.observableArray();
    self.productTypes = ko.observableArray();
    self.options = ko.observableArray();
    self.optionsByProduct = ko.observableArray();
    self.tagOptions = ko.observableArray();

    self.retrieveActiveOptions = function() {
        $.getJSON("api/retrieveActiveOptions", function(data) {
            $.each(data, function(key, val) {
                self.options.push(new wp.models.Option().mapDict(val));
            });
        });
    };

    self.retrieveActiveProducts = function() {
        $.getJSON("api/retrieveActiveProducts", function(data) {
            $.each(data, function(key, val) {
                self.products.push(new wp.models.Product().mapDict(val));
            });
        });
    };

    self.retrieveProductTypes = function() {
        $.getJSON("api/retrieveProductTypes", function(data) {
            $.each(data, function(key, val) {
                self.productTypes.push(new wp.models.Type().mapDict(val));
            });
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
        self.tagOptions.removeAll();
        // self.optionsByProduct.removeAll();
        if (productModel.subOptions()) {
            var subOptionTags = productModel.subOptions().split(",");
            for (var i=0; i < subOptionTags.length; i++) {
                var model = new wp.models.OptionByTag();
                model.tag = subOptionTags[i];
                var options = self.options();
                for (var n=0; n < self.options().length; n++) {
                    if (options[n].tag() === subOptionTags[i]) {
                        debugger;
                        self.tempArray.push(options[n]);
                        // model.options.push(option);
                    }
                }
                model.optionsArray = self.tempArray();
                self.tagOptions.push(model);
            }
        }
    };

    // self.getOptions = function(productModel) {
    //     // self.optionsByProduct.removeAll();
    //     if (productModel.subOptions()) {
    //         self.subOptionTags(productModel.subOptions().split(","));
    //     }
    // };
    //
    // self.getSubOptions = function(tag) {
    //     console.log(tag);
    //     ko.utils.arrayForEach(self.options(), function(option) {
    //         if (tag === option.tag()) {
    //             self.optionsByProduct.push(option);
    //             // return option();
    //         }
    //     });
    //     self.match = ko.utils.arrayGetDistinctValues(self.optionsByProduct())[0];
    //     // debugger;
    //     return self.match;
    // };
    //
    self.poop = function(newValue) {
        console.log(newValue);
        console.log('something');
    };

    return self;
});
var viewModel = new wp.ordersView;
ko.applyBindings(viewModel, $('#page-content')[0]);
viewModel.retrieveProductTypes();
viewModel.retrieveActiveProducts();
viewModel.retrieveActiveOptions();
