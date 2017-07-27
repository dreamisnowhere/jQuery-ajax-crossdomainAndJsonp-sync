var self = this;

var myDecorator = function(fNextFunc) {
    return function() {
        var _args = arguments;
        var _self = this;

        // step 3-2 (like synchronous)
        $.ajax({
            url : 'http://www.example.com',
            success : function(oJson) {
                // step 4
                self.myCallbackFunc(oJson);

                // step 5
                fNextFunc.apply(_self, _args);
            }
        });
    }
};

myFunc1 : function() {
    // do something
}

myFunc2 : function() {
    // do something
}

myFunc3 : function() {
    // do something
}

myCallbackFunc : function(oJson) {
    if (oJson.success) {
        // do something
    } else {
        // error handler
    }
}

myMainFunc : function() {
    // step 1
    myFunc1();

    // step 2
    myFunc2();

    // step 3-1
    myDecorator(myFunc3).apply(this, arguments);
}
