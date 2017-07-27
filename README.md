# jQuery-ajax-crossdomainAndJsonp-sync

### cross-domain & JSONP 환경에서 동기적으로 호출하는 우회 방법 제안
http://api.jquery.com/jquery.ajax/

### async (default: true)
### Type: Boolean
By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false. **Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation.** Note that synchronous requests may temporarily lock the browser, disabling any actions while the request is active. As of jQuery 1.8, the use of async: false with jqXHR ($.Deferred) is deprecated; you must use the success/error/complete callback options instead of the corresponding methods of the jqXHR object such as jqXHR.done().
