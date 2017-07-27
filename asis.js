var self = this;

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

    // step 3 (asynchronous)
    $.ajax({
        url : 'http://www.example.com',
        async : false,  // not work (jsonp & crossdomain)
        success : function(oJson) {
            // step 5
            self.myCallbackFunc(oJson);
        }
    });

    // step 4
    myFunc3();
}
