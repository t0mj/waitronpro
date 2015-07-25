// Create the main wp base
wp = {
    models: {}
};

// Setup the model and allow json_dict to be changed to observable
wp.models.Model = function Model() {
    var self = this;

    self.mapDict = function(parseDict) {
        for (var key in parseDict) {
            if (parseDict.hasOwnProperty(key)) {
                if (ko.isObservable(this[key])) {
                    this[key](parseDict[key]);
                } else if (typeof this[key] !== 'function') {
                    this[key] = parseDict[key];
                }
            }
        }
        return this;
    }
};

var formatNumber = function (element, valueAccessor, allBindingsAccessor, format) {
    // Provide a custom text value
    var value = valueAccessor(), allBindings = allBindingsAccessor();
    var numeralFormat = allBindingsAccessor.numeralFormat || format;
    var strNumber = ko.utils.unwrapObservable(value);
    if (strNumber) {
        return numeral(strNumber).format(numeralFormat);
    }
    return '';
};

ko.bindingHandlers.numeralText = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        $(element).text(formatNumber(element, valueAccessor, allBindingsAccessor, "(0,0.00)"));
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        $(element).text(formatNumber(element, valueAccessor, allBindingsAccessor, "(0,0.00)"));
    }
};

ko.bindingHandlers.numeralValue = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        $(element).val(formatNumber(element, valueAccessor, allBindingsAccessor, "(0,0.00)"));

        //handle the field changing
        ko.utils.registerEventHandler(element, "change", function () {
            var observable = valueAccessor();
            observable($(element).val());
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        $(element).val(formatNumber(element, valueAccessor, allBindingsAccessor, "(0,0.00)"));
    }
};

ko.bindingHandlers.percentText = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        $(element).text(formatNumber(element, valueAccessor, allBindingsAccessor, "(0.000 %)"));
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        $(element).text(formatNumber(element, valueAccessor, allBindingsAccessor, "(0.000 %)"));
    }
};

ko.bindingHandlers.percentValue = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        $(element).val(formatNumber(element, valueAccessor, allBindingsAccessor, "(0.000 %)"));

        //handle the field changing
        ko.utils.registerEventHandler(element, "change", function () {
            var observable = valueAccessor();
            observable($(element).val());
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        $(element).val(formatNumber(element, valueAccessor, allBindingsAccessor, "(0.000 %)"));
    }
};

ko.bindingHandlers.dollarText = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        $(element).text(formatNumber(element, valueAccessor, allBindingsAccessor, "(0,0.00)"));
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        $(element).text(formatNumber(element, valueAccessor, allBindingsAccessor, "(0,0.00)"));
    }
};

ko.bindingHandlers.dollarValue = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        $(element).val(formatNumber(element, valueAccessor, allBindingsAccessor, "($0,0.00)"));

        //handle the field changing
        ko.utils.registerEventHandler(element, "change", function () {
            var observable = valueAccessor();
            observable($(element).val());
        });
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        $(element).val(formatNumber(element, valueAccessor, allBindingsAccessor, "($0,0.00)"));
    }
};
