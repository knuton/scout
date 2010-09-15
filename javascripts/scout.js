var scout = function () {

  /* URLs
   * http://7digital.com/Search?searchtype=global
   * 
   */

  var queryFn = function (queryData, queryURL, extractor) {
    if (typeof queryData !== 'object') {
      throw new TypeError('Query needs to be given as an object mapping param name to param value.');
    }

    $.ajax({
      url: queryURL,
      type: 'GET',
      data: queryData,
      dataFilter: extractor,
      success: function (response) { console.log(response) }
    });
  };
  
  return {
    query: queryFn
  };
}();
