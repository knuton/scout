var scout = function () {

  var query = function (queryData, queryURL, extractor) {
    if (typeof queryData !== 'object') {
      throw new TypeError('Query needs to be given as an object mapping param name to param value.');
    }

    $.ajax({
      url: queryURL,
      type: 'GET',
      data: queryData,
      // TODO Use in xdomainajax.js
      dataFilter: extractor,
      success: function (response) { console.log(response); }
    });
  };
  
  return {
    query: query
  };
}();
