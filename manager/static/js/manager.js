wp.managerView = (function() {
    var self = {};

    self.tables = ['options', 'orders', 'products', 'rates']
    self.options = ko.observableArray();
    self.orders = ko.observableArray();
    self.products = ko.observableArray();
    self.rates = ko.observableArray();
    self.selectedTable = ko.observable(''); // change active class and table for whichever selection

    var tableFunc = function(table) {
        switch (table) {
            case 'options':
                return self.options;
                break;
            case 'orders':
                return self.orders;
                break;
            case 'products':
                return self.products;
                break;
            case 'rates':
                return self.rates;
                break;
            default:
                return false;
        }
    };
    // var modelFunc = function(namespace) {
    //     switch (namespace) {
    //         case 'products':
    //             return wp.models.Product
    //             break;
    //         default:
    //             return false;
    //     }
    // }
    self.loadTable = function(value) {
        if (self.tables.indexOf(value) !== -1) {
            var oldValue = self.selectedTable();
            self.clearItems();
            self.selectedTable(value);
            self.retrieveItems();
        } else {
            self.selectedTable('');
        }
    };

    self.clearItems = function() {
        if (self.selectedTable()) {
            tableFunc(self.selectedTable()).removeAll();
        }
    };

    self.retrieveItems = function() {
        var table = self.selectedTable()
        var method = table.charAt(0).toUpperCase() + table.substring(1);
        $.getJSON("api/retrieve" + method, function(data) {
            $.each(data, function(key, val) {
                switch (table) {
                    case 'options':
                        self.options.push(new wp.models.Option().mapDict(val));
                        break;
                    case 'orders':
                        self.orders.push(new wp.models.Order().mapDict(val));
                        break;
                    case 'products':
                        self.products.push(new wp.models.Product().mapDict(val));
                        break;
                    case 'rates':
                        self.rates.push(new wp.models.Rate().mapDict(val));
                        break;
                    default:
                        return false;
                }
            });
        });
    };

    return self;
});
ko.applyBindings(wp.managerView, $('#page-content')[0]);
