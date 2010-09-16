scout.vendors = function () {
  
  var properties = ['name', 'website', 'searchURI', 'parameterName'];

  var isComplete = function (vendor) {
    for (var i = 0; i < properties.length; i++) {
      if (!(properties[i] in vendor)) return false;
    }

    return true;
  };

  return {

    all : function () {
      var complete = [];
      for (key in this) {
        if (typeof this[key] === 'object' && isComplete(this[key])) complete.push(this[key]);
      }

      return complete.sort(function (a, b) {
        if (a.name === b.name) return 0;
        return a.name < b.name ? -1 : 1;
      });
    },

    emusic : {
      name : 'eMusic',
      website : 'http://emusic.com/',
      searchURI : 'http://emusic.com/',
    },

    finetunes : {
      name : 'Finetunes',
      website : 'http://shopbase.finetunes.net/',
      searchURI : 'http://shopbase.finetunes.net/shopserver/ActionServlet?cmd=freesearch&fields=artists',
      parameterName : 'term'
    },

    sevendigital : {
      name : '7digital',
      website : 'http://7digital.com/',
      searchURI : 'http://7digital.com/Search?searchtype=global',
      parameterName : 'search'
    }

  }; // end object returned for `scout.vendors`

}();
