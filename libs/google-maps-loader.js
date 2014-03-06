var google_maps_loaded_def = null;

define(['jquery'],function($) {

  if(!google_maps_loaded_def) {

    var google_maps_loaded_def = $.Deferred();

    window.google_maps_loaded = function() {
      google_maps_loaded_def.resolve(google.maps);
    }

    require(['http://maps.googleapis.com/maps/api/js?sensor=true&callback=google_maps_loaded'],function(){},function(err) {
      google_maps_loaded_def.reject();
      //throw err; // maybe freak out a little?
    });

  }

  return google_maps_loaded_def.promise();

});
  
